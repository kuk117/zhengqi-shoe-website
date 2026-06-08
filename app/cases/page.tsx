'use client';

import React from 'react';
import Image from 'next/image';

export default function CasesPage() {
  const cases = [
    {
      company: '某大型运动品牌代工厂',
      result: '98.6%验货通过率',
      improvement: '从85%提升至98.6%',
      period: '6个月',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop&q=80'
    },
    {
      company: '中型休闲鞋制造商',
      result: '降本增效15%',
      improvement: '生产效率提升40%',
      period: '8个月',
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=600&fit=crop&q=80'
    },
    {
      company: '高端皮鞋定制企业',
      result: '0客诉记录',
      improvement: '质量事故归零',
      period: '12个月',
      image: 'https://ts3.tc.mm.bing.net/th/id/OIP-C.EQZFXYWXWMCp2Vdsxx_4FQHaHa?r=0&cb=thfc1falcon2&rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    {
      company: '出口贸易型鞋企',
      result: '交期达成率99%',
      improvement: '从75%提升至99%',
      period: '4个月',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&q=80'
    },
    {
      company: '新兴电商鞋类品牌',
      result: '库存周转提升3倍',
      improvement: '从60天降至20天',
      period: '6个月',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop&q=80'
    },
    {
      company: '传统老牌制鞋厂',
      result: '能耗降低15%',
      improvement: '绿色制造转型',
      period: '10个月',
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&h=600&fit=crop&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 顶部蓝色横幅：加高高度，文字彻底下沉，远离顶部 */}
      <section className="relative h-[55vh] min-h-[460px] overflow-hidden bg-gradient-to-b from-blue-50 via-blue-100/50 to-white">
        {/* 网格背景层 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* 垂直靠底部对齐，超大下内边距 pb-36，文字整体下移 */}
        <div className="absolute inset-0 flex items-center px-12 lg:px-16 relative z-10" style={{paddingTop: '8rem'}}>
          <div className="max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6  animate-fadeInUp">
              成功<span className="text-yellow-300">案例</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-900/95 font-semibold animate-fadeInUp" style={{ animationDelay: '200ms' }}>
              真实客户成果，数据说话
            </p>
          </div>
        </div>
        
        {/* 底部渐变过渡，柔和衔接下方白色区块 */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/90 to-transparent"></div>
      </section>

      {/* 案例卡片区域 无改动 */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {cases.map((caseItem, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden group animate-scaleIn" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <Image 
                    src={caseItem.image} 
                    alt={caseItem.company}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-gray-900">
                    <h3 className="text-lg md:text-xl font-bold ">{caseItem.company}</h3>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b-2 border-gray-100">
                    <span className="text-sm font-semibold text-gray-700">核心成果：</span>
                    <span className="text-base font-black bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">{caseItem.result}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-700">改善幅度：</span>
                    <span className="text-sm font-bold text-blue-600">{caseItem.improvement}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-sm font-semibold text-gray-700">项目周期：</span>
                    <span className="text-sm font-bold text-gray-900">{caseItem.period}</span>
                  </div>
                  <button className="w-full mt-4 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 font-bold rounded-lg hover:from-blue-100 hover:to-cyan-100 transition-all border-2 border-blue-200 hover:border-blue-400">
                    查看详情 →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 底部咨询模块 */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl shadow-xl p-10 md:p-14 border-4 border-blue-100 inline-block max-w-2xl animate-fadeInUp" style={{ animationDelay: '600ms' }}>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">想成为下一个成功案例？</h3>
              <p className="text-lg text-gray-700 mb-8">免费预约专家诊断，获取专属改善方案</p>
              <a href="/contact" className="inline-block px-10 py-4 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-gray-900 rounded-xl font-bold text-lg hover:from-blue-800 hover:to-cyan-600 transition transform hover:scale-105 shadow-xl">
                📞 免费咨询 →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



