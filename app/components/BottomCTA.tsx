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
    label: '先做现场诊断',
    text: '梳理订单、产线、品质和成本的关键卡点。',
    icon: (
      <svg viewBox="0 0 48 48" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M10 12h28v24H10z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="M16 19h16M16 26h10M32 30l5 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: '再定改善路径',
    text: '把优先级、负责人、周期和验证指标排清楚。',
    icon: (
      <svg viewBox="0 0 48 48" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M12 14h8v8h-8zM28 26h8v8h-8z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="M20 18h12M32 18v8M18 30h10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: '落地后复盘',
    text: '用数据确认改善结果，沉淀成可复制机制。',
    icon: (
      <svg viewBox="0 0 48 48" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M12 36V14M22 36V24M32 36V10M39 39H9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M12 20c7 8 15 10 25 3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function BottomCTA({
  eyebrow = '下一步',
  title = '把工厂问题整理成一份可执行的改善清单',
  description = '告诉我们企业规模、订单类型和当前最难推进的环节。正奇团队会先判断优先改善方向，再建议是否需要进入完整诊断。',
  primaryHref = '/contact',
  primaryLabel = '预约诊断',
  secondaryHref = '/services',
  secondaryLabel = '查看服务体系',
}: BottomCTAProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 text-white md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(14,165,233,0.18),transparent_34%),radial-gradient(circle_at_86%_20%,rgba(20,184,166,0.14),transparent_30%),linear-gradient(135deg,#020617_0%,#0f172a_48%,#111827_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="animate-rise-soft">
            <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold text-cyan-100">
              {eyebrow}
            </p>
            <h2 className="max-w-3xl text-balance text-3xl font-black leading-tight md:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-slate-300 md:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={primaryHref}
                className="group inline-flex items-center justify-center rounded-lg bg-cyan-400 px-7 py-3.5 text-base font-black text-slate-950 shadow-lg shadow-cyan-950/30 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
              >
                {primaryLabel}
                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/8 px-7 py-3.5 text-base font-black text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-200/60 hover:bg-white/12"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:gap-4">
            {signals.map((item, index) => (
              <div
                key={item.label}
                className="group animate-rise-soft rounded-lg border border-white/12 bg-white/[0.06] p-5 shadow-2xl shadow-slate-950/20 transition duration-300 hover:-translate-y-2 hover:border-cyan-200/40 hover:bg-white/[0.09]"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-cyan-300/12 text-cyan-200 ring-1 ring-cyan-200/20 transition duration-300 group-hover:scale-105 group-hover:bg-cyan-300/18">
                  {item.icon}
                </div>
                <h3 className="text-base font-black text-white">{item.label}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
