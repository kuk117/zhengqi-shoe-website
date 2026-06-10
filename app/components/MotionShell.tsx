'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function MotionShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      setProgress((scrollTop / max) * 100);

      document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((item) => {
        const speed = Number(item.dataset.parallax || 0.08);
        const rect = item.getBoundingClientRect();
        const offset = (window.innerHeight / 2 - rect.top) * speed;
        item.style.transform = `translate3d(0, ${offset}px, 0) scale(1.04)`;
      });
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [pathname]);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('.reveal-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    );

    items.forEach((item, index) => {
      item.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 90}ms`);
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <div key={pathname} className="page-transition">
        {children}
      </div>
    </>
  );
}
