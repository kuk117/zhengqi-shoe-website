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
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10 border-4 border-gray-100 animate-fadeInLeft hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">在线留言</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="您的姓名 *"
                    required
                    className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300 text-base hover:border-blue-300 focus:shadow-blue-200 focus:shadow-md"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="公司名称"
                    className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300 text-base hover:border-blue-300 focus:shadow-blue-200 focus:shadow-md"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="联系电话 *"
                    required
                    className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300 text-base hover:border-blue-300 focus:shadow-blue-200 focus:shadow-md"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  <input
                    type="email"
                    placeholder="电子邮箱"
                    className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300 text-base hover:border-blue-300 focus:shadow-blue-200 focus:shadow-md"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <textarea
                  placeholder="请描述您的需求或问题..."
                  rows={4}
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300 resize-none text-base hover:border-blue-300 focus:shadow-blue-200 focus:shadow-md"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-gray-900 rounded-xl font-bold text-lg hover:from-blue-800 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 active:scale-[0.97] shadow-xl hover:shadow-2xl"
                >
                  提交留言 →
                </button>
              </form>
            </div>

            {/* 右侧联系方式 右侧入场动画 */}
            <div className="space-y-5 animate-fadeInRight" style={{ animationDelay: '300ms' }}>
              {/* 联系信息卡片 */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border-4 border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">联系方式</h2>

                <div className="space-y-4">
                  {[
                    { icon: '📍', title: '公司地址', content: '福建省莆田市荔城区XX路XX号' },
                    { icon: '📞', title: '联系电话', content: '138-XXXX-XXXX' },
                    { icon: '📧', title: '电子邮箱', content: 'contact@zhengqi.com' },
                    { icon: '🕐', title: '工作时间', content: '周一至周五 9:00-18:00' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl transition-all duration-300 border-2 border-gray-200 hover:border-blue-300 hover:from-blue-50 hover:to-cyan-50 hover:-translate-y-1">
                      <span className="text-3xl">{item.icon}</span>
                      <div>
                        <h3 className="font-black text-gray-900 text-base mb-1">{item.title}</h3>
                        <p className="text-gray-700 text-sm font-medium">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 地图图片卡片 */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-gray-100 h-48 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-1">
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop&q=80"
                  alt="公司位置地图"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
                  <div className="text-gray-900">
                    <p className="font-black text-lg mb-1">📍 我们的位置</p>
                    <p className="text-sm opacity-90">欢迎莅临参观指导</p>
                  </div>
                </div>
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



