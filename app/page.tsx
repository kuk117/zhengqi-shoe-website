import Image from 'next/image';
import Link from 'next/link';
import BottomCTA from './components/BottomCTA';
import CounterAnimation from './components/CounterAnimation';

const focusItems = [
  ['交付不稳', '拆解订单计划、物料齐套、产线节拍和异常响应，先找到延期的真实来源。'],
  ['效率波动', '用现场观察和数据复盘识别瓶颈工序，让班组知道每天该盯哪些指标。'],
  ['成本看不清', '把返工、损耗、报价、库存和利润表连起来，判断哪里最值得优先改善。'],
  ['团队难协同', '明确负责人、时间表、复盘节点和检查标准，让改善从会议进入日常动作。'],
];

const steps = [
  ['现场诊断', '访谈老板和关键岗位，走产线，看订单、品质、成本和协作现状。'],
  ['改善排序', '把问题按经营影响和落地难度分层，确认先做哪一个入口。'],
  ['陪跑落地', '跟进执行、处理异常、训练团队，把方法留在企业内部。'],
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#f7faf8]">
        <div className="container-page grid min-h-[680px] items-center gap-12 py-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="reveal-soft">
            <h1 className="hero-title text-[#17231f]">让鞋厂改善从一张诊断清单开始</h1>
            <p className="hero-copy mt-7">
              莆田正奇面向鞋厂老板、经营管理团队和鞋类品牌客户，围绕交付、效率、品质、成本和团队协作做现场诊断、方案设计与陪跑落地。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                <span>预约初步诊断</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/services" className="btn-secondary">
                <span>查看改善路径</span>
              </Link>
            </div>
          </div>

          <div className="image-lift reveal-up relative min-h-[420px] lg:min-h-[540px]">
            <Image
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80"
              alt="顾问团队围绕鞋厂经营问题讨论改善方案"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-lg bg-white/94 p-5 shadow-xl">
              <p className="text-sm font-bold text-[#0f766e]">适合先判断的问题</p>
              <p className="mt-2 text-lg font-black text-[#17231f] md:text-xl">
                交期、效率、品质、成本、库存、团队协作
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="reveal-on-scroll mb-11 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <h2 className="section-title">客户找到正奇，通常不是为了听概念</h2>
            <p className="section-copy">
              他们需要知道问题卡在哪里，先改什么，谁负责，多久复盘，以及结果如何验证。
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {focusItems.map(([title, text]) => (
              <article key={title} className="dynamic-card soft-card reveal-on-scroll p-6">
                <h3 className="text-xl font-black text-[#17231f]">{title}</h3>
                <p className="mt-4 text-base leading-7 text-[#5d6d67]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#edf7f3] py-12">
        <div className="container-page grid gap-4 md:grid-cols-3">
          {[
            ['9', '年鞋业现场经验沉淀'],
            ['4', '类高频经营卡点'],
            ['24', '小时内初步响应'],
          ].map(([value, label]) => (
            <div key={label} className="soft-card stat-pulse reveal-on-scroll p-6 text-center">
              <div className="text-4xl font-black text-[#0f766e]">
                <CounterAnimation end={Number(value)} suffix={value === '24' ? 'h' : '+'} />
              </div>
              <p className="mt-2 text-sm font-bold text-[#5d6d67]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-[#f7faf8]">
        <div className="container-page grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="image-lift reveal-on-scroll relative min-h-[350px]">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80"
              alt="管理顾问与企业负责人复盘项目计划"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 46vw"
            />
          </div>
          <div className="reveal-on-scroll">
            <h2 className="section-title">把改善做成一条可跟进的工作线</h2>
            <p className="section-copy mt-5">
              正奇不把报告当终点。每个项目都要落到负责人、时间表、指标、异常处理和阶段复盘上，帮助企业沉淀自己的管理能力。
            </p>
            <div className="mt-8 space-y-4">
              {steps.map(([title, text]) => (
                <div key={title} className="list-line grid gap-3 rounded-lg border border-[#cfe3da] bg-white p-5 pl-6 md:grid-cols-[140px_1fr]">
                  <h3 className="text-lg font-black text-[#0f766e]">{title}</h3>
                  <p className="leading-7 text-[#5d6d67]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BottomCTA />
    </div>
  );
}
