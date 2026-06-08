'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* 顶部首屏横幅 */}
      <section className="relative h-[45vh] min-h-[420px] overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&q=80"
            alt=""
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 flex items-center px-8 lg:px-12 relative z-10">
          <div className="w-full max-w-7xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight animate-fadeInUp drop-shadow-lg">
              莆田市正奇<span className="text-yellow-300">企业管理咨询</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed max-w-4xl animate-fadeInUp" style={{ animationDelay: '200ms' }}>
              懂鞋业，更懂制造升级 · 深耕莆田产业，助力鞋企腾飞
            </p>

            {/* 三个数据卡片 */}
            <div className="flex gap-6 md:gap-8 animate-fadeInUp" style={{ animationDelay: '400ms' }}>
              {[
                { value: '10年', label: '行业深耕', icon: '🎯' },
                { value: '98.6%', label: '通过率', icon: '✓' },
                { value: '200+', label: '服务企业', icon: '🏭' }
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/85 backdrop-blur-lg px-8 py-6 rounded-2xl border-3 border-white/70 hover:bg-white/95 transition-all duration-300 hover:-translate-y-2 group flex-1 md:flex-none min-w-[150px] text-center shadow-2xl"
                >
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-black text-gray-900">{stat.value}</div>
                  <div className="text-base text-gray-800 mt-1 font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white via-white/90 to-transparent"></div>
      </section>

      {/* 公司介绍区块 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="relative group order-2 lg:order-1 animate-fadeInLeft">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80"
                  alt=""
                  width={800}
                  height={600}
                  className="object-cover w-full group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-fadeInRight">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                正奇咨询<br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">懂鞋业更懂制造升级</span>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8 text-lg md:text-xl">
                莆田市正奇企业管理咨询有限公司，深耕莆田/晋江鞋服产业链的精益管理咨询。团队成员多来自
                <strong className="text-red-600 text-xl">丰泰、宝成、万邦、清禄、百丽、华坚</strong>
                等国内外一线鞋服企业，平均从业年资约
                <strong className="text-blue-600 text-xl">19.8年</strong>。
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                深入了解
                <span className="group-hover:translate-x-2 transition-transform text-xl">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4+1企业升级体系：标题文字完整说明5大模块，仅展示3张卡片，底部统一跳转按钮 */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">"4+1" 企业进化升级体系</h2>
            {/* 文字直接说明4+1包含内容，用户一眼看懂全部模块 */}
            <p className="text-lg md:text-xl text-gray-600 mb-3">
              四大核心方案：精益制造1.0 · 敏捷制造2.0 · 利润制造3.0 · 数字化转型4.0
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              +1专属增值服务：全程陪跑落地辅导
            </p>
            <p className="text-base text-gray-500 mt-4">
              下方展示核心三大板块，完整5套体系详情可点击下方按钮查看
            </p>
          </div>

          {/* 仅展示3张核心卡片，不堆5张，页面整洁 */}
          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              {
                title: '精益制造 1.0',
                icon: '🏭',
                subtitle: '订单可控',
                detail: '厂房布局·流水优化·目视化',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80',
                color: 'from-blue-500 to-blue-600',
                textColor: 'text-blue-500'
              },
              {
                title: '敏捷制造 2.0',
                icon: '⚡',
                subtitle: '团队可管',
                detail: 'iMES系统·计划配套·效率追踪',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400/fit=crop&q=80',
                color: 'from-cyan-500 to-teal-600',
                textColor: 'text-cyan-500'
              },
              {
                title: '利润制造 3.0',
                icon: '💰',
                subtitle: '经营可视',
                detail: '快反机制·定价优化·成本管控',
                image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400/fit=crop&q=80',
                color: 'from-green-500 to-emerald-600',
                textColor: 'text-green-500'
              }
            ].map((service, i) => (
              <Link
                key={i}
                href="/services"
                className="group block transform transition-all duration-500 hover:-translate-y-3 animate-scaleIn"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full border border-gray-100">
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-70`}></div>
                    <div className="absolute top-5 left-5 bg-white p-4 rounded-xl shadow-lg group-hover:rotate-12 transition-transform duration-300">
                      <span className="text-4xl block">{service.icon}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 text-2xl mb-2">{service.title}</h3>
                    <p className={`font-semibold text-lg ${service.textColor} mb-4`}>{service.subtitle}</p>
                    <p className="text-gray-600 text-base mb-6">{service.detail}</p>
                    <span className={`inline-flex items-center gap-2 font-semibold text-lg ${service.textColor} group-hover:gap-4 transition-all`}>
                      了解详情 →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* 全局引导按钮，统一导流至完整5项服务页面 */}
          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="inline-block px-10 py-4 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white rounded-2xl font-bold text-xl hover:from-blue-800 hover:to-cyan-600 transition transform hover:scale-105 shadow-xl animate-fadeInUp"
              style={{ animationDelay: '600ms' }}
            >
              查看完整「4+1」五大体系全部内容 →
            </Link>
          </div>
        </div>
      </section>

      {/* 底部转化蓝色区块 */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500"></div>
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeInUp">准备好实现制造升级了吗？</h2>
            <p className="text-white/95 text-xl md:text-2xl mb-12 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
              懂鞋业，更懂制造升级 · 深耕莆田产业，助力鞋企腾飞
            </p>
            <div className="flex gap-6 justify-center flex-wrap animate-fadeInUp" style={{ animationDelay: '400ms' }}>
              <Link
                href="/contact"
                className="group px-12 py-5 bg-white text-blue-700 rounded-2xl font-bold text-xl hover:bg-yellow-300 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl inline-flex items-center gap-3 animate-pulse-slow"
              >
                <span>免费公益诊断</span>
                <span className="group-hover:translate-x-2 transition-transform text-2xl">→</span>
              </Link>
              <Link
                href="/cases"
                className="px-12 py-5 bg-white/25 backdrop-blur-md text-white border-3 border-white/50 rounded-2xl font-bold text-xl hover:bg-white/35 transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center gap-2"
              >
                查看成功案例
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}