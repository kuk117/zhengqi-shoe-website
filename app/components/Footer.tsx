import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white pt-16 pb-8 mt-auto relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4xNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* 公司信息 */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110">
                正
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  莆田正奇鞋业咨询
                </h3>
                <p className="text-sm text-blue-300/70 tracking-wider">ZHENGQI SHOE CONSULTING</p>
              </div>
            </Link>
            
            <p className="text-blue-100/60 leading-relaxed mb-8 max-w-lg text-sm">
              深耕鞋业产业9年，用专业数据与策略，赋能每一位客户。
              致力于成为鞋业最值得信赖的战略合作伙伴。
            </p>

            {/* 社交媒体图标 - 使用 emoji */}
            <div className="flex gap-4">
              {[
                { icon: '💬', label: '微信', color: 'hover:bg-green-500/20' },
                { icon: '📱', label: '微博', color: 'hover:bg-red-500/20' },
                { icon: '🎵', label: '抖音', color: 'hover:bg-black/30' }
              ].map((social, i) => (
                <button
                  key={i}
                  title={social.label}
                  className={`w-12 h-12 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center text-xl transition-all duration-300 ${social.color} hover:scale-110 hover:border border-white/10`}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:to-transparent">
              快速链接
            </h4>
            <ul className="space-y-4">
              {[
                { name: '关于我们', path: '/about' },
                { name: '咨询服务', path: '/services' },
                { name: '成功案例', path: '/cases' },
                { name: '联系我们', path: '/contact' }
              ].map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.path} 
                    className="text-blue-200/60 hover:text-white transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:w-2.5 group-hover:bg-blue-400 transition-all"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系信息 */}
          <div>
            <h4 className="font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:to-transparent">
              联系方式
            </h4>
            <ul className="space-y-4 text-blue-200/60 text-sm">
              <li className="flex items-start gap-3 group">
                <span className="text-lg mt-0.5 group-hover:scale-125 transition-transform">📍</span>
                <span>福建省莆田市<br/>XX区XX路XX号</span>
              </li>
              <li className="flex items-center gap-3 group">
                <span className="text-lg group-hover:scale-125 transition-transform">📞</span>
                <span className="group-hover:text-white transition-colors">400-XXX-XXXX</span>
              </li>
              <li className="flex items-center gap-3 group">
                <span className="text-lg group-hover:scale-125 transition-transform">✉️</span>
                <span className="group-hover:text-white transition-colors break-all">contact@zhengqi-shoe.com</span>
              </li>
              <li className="flex items-center gap-3 group">
                <span className="text-lg group-hover:scale-125 transition-transform">💬</span>
                <span className="group-hover:text-white transition-colors">微信：zhengqi_shoe</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-blue-300/40">
            © 2024 莆田正奇鞋业咨询 版权所有 · 闽ICP备XXXXXXXX号
          </p>
          <div className="flex gap-6 text-sm text-blue-300/40">
            <a href="#" className="hover:text-white transition-colors duration-300">隐私政策</a>
            <span className="text-blue-500/30">·</span>
            <a href="#" className="hover:text-white transition-colors duration-300">服务条款</a>
            <span className="text-blue-500/30">·</span>
            <a href="#" className="hover:text-white transition-colors duration-300">网站地图</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

