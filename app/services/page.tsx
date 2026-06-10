import Image from 'next/image';
import Link from 'next/link';
import BottomCTA from '../components/BottomCTA';

const services = [
  {
    title: '现场诊断',
    subtitle: '先把问题拆清楚',
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1400&q=80',
    points: ['订单结构梳理', '产线节拍观察', '品质异常追踪', '成本压力判断'],
    text: '适合还没有明确项目范围的企业。先看影响经营结果的关键卡点，形成可讨论的诊断清单。',
  },
  {
    title: '改善方案',
    subtitle: '把动作排成路线图',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
    points: ['改善优先级', '责任人分工', '时间表安排', '验证指标设计'],
    text: '把目标拆成阶段动作，明确谁来做、什么时候做、做到什么程度、用什么数据复盘。',
  },
  {
    title: '陪跑落地',
    subtitle: '让方案进入日常执行',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80',
    points: ['驻厂辅导', '异常处理', '例会机制', '团队训练'],
    text: '顾问跟进执行过程，帮助企业处理真实阻力，把有效做法沉淀成管理机制。',
  },
  {
    title: '经营复盘',
    subtitle: '用结果验证改善价值',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80',
    points: ['交付复盘', '效率复盘', '成本复盘', '利润复盘'],
    text: '把改善动作回到经营数据，判断哪些继续保留，哪些需要调整，哪些可以复制到其他产线。',
  },
];

const routes = [
  ['交付改善', '适合订单延期、计划变更频繁、物料齐套不稳的企业。'],
  ['效率改善', '适合瓶颈工序明显、班组节拍不稳、现场执行弱的企业。'],
  ['成本改善', '适合返工、损耗、报价和利润核算压力较大的企业。'],
  ['数字化建议', '适合已有管理基础，希望通过看板和数据闭环提升响应速度的企业。'],
];

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-[#f7faf8] py-20 md:py-24">
        <div className="container-page text-center">
          <h1 className="hero-title mx-auto max-w-5xl text-[#17231f]">从诊断到陪跑，按企业当前阶段选择切入点</h1>
          <p className="hero-copy mx-auto mt-7">
            正奇不要求企业一开始就做完整项目。可以先从交付、效率、成本或团队协作中的一个高影响问题切入。
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="service-card soft-card hover-lift reveal-on-scroll overflow-hidden">
              <div className="image-hover relative h-60 overflow-hidden">
                <Image src={service.image} alt={`${service.title}服务场景`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="p-7">
                <p className="text-sm font-bold text-[#0f766e]">{service.subtitle}</p>
                <h2 className="mt-2 text-2xl font-black text-[#17231f]">{service.title}</h2>
                <p className="mt-4 leading-8 text-[#5d6d67]">{service.text}</p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {service.points.map((point) => (
                    <span key={point} className="service-chip rounded-lg bg-[#edf7f3] px-3 py-2 text-center text-sm font-bold text-[#31534b]">
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad bg-[#edf7f3]">
        <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="reveal-on-scroll">
            <h2 className="section-title">常见切入路径</h2>
            <p className="section-copy mt-5">企业可以根据当前最影响经营结果的问题选择入口。正奇会在初步沟通后判断是否需要调整方向。</p>
            <Link href="/contact" className="btn-primary mt-8">
              <span>咨询适合路径</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="grid gap-4">
            {routes.map(([title, text]) => (
              <div key={title} className="list-line reveal-on-scroll rounded-lg border border-[#cfe3da] bg-white p-6 pl-7">
                <h3 className="text-xl font-black text-[#17231f]">{title}</h3>
                <p className="mt-3 leading-7 text-[#5d6d67]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BottomCTA
        title="不确定从哪项服务开始？先做问题分层"
        description="说明企业规模、订单结构和管理卡点，正奇会判断适合从诊断、方案、陪跑还是经营复盘切入。"
        secondaryHref="/cases"
        secondaryLabel="查看案例成果"
      />
    </div>
  );
}
