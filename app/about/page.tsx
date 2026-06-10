import Image from 'next/image';
import BottomCTA from '../components/BottomCTA';

const principles = [
  ['扎根现场', '从订单、计划、产线、品质、成本和团队协作看问题，不只看汇报材料。'],
  ['先做排序', '把问题按经营影响、紧急程度和落地难度分层，避免一上来铺开太多动作。'],
  ['陪跑执行', '方案不是终点，顾问会围绕执行过程跟进异常、复盘数据、训练团队。'],
  ['沉淀机制', '把有效动作变成企业自己的例会、看板、检查和复盘节奏。'],
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-[#f7faf8] py-20 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="reveal-soft">
            <h1 className="hero-title text-[#17231f]">专注鞋业制造现场的管理顾问团队</h1>
            <p className="hero-copy mt-7">
              正奇服务鞋厂老板、经营管理者和鞋类品牌客户。我们关注的不是单点工具，而是从订单到交付、从现场到利润的完整管理链路。
            </p>
          </div>
          <div className="static-image relative min-h-[410px]">
            <Image
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80"
              alt="顾问团队在会议室梳理鞋厂改善方向"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="reveal-on-scroll">
            <h2 className="section-title">管理改善必须能回到经营结果</h2>
          </div>
          <div className="reveal-on-scroll space-y-5 text-lg leading-9 text-[#5d6d67]">
            <p>鞋业制造企业的问题往往互相牵连：交期不稳背后可能是计划、物料、品质、产线节拍和跨部门协作共同造成。</p>
            <p>正奇的工作方式是先诊断，再排序，再落地。我们会帮助企业把感受型问题变成可讨论的清单，把模糊目标变成可复盘的指标。</p>
            <p>最终目标不是让企业依赖顾问，而是让团队形成可以持续运行的管理机制。</p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#edf7f3]">
        <div className="container-page">
          <h2 className="section-title reveal-on-scroll">正奇的服务原则</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {principles.map(([title, text]) => (
              <article key={title} className="dynamic-card soft-card reveal-on-scroll p-7">
                <h3 className="text-xl font-black text-[#17231f]">{title}</h3>
                <p className="mt-4 text-base leading-7 text-[#5d6d67]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BottomCTA
        title="先判断问题，再决定项目深度"
        description="如果企业正在面对交付延期、效率波动、成本压力或团队协作问题，可以先沟通现状，让顾问判断最值得优先改善的入口。"
      />
    </div>
  );
}
