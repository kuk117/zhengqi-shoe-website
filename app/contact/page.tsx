'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });

  const contactMethods = [
    {
      title: '公司地址',
      content: '福建省莆田市荔城区XX路XX号',
      color: 'bg-sky-50 text-sky-700',
      icon: (
        <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" aria-hidden="true">
          <path d="M24 42s14-12.4 14-25A14 14 0 1 0 10 17c0 12.6 14 25 14 25Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
          <path d="M24 22a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" stroke="currentColor" strokeWidth="3" />
        </svg>
      ),
    },
    {
      title: '联系电话',
      content: '138-XXXX-XXXX',
      color: 'bg-teal-50 text-teal-700',
      icon: (
        <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" aria-hidden="true">
          <path d="M15 9h18a3 3 0 0 1 3 3v24a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3Z" stroke="currentColor" strokeWidth="3" />
          <path d="M21 34h6M20 14h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: '电子邮箱',
      content: 'contact@zhengqi.com',
      color: 'bg-amber-50 text-amber-700',
      icon: (
        <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" aria-hidden="true">
          <path d="M9 14h30v22H9z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
          <path d="m10 15 14 12 14-12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: '工作时间',
      content: '周一至周五 9:00-18:00',
      color: 'bg-indigo-50 text-indigo-700',
      icon: (
        <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" aria-hidden="true">
          <path d="M24 40a16 16 0 1 0 0-32 16 16 0 0 0 0 32Z" stroke="currentColor" strokeWidth="3" />
          <path d="M24 15v10l7 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('感谢您的留言！我们会尽快与您联系。');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 首栏Banner 优化布局+分层入场动画 */}
      <section className="relative h-[42vh] min-h-[380px] overflow-hidden bg-gradient-to-b from-blue-50 via-blue-100/50 to-white">
        {/* 网格纹理背景 */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.4) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,.4) 2px, transparent 2px)',
              backgroundSize: '50px 50px'
            }}
          ></div>
        </div>

        {/* 左右分栏文字布局 对齐设计图 */}
        <div className="absolute inset-0 flex items-center px-12 lg:px-16 z-10">
          <div className="w-full flex flex-col items-center justify-center text-center">
            {/* 左侧主标题 */}
            <div className="animate-fadeInUp">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 ">
                联系<span className="text-blue-500">我们</span>
              </h1>
            </div>

            {/* 右侧宣传文案 大屏可见 */}
            <div className="hidden md:block text-right animate-fadeInRight" style={{ animationDelay: '250ms' }}>
              <p className="text-xl md:text-2xl font-bold text-gray-900 mb-2 drop-shadow-md">免费诊断咨询 · 开启升级之旅</p>
              <p className="text-base text-gray-900/95 font-semibold drop-shadow-sm">24小时内回复 | 专业团队 | 严格保密</p>
            </div>
          </div>
        </div>

        {/* 加长底部渐变，柔和过渡下方白色区块 */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/85 to-transparent"></div>
      </section>

      {/* 联系表单区域 */}
      <section className="-mt-16 py-16 bg-white">
        <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* 左侧留言表单 左侧入场动画 */}
            <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm animate-fadeInLeft transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200 lg:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">在线留言</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="您的姓名 *"
                    required
                    className="w-full rounded-lg border border-slate-200 px-5 py-3 text-base transition-all duration-300 hover:border-sky-300 focus:border-sky-500 focus:outline-none focus:shadow-md focus:shadow-sky-100"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="公司名称"
                    className="w-full rounded-lg border border-slate-200 px-5 py-3 text-base transition-all duration-300 hover:border-sky-300 focus:border-sky-500 focus:outline-none focus:shadow-md focus:shadow-sky-100"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="联系电话 *"
                    required
                    className="w-full rounded-lg border border-slate-200 px-5 py-3 text-base transition-all duration-300 hover:border-sky-300 focus:border-sky-500 focus:outline-none focus:shadow-md focus:shadow-sky-100"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  <input
                    type="email"
                    placeholder="电子邮箱"
                    className="w-full rounded-lg border border-slate-200 px-5 py-3 text-base transition-all duration-300 hover:border-sky-300 focus:border-sky-500 focus:outline-none focus:shadow-md focus:shadow-sky-100"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <textarea
                  placeholder="请描述您的需求或问题..."
                  rows={4}
                  className="w-full resize-none rounded-lg border border-slate-200 px-5 py-3 text-base transition-all duration-300 hover:border-sky-300 focus:border-sky-500 focus:outline-none focus:shadow-md focus:shadow-sky-100"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-sky-600 py-4 text-lg font-black text-white shadow-lg shadow-sky-100 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-700 hover:shadow-xl active:scale-[0.98]"
                >
                  提交留言 →
                </button>
              </form>
            </div>

            {/* 右侧联系方式 右侧入场动画 */}
            <div className="space-y-5 animate-fadeInRight" style={{ animationDelay: '300ms' }}>
              {/* 联系信息卡片 */}
              <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200">
                <h2 className="mb-6 text-2xl font-black text-slate-900 md:text-3xl">联系方式</h2>

                <div className="grid gap-4 sm:grid-cols-2">
                  {contactMethods.map((item, i) => (
                    <div
                      key={item.title}
                      className="group animate-scaleIn rounded-lg border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg hover:shadow-slate-100"
                      style={{ animationDelay: `${i * 110}ms` }}
                    >
                      <div className={`mb-5 grid h-12 w-12 place-items-center rounded-lg ${item.color} transition duration-300 group-hover:scale-110`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="mb-1 text-base font-black text-slate-900">{item.title}</h3>
                        <p className="text-sm font-medium leading-6 text-slate-600">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 地图图片卡片 */}
              <div className="group relative h-48 animate-fadeInUp overflow-hidden rounded-lg border border-slate-200 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200" style={{ animationDelay: '420ms' }}>
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop&q=80"
                  alt="公司位置地图"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/45 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 底部Footer */}
      <footer className="bg-gradient-to-b from-blue-50 via-blue-100/50 to-white text-gray-900 py-10">
        <div className="container mx-auto px-8 text-center animate-fadeInUp" style={{ animationDelay: '500ms' }}>
          <p className="text-lg font-semibold mb-2">莆田市正奇企业管理咨询有限公司</p>
          <p className="text-sm opacity-90">© 2024 版权所有 | 懂鞋业，更懂制造升级</p>
        </div>
      </footer>
    </div>
  );
}

