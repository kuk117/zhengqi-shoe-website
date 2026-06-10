'use client';

import { useState } from 'react';
import Image from 'next/image';

const contactMethods = [
  ['公司地址', '福建省莆田市荔城区'],
  ['联系电话', '400-XXX-XXXX'],
  ['电子邮箱', 'contact@zhengqi-shoe.com'],
  ['响应时间', '工作日 24 小时内回复'],
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      alert('已收到您的咨询信息，我们会尽快与您联系。');
    }, 900);
  }

  const fieldClass =
    'form-field rounded-lg border border-[#cfe3da] px-4 py-3 text-[#17231f] placeholder:text-[#6f7e78] focus:border-[#0f766e] focus:ring-4 focus:ring-teal-100';

  return (
    <div>
      <section className="bg-[#f7faf8] py-20 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <h1 className="hero-title text-[#17231f]">先聊清楚问题，再决定怎么改善</h1>
            <p className="hero-copy mt-7">
              请说明企业规模、订单类型、当前卡点和期望目标。正奇会先做初步判断，再建议适合的沟通路径。
            </p>
          </div>
          <div className="static-image relative min-h-[410px]">
            <Image
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80"
              alt="顾问与客户沟通鞋厂管理问题"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid items-stretch gap-8 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="soft-card flex h-full flex-col p-6 md:p-9">
            <h2 className="text-2xl font-black text-[#17231f] md:text-3xl">在线留言</h2>
            <p className="mt-3 leading-7 text-[#5d6d67]">
              尽量描述最影响经营结果的问题，例如交期、效率、品质、库存、成本或团队协作。
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <input required placeholder="您的姓名 *" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={fieldClass} />
              <input placeholder="公司名称" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className={fieldClass} />
              <input required placeholder="联系电话 *" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={fieldClass} />
              <input type="email" placeholder="电子邮箱" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={fieldClass} />
            </div>

            <textarea
              rows={7}
              placeholder="请描述您的需求或当前问题..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`${fieldClass} mt-4 min-h-[190px] w-full flex-1 resize-none`}
            />

            <button type="submit" disabled={submitting} className={`btn-primary mt-5 w-full ${submitting ? 'submit-loading' : ''}`}>
              <span>{submitting ? '正在提交' : '提交咨询'}</span>
              {!submitting && <span aria-hidden="true">→</span>}
            </button>
          </form>

          <aside className="flex h-full flex-col gap-5">
            <div className="static-image relative min-h-[230px] flex-1">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                alt="顾问团队复盘鞋厂改善问题"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="soft-card bg-[#edf7f3] p-6 md:p-7">
              <h2 className="text-2xl font-black text-[#17231f]">沟通前可以准备</h2>
              <p className="mt-4 leading-8 text-[#5d6d67]">
                当前月产能、主要订单类型、最常出现的异常、希望优先改善的经营指标，以及已有的管理报表或现场记录。
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactMethods.map(([title, content]) => (
                <div key={title} className="list-line rounded-lg border border-[#d9e6df] bg-white p-5 pl-6 shadow-sm">
                  <h3 className="font-black text-[#17231f]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5d6d67]">{content}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
