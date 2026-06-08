'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* 首屏：浅淡雾霾蓝，降低饱和度，柔和不刺眼 */}
      <section className="relative h-[45vh] min-h-[420px] overflow-hidden bg-sky-100">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&q=80"
            alt=""
            fill
            className="object-cover opacity-5"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 flex items-center px-8 lg:px-12 relative z-10">
          <div className="w-full max-w-7xl">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-5 leading-tight opacity-0 animate-fadeInUp"
            >
              莆田市正奇<span className="text-sky-500">企业管理咨询</span>
            </h1>
            <p
              className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-4xl opacity-0 animate-fadeInUp"
              style={{ animationDelay: '200ms' }}
            >
              懂鞋业，更懂制造升级 · 深耕莆田产业，助力鞋企腾飞
            </p>

            <div
              className="flex gap-6 md:gap-8 flex-wrap opacity-0 animate-fadeInUp"
              style={{ animationDelay: '400ms' }}
            >
              {[
                { value: '10年', label: '行业深耕' },
                { value: '98.6%', label: '通过率' },
                { value: '200+', label: '服务企业' }
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white px-8 py-6 rounded-lg shadow-sm hover:-translate-y-2 transition-all duration-300 flex-1 md:flex-none min-w-[150px] text-center border border-slate-100"
                >
                  <div className="text-3xl md:text-4xl font-black text-slate-800">{stat.value}</div>
                  <div className="text-base text-slate-500 mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white via-white to-transparent"></div>
      </section>

      {/* 公司介绍 纯白底色，仅低饱和浅蓝做点缀 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="relative group order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-lg shadow-sm border border-slate-100">
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
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                正奇咨询<br />
                <span className="text-sky-500">懂鞋业更懂制造升级</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg md:text-xl">
                莆田市正奇企业管理咨询有限公司，深耕莆田/晋江鞋服产业链的精益管理咨询。团队成员多来自
                <strong className="text-slate-800">丰泰、宝成、万邦、清禄、百丽、华坚</strong>
                等国内外一线鞋服企业，平均从业年资约
                <strong className="text-sky-500">19.8年</strong>。
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-sky-500 text-white rounded-lg font-medium text-lg hover:bg-sky-600 transition-all duration-300"
              >
                深入了解
                <span className="group-hover:translate-x-2 transition-transform text-xl">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4+1体系 极浅灰白，整体素雅清淡 */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">"4+1" 企业进化升级体系</h2>
            <p className="text-lg md:text-xl text-slate-500 mb-3">
              四大核心方案：精益制造1.0 · 敏捷制造2.0 · 利润制造3.0
            </p>
            <p className="text-lg md:text-xl text-slate-500">
              +1专属增值服务：全程陪跑落地辅导
            </p>
            <p className="text-base text-slate-400 mt-4">
              下方展示核心三大板块，完整5套体系详情可点击下方按钮查看
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              {
                title: '精益制造 1.0',
                subtitle: '订单可控',
                detail: '厂房布局·流水优化·目视化',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80'
              },
              {
                title: '敏捷制造 2.0',
                subtitle: '团队可管',
                detail: 'iMES系统·计划配套·效率追踪',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400/fit=crop&q=80'
              },
              {
                title: '利润制造 3.0',
                subtitle: '经营可视',
                detail: '快反机制·定价优化·成本管控',
                image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400/fit=crop&q=80'
              }
            ].map((service, i) => (
              <Link
                key={i}
                href="/services"
                className="group block transform transition-all duration-500 hover:-translate-y-2"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-sm h-full border border-slate-100">
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* 极淡遮罩，不发黑 */}
                    <div className="absolute inset-0 bg-slate-800/15"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-slate-800 text-2xl mb-2">{service.title}</h3>
                    <p className="font-medium text-lg text-sky-500 mb-4">{service.subtitle}</p>
                    <p className="text-slate-500 text-base mb-6">{service.detail}</p>
                    <span className="inline-flex items-center gap-2 font-medium text-lg text-sky-500 group-hover:gap-4 transition-all">
                      了解详情 →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="inline-block px-10 py-4 bg-sky-500 text-white rounded-lg font-medium text-xl hover:bg-sky-600 transition shadow-sm"
            >
              查看完整「4+1」五大体系全部内容 →
            </Link>
          </div>
        </div>
      </section>

      {/* 底部转化：浅淡雾霾蓝，不厚重刺眼 */}
      <section className="py-28 relative overflow-hidden bg-sky-100">
        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">准备好实现制造升级了吗？</h2>
            <p className="text-slate-600 text-xl md:text-2xl mb-12">
              懂鞋业，更懂制造升级 · 深耕莆田产业，助力鞋企腾飞
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <Link
                href="/contact"
                className="group px-12 py-5 bg-sky-500 text-white rounded-lg font-medium text-xl hover:bg-sky-600 transition-all duration-300 inline-flex items-center gap-3"
              >
                <span>免费公益诊断</span>
                <span className="group-hover:translate-x-2 transition-transform text-2xl">→</span>
              </Link>
              <Link
                href="/cases"
                className="px-12 py-5 bg-white text-slate-700 border border-slate-200 rounded-lg font-medium text-xl hover:bg-slate-50 transition-all duration-300 inline-flex items-center gap-2"
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