'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const dashboardItems = [
    { value: '订单', label: '交期预警', tone: 'bg-sky-50 text-sky-700' },
    { value: '现场', label: '效率追踪', tone: 'bg-teal-50 text-teal-700' },
    { value: '成本', label: '利润复盘', tone: 'bg-amber-50 text-amber-700' },
  ];

  const paths = [
    {
      title: '先看问题',
      desc: '用现场走查和数据访谈，找出交付、效率、品质、成本里的关键堵点。',
    },
    {
      title: '再排路径',
      desc: '把改善动作拆成负责人、时间表和验证指标，让团队知道下一步怎么做。',
    },
    {
      title: '最后复盘',
      desc: '围绕订单表现和经营结果复盘，保留有效做法，沉淀为管理机制。',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f8fafc_0%,#eef8ff_52%,#ffffff_100%)]">
        <div className="container mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-6 py-16 md:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-12">
          <div className="relative z-10 max-w-3xl animate-fadeInUp">
            <h1 className="mb-6 animate-fadeInUp text-4xl font-black leading-tight text-slate-950 md:text-5xl" style={{ animationDelay: '80ms' }}>
              从一张诊断表开始，重排鞋厂增长节奏
            </h1>
            <p className="mb-9 max-w-2xl animate-fadeInUp text-lg leading-8 text-slate-600 md:text-xl" style={{ animationDelay: '200ms' }}>
              用更清晰的诊断路径，把交付、效率、成本和团队协作里的关键问题逐步拆开、排清、追到底。
            </p>
            <div className="flex animate-fadeInUp flex-col gap-3 sm:flex-row" style={{ animationDelay: '320ms' }}>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center rounded-lg bg-sky-600 px-8 py-4 text-base font-black text-white shadow-lg shadow-sky-100 transition duration-300 hover:-translate-y-1 hover:bg-sky-700 hover:shadow-xl hover:shadow-sky-200"
              >
                预约诊断
                <span className="ml-3 text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-8 py-4 text-base font-black text-slate-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:text-sky-700 hover:shadow-lg hover:shadow-slate-100"
              >
                看改善路径
              </Link>
            </div>
          </div>

          <div className="relative animate-fadeInRight">
            <div className="relative h-[360px] animate-scaleIn overflow-hidden rounded-lg border border-white bg-white shadow-2xl shadow-sky-100 md:h-[470px]" style={{ animationDelay: '180ms' }}>
              <Image
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1000&h=1200&fit=crop&q=80"
                alt="鞋企经营诊断讨论"
                fill
                className="object-cover transition duration-700 hover:scale-105"
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/5 to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5 animate-fadeInUp rounded-lg border border-white/80 bg-white/90 p-5 text-slate-900 shadow-xl shadow-slate-200/70 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white md:bottom-6 md:left-6 md:right-6 md:p-6" style={{ animationDelay: '520ms' }}>
                <p className="text-sm font-bold text-sky-700">现场问题，经营语言表达</p>
                <p className="mt-2 max-w-md text-2xl font-black leading-snug">把“感觉不顺”变成可追踪的改善任务。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="mb-12 max-w-3xl animate-fadeInUp">
            <h2 className="text-3xl font-black leading-tight text-slate-950 md:text-4xl">
              不是展示口号，而是展示一次改善如何发生
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {paths.map((item, i) => (
              <div
                key={item.title}
                className="group animate-scaleIn rounded-lg border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl hover:shadow-slate-200"
                style={{ animationDelay: `${i * 130}ms` }}
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-lg bg-white text-lg font-black text-sky-700 shadow-sm transition duration-300 group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-slate-50 py-20 md:py-24">
        <div className="container mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
          <div className="relative animate-fadeInLeft">
            <div className="relative animate-scaleIn overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl shadow-slate-200" style={{ animationDelay: '120ms' }}>
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1000&h=780&fit=crop&q=80"
                alt="经营复盘会议"
                width={1000}
                height={780}
                className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>
          <div className="animate-fadeInRight">
            <h2 className="mb-6 animate-fadeInUp text-3xl font-black leading-tight text-slate-950 md:text-4xl" style={{ animationDelay: '120ms' }}>
              适合先从哪一类问题切入？
            </h2>
            <p className="mb-8 animate-fadeInUp text-lg leading-9 text-slate-600" style={{ animationDelay: '240ms' }}>
              如果企业还没确定要做完整项目，可以先从交付、效率、利润三个入口做轻量判断，再决定后续方案深度。
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {dashboardItems.map((item, i) => (
                <div
                  key={item.label}
                  className={`animate-scaleIn rounded-lg p-5 transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-lg ${item.tone}`}
                  style={{ animationDelay: `${320 + i * 120}ms` }}
                >
                  <div className="text-2xl font-black">{item.value}</div>
                  <div className="mt-2 text-sm font-bold">{item.label}</div>
                </div>
              ))}
            </div>
            <Link
              href="/cases"
              className="group mt-8 inline-flex animate-fadeInUp items-center rounded-lg bg-sky-600 px-7 py-3.5 text-base font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-sky-700 hover:shadow-lg hover:shadow-sky-100"
              style={{ animationDelay: '620ms' }}
            >
              查看改善成果
              <span className="ml-3 text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
