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
    { label: '微博', text: '博' },
    { label: '抖音', text: '抖' },
  ];

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-slate-200 bg-[linear-gradient(135deg,#f8fafc_0%,#ffffff_48%,#e0f2fe_100%)] pt-14 pb-8 text-slate-800">
      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="group mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-600 text-2xl font-black text-white shadow-lg shadow-sky-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-sky-700">
                正
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900">莆田正奇鞋业咨询</h3>
                <p className="text-sm font-medium text-slate-500">鞋业管理咨询与制造升级</p>
              </div>
            </Link>

            <p className="mb-7 max-w-lg text-sm leading-relaxed text-slate-600">
              深耕鞋业产业9年，用专业数据与策略，赋能每一位客户。
              致力于成为鞋业最值得信赖的战略合作伙伴。
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <button
                  key={i}
                  title={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-sm font-black text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:text-sky-700 hover:shadow-lg hover:shadow-slate-100"
                >
                  {social.text}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-black text-slate-900">快速链接</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-all duration-300 hover:translate-x-1 hover:text-sky-700"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-500 transition-all group-hover:w-3"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-black text-slate-900">联系方式</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="group flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500 transition-transform group-hover:scale-125"></span>
                <span>福建省莆田市<br />XX区XX路XX号</span>
              </li>
              <li className="group flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-sky-500 transition-transform group-hover:scale-125"></span>
                <span className="transition-colors group-hover:text-sky-700">400-XXX-XXXX</span>
              </li>
              <li className="group flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-sky-500 transition-transform group-hover:scale-125"></span>
                <span className="break-all transition-colors group-hover:text-sky-700">contact@zhengqi-shoe.com</span>
              </li>
              <li className="group flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-sky-500 transition-transform group-hover:scale-125"></span>
                <span className="transition-colors group-hover:text-sky-700">微信：zhengqi_shoe</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-7 md:flex-row">
          <p className="text-sm text-slate-500">
            © 2024 莆田正奇鞋业咨询 版权所有 · 闽ICP备XXXXXXXX号
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="transition-colors duration-300 hover:text-sky-700">隐私政策</a>
            <a href="#" className="transition-colors duration-300 hover:text-sky-700">服务条款</a>
            <a href="#" className="transition-colors duration-300 hover:text-sky-700">网站地图</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
