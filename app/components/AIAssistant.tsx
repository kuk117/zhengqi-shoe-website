'use client';

import { useEffect, useRef, useState } from 'react';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const quickQuestions = [
  '鞋厂交期经常延误，先查哪里？',
  '你们的4+1服务怎么选择？',
  '如何判断是否需要数字化？',
  '想预约诊断，需要准备什么？',
];

function ConsultantMark({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <path d="M9 12h30v22H9z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M15 19h18M15 26h10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="m31 31 7 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M34 34a5 5 0 1 0-7-7 5 5 0 0 0 7 7Z" stroke="currentColor" strokeWidth="3" />
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

  const handleSend = async (preset?: string) => {
    const text = (preset ?? message).trim();
    if (!text || isTyping) return;

    const userMessage: Message = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMessage]);
    setMessage('');
    setIsTyping(true);
    setStreamingContent('');

    const systemPrompt = `你是"莆田正奇鞋业咨询公司"的网站咨询助手。

职责：
1. 回答鞋厂管理改善、精益制造、敏捷制造、利润改善、数字化和陪跑落地相关问题
2. 帮助访客初步梳理交期、效率、品质、成本、库存和团队协作卡点
3. 介绍正奇的服务体系、案例方向和预约诊断方式
4. 对无法确认的信息，引导用户留下联系方式，由顾问进一步沟通

公司信息：
- 公司名称：莆田正奇鞋业咨询有限公司
- 服务对象：鞋厂老板、经营管理者、鞋类品牌客户
- 核心服务：现场诊断、改善方案、陪跑落地、复盘机制、数字化管理建议
- 联系方式：400-XXX-XXXX / contact@zhengqi-shoe.com

回答要求：
- 使用中文
- 专业、克制、清晰
- 不夸大承诺，不使用表情符号
- 优先给出可执行的判断路径`;

    try {
      abortControllerRef.current = new AbortController();

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: systemPrompt },
            ...messages,
            userMessage,
          ],
        }),
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) throw new Error('请求失败');

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
          if (data === '[DONE]') continue;

          try {
            const parsed = JSON.parse(data);
            const content = parsed.choices[0]?.delta?.content;
            if (content) {
              fullContent += content;
              setStreamingContent(fullContent);
            }
          } catch {
            continue;
          }
        }
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: fullContent }]);
      setStreamingContent('');
    } catch (error: unknown) {
      if (error instanceof Error && error.name !== 'AbortError') {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: `抱歉，当前暂时无法完成回复：${error.message}\n\n你也可以直接联系顾问：400-XXX-XXXX`,
          },
        ]);
      }
    } finally {
      setIsTyping(false);
      setStreamingContent('');
      abortControllerRef.current = null;
    }
  };

  const handleStop = () => {
    abortControllerRef.current?.abort();
    if (streamingContent) {
      setMessages((prev) => [...prev, { role: 'assistant', content: `${streamingContent}\n\n(已停止生成)` }]);
      setStreamingContent('');
    }
    setIsTyping(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full shadow-2xl transition duration-300 ${
          isOpen
            ? 'scale-90 bg-slate-800 text-white'
            : 'animate-signal-ring bg-slate-950 text-cyan-200 ring-1 ring-cyan-200/30 hover:-translate-y-1 hover:bg-cyan-700'
        }`}
        aria-label={isOpen ? '关闭智能助手' : '打开智能助手'}
      >
        {isOpen ? (
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 18 6M6 6l12 12" />
          </svg>
        ) : (
          <span className="relative grid h-12 w-12 place-items-center rounded-full bg-white/8">
            <ConsultantMark />
            <span className="absolute right-0.5 top-0.5 h-3 w-3 rounded-full border-2 border-slate-950 bg-cyan-300" />
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-28 right-4 z-50 flex h-[580px] w-[calc(100vw-2rem)] max-w-[400px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl md:right-8">
          <div className="relative bg-slate-950 p-5 text-white">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-300/12 text-cyan-200 ring-1 ring-cyan-200/20">
                  <ConsultantMark className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="text-lg font-black">正奇咨询助手</h3>
                  <p className="text-xs text-slate-300">鞋厂管理改善初步沟通</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                aria-label="关闭智能助手"
              >
                ×
              </button>
            </div>
            <p className={`mt-4 flex items-center gap-2 text-xs ${isTyping ? 'text-amber-200' : 'text-cyan-200'}`}>
              <span className={`h-2 w-2 rounded-full ${isTyping ? 'bg-amber-300' : 'bg-cyan-300'} animate-pulse`} />
              {isTyping ? '正在分析问题...' : '在线 · 可咨询服务与诊断方向'}
            </p>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto bg-slate-50 p-4">
            {messages.length === 0 && !streamingContent && (
              <div className="py-6">
                <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-white text-cyan-700 shadow-sm ring-1 ring-slate-200">
                  <ConsultantMark className="h-9 w-9" />
                </div>
                <h4 className="text-center text-xl font-black text-slate-950">先描述一个现场问题</h4>
                <p className="mx-auto mt-2 max-w-xs text-center text-sm leading-6 text-slate-600">
                  我可以帮你初步拆解交期、效率、品质、成本和数字化相关问题。
                </p>

                <div className="mx-auto mt-6 max-w-sm space-y-2">
                  {quickQuestions.map((question) => (
                    <button
                      key={question}
                      onClick={() => handleSend(question)}
                      className="group flex w-full items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-cyan-200 hover:text-cyan-700 hover:shadow-sm"
                    >
                      <span>{question}</span>
                      <span className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-cyan-700">→</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-7 shadow-sm ${
                    msg.role === 'user'
                      ? 'rounded-br-md bg-slate-950 text-white'
                      : 'rounded-bl-md border border-slate-200 bg-white text-slate-800'
                  }`}
                >
                  <div className="whitespace-pre-wrap">{msg.content}</div>
                </div>
              </div>
            ))}

            {streamingContent && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl rounded-bl-md border border-cyan-200 bg-white px-4 py-3 text-sm leading-7 text-slate-800 shadow-sm">
                  <div className="whitespace-pre-wrap">
                    {streamingContent}
                    <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-cyan-700 align-middle" />
                  </div>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          <div className="border-t border-slate-200 bg-white p-4">
            {isTyping && (
              <button
                onClick={handleStop}
                className="mb-2 w-full rounded-lg bg-red-50 py-2 text-sm font-bold text-red-600 transition hover:bg-red-100"
              >
                停止生成
              </button>
            )}

            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
                placeholder={isTyping ? '正在分析中...' : '输入你的问题...'}
                disabled={isTyping}
                className="min-w-0 flex-1 rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-500 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100 disabled:bg-slate-50 disabled:text-slate-400"
              />
              <button
                onClick={() => handleSend()}
                disabled={!message.trim() || isTyping}
                className="rounded-lg bg-cyan-700 px-5 text-sm font-black text-white transition hover:bg-slate-950 disabled:cursor-not-allowed disabled:opacity-50"
              >
                发送
              </button>
            </div>

            <p className="mt-2 text-center text-xs text-slate-400">AI 回复仅作初步参考，具体方案以顾问诊断为准</p>
          </div>
        </div>
      )}
    </>
  );
}
