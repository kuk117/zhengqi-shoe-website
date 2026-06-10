import Image from 'next/image';
import BottomCTA from '../components/BottomCTA';

const cases = [
  {
    company: '运动鞋代工型工厂',
    problem: '订单交期频繁被物料和产线节拍打断，异常响应靠人盯。',
    result: '建立交付预警表，明确计划、物料、生产三方复盘节奏。',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1300&q=80',
  },
  {
    company: '休闲鞋中型制造商',
    problem: '瓶颈工序不稳定，班组效率波动大，管理层难以及时判断原因。',
    result: '围绕瓶颈工序建立日看板和班组复盘动作，减少反复沟通成本。',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1300&q=80',
  },
  {
    company: '出口贸易型鞋企',
    problem: '报价、返工、损耗和库存信息分散，利润压力难以被提前看见。',
    result: '把成本项和订单复盘连接起来，帮助老板识别优先降本入口。',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1300&q=80',
  },
  {
    company: '鞋类品牌供应链团队',
    problem: '品牌端希望提升供应商响应速度，但缺少共同语言和跟进机制。',
    result: '梳理供应商协作流程，让交付、品质和异常处理有固定复盘节点。',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1300&q=80',
  },
];

export default function CasesPage() {
  return (
    <div>
      <section className="bg-[#f7faf8] py-20 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="reveal-soft">
            <h1 className="hero-title text-[#17231f]">用经营问题来组织案例，而不是堆砌数字</h1>
            <p className="hero-copy mt-7">
              每个合作都从一个明确问题展开：交付、效率、品质、成本、库存或团队协作。案例数据需以项目现场记录为准。
            </p>
          </div>
          <div className="static-image relative min-h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=80"
              alt="企业经营复盘会议现场"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {cases.map((item) => (
            <article key={item.company} className="soft-card hover-lift reveal-on-scroll overflow-hidden">
              <div className="image-hover relative h-56 overflow-hidden">
                <Image src={item.image} alt={`${item.company}改善案例`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="p-7">
                <h2 className="text-2xl font-black text-[#17231f]">{item.company}</h2>
                <div className="mt-5 grid gap-4">
                  <div className="list-line rounded-lg p-4 pl-5">
                    <p className="text-sm font-bold text-[#0f766e]">原始问题</p>
                    <p className="mt-2 leading-7 text-[#5d6d67]">{item.problem}</p>
                  </div>
                  <div className="list-line rounded-lg p-4 pl-5">
                    <p className="text-sm font-bold text-[#0f766e]">改善方向</p>
                    <p className="mt-2 leading-7 text-[#5d6d67]">{item.result}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#edf7f3] py-14">
        <div className="container-page grid gap-4 text-center md:grid-cols-3">
          {['先确认问题边界', '再设计改善动作', '最后用复盘验证'].map((item) => (
            <div key={item} className="soft-card stat-pulse reveal-on-scroll p-6 text-lg font-black text-[#17231f] md:text-xl">
              {item}
            </div>
          ))}
        </div>
      </section>

      <BottomCTA
        title="你的现场问题，也可以先变成一份诊断清单"
        description="说明企业规模、订单结构和当前卡点，正奇会先判断最值得优先改善的方向，再匹配服务深度。"
        secondaryHref="/services"
        secondaryLabel="查看服务"
      />
    </div>
  );
}
