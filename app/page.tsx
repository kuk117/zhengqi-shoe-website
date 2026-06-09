'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const stats = [
    { value: '10年', label: '行业深耕' },
    { value: '98.6%', label: '项目通过率' },
    { value: '200+', label: '服务企业' },
  ];

  const services = [
    {
      title: '精益制造 1.0',
      subtitle: '让订单更可控',
      detail: '围绕厂房布局、流水优化、目视化管理，提升现场效率。',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=480&fit=crop&q=80',
    },
    {
      title: '敏捷制造 2.0',
      subtitle: '让团队更好管',
      detail: '打通计划配套、效率追踪、异常响应，减少管理盲区。',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=480&fit=crop&q=80',
    },
    {
      title: '利润制造 3.0',
      subtitle: '让经营更清晰',
      detail: '建立快反机制、定价优化与成本管控，提升利润质量。',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&h=480&fit=crop&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_48%,#e0f2fe_100%)]">
        <div className="container mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-6 py-16 md:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-12">
          <div className="relative z-10 max-w-3xl">
            <div className="mb-6 inline-flex rounded-full border border-sky-100 bg-white/80 px-5 py-2 text-sm font-semibold text-sky-700 shadow-sm">
              莆田鞋服制造升级咨询
            </div>
            <h1 className="mb-6 text-4xl font-black leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              正奇咨询，专注鞋企精益增长
            </h1>
            <p className="mb-10 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              深耕莆田与晋江鞋服产业链，把一线制造经验转化为可落地的订单、效率、成本和利润改善方案。
            </p>

            <div className="mb-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-8 py-4 text-base font-bold text-white shadow-xl shadow-slate-200 transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                预约免费诊断
                <span className="ml-3 text-xl">→</span>
              </Link>
              <Link
                href="/cases"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-8 py-4 text-base font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:text-sky-700"
              >
                查看成功案例
              </Link>
            </div>

            <div className="grid max-w-2xl grid-cols-3 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              {stats.map((stat) => (
                <div key={stat.label} className="border-r border-slate-100 px-4 py-5 last:border-r-0 md:px-6">
                  <div className="text-2xl font-black text-slate-900 md:text-3xl">{stat.value}</div>
                  <div className="mt-1 text-sm font-medium text-slate-500 md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[360px] overflow-hidden rounded-lg border border-white bg-white shadow-2xl shadow-sky-100 md:h-[460px]">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=1100&fit=crop&q=80"
              alt="鞋企咨询会议现场"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
              <p className="text-sm font-semibold text-sky-100">从现场到经营，陪跑落地</p>
              <p className="mt-2 max-w-md text-2xl font-bold leading-snug">让改善方案真正进入排产、成本和团队管理。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div className="relative overflow-hidden rounded-lg border border-slate-100 shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&h=700&fit=crop&q=80"
              alt="企业管理咨询讨论"
              width={900}
              height={700}
              className="aspect-[4/3] w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
          <div>
            <p className="mb-4 text-base font-bold text-sky-600">公司介绍</p>
            <h2 className="mb-6 text-3xl font-black leading-tight text-slate-900 md:text-4xl lg:text-5xl">
              懂鞋业现场，也懂经营结果
            </h2>
            <p className="mb-8 text-lg leading-9 text-slate-600">
              莆田市正奇企业管理咨询有限公司深耕鞋服产业链，团队成员多来自丰泰、宝成、万邦、清禄、百丽、华坚等一线鞋服企业，平均从业年资约19.8年。
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-slate-50 p-5">
                <div className="text-lg font-bold text-slate-900">实战顾问团队</div>
                <p className="mt-2 text-sm leading-6 text-slate-500">以制造现场经验为基础，避免方案停留在纸面。</p>
              </div>
              <div className="rounded-lg bg-sky-50 p-5">
                <div className="text-lg font-bold text-slate-900">陪跑落地机制</div>
                <p className="mt-2 text-sm leading-6 text-slate-500">从诊断、方案到复盘，持续跟进关键指标变化。</p>
              </div>
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center rounded-lg bg-sky-600 px-7 py-3.5 text-base font-bold text-white transition hover:bg-sky-700"
            >
              深入了解正奇
              <span className="ml-3 text-xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-24">
        <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-base font-bold text-sky-600">服务体系</p>
              <h2 className="text-3xl font-black leading-tight text-slate-900 md:text-4xl lg:text-5xl">
                “4+1” 企业进化升级体系
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-600 md:text-lg">
              覆盖精益制造、敏捷制造、利润制造与数字化升级，并提供全程陪跑落地辅导。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                href="/services"
                className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-lg font-bold text-sky-600">{service.subtitle}</p>
                  <p className="mt-4 min-h-20 text-base leading-7 text-slate-500">{service.detail}</p>
                  <span className="mt-6 inline-flex items-center text-base font-bold text-slate-900">
                    了解详情
                    <span className="ml-2 transition group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-8 py-4 text-base font-bold text-slate-900 shadow-sm transition hover:border-sky-300 hover:text-sky-700"
            >
              查看完整五大体系
              <span className="ml-3 text-xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 py-20 text-white md:py-24">
        <Image
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&h=900&fit=crop&q=80"
          alt="企业会议空间"
          fill
          className="object-cover opacity-18"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-900/70"></div>
        <div className="container relative z-10 mx-auto grid max-w-7xl gap-10 px-6 md:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-12">
          <div>
            <p className="mb-4 text-base font-bold text-sky-300">制造升级从一次诊断开始</p>
            <h2 className="max-w-3xl text-3xl font-black leading-tight md:text-4xl lg:text-5xl">
              把问题讲清楚，把改善路径排出来
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              针对订单交付、现场效率、成本核算、团队协作等关键问题，先做一次免费公益诊断，再判断最适合的改善方案。
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/8 p-6 backdrop-blur md:p-8">
            <div className="mb-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-white/10 p-5">
                <div className="text-3xl font-black text-white">30分钟</div>
                <div className="mt-2 text-sm text-slate-300">初步沟通诊断</div>
              </div>
              <div className="rounded-lg bg-white/10 p-5">
                <div className="text-3xl font-black text-white">1份</div>
                <div className="mt-2 text-sm text-slate-300">改善建议方向</div>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex flex-1 items-center justify-center rounded-lg bg-sky-500 px-7 py-4 text-base font-black text-white transition hover:bg-sky-400"
              >
                免费咨询
                <span className="ml-3 text-xl">→</span>
              </Link>
              <Link
                href="/cases"
                className="inline-flex flex-1 items-center justify-center rounded-lg border border-white/20 bg-white px-7 py-4 text-base font-black text-slate-900 transition hover:bg-slate-100"
              >
                成功案例
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
