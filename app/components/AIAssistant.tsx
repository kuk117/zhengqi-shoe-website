'use client';

import React, { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
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

  const handleSend = async () => {
    if (!message.trim() || isTyping) return;

    const userMessage: Message = { role: 'user', content: message.trim() };
    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsTyping(true);
    setStreamingContent('');

    const systemPrompt = `你是"莆田正奇鞋业咨询公司"的AI智能助手。你的职责是：

1. 回答关于鞋业咨询、市场调研、品牌战略、供应链优化等问题
2. 提供专业的行业见解和建议
3. 介绍公司的服务内容和成功案例
4. 回答联系方式和业务咨询相关问题

公司信息：
- 公司名称：莆田正奇鞋业咨询有限公司
- 成立：2015年，深耕鞋业9年
- 服务客户：100+企业
- 核心服务：市场调研与分析、品牌战略规划、供应链优化
- 联系方式：400-XXX-XXXX / contact@zhengqi-shoe.com
- 地址：福建省莆田市XX区XX路XX号

回答要求：
- 专业、友好、有耐心
- 使用中文回复
- 可以适当使用emoji增加亲和力
- 如果不确定的问题，建议联系专业顾问`;

    try {
      abortControllerRef.current = new AbortController();

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: systemPrompt },
            ...messages,
            userMessage
          ]
        }),
        signal: abortControllerRef.current.signal
      });

      if (!response.ok) throw new Error('请求失败');

      const reader = response.body?.getReader();
      if (!reader) throw new Error('无法读取响应');

      let fullContent = '';
      
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const text = new TextDecoder().decode(value);
        const lines = text.split('\n').filter(line => line.startsWith('data:'));

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
          } catch (e) {
            continue;
          }
        }
      }

      setMessages(prev => [...prev, { role: 'assistant', content: fullContent }]);
      setStreamingContent('');

    } catch (error: any) {
      if (error.name !== 'AbortError') {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: `抱歉，出现了一些问题：${error.message}\n\n请稍后重试或联系我们的专业顾问：400-XXX-XXXX` 
        }]);
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
      setMessages(prev => [...prev, { role: 'assistant', content: streamingContent + '\n\n*(已停止生成)*' }]);
      setStreamingContent('');
    }
    setIsTyping(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-gray-600 rotate-0 scale-90' : 'bg-gradient-to-br from-blue-600 to-cyan-500 hover:scale-110'
        }`}
        style={{ animation: isOpen ? 'none' : 'pulse 2s infinite' }}
      >
        {isOpen ? (
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <span className="text-2xl">🤖</span>
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-28 right-8 w-96 h-[580px] bg-white rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 p-5 text-white relative">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl">💬</span>
                <div>
                  <h3 className="font-bold text-lg">通义千问 AI 助手</h3>
                  <p className="text-xs text-blue-100">莆田正奇鞋业咨询</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition">
                ✕
              </button>cd D:\agent\网站\shoe-website
$content = Get-Content "app\about\page.tsx" -Raw -Encoding utf8

# 删除 ABOUT US 英文标签
$content = $content -replace '\s*<div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-2\.5 rounded-full mb-5 shadow-xl animate-fadeInUp">\s*<span className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></span>\s*<span className="text-gray-900 font-bold text-base tracking-wide">ABOUT US</span>\s*</div>', ''

# 删除建筑物图标
$content = $content -replace '\s*<div className="ml-auto hidden xl:block animate-float">\s*<div className="w-36 h-36 bg-white/85 backdrop-blur-md rounded-3xl border-4 border-white shadow-2xl flex items-center justify-center text-7xl">\s*🏢\s*</div>\s*</div>', ''

Set-Content -Path "app\about\page.tsx" -Value $content -Encoding utf8
Write-Host "DONE" -ForegroundColor Green
cd D:\agent\网站\shoe-website
$content = Get-Content "app\about\page.tsx" -Raw -Encoding utf8

# 删除 ABOUT US 英文标签
$content = $content -replace '\s*<div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-2\.5 rounded-full mb-5 shadow-xl animate-fadeInUp">\s*<span className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></span>\s*<span className="text-gray-900 font-bold text-base tracking-wide">ABOUT US</span>\s*</div>', ''

# 删除建筑物图标
$content = $content -replace '\s*<div className="ml-auto hidden xl:block animate-float">\s*<div className="w-36 h-36 bg-white/85 backdrop-blur-md rounded-3xl border-4 border-white shadow-2xl flex items-center justify-center text-7xl">\s*🏢\s*</div>\s*</div>', ''

Set-Content -Path "app\about\page.tsx" -Value $content -Encoding utf8
Write-Host "DONE" -ForegroundColor Green

            </div>
            <p className={`text-xs flex items-center gap-2 ${isTyping ? 'text-yellow-200' : 'text-green-200'}`}>
              <span className={`w-2 h-2 rounded-full ${isTyping ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'} animate-pulse`}></span>
              {isTyping ? '正在思考中...' : '在线 · 智能对话'}
            </p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
            {messages.length === 0 && !streamingContent && (
              <div className="text-center py-10">
                <div className="text-6xl mb-4">👋</div>
                <h4 className="font-bold text-xl text-gray-800 mb-2">你好！我是AI助手</h4>
                <p className="text-sm text-gray-500 mb-6">基于通义千问大模型，可以回答任何问题</p>
                
                <div className="space-y-2 text-left max-w-xs mx-auto">
                  {[
                    { q: '怎么实现鞋厂数字化？', icon: '🏭' },
                    { q: '你们有哪些服务？', icon: '💼' },
                    { q: '看看成功案例', icon: '🏆' },
                    { q: '如何联系你们？', icon: '📞' }
                  ].map((item, i) => (
                    <button key={i}
                      onClick={() => { setMessage(item.q); setTimeout(handleSend, 100); }}
                      className="block w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm hover:bg-blue-50 hover:border-blue-300 transition-all group text-left"
                    >
                      <span className="mr-2">{item.icon}</span>
                      {item.q}
                      <span className="float-right opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-br-md' 
                    : 'bg-white border border-gray-200 rounded-bl-md'
                }`}>
                  <div className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</div>
                </div>
              </div>
            ))}

            {streamingContent && (
              <div className="flex justify-start">
                <div className="max-w-[85%] bg-white border-2 border-blue-300 rounded-2xl rounded-bl-md px-4 py-3 shadow-lg">
                  <div className="text-sm leading-relaxed whitespace-pre-wrap text-gray-800">
                    {streamingContent}
                    <span className="inline-block w-0.5 h-4 bg-blue-600 animate-pulse ml-0.5 align-middle"></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-gray-100">
            {isTyping && (
              <button onClick={handleStop} className="w-full mb-2 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition flex items-center justify-center gap-2">
                ⏹️ 停止生成
              </button>
            )}
            
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
                placeholder={isTyping ? "AI正在思考中..." : "输入任何问题..."}
                disabled={isTyping}
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none disabled:bg-gray-50 disabled:text-gray-400 transition-all"
              />
              <button 
                onClick={handleSend} 
                disabled={!message.trim() || isTyping}
                className="px-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-95"
              >
                发送
              </button>
            </div>
            
            <p className="text-xs text-gray-400 mt-2 text-center">
              Powered by 通义千问 (阿里) · 数据仅用于本地对话
            </p>
          </div>
        </div>
      )}
    </>
  );
}

