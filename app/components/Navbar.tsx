'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  { name: '首页', path: '/' },
  { name: '关于正奇', path: '/about' },
  { name: '咨询服务', path: '/services' },
  { name: '案例成果', path: '/cases' },
  { name: '联系咨询', path: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-nav ${scrolled ? 'site-nav-solid' : ''}`}>
      <div className="container-page flex h-16 items-center justify-between md:h-[72px]">
        <Link href="/" className="group flex items-center gap-3" aria-label="莆田正奇首页">
          <span className="brand-mark">正</span>
          <span className="leading-tight">
            <span className="block text-base font-black text-[#17231f] md:text-[17px]">莆田正奇</span>
            <span className="block text-[11px] font-semibold text-[#64746e]">鞋业咨询</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="主导航">
          {navItems.map((item) => {
            const active = pathname === item.path;
            return (
              <Link key={item.path} href={item.path} className={`nav-link ${active ? 'nav-link-active' : ''}`}>
                {item.name}
              </Link>
            );
          })}
        </nav>

        <Link href="/contact" className="btn-primary btn-compact hidden md:inline-flex">
          预约诊断
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </header>
  );
}
