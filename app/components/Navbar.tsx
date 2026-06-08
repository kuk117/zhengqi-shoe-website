'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: '首页', path: '/' },
    { name: '关于我们', path: '/about' },
    { name: '咨询服务', path: '/services' },
    { name: '成功案例', path: '/cases' },
    { name: '联系我们', path: '/contact' },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm fixed w-full z-40 top-0 transition-all duration-300 border-b border-blue-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-blue-300 transition-all duration-300 group-hover:scale-110">
            正
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-gradient-blue leading-tight">莆田正奇</h1>
            <p className="text-xs text-gray-500 -mt-0.5">鞋业咨询</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 group ${
                pathname === item.path
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'
              }`}
            >
              <span className="mr-1.5"></span>
              {item.name}
              {pathname === item.path && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-blue-600 rounded-full"></span>
              )}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 btn-primary rounded-lg text-sm font-semibold shadow-lg hover:shadow-blue-300"
        >
          免费咨询
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </nav>
  );
}



