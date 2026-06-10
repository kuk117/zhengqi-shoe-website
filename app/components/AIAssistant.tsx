'use client';

import { useEffect, useRef, useState } from 'react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const quickQuestions = [
  '交期经常延期，应该先查哪里？',
  '效率波动大，适合做哪类诊断？',
  '成本压力明显，沟通前需要准备什么？',
];

function Mark() {
  return (
    <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" aria-hidden="true">
      <path d="M10 12h28v23H10z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M16 19h16M16 26h10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="m31 31 7 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [streamingContent, setStreamingContent] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, streamingContent]);

  async function handleSend(preset?: string) {
    const text = (preset ?? message).trim();
    if (!text || isTyping) return;

    const userMessage: Message = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMessage]);
    setMessage('');
    setIsTyping(true);
    setStreamingContent('');

    const systemPrompt = `你是莆田正奇鞋业咨询的网站咨询助手。

公司定位：面向鞋厂老板、经营管理团队和鞋类品牌客户，提供现场诊断、改善方案、陪跑落地和经营复盘服务。
服务范围：交付改善、效率改善、品质稳定、成本复盘、库存周转、团队协作和数字化管理建议。
回答要求：使用中文，专业克制，先给判断路径，不夸大承诺。无法确认的信息，引导用户留下联系方式由顾问进一步沟通。`;

    try {
      abortControllerRef.current = new AbortController();
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{ role: 'system', content: systemPrompt }, ...messages, userMessage],
        }),
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) throw new Error('咨询助手暂时无法连接');

      const reader = response.body?.getReader();
      if (!reader) throw new Error('无法读取响应');

      let fullContent = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const textChunk = new TextDecoder().decode(value);
        const lines = textChunk.split('\n').filter((line) => line.startsWith('data:'));
        for (const line of lines) {
          const data = line.replace('data:', '').trim();
          if (!data || data === '[DONE]') continue;
          try {
            const parsed = JSON.parse(data);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              fullContent += content;
              setStreamingContent(fullContent);
            }
          } catch {
            continue;
          }
        }
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: fullContent || '已收到，我建议先留下联系方式，由顾问进一步判断。' }]);
    } catch (error: unknown) {
      if (error instanceof Error && error.name !== 'AbortError') {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: `抱歉，当前无法完成回复。你可以直接联系顾问：400-XXX-XXXX / contact@zhengqi-shoe.com。`,
          },
        ]);
      }
    } finally {
      setIsTyping(false);
      setStreamingContent('');
      abortControllerRef.current = null;
    }
  }

  function handleStop() {
    abortControllerRef.current?.abort();
    if (streamingContent) {
      setMessages((prev) => [...prev, { role: 'assistant', content: streamingContent }]);
      setStreamingContent('');
    }
    setIsTyping(false);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className={`fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full shadow-2xl transition md:bottom-8 md:right-8 ${
          isOpen ? 'bg-[#17231f] text-white' : 'bg-[#0f766e] text-white hover:-translate-y-1 hover:bg-[#115e59]'
        }`}
        aria-label={isOpen ? '关闭咨询助手' : '打开咨询助手'}
      >
        {isOpen ? <span className="text-2xl leading-none">×</span> : <Mark />}
      </button>

      {isOpen && (
        <section className="fixed bottom-24 right-4 z-50 flex h-[560px] w-[calc(100vw-2rem)] max-w-[400px] flex-col overflow-hidden rounded-lg border border-[#d9e6df] bg-white shadow-2xl md:right-8">
          <header className="bg-[#0f766e] p-5 text-white">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/15">
                <Mark />
              </span>
              <div>
                <h2 className="text-lg font-black">正奇咨询助手</h2>
                <p className="text-xs text-teal-50">鞋厂管理改善初步沟通</p>
              </div>
            </div>
          </header>

          <div className="flex-1 space-y-4 overflow-y-auto bg-[#f7faf8] p-4">
            {messages.length === 0 && !streamingContent && (
              <div className="py-4">
                <h3 className="text-center text-xl font-black text-[#17231f]">先描述一个现场问题</h3>
                <p className="mx-auto mt-2 max-w-xs text-center text-sm leading-6 text-[#5d6d67]">
                  我可以帮你初步拆解交期、效率、品质、成本和团队协作相关问题。
                </p>
                <div className="mt-5 space-y-2">
                  {quickQuestions.map((question) => (
                    <button
                      key={question}
                      type="button"
                      onClick={() => handleSend(question)}
                      className="w-full rounded-lg border border-[#d9e6df] bg-white px-4 py-3 text-left text-sm font-semibold text-[#31423d] transition hover:border-[#0f766e] hover:text-[#0f766e]"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((item, index) => (
              <div key={`${item.role}-${index}`} className={`flex ${item.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-lg px-4 py-3 text-sm leading-7 ${
                    item.role === 'user' ? 'bg-[#0f766e] text-white' : 'border border-[#d9e6df] bg-white text-[#31423d]'
                  }`}
                >
                  <div className="whitespace-pre-wrap">{item.content}</div>
                </div>
              </div>
            ))}

            {streamingContent && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-lg border border-[#d9e6df] bg-white px-4 py-3 text-sm leading-7 text-[#31423d]">
                  {streamingContent}
                  <span className="ml-1 inline-block h-4 w-0.5 animate-pulse bg-[#0f766e] align-middle" />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <footer className="border-t border-[#d9e6df] bg-white p-4">
            {isTyping && (
              <button type="button" onClick={handleStop} className="mb-2 w-full rounded-lg bg-red-50 py-2 text-sm font-bold text-red-700">
                停止生成
              </button>
            )}
            <div className="flex gap-2">
              <input
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyDown={(event) => event.key === 'Enter' && handleSend()}
                disabled={isTyping}
                placeholder={isTyping ? '正在分析...' : '输入你的问题...'}
                className="min-w-0 flex-1 rounded-lg border border-[#d9e6df] px-3 py-3 text-sm focus:border-[#0f766e] focus:ring-4 focus:ring-teal-100"
              />
              <button
                type="button"
                onClick={() => handleSend()}
                disabled={!message.trim() || isTyping}
                className="rounded-lg bg-[#0f766e] px-4 text-sm font-black text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                发送
              </button>
            </div>
          </footer>
        </section>
      )}
    </>
  );
}
