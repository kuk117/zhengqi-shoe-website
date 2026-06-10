'use client';

import Link from 'next/link';
import Image from 'next/image';
import BottomCTA from './components/BottomCTA';

export default function Home() {
  const paths = [
    {
      title: '现场诊断',
      desc: '从订单结构、瓶颈工序、品质波动和交付风险入手，把感受型问题转成清单。',
      icon: (
        <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" aria-hidden="true">
          <path d="M10 12h28v24H10z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
          <path d="M16 20h16M16 27h9M31 31l6 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: '路径排布',
      desc: '把改善动作拆成负责人、时间表、验证指标和复盘节点，让团队知道下一步怎么做。',
      icon: (
        <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" aria-hidden="true">
          <path d="M12 14h8v8h-8zM28 14h8v8h-8zM12 30h8v8h-8zM28 30h8v8h-8z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
          <path d="M20 18h8M16 22v8M32 22v8M20 34h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: '陪跑复盘',
      desc: '围绕订单表现、现场效率和经营结果复盘，保留有效做法，沉淀为管理机制。',
      icon: (
        <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" aria-hidden="true">
          <path d="M12 36V14M22 36V24M32 36V10M40 39H8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M12 18c6 8 14 11 25 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="section-flow relative overflow-hidden bg-[linear-gradient(135deg,#f8fafc_0%,#eef8ff_44%,#ffffff_100%)]">
        <div className="container mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-6 py-16 md:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-12">
          <div className="relative z-10 max-w-3xl animate-hero-copy">
            <h1 className="text-balance text-4xl font-black leading-tight text-slate-950 md:text-6xl">
              从一张诊断表开始，重排鞋厂增长节奏
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-600 md:text-xl">
              用清晰的现场诊断和陪跑机制，把交付、效率、成本和团队协作里的关键问题拆开、排清、追到底。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="group inline-flex items-center justify-center rounded-lg bg-slate-950 px-8 py-4 text-base font-black text-white shadow-lg shadow-slate-200 transition duration-300 hover:-translate-y-1 hover:bg-cyan-700">
                预约诊断
                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-8 py-4 text-base font-black text-slate-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:text-cyan-700">
                查看改善路径
              </Link>
            </div>
          </div>

          <div className="relative animate-drift-in">
            <div className="relative h-[370px] overflow-hidden rounded-lg border border-white bg-white shadow-2xl shadow-sky-100 md:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1000&h=1200&fit=crop&q=80"
                alt="鞋企经营诊断讨论"
                fill
                className="object-cover transition duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/38 via-transparent to-white/5" />
              <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-full bg-white/88 px-4 py-3 text-slate-900 shadow-lg shadow-slate-900/10 backdrop-blur">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-500 shadow-[0_0_0_6px_rgba(6,182,212,0.16)]" />
                <span className="text-sm font-black">诊断清单 · 现场复盘 · 改善追踪</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-flow bg-white py-20 md:py-24">
        <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="mb-12 max-w-3xl animate-rise-soft">
            <h2 className="text-balance text-3xl font-black leading-tight text-slate-950 md:text-4xl">
              不是展示口号，而是展示一次改善如何发生
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {paths.map((item, i) => (
              <div
                key={item.title}
                className="group animate-cascade rounded-lg border border-slate-200 bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-200"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="mb-8 grid h-16 w-16 place-items-center rounded-lg bg-slate-950 text-white transition duration-300 group-hover:-translate-y-1 group-hover:bg-cyan-700">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-flow overflow-hidden bg-slate-50 py-20 md:py-24">
        <div className="container mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div className="relative animate-drift-in overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl shadow-slate-200">
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1000&h=780&fit=crop&q=80"
              alt="经营复盘会议"
              width={1000}
              height={780}
              className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
          <div className="animate-rise-soft">
            <h2 className="text-balance text-3xl font-black leading-tight text-slate-950 md:text-4xl">
              适合先从哪一类问题切入？
            </h2>
            <p className="mt-6 text-pretty text-lg leading-9 text-slate-600">
              如果企业还没确定要做完整项目，可以先从交付、效率、利润三个入口做轻量判断，再决定后续方案深度。
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ['订单', '交期预警'],
                ['现场', '效率追踪'],
                ['成本', '利润复盘'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-200">
                  <div className="text-2xl font-black text-slate-950">{value}</div>
                  <div className="mt-2 text-sm font-bold text-slate-500">{label}</div>
                </div>
              ))}
            </div>
            <Link href="/cases" className="group mt-8 inline-flex items-center rounded-lg bg-cyan-700 px-7 py-3.5 text-base font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-slate-950">
              查看改善成果
              <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      <BottomCTA
        title="先从一个最卡的环节开始，把改善做成闭环"
        description="首页收口不再重复服务列表，而是引导访客把当前最影响经营结果的问题说清楚，形成第一次诊断入口。"
        backgroundImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1800&h=900&fit=crop&q=80"
        cards={[
          {
            label: '交付卡点',
            text: '识别计划、物料和产线节拍中的延误源头。',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=460&fit=crop&q=80',
          },
          {
            label: '现场节奏',
            text: '把效率波动转成班组能跟进的日常指标。',
            image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&h=460&fit=crop&q=80',
          },
          {
            label: '经营复盘',
            text: '让改善结果回到成本、利润和团队协同。',
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=460&fit=crop&q=80',
          },
        ]}
      />
    </div>
  );
}
