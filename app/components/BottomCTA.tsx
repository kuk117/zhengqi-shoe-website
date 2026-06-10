import Image from 'next/image';
import Link from 'next/link';

type BottomCTAProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

const signals = [
  {
    label: '现场诊断',
    text: '把订单、产线、品质和成本问题先拆清楚。',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=460&fit=crop&q=80',
  },
  {
    label: '改善排程',
    text: '明确负责人、时间表、指标和复盘节奏。',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=460&fit=crop&q=80',
  },
  {
    label: '陪跑落地',
    text: '跟进执行过程，把有效动作沉淀成机制。',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=460&fit=crop&q=80',
  },
];

export default function BottomCTA({
  title = '把工厂问题整理成一份可执行的改善清单',
  description = '告诉我们企业规模、订单类型和当前最难推进的环节。正奇团队会先判断优先改善方向，再建议是否需要进入完整诊断。',
  primaryHref = '/contact',
  primaryLabel = '预约诊断',
  secondaryHref = '/services',
  secondaryLabel = '查看服务体系',
}: BottomCTAProps) {
  return (
    <section className="section-flow relative overflow-hidden bg-[linear-gradient(135deg,#f8fafc_0%,#ecfeff_42%,#f6f7f4_100%)] py-16 text-slate-950 md:py-20">
      <div className="absolute inset-0 opacity-80">
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1800&h=900&fit=crop&q=80"
          alt=""
          fill
          className="animate-kenburns object-cover opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,250,252,0.96)_0%,rgba(236,254,255,0.86)_48%,rgba(255,255,255,0.94)_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="animate-rise-soft">
            <h2 className="max-w-3xl text-balance text-3xl font-black leading-tight md:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-slate-600 md:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={primaryHref}
                className="group inline-flex items-center justify-center rounded-lg bg-slate-950 px-7 py-3.5 text-base font-black text-white shadow-lg shadow-slate-300/70 transition duration-300 hover:-translate-y-1 hover:bg-cyan-700 hover:shadow-xl active:scale-[0.98]"
              >
                {primaryLabel}
                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white/85 px-7 py-3.5 text-base font-black text-slate-800 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-white hover:text-cyan-800"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {signals.map((item, index) => (
              <article
                key={item.label}
                className="group animate-cascade overflow-hidden rounded-lg border border-white/80 bg-white/85 shadow-lg shadow-slate-200/70 backdrop-blur transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-100"
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 24vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-black text-slate-950">{item.label}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
