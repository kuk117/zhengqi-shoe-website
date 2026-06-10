'use client';

import Image from 'next/image';
import BottomCTA from '../components/BottomCTA';

export default function AboutPage() {
  const advantages = [
    ['行业专注', '长期服务鞋服制造现场，理解订单、排产、品质和成本之间的真实牵引关系。'],
    ['专家团队', '团队成员具备一线制造企业管理经验，能把方法转成现场能执行的动作。'],
    ['实战落地', '以指标改善和过程复盘为导向，不停留在报告和口号。'],
    ['陪跑机制', '从诊断、方案、辅导到复盘形成闭环，帮助企业沉淀自己的管理能力。'],
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="section-flow relative overflow-hidden bg-[linear-gradient(135deg,#f8fafc_0%,#edf7fb_55%,#ffffff_100%)]">
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop&q=80"
          alt="企业咨询会议"
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
        <div className="container relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-16 md:px-8 lg:px-12">
          <div className="max-w-4xl animate-hero-copy">
            <h1 className="text-balance text-4xl font-black leading-tight text-slate-950 md:text-6xl">
              深耕鞋服制造现场的管理顾问团队
            </h1>
            <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-slate-600 md:text-xl">
              我们把一线经验、经营数据和陪跑落地机制结合起来，帮助企业把改善落实到订单、现场、团队和利润。
            </p>
          </div>
        </div>
      </section>

      <section className="section-flow bg-white py-20 md:py-24">
        <div className="container mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
          <div className="animate-rise-soft">
            <h2 className="text-balance text-3xl font-black leading-tight text-slate-950 md:text-4xl">
              扎根产业现场，解决真实管理问题
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-9 text-slate-600">
              <p>莆田正奇专注于鞋服制造企业管理改善，服务对象覆盖鞋厂老板、经营管理团队和 footwear 品牌客户。</p>
              <p>我们关注的不是单点工具，而是从订单、计划、现场、品质到成本的完整管理链路。</p>
              <p>每一次合作都以可验证的改善结果为目标，帮助团队形成能持续运行的管理机制。</p>
            </div>
          </div>

          <div className="relative animate-drift-in overflow-hidden rounded-lg border border-slate-200 shadow-xl shadow-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&h=720&fit=crop&q=80"
              alt="正奇咨询团队讨论"
              width={900}
              height={720}
              className="aspect-[5/4] w-full object-cover transition duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/80 to-transparent p-6 text-white">
              <p className="text-xl font-black">用一线经验推动企业升级</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">诊断、方案、陪跑、复盘，持续跟进改善结果。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-flow bg-slate-50 py-20 md:py-24">
        <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="mb-12 max-w-3xl animate-rise-soft">
            <h2 className="text-balance text-3xl font-black leading-tight text-slate-950 md:text-4xl">
              方法、团队和落地能力形成闭环
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {advantages.map(([title, desc], i) => (
              <div key={title} className="group animate-cascade rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-200" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="mb-8 grid h-12 w-12 place-items-center rounded-lg bg-slate-950 text-sm font-black text-white transition duration-300 group-hover:bg-cyan-700">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-black text-slate-950">{title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BottomCTA
        eyebrow="了解我们如何开始"
        title="先判断问题，再决定项目深度"
        description="如果你正在面对交付延期、效率波动、成本压力或团队协作问题，可以先沟通现状，让顾问判断最值得优先改善的入口。"
      />
    </div>
  );
}
