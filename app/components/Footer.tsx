import Link from 'next/link';

const quickLinks = [
  { name: '关于正奇', path: '/about' },
  { name: '咨询服务', path: '/services' },
  { name: '案例成果', path: '/cases' },
  { name: '联系咨询', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#d9e6df] bg-white">
      <div className="container-page py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_0.9fr]">
          <div>
            <Link href="/" className="group mb-5 flex items-center gap-3">
              <span className="brand-mark">正</span>
              <span>
                <span className="block text-xl font-black text-[#17231f]">莆田正奇鞋业咨询</span>
                <span className="text-sm font-semibold text-[#64746e]">鞋厂管理改善与经营升级顾问</span>
              </span>
            </Link>
            <p className="max-w-xl text-sm leading-7 text-[#5d6d67]">
              聚焦鞋业制造现场，围绕交付、效率、品质、成本和团队协作提供诊断、方案、陪跑与复盘服务。
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-base font-black text-[#17231f]">快速导航</h2>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link className="text-sm font-semibold text-[#5d6d67] transition hover:text-[#0f766e]" href={link.path}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-base font-black text-[#17231f]">联系信息</h2>
            <ul className="space-y-3 text-sm leading-6 text-[#5d6d67]">
              <li>福建省莆田市荔城区</li>
              <li>400-XXX-XXXX</li>
              <li className="break-all">contact@zhengqi-shoe.com</li>
              <li>工作日 24 小时内回复</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[#d9e6df] pt-6 text-sm text-[#708078] md:flex-row md:items-center md:justify-between">
          <p>© 2026 莆田正奇鞋业咨询 版权所有</p>
          <p>所有咨询建议以现场诊断和双方确认的项目方案为准。</p>
        </div>
      </div>
    </footer>
  );
}
