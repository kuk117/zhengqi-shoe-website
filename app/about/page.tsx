'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  const coreAdvantages = [
    {
      title: '行业专注',
      desc: '10年深耕鞋服产业',
      note: '熟悉莆田、晋江鞋服供应链、生产现场与管理痛点。',
      accent: 'from-blue-700 to-slate-900',
    },
    {
      title: '专家团队',
      desc: '平均19.8年经验',
      note: '成员来自丰泰、宝成、万邦等一线鞋服制造企业。',
      accent: 'from-teal-600 to-slate-800',
    },
    {
      title: '实战经验',
      desc: '服务200+企业',
      note: '以指标改善和落地验证为导向，覆盖订单、效率、品质、成本。',
      accent: 'from-amber-500 to-orange-700',
    },
    {
      title: '创新方法',
      desc: '“4+1”升级体系',
      note: '从精益、敏捷、利润、数字化到陪跑落地形成闭环。',
      accent: 'from-indigo-700 to-slate-950',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop&q=80"
          alt="企业咨询会议"
          fill
          className="object-cover opacity-28"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/45"></div>
        <div className="container relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-16 md:px-8 lg:px-12">
          <div className="max-w-4xl animate-fadeInUp">
            <p className="mb-5 inline-flex rounded-lg border border-white/15 bg-white/10 px-5 py-2 text-sm font-bold text-sky-100 backdrop-blur">
              关于正奇咨询
            </p>
            <h1 className="mb-6 text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
              深耕莆田鞋服产业的精益管理顾问
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
              我们把鞋服制造一线经验、经营数据和陪跑落地机制结合起来，帮助企业把改善真正落实到订单、现场、团队和利润。
            </p>
            <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
              <div className="animate-scaleIn rounded-lg border border-white/10 bg-white/10 p-5 backdrop-blur" style={{ animationDelay: '160ms' }}>
                <div className="text-2xl font-black">2016年</div>
                <div className="mt-1 text-sm text-slate-300">公司成立</div>
              </div>
              <div className="animate-scaleIn rounded-lg border border-white/10 bg-white/10 p-5 backdrop-blur" style={{ animationDelay: '280ms' }}>
                <div className="text-2xl font-black">10年</div>
                <div className="mt-1 text-sm text-slate-300">行业深耕</div>
              </div>
              <div className="animate-scaleIn rounded-lg border border-white/10 bg-white/10 p-5 backdrop-blur" style={{ animationDelay: '400ms' }}>
                <div className="text-2xl font-black">19.8年</div>
                <div className="mt-1 text-sm text-slate-300">团队平均经验</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="animate-fadeInLeft">
              <p className="mb-4 text-base font-bold text-sky-600">公司简介</p>
              <h2 className="mb-6 text-3xl font-black leading-tight text-slate-900 md:text-4xl">
                扎根产业现场，解决真实管理问题
              </h2>
              <div className="space-y-5 text-lg leading-9 text-slate-600">
                <p>
                  莆田市正奇企业管理咨询有限公司成立于2016年，是一家专注于鞋服制造业的精益管理咨询公司。
                </p>
                <p>
                  团队成员来自丰泰、宝成、万邦等国内外一线企业，熟悉从订单、排产、现场、品质到成本的完整管理链路。
                </p>
                <p>
                  公司坚持实战落地、效果导向，已服务超过200家制造型企业，持续帮助客户建立可复制的改善机制。
                </p>
              </div>
            </div>

            <div className="relative animate-fadeInRight overflow-hidden rounded-lg border border-slate-100 shadow-xl shadow-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&h=720&fit=crop&q=80"
                alt="正奇咨询团队讨论"
                width={900}
                height={720}
                className="aspect-[5/4] w-full object-cover transition duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/75 to-transparent p-6 text-white">
                <p className="text-xl font-bold">用一线经验推动企业升级</p>
                <p className="mt-2 text-sm text-slate-200">诊断、方案、陪跑、复盘，持续跟进改善结果。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-24">
        <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-base font-bold text-sky-600">核心优势</p>
              <h2 className="text-3xl font-black leading-tight text-slate-900 md:text-4xl">
                方法、团队和落地能力形成闭环
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-600 md:text-lg">
              围绕鞋服制造现场的真实问题，把行业经验、专家方法和陪跑落地能力整合成可执行的改善路径。
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {coreAdvantages.map((item, i) => (
              <div
                key={item.title}
                className="group relative animate-scaleIn overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${item.accent}`}></div>
                <div className="mb-8 flex items-start justify-between">
                  <div className={`grid h-14 w-14 place-items-center rounded-lg bg-gradient-to-br ${item.accent} text-lg font-black text-white`}>
                    {i + 1}
                  </div>
                  <span className="text-sm font-bold text-slate-300">0{i + 1}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900">{item.title}</h3>
                <p className="mt-3 text-lg font-bold text-sky-600">{item.desc}</p>
                <p className="mt-5 min-h-24 text-base leading-7 text-slate-600">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="grid animate-fadeInUp items-center gap-8 rounded-lg border border-slate-200 bg-[linear-gradient(135deg,#f8fafc_0%,#ffffff_50%,#e0f2fe_100%)] p-8 shadow-sm md:p-12 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-3 text-base font-bold text-sky-600">进一步沟通</p>
              <h2 className="text-3xl font-black text-slate-900 md:text-4xl">了解公司案例和诊断方式</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                如果企业正在面临交付、效率、成本或团队管理问题，可以先沟通现状，再判断是否适合进入诊断。
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-8 py-4 text-base font-black text-white shadow-lg shadow-slate-200 transition hover:bg-slate-800"
            >
              联系我们
              <span className="ml-3 text-xl">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
