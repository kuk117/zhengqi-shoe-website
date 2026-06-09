'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  const coreAdvantages = [
    {
      title: '行业专注',
      desc: '10年深耕鞋服产业',
      note: '熟悉莆田/晋江鞋服供应链、生产现场与管理痛点',
      accent: 'from-blue-700 to-slate-900',
      icon: (
        <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" aria-hidden="true">
          <path d="M32 7 12 16.5v14.2C12 43.9 20.1 53 32 58c11.9-5 20-14.1 20-27.3V16.5L32 7Z" fill="currentColor" opacity=".22" />
          <path d="M32 9.5 15 17.6v12.5C15 41.7 21.8 49.8 32 54.2c10.2-4.4 17-12.5 17-24.1V17.6L32 9.5Z" stroke="currentColor" strokeWidth="3.2" strokeLinejoin="round" />
          <path d="M23 39V27.5l7.2 4.1v-4.1l7.1 4.1V22h6.2v17" stroke="currentColor" strokeWidth="3.2" strokeLinejoin="round" />
          <path d="M20 39h25M27 35h3.5M35.5 35H39" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: '专家团队',
      desc: '平均19.8年经验',
      note: '成员来自丰泰、宝成、万邦等一线鞋服制造企业',
      accent: 'from-teal-600 to-slate-800',
      icon: (
        <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" aria-hidden="true">
          <path d="M20 50.5c2.4-7 6.4-10.5 12-10.5s9.6 3.5 12 10.5" fill="currentColor" opacity=".2" />
          <path d="M32 8.5 47.5 15v12.8c0 10.8-6.2 19.4-15.5 25.7-9.3-6.3-15.5-14.9-15.5-25.7V15L32 8.5Z" stroke="currentColor" strokeWidth="3.2" strokeLinejoin="round" />
          <path d="M32 33.4a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" stroke="currentColor" strokeWidth="3.2" />
          <path d="M19.5 49.5c2.6-7.2 6.8-10.8 12.5-10.8s9.9 3.6 12.5 10.8" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: '实战经验',
      desc: '服务200+企业',
      note: '以指标改善和落地验证为导向，覆盖订单、效率、品质、成本',
      accent: 'from-amber-500 to-orange-700',
      icon: (
        <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" aria-hidden="true">
          <path d="M14 14h36v28H14z" fill="currentColor" opacity=".2" />
          <path d="M12 12h40v31H12z" stroke="currentColor" strokeWidth="3.2" strokeLinejoin="round" />
          <path d="M12 21h40M19 35l8-8 6.5 6.5L45 24" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M43 24h4v4M21 51h22M32 43v8" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: '创新方法',
      desc: '"4+1"升级体系',
      note: '从精益、敏捷、利润、数字化到陪跑落地形成闭环',
      accent: 'from-indigo-700 to-slate-950',
      icon: (
        <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" aria-hidden="true">
          <path d="M32 10 13 21v22l19 11 19-11V21L32 10Z" fill="currentColor" opacity=".18" />
          <path d="M32 8.5 12 20v23.5L32 55l20-11.5V20L32 8.5Z" stroke="currentColor" strokeWidth="3.2" strokeLinejoin="round" />
          <path d="M32 31.5 12.8 20.4M32 31.5l19.2-11.1M32 31.5v22" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22.5 15.5 42 27" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 首栏 - 浅蓝渐变 */}
      <section className="relative h-[48vh] min-h-[420px] overflow-hidden bg-gradient-to-b from-blue-50 via-blue-100/50 to-white">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop&q=80"
            alt=""
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gray-300"></div>
        
        <div className="absolute inset-0 flex items-center pl-14 pr-8 relative z-10">
          <div className="max-w-4xl">
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fadeInUp" style={{animationDelay: '200ms'}}>
              关于<span className="text-gray-900">正奇</span>咨询
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-800 mb-10 font-semibold animate-fadeInUp" style={{animationDelay: '400ms'}}>
              深耕莆田鞋服产业的精益管理专家
            </p>
            
            <div className="flex gap-6 flex-wrap mt-12 animate-fadeInUp" style={{animationDelay: '600ms'}}>
              <span className="bg-white/95 backdrop-blur-sm px-7 py-3.5 rounded-full text-gray-900 text-lg font-bold border-3 border-gray-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"><span className="text-2xl mr-2">📅</span>2016年成立</span>
              <span className="bg-white/95 backdrop-blur-sm px-7 py-3.5 rounded-full text-gray-900 text-lg font-bold border-3 border-gray-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"><span className="text-2xl mr-2">⏳</span>10年行业深耕</span>
              <span className="bg-white/95 backdrop-blur-sm px-7 py-3.5 rounded-full text-gray-900 text-lg font-bold border-3 border-gray-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"><span className="text-2xl mr-2">👥</span>团队经验19.8年</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/90 to-transparent"></div>
      </section>

      {/* 内容区 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div className="animate-fadeInLeft">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">公司简介</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg md:text-xl">
                <p>
                  莆田市正奇企业管理咨询有限公司成立于2016年，是一家专注于鞋服制造业的精益管理咨询公司。
                </p>
                <p>
                  我们深耕莆田/晋江鞋服产业链，团队成员来自丰泰、宝成、万邦等国内外一线企业，平均从业经验19.8年。
                </p>
                <p>
                  公司秉承“实战落地、效果导向”的服务理念，已成功服务超过200家制造型企业。
                </p>
              </div>
            </div>
            
            <div className="relative animate-fadeInRight group overflow-hidden rounded-3xl">
              <Image 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&q=80"
                alt=""
                width={800}
                height={600}
                className="rounded-3xl shadow-2xl border-4 border-gray-100 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            </div>
          </div>

          <div className="relative mb-16 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-sky-50 to-slate-50 p-6 shadow-xl md:p-10 lg:p-12">
            <div className="absolute left-8 top-8 h-28 w-28 rounded-full bg-sky-200/30 blur-3xl"></div>
            <div className="absolute bottom-6 right-10 h-32 w-32 rounded-full bg-cyan-200/30 blur-3xl"></div>

            <div className="relative mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="mb-3 inline-flex rounded-full bg-white px-4 py-1.5 text-sm font-bold text-sky-700 shadow-sm ring-1 ring-sky-100">
                  Core Strengths
                </span>
                <h3 className="text-3xl font-bold text-gray-900 md:text-4xl">核心优势</h3>
              </div>
              <p className="max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
                围绕鞋服制造现场的真实问题，把行业经验、专家方法和陪跑落地能力整合成可执行的改善路径。
              </p>
            </div>

            <div className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {coreAdvantages.map((item, i) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/80 bg-white/90 p-6 shadow-lg shadow-slate-200/60 transition-all duration-500 hover:-translate-y-2 hover:border-sky-200 hover:shadow-2xl hover:shadow-sky-100 animate-scaleIn"
                  style={{ animationDelay: `${i * 140}ms` }}
                >
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.accent}`}></div>
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div className={`relative grid h-24 w-24 place-items-center rounded-[1.35rem] bg-gradient-to-br ${item.accent} text-white shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1`}>
                      <span className="absolute inset-0 rounded-[1.35rem] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.42),transparent_38%)]"></span>
                      <span className="absolute -inset-2 rounded-[1.7rem] border border-slate-200/80 opacity-0 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"></span>
                      <span className="relative drop-shadow-sm transition-transform duration-500 group-hover:scale-110">{item.icon}</span>
                    </div>
                    <span className="text-4xl font-black text-slate-100 transition-colors duration-500 group-hover:text-sky-100">
                      0{i + 1}
                    </span>
                  </div>

                  <h4 className="mb-2 text-2xl font-bold text-gray-900">{item.title}</h4>
                  <p className="mb-4 text-lg font-bold text-sky-600">{item.desc}</p>
                  <p className="min-h-[4.5rem] text-base leading-relaxed text-slate-600">{item.note}</p>

                  <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${item.accent} transition-all duration-700 ease-out group-hover:w-full`}
                      style={{ width: `${68 + i * 8}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-12 md:p-16 text-center shadow-xl border border-gray-100 animate-fadeInUp">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">想要了解更多？</h3>
            <p className="mb-10 text-xl text-gray-600">联系我们获取详细的公司介绍和成功案例</p>
            <Link href="/contact" className="inline-block px-10 py-4 bg-gray-900 text-white rounded-xl font-bold text-xl hover:bg-gray-800 transition transform hover:scale-105 shadow-xl">
              联系我们 →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
