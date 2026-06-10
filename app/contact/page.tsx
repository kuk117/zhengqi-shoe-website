'use client';

import { useState } from 'react';
import Image from 'next/image';
import BottomCTA from '../components/BottomCTA';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });

  const contactMethods = [
    {
      title: '公司地址',
      content: '福建省莆田市荔城区',
      color: 'bg-cyan-50 text-cyan-700',
      icon: (
        <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" aria-hidden="true">
          <path d="M24 42s14-12.4 14-25A14 14 0 1 0 10 17c0 12.6 14 25 14 25Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
          <path d="M24 22a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" stroke="currentColor" strokeWidth="3" />
        </svg>
      ),
    },
    {
      title: '联系电话',
      content: '138-XXXX-XXXX',
      color: 'bg-slate-100 text-slate-800',
      icon: (
        <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" aria-hidden="true">
          <path d="M15 9h18a3 3 0 0 1 3 3v24a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3Z" stroke="currentColor" strokeWidth="3" />
          <path d="M21 34h6M20 14h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: '电子邮箱',
      content: 'contact@zhengqi-shoe.com',
      color: 'bg-teal-50 text-teal-700',
      icon: (
        <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" aria-hidden="true">
          <path d="M9 14h30v22H9z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
          <path d="m10 15 14 12 14-12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: '响应时间',
      content: '工作日 24 小时内回复',
      color: 'bg-amber-50 text-amber-700',
      icon: (
        <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" aria-hidden="true">
          <path d="M24 40a16 16 0 1 0 0-32 16 16 0 0 0 0 32Z" stroke="currentColor" strokeWidth="3" />
          <path d="M24 15v10l7 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('感谢您的留言！我们会尽快与您联系。');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f8fafc_0%,#ecfeff_48%,#ffffff_100%)]">
        <div className="container mx-auto grid min-h-[440px] max-w-7xl items-center gap-10 px-6 py-16 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
          <div className="animate-rise-soft">
            <p className="mb-5 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-cyan-700 shadow-sm">
              联系我们
            </p>
            <h1 className="text-balance text-4xl font-black leading-tight text-slate-950 md:text-6xl">
              先聊清楚问题，再决定怎么改善
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-slate-600 md:text-xl">
              说明企业规模、订单类型、当前卡点和期望目标。我们会先做初步判断，给出适合的沟通路径。
            </p>
          </div>

          <div className="relative animate-drift-in overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl shadow-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&h=760&fit=crop&q=80"
              alt="咨询团队沟通现场问题"
              width={1000}
              height={760}
              className="aspect-[4/3] w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="animate-rise-soft rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8 lg:p-10">
              <h2 className="text-2xl font-black text-slate-950 md:text-3xl">在线留言</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">
                请尽量描述当前最影响经营结果的问题，例如交期、效率、品质、库存或团队协作。
              </p>

              <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="您的姓名 *"
                    required
                    className="w-full rounded-lg border border-slate-200 px-5 py-3 text-base transition duration-300 placeholder:text-slate-500 hover:border-cyan-300 focus:border-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-100"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="公司名称"
                    className="w-full rounded-lg border border-slate-200 px-5 py-3 text-base transition duration-300 placeholder:text-slate-500 hover:border-cyan-300 focus:border-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-100"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="tel"
                    placeholder="联系电话 *"
                    required
                    className="w-full rounded-lg border border-slate-200 px-5 py-3 text-base transition duration-300 placeholder:text-slate-500 hover:border-cyan-300 focus:border-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-100"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  <input
                    type="email"
                    placeholder="电子邮箱"
                    className="w-full rounded-lg border border-slate-200 px-5 py-3 text-base transition duration-300 placeholder:text-slate-500 hover:border-cyan-300 focus:border-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-100"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <textarea
                  placeholder="请描述您的需求或问题..."
                  rows={5}
                  className="w-full resize-none rounded-lg border border-slate-200 px-5 py-3 text-base transition duration-300 placeholder:text-slate-500 hover:border-cyan-300 focus:border-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-100"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />

                <button
                  type="submit"
                  className="w-full rounded-lg bg-slate-950 py-4 text-lg font-black text-white shadow-lg shadow-slate-200 transition duration-300 hover:-translate-y-1 hover:bg-cyan-700 active:scale-[0.99]"
                >
                  提交留言 →
                </button>
              </form>
            </div>

            <div className="space-y-5 animate-drift-in">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 md:p-8">
                <h2 className="text-2xl font-black text-slate-950 md:text-3xl">联系方式</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {contactMethods.map((item, i) => (
                    <div
                      key={item.title}
                      className="group rounded-lg border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg hover:shadow-slate-100"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <div className={`mb-5 grid h-12 w-12 place-items-center rounded-lg ${item.color} transition duration-300 group-hover:scale-105`}>
                        {item.icon}
                      </div>
                      <h3 className="text-base font-black text-slate-950">{item.title}</h3>
                      <p className="mt-2 text-sm font-medium leading-6 text-slate-600">{item.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-cyan-100 bg-cyan-50 p-6">
                <p className="text-sm font-black text-cyan-800">沟通前可以准备</p>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  当前订单类型、月产能、最常出现的异常、希望优先改善的经营指标。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BottomCTA
        eyebrow="保密沟通"
        title="把复杂问题先讲清楚，方案才会准确"
        description="我们会围绕企业现状做初步判断，所有沟通内容仅用于诊断和方案建议。"
        primaryLabel="提交咨询"
        secondaryHref="/about"
        secondaryLabel="了解正奇"
      />
    </div>
  );
}
