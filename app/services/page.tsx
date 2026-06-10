'use client';

import Link from 'next/link';
import Image from 'next/image';
import BottomCTA from '../components/BottomCTA';

export default function ServicesPage() {
  const serviceList = [
    {
      title: '精益制造 1.0',
      subtitle: '订单可控',
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=1200&h=760&fit=crop&q=80',
      points: ['厂房布局优化', '流水线平衡', '目视化管理', '配套体系建设'],
      desc: '先把现场秩序和节拍稳定下来，让交付问题有数据可追。',
    },
    {
      title: '敏捷制造 2.0',
      subtitle: '团队可管',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=760&fit=crop&q=80',
      points: ['计划配套体系', '效率追踪机制', '实时报工系统', '异常响应机制'],
      desc: '建立透明的计划与执行节奏，让管理动作更快反馈到现场。',
    },
    {
      title: '利润制造 3.0',
      subtitle: '经营可视',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=760&fit=crop&q=80',
      points: ['定价策略优化', '绩效考核激励', '成本精细管控', '利润复盘机制'],
      desc: '把效率、损耗、返工和报价连到利润表，帮助老板看清经营结果。',
    },
    {
      title: '数字化转型 4.0',
      subtitle: '数据驱动',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=760&fit=crop&q=80',
      points: ['生产数据看板', '全链路采集', '智能分析预警', '经营驾驶舱'],
      desc: '围绕真实管理问题导入数据工具，避免为数字化而数字化。',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="section-flow relative overflow-hidden bg-[linear-gradient(135deg,#f8fafc_0%,#ecfeff_48%,#ffffff_100%)]">
        <div className="container mx-auto flex min-h-[420px] max-w-7xl items-center px-6 py-16 text-center md:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl animate-hero-copy">
            <h1 className="text-balance text-4xl font-black leading-tight text-slate-950 md:text-6xl">
              “4+1” 企业进化升级体系
            </h1>
            <p className="mt-5 text-pretty text-lg leading-8 text-slate-600 md:text-xl">
              精益、敏捷、利润、数字化与陪跑落地，按企业当前阶段选择切入点。
            </p>
          </div>
        </div>
      </section>

      <section className="section-flow bg-white pb-20 pt-20 md:pb-24 md:pt-24">
        <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="grid gap-6 md:grid-cols-2">
            {serviceList.map((service, i) => (
              <article
                key={service.title}
                className="group animate-cascade overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-200"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 rounded-lg bg-white/95 px-4 py-2 text-sm font-black text-cyan-700 shadow-lg">
                    {service.subtitle}
                  </div>
                </div>
                <div className="p-6 lg:p-8">
                  <h2 className="text-2xl font-black text-slate-950">{service.title}</h2>
                  <p className="mt-3 text-base leading-7 text-slate-600">{service.desc}</p>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {service.points.map((point) => (
                      <div key={point} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-center text-sm font-semibold text-slate-700 transition group-hover:border-cyan-100 group-hover:bg-cyan-50">
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 grid overflow-hidden rounded-lg border border-cyan-100 bg-[linear-gradient(135deg,#f8fafc_0%,#ecfeff_55%,#ffffff_100%)] text-slate-950 shadow-xl shadow-slate-200/70 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[280px]">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=760&fit=crop&q=80"
                alt="顾问陪跑落地服务"
                fill
                className="object-cover transition duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/65" />
            </div>
            <div className="p-8 md:p-10 lg:p-12">
              <h2 className="text-balance text-3xl font-black leading-tight md:text-4xl">
                方案不是终点，落地才是改善的开始
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                专属顾问跟进现场执行，持续处理异常、验证数据、训练团队，让改善从一次项目变成企业自己的工作方式。
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {['驻厂辅导', '异常响应', '数据复盘'].map((item) => (
                  <div key={item} className="rounded-lg border border-cyan-100 bg-white/80 px-4 py-3 text-center text-sm font-black text-cyan-800 shadow-sm backdrop-blur">
                    {item}
                  </div>
                ))}
              </div>
              <Link href="/contact" className="mt-8 inline-flex rounded-lg bg-slate-950 px-7 py-3.5 font-black text-white transition hover:-translate-y-1 hover:bg-cyan-700">
                咨询具体方案
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BottomCTA
        title="不确定该从哪一阶段开始？先做一次问题分层"
        description="我们会根据企业规模、订单结构和管理痛点判断适合从精益、敏捷、利润、数字化或陪跑落地哪一层切入。"
        secondaryHref="/cases"
        secondaryLabel="查看案例结果"
        backgroundImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1800&h=900&fit=crop&q=80"
        cards={[
          {
            label: '精益入口',
            text: '适合现场秩序、产线节拍和交付稳定性问题。',
            image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&h=460&fit=crop&q=80',
          },
          {
            label: '利润入口',
            text: '适合报价、损耗、返工和成本核算不清。',
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=460&fit=crop&q=80',
          },
          {
            label: '数字入口',
            text: '适合已经有管理基础，需要看板和数据闭环。',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=460&fit=crop&q=80',
          },
        ]}
      />
    </div>
  );
}
