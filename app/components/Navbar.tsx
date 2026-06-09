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
    <nav className="fixed top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-lg font-bold text-white shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-sky-700">
            正
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-black leading-tight text-slate-900">莆田正奇</h1>
            <p className="-mt-0.5 text-xs font-medium text-slate-500">鞋业咨询</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`relative rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                pathname === item.path
                  ? 'bg-sky-50 text-sky-700'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {item.name}
              {pathname === item.path && (
                <span className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-sky-600"></span>
              )}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-700 md:inline-flex"
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





