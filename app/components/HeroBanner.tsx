'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroBannerProps {
  title: string;
  subtitle: string;
  badge?: string;
  backgroundImage?: string;
  height?: string;
  showStats?: boolean;
  stats?: { value: string; label: string }[];
  ctaText?: string;
  ctaLink?: string;
}

export default function HeroBanner({
  title,
  subtitle,
  badge,
  backgroundImage,
  height = 'h-[60vh]',
  showStats = false,
  stats = [],
  ctaText,
  ctaLink = '/contact'
}: HeroBannerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 浮动粒子预设位置（避免hydration错误）
  const particles = [
    { left: '5%', top: '10%', size: 'w-3 h-3', delay: '0s', duration: '6s' },
    { left: '15%', top: '70%', size: 'w-2 h-2', delay: '1s', duration: '5s' },
    { left: '25%', top: '30%', size: 'w-4 h-4', delay: '2s', duration: '7s' },
    { left: '40%', top: '80%', size: 'w-2 h-2', delay: '0.5s', duration: '4.5s' },
    { left: '55%', top: '15%', size: 'w-3 h-3', delay: '1.5s', duration: '6.5s' },
    { left: '70%', top: '60%', size: 'w-2 h-2', delay: '2.5s', duration: '5.5s' },
    { left: '85%', top: '25%', size: 'w-4 h-4', delay: '0.8s', duration: '7.5s' },
    { left: '90%', top: '75%', size: 'w-2 h-2', delay: '1.8s', duration: '4.8s' },
    { left: '50%', top: '45%', size: 'w-3 h-3', delay: '3s', duration: '6.2s' }
  ];

  return (
    <section className={`relative ${height} overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600`}>
      {/* 背景图片层 */}
      {backgroundImage && (
        <div className="absolute inset-0 group">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover transition-transform duration-[4000ms] group-hover:scale-110"
            sizes="100vw"
            priority
          />
          {/* 深色遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/85 to-blue-900/90"></div>
        </div>
      )}

      {/* 动态光效背景 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 大型模糊光球 */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-32 -right-20 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl animate-pulse-slow"></div>

        {/* 网格纹理 */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>

        {/* 浮动粒子（只在客户端渲染） */}
        {mounted && particles.map((particle, i) => (
          <div
            key={i}
            className={`absolute ${particle.size} bg-white/15 rounded-full backdrop-blur-sm animate-float shadow-lg shadow-white/10`}
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration
            }}
          ></div>
        ))}
      </div>

      {/* 内容区域 */}
      <div className="absolute inset-0 flex items-center container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* 徽章标签 */}
          {badge && (
            <div className="animate-slideInLeft mb-6">
              <span className="inline-block px-6 py-2.5 bg-white/15 backdrop-blur-md text-white text-sm font-bold rounded-full border border-white/25 hover:bg-white/25 hover:border-white/40 transition-all cursor-default shadow-lg">
                {badge}
              </span>
            </div>
          )}

          {/* 主标题 */}
          <h1 
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight animate-fadeInUp"
            style={{animationDelay: '200ms'}}
          >
            {title}
          </h1>

          {/* 副标题 */}
          <p 
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed animate-fadeInUp"
            style={{animationDelay: '400ms'}}
          >
            {subtitle}
          </p>

          {/* 数据统计（可选） */}
          {showStats && stats.length > 0 && (
            <div 
              className="flex gap-6 flex-wrap mb-8 animate-fadeInUp"
              style={{animationDelay: '600ms'}}
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/12 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105 shadow-lg"
                  style={{animationDelay: (i + 3) * 150 + 'ms'}}
                >
                  <div className="text-3xl font-black text-yellow-300">{stat.value}</div>
                  <div className="text-sm text-blue-100 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* CTA按钮 */}
          {ctaText && (
            <div 
              className="flex gap-4 flex-wrap animate-fadeInUp"
              style={{animationDelay: '800ms'}}
            >
              <Link
                href={ctaLink}
                className="group relative px-10 py-4 bg-white text-blue-700 rounded-xl font-bold text-lg overflow-hidden transition-all transform hover:scale-105 shadow-2xl hover:shadow-3xl inline-flex items-center gap-2"
              >
                <span className="relative z-10">{ctaText}</span>
                <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* 底部渐变遮罩 */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
