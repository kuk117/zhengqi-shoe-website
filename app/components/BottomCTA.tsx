import Link from 'next/link';

type BottomCTAProps = {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function BottomCTA({
  title = '先把最影响经营结果的问题讲清楚',
  description = '留下企业规模、订单类型和当前卡点。正奇顾问会先判断优先改善方向，再建议是否进入完整诊断。',
  primaryHref = '/contact',
  primaryLabel = '预约初步诊断',
  secondaryHref = '/services',
  secondaryLabel = '查看服务体系',
}: BottomCTAProps) {
  return (
    <section className="bg-[#e8f5ef] py-16 md:py-20">
      <div className="container-page">
        <div className="soft-card reveal-on-scroll grid gap-8 p-7 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="max-w-3xl text-balance text-3xl font-black leading-tight text-[#17231f] md:text-4xl">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5d6d67] md:text-lg">{description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href={primaryHref} className="btn-primary">
              <span>{primaryLabel}</span>
              <span aria-hidden="true">→</span>
            </Link>
            <Link href={secondaryHref} className="btn-secondary">
              <span>{secondaryLabel}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
