import Link from 'next/link';

export default function Footer() {
  const quickLinks = [
    { name: '关于我们', path: '/about' },
    { name: '咨询服务', path: '/services' },
    { name: '成功案例', path: '/cases' },
    { name: '联系我们', path: '/contact' },
  ];

  const socialLinks = [
    { label: '微信', text: '微' },
    { label: '视频号', text: '视' },
    { label: '抖音', text: '抖' },
  ];

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-slate-200 bg-white py-12 text-slate-800">
      <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.7fr_0.8fr]">
          <div>
            <Link href="/" className="group mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-950 text-xl font-black text-white shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:bg-cyan-700">
                正
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-950">莆田正奇鞋业咨询</h3>
                <p className="text-sm font-semibold text-slate-500">鞋业管理咨询与制造升级</p>
              </div>
            </Link>
            <p className="max-w-xl text-sm leading-7 text-slate-600">
              深耕鞋服制造现场，围绕交付、效率、品质、成本和团队协作提供诊断、方案、陪跑与复盘服务。
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <button
                  key={social.label}
                  title={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-sm font-black text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
                >
                  {social.text}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-base font-black text-slate-950">快速导航</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition duration-300 hover:translate-x-1 hover:text-cyan-700"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 transition-all group-hover:w-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-base font-black text-slate-950">联系方式</h4>
            <ul className="space-y-3 text-sm leading-6 text-slate-600">
              <li>福建省莆田市荔城区</li>
              <li>400-XXX-XXXX</li>
              <li className="break-all">contact@zhengqi-shoe.com</li>
              <li>微信：zhengqi_shoe</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 莆田正奇鞋业咨询 版权所有</p>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-cyan-700">隐私政策</a>
            <a href="#" className="transition-colors hover:text-cyan-700">服务条款</a>
            <a href="#" className="transition-colors hover:text-cyan-700">网站地图</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
