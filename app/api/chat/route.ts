import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  console.log('=== Chat API (联网版 v2) ===');
  
  try {
    const { messages } = await request.json();
    
    const apiKey = process.env.QWEN_API_KEY;
    const baseUrl = process.env.QWEN_BASE_URL || 'https://dashscope.aliyuncs.com/compatible-mode/v1';
    
    if (!apiKey) {
      return NextResponse.json({ error: 'API Key 未配置' }, { status: 500 });
    }

    // 使用 qwen-max（支持联网搜索）
    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'qwen-max',
        messages: [
          {
            role: 'system',
            content: `你是莆田正奇鞋业咨询公司的AI助手。

【🌐 联网能力】
✅ 你可以访问互联网搜索最新信息！
- 天气、新闻、价格、数据等实时信息
- 回答时引用来源："根据搜索结果..."

【公司信息】
- 莆田正奇鞋业咨询 (2015年成立)
- 服务：市场调研、品牌战略、供应链优化
- 联系：400-XXX-XXXX / contact@zhengqi-shoe.com

【风格要求】
- 专业友好，使用中文和emoji
- 主动搜索相关信息提供准确答案`
          },
          ...messages
        ],
        stream: true,
        temperature: 0.7,
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ qwen-max 错误:', errorText.substring(0, 100));
      
      // 如果 qwen-max 失败，回退到 qwen-turbo
      console.log('⚠️ 回退到 qwen-turbo...');
      const fallback = await fetch(`${baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'qwen-turbo',
          messages: messages,
          stream: true,
        }),
      });
      
      return new Response(fallback.body, {
        headers: { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache' },
      });
    }

    console.log('✅ 联网响应成功！');
    
    return new Response(response.body, {
      headers: { 
        'Content-Type': 'text/event-stream', 
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : '未知错误';
    console.error('💥 异常:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
