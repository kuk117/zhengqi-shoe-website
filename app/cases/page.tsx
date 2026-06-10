'use client';

import Image from 'next/image';
import BottomCTA from '../components/BottomCTA';

export default function CasesPage() {
  const cases = [
    {
      company: '大型运动品牌代工厂',
      result: '98.6%验货通过率',
      improvement: '从85%提升至98.6%',
      period: '6个月',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&h=680&fit=crop&q=80',
    },
    {
      company: '中型休闲鞋制造商',
      result: '生产效率提升40%',
      improvement: '降本增效15%',
      period: '8个月',
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=900&h=680&fit=crop&q=80',
    },
    {
      company: '出口贸易型鞋企',
      result: '交期达成率99%',
      improvement: '从75%提升至99%',
      period: '4个月',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&h=680&fit=crop&q=80',
    },
    {
      company: '新兴电商鞋类品牌',
      result: '库存周转提升3倍',
      improvement: '从60天降至20天',
      period: '6个月',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=900&h=680&fit=crop&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="section-flow relative overflow-hidden bg-[linear-gradient(135deg,#f8fafc_0%,#ecfeff_48%,#ffffff_100%)]">
        <div className="container mx-auto flex min-h-[420px] max-w-7xl items-center px-6 py-16 text-center md:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl animate-hero-copy">
            <h1 className="text-balance text-4xl font-black leading-tight text-slate-950 md:text-6xl">
              用真实经营结果验证改善价值
            </h1>
            <p className="mt-5 text-pretty text-lg leading-8 text-slate-600 md:text-xl">
              每个案例都围绕一个明确目标展开：交期、效率、品质、成本或库存周转。
            </p>
          </div>
        </div>
      </section>

      <section className="section-flow bg-white py-20 md:py-24">
        <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="grid gap-6 md:grid-cols-2">
            {cases.map((caseItem, i) => (
              <article
                key={caseItem.company}
                className="group animate-cascade overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-200"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={caseItem.image}
                    alt={caseItem.company}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
                  <h2 className="absolute bottom-5 left-5 right-5 text-xl font-black text-white md:text-2xl">
                    {caseItem.company}
                  </h2>
                </div>
                <div className="grid gap-3 p-6 sm:grid-cols-3">
                  <div className="rounded-lg bg-cyan-50 p-4">
                    <p className="text-xs font-bold text-slate-500">核心成果</p>
                    <p className="mt-2 text-lg font-black text-cyan-800">{caseItem.result}</p>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-4">
                    <p className="text-xs font-bold text-slate-500">改善幅度</p>
                    <p className="mt-2 text-base font-black text-slate-950">{caseItem.improvement}</p>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-4">
                    <p className="text-xs font-bold text-slate-500">项目周期</p>
                    <p className="mt-2 text-base font-black text-slate-950">{caseItem.period}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BottomCTA
        eyebrow="案例转化"
        title="你的现场问题，也可以先变成一份诊断清单"
        description="说明企业规模、订单结构和当前卡点，我们先判断最值得优先改善的方向，再匹配服务深度。"
        secondaryHref="/services"
        secondaryLabel="查看服务"
      />
    </div>
  );
}
