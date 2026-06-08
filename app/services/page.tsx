'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ServicesPage() {
  const serviceList = [
    {
      num: '01',
      title: '精益制造 1.0',
      subtitle: '订单可控',
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=1200&h=600&fit=crop&q=80',
      points: ['厂房布局优化', '流水线平衡', '目视化管理', '配套体系建设'],
      desc: '打造高效有序的生产现场',
      fullWidth: false
    },
    {
      num: '02',
      title: '敏捷制造 2.0',
      subtitle: '团队可管',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&q=80',
      points: ['iMES系统导入', '计划配套体系', '效率追踪机制', '实时报工系统'],
      desc: '数字化管理平台透明化',
      fullWidth: false
    },
    {
      num: '03',
      title: '利润制造 3.0',
      subtitle: '经营可视',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop&q=80',
      points: ['快反机制建立', '定价策略优化', '绩效考核激励', '成本精细管控'],
      desc: '全流程利润创造优化',
      fullWidth: false
    },
    {
      num: '04',
      title: '数字化转型 4.0',
      subtitle: '数据驱动',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&q=80',
      points: ['数据中台搭建', '生产数据看板', '全链路采集', '智能分析预警'],
      desc: '用数据驱动工厂科学决策',
      fullWidth: false
    },
    {
      num: '05',
      title: '陪跑落地服务',
      subtitle: '持续改进',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=600&fit=crop&q=80',
      points: ['驻厂辅导支持', '问题快速响应', '效果跟踪验证', '知识转移培训'],
      desc: '长期陪伴式驻厂落地，全周期持续改善保障，专属顾问一对一跟进，落地效果可量化验证',
      fullWidth: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 顶部Banner 改为浅蓝色渐变 */}
      <section className="relative h-[40vh] min-h-[340px] overflow-hidden bg-gradient-to-b from-blue-50 via-blue-100/50 to-white">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          ></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-10 px-6">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 animate-fadeInUp">
              "4+1" 企业进化升级体系
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-semibold animate-fadeInUp" style={{animationDelay: '200ms'}}>
              精益 · 敏捷 · 利润 · 数字化 · 陪跑落地
            </p>
            <p className="text-base text-gray-500 mt-3 animate-fadeInUp" style={{animationDelay: '400ms'}}>
              为莆田鞋服企业量身定制的全链路管理解决方案
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* 服务卡片区域 */}
      <section className="-mt-10 pb-24 pt-8">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {serviceList.map((service) => (
              <div
                key={service.num}
                className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 group
                ${service.fullWidth ? 'md:col-span-2 grid md:grid-cols-2' : ''}`}
              >
                {/* 图片区域：增加缩放动态效果 */}
                <div className={`relative overflow-hidden ${service.fullWidth ? 'h-full min-h-[260px]' : 'h-36'}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes={service.fullWidth ? "50vw" : "(max-width:768px) 100vw, 50vw"}
                  />
                  {/* 遮罩改为浅蓝调，告别死黑 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/30 to-transparent flex items-end p-6">
                    <span className="text-gray-900 font-bold text-3xl opacity-90">{service.num}</span>
                  </div>
                </div>

                {/* 文字内容区 */}
                <div className={`p-6 lg:p-8 flex flex-col justify-center ${service.fullWidth ? 'lg:px-12' : ''}`}>
                  {/* 标签用浅蓝点缀，不杂乱 */}
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded mb-3 w-fit">
                    {service.subtitle}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.desc}</p>

                  {/* 亮点标签 */}
                  <div className={`grid gap-3
                  ${service.fullWidth ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-2'}`}>
                    {service.points.map((point) => (
                      <div
                        key={point}
                        className="bg-slate-50 rounded px-3 py-2 text-center border border-slate-100 hover:bg-blue-50 transition-colors duration-300"
                      >
                        <p className="text-sm text-slate-700">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 底部按钮用深灰色 */}
          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors shadow-md"
            >
              咨询具体方案
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}