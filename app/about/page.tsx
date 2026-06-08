'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 首栏 38vh - 统一深蓝渐变 */}
      <section className="relative h-[48vh] min-h-[420px] overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop&q=80"
            alt=""
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-yellow-400 via-orange-400 to-red-400"></div>
        
        <div className="absolute inset-0 flex items-center pl-14 pr-8 relative z-10">
          <div className="max-w-4xl">
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 drop-shadow-lg animate-fadeInUp" style={{animationDelay: '200ms'}}>
              关于<span className="text-orange-500">正奇</span>咨询
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-800 mb-10 font-semibold animate-fadeInUp" style={{animationDelay: '400ms'}}>
              深耕莆田鞋服产业的精益管理专家
            </p>
            
            <div className="flex gap-6 flex-wrap mt-12 animate-fadeInUp" style={{animationDelay: '600ms'}}>
              <span className="bg-white/95 backdrop-blur-sm px-7 py-3.5 rounded-full text-gray-900 text-lg font-bold border-3 border-gray-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"><span className="text-2xl mr-2">📅</span>2016年成立</span>
              <span className="bg-white/95 backdrop-blur-sm px-7 py-3.5 rounded-full text-gray-900 text-lg font-bold border-3 border-gray-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"><span className="text-2xl mr-2">⏳</span>10年行业深耕</span>
              <span className="bg-white/95 backdrop-blur-sm px-7 py-3.5 rounded-full text-gray-900 text-lg font-bold border-3 border-gray-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"><span className="text-2xl mr-2">👥</span>团队经验19.8年</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/90 to-transparent"></div>
      </section>

      {/* 内容区 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div className="animate-fadeInLeft">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">公司简介</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg md:text-xl">
                <p>
                  莆田市正奇企业管理咨询有限公司成立于2016年，是一家专注于鞋服制造业的精益管理咨询公司。
                </p>
                <p>
                  我们深耕莆田/晋江鞋服产业链，团队成员来自丰泰、宝成、万邦等国内外一线企业，平均从业经验19.8年。
                </p>
                <p>
                  公司秉承"实战落地、效果导向"的服务理念，已成功服务超过200家制造型企业。
                </p>
              </div>
            </div>
            
            <div className="relative animate-fadeInRight">
              <Image 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&q=80"
                alt=""
                width={800}
                height={600}
                className="rounded-3xl shadow-2xl border-4 border-gray-100 w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl shadow-xl p-12 md:p-16 border-4 border-blue-100 mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">核心优势</h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: '🎯', title: '行业专注', desc: '10年深耕鞋服产业' },
                { icon: '👥', title: '专家团队', desc: '平均19.8年经验' },
                { icon: '📊', title: '实战经验', desc: '服务200+企业' },
                { icon: '💡', title: '创新方法', desc: '"4+1"升级体系' }
              ].map((item, i) => (
                <div key={i} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:shadow-xl transition-all hover:-translate-y-2 animate-scaleIn" style={{animationDelay: `${i * 150}ms`}}>
                  <div className="text-6xl mb-4">{item.icon}</div>
                  <h4 className="font-bold text-gray-900 text-xl mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-lg font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white rounded-3xl p-12 md:p-16 text-center shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">想要了解更多？</h3>
            <p className="mb-10 text-xl text-blue-100">联系我们获取详细的公司介绍和成功案例</p>
            <Link href="/contact" className="inline-block px-10 py-4 bg-white text-blue-700 rounded-xl font-bold text-xl hover:bg-blue-50 transition transform hover:scale-105 shadow-xl animate-pulse-slow">
              📞 联系我们 →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


