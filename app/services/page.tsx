'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ServicesPage() {
  const serviceList = [
    {
      num: '01',
      icon: '🏭',
      title: '精益制造 1.0',
      subtitle: '订单可控',
      color: 'from-blue-600 to-blue-700',
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=1200&h=600&fit=crop&q=80',
      points: ['厂房布局优化', '流水线平衡', '目视化管理', '配套体系建设'],
      desc: '打造高效有序的生产现场',
      fullWidth: false
    },
    {
      num: '02',
      icon: '⚡',
      title: '敏捷制造 2.0',
      subtitle: '团队可管',
      color: 'from-cyan-600 to-teal-700',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&q=80',
      points: ['iMES系统导入', '计划配套体系', '效率追踪机制', '实时报工系统'],
      desc: '数字化管理平台透明化',
      fullWidth: false
    },
    {
      num: '03',
      icon: '💰',
      title: '利润制造 3.0',
      subtitle: '经营可视',
      color: 'from-green-600 to-emerald-700',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop&q=80',
      points: ['快反机制建立', '定价策略优化', '绩效考核激励', '成本精细管控'],
      desc: '全流程利润创造优化',
      fullWidth: false
    },
    {
      num: '04',
      icon: '💻',
      title: '数字化转型 4.0',
      subtitle: '数据驱动',
      color: 'from-indigo-600 to-blue-700',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&q=80',
      points: ['数据中台搭建', '生产数据看板', '全链路采集', '智能分析预警'],
      desc: '用数据驱动工厂科学决策',
      fullWidth: false
    },
    {
      num: '05',
      icon: '🤝',
      title: '陪跑落地服务',
      subtitle: '持续改进',
      color: 'from-orange-600 to-red-700',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=600&fit=crop&q=80',
      points: ['驻厂辅导支持', '问题快速响应', '效果跟踪验证', '知识转移培训'],
      desc: '长期陪伴式驻厂落地，全周期持续改善保障，专属顾问一对一跟进，落地效果可量化验证',
      fullWidth: true // 标记为通栏卡片
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* 顶部Banner 尺寸不变 */}
      <section className="relative h-[50vh] min-h-[420px] overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.4) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,.4) 2px, transparent 2px)',
              backgroundSize: '50px 50px'
            }}
          ></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-10 px-6">
          <div className="text-center max-w-4xl">
            <h1
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg animate-fadeInUp"
            >
              "4+1" 企业进化升级体系
            </h1>
            <p
              className="text-xl md:text-2xl text-white/95 font-medium animate-fadeInUp"
              style={{ animationDelay: '250ms' }}
            >
              精益 · 敏捷 · 利润 · 数字化 · 陪跑落地
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 via-gray-50/70 via-white/30 to-transparent"></div>
      </section>

      {/* 卡片区块：前4张两列，第5张整行通栏，卡片单张宽度完全不变 */}
      <section className="-mt-16 py-20 bg-gray-50">
        <div className="container mx-auto px-0 max-w-[100vw]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10">
            {serviceList.map((service, i) => (
              <div
                key={i}
                className={`w-full bg-white shadow-lg rounded-xl overflow-hidden
                hover:shadow-2xl hover:-translate-y-2
                active:scale-[0.97] active:shadow-md
                transition-all duration-300 cursor-pointer animate-scaleIn
                ${service.fullWidth ? 'md:col-span-2' : ''}`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {/* 顶部图块：通栏卡片加高一点，丰富视觉；普通卡片高度不变 */}
                <div className={`relative overflow-hidden flex items-center justify-center
                ${service.fullWidth ? 'h-56' : 'h-40'}
                bg-gradient-to-r ${service.color}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover opacity-30"
                    sizes={service.fullWidth ? "100vw" : "(max-width:768px) 100vw, 50vw"}
                  />
                  <div className="absolute inset-0 flex items-center justify-center gap-6">
                    <span className="text-6xl drop-shadow-lg">{service.icon}</span>
                    <span className="text-white font-black text-4xl drop-shadow-lg">{service.num}</span>
                  </div>
                </div>

                <div className={`p-7 ${service.fullWidth ? 'px-10 py-8' : ''}`}>
                  <span className={`inline-block px-4 py-1.5 bg-gradient-to-r ${service.color} text-white text-sm font-bold rounded-full mb-3 shadow-sm`}>
                    {service.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-base text-gray-600 mb-5">{service.desc}</p>

                  {/* 通栏卡片4个点改为一行横向铺开，更丰富大气；普通卡片保持2列不变 */}
                  <div className={`gap-3
                  ${service.fullWidth ? 'grid grid-cols-4' : 'grid grid-cols-2'}`}>
                    {service.points.map((point, j) => (
                      <div
                        key={j}
                        className="w-full bg-gray-50 rounded-lg px-3 py-3 text-center hover:bg-blue-50 transition-colors duration-300 border border-gray-200"
                      >
                        <p className="text-sm font-medium text-gray-800">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white rounded-xl font-bold text-lg hover:from-blue-800 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 active:scale-[0.96] shadow-xl animate-pulse-slow"
            >
              📞 咨询具体方案 →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}