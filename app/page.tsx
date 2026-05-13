"use client";

import { FormEvent, ReactNode, useEffect, useState } from "react";

type IconProps = {
  children: ReactNode;
  className?: string;
};

const navLinks = [
  ["护理项目", "#services"],
  ["店内环境", "#interior"],
  ["套餐价格", "#pricing"],
  ["客户评价", "#reviews"],
  ["到店信息", "#visit"]
];

const services = [
  {
    title: "低压力洗护",
    body: "恒温水流、分区吹干、耳道清洁、指甲护理，适合怕水或敏感宠物。",
    tag: "约 45 到 90 分钟",
    icon: (
      <>
        <path d="M4 14c3-5 13-5 16 0" />
        <path d="M6 14v4h12v-4" />
        <path d="M8 9c0-2 1.8-4 4-4s4 2 4 4" />
      </>
    )
  },
  {
    title: "造型修剪",
    body: "按品种标准或日常好打理造型修剪，兼顾美观、散热和运动舒适度。",
    tag: "可预约专属造型师",
    icon: (
      <>
        <path d="m4 20 6.5-6.5" />
        <path d="m14 6 4 4" />
        <path d="m12 8 4 4" />
        <path d="M9 15c-1-1-1-2.5 0-3.5l4.5-4.5c1-1 2.5-1 3.5 0s1 2.5 0 3.5L12.5 15c-1 1-2.5 1-3.5 0Z" />
      </>
    )
  },
  {
    title: "皮毛养护",
    body: "针对换毛、打结、干燥、异味等情况，提供梳毛开结和养护建议。",
    tag: "含护理报告",
    icon: (
      <>
        <path d="M12 22s7-4 7-11V5l-7-3-7 3v6c0 7 7 11 7 11Z" />
        <path d="M9 12l2 2 4-5" />
      </>
    )
  },
  {
    title: "安心寄养",
    body: "独立休息区、定时遛放、每日照片反馈，短途出行也能安心托付。",
    tag: "支持半日和过夜",
    icon: (
      <>
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </>
    )
  }
];

const slides = [
  {
    image: "/assets/interior-reception.png",
    alt: "中国高端宠物护理店前台接待区",
    label: "Reception Lounge",
    title: "安静而有秩序的前台接待区",
    body: "柔和灯光、石材台面和等候座位，让第一次到店的宠物也能先慢慢熟悉环境。"
  },
  {
    image: "/assets/interior-grooming.png",
    alt: "中国高端宠物护理店洗护护理区",
    label: "Grooming Spa",
    title: "洁净明亮的洗护护理区",
    body: "玻璃分区、恒温洗护设备和整齐护理用品，兼顾卫生、效率与护理过程的可视化。"
  },
  {
    image: "/assets/interior-boarding.png",
    alt: "中国高端宠物护理店寄养休息区",
    label: "Boarding Suites",
    title: "舒适独立的寄养休息区",
    body: "独立休息单元、软垫和活动空间，让短期寄养像一次安静的小住。"
  }
];

const prices = [
  {
    title: "基础洁净",
    price: "¥98",
    suffix: "起",
    items: ["香波清洁和吹干", "耳道、脚底、指甲护理", "基础皮毛检查"]
  },
  {
    title: "精致洗剪",
    price: "¥198",
    suffix: "起",
    featured: true,
    items: ["基础洗护全流程", "脸部、身体、四肢造型", "护理前后照片记录"]
  },
  {
    title: "舒心寄养",
    price: "¥88",
    suffix: "每日起",
    items: ["独立休息空间", "定时喂食和活动", "每日状态反馈"]
  }
];

function Icon({ children, className = "" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function PawIcon({ className = "" }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="M11 15.5c-2.4.4-4.5 2.1-4.5 4 0 1.4 1.3 2.5 3 2.5 1 0 1.8-.4 2.5-1.1.7.7 1.5 1.1 2.5 1.1 1.7 0 3-1.1 3-2.5 0-1.9-2.1-3.6-4.5-4" />
      <path d="M6.5 10.5c.8 1.4.7 2.9-.2 3.4-.9.5-2.2-.3-3-1.7-.8-1.4-.7-2.9.2-3.4.9-.5 2.2.3 3 1.7Z" />
      <path d="M17.5 10.5c-.8 1.4-.7 2.9.2 3.4.9.5 2.2-.3 3-1.7.8-1.4.7-2.9-.2-3.4-.9-.5-2.2.3-3 1.7Z" />
      <path d="M10 5.8c.3 1.6-.3 3-1.3 3.2-1 .2-2-.9-2.3-2.5-.3-1.6.3-3 1.3-3.2 1-.2 2 .9 2.3 2.5Z" />
      <path d="M14 5.8c-.3 1.6.3 3 1.3 3.2 1 .2 2-.9 2.3-2.5.3-1.6-.3-3-1.3-3.2-1-.2-2 .9-2.3 2.5Z" />
    </Icon>
  );
}

function ButtonLink({
  href,
  children,
  variant = "primary"
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const styles =
    variant === "primary"
      ? "bg-coral text-white shadow-[0_16px_34px_rgba(236,111,95,0.32)]"
      : "bg-mint text-teal-dark";

  return (
    <a
      className={`inline-flex min-h-[46px] items-center justify-center rounded-lg px-[18px] py-3 font-extrabold transition hover:-translate-y-0.5 max-sm:w-full ${styles}`}
      href={href}
    >
      {children}
    </a>
  );
}

function SectionHead({
  title,
  body
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="mb-[34px] flex items-end justify-between gap-7 max-sm:grid">
      <h2 className="max-w-[620px] text-[clamp(32px,4.5vw,54px)] font-extrabold leading-[1.05]">
        {title}
      </h2>
      <p className="max-w-[410px] text-muted">{body}</p>
    </div>
  );
}

function InteriorCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((slide) => (slide + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  const showSlide = (index: number) => {
    setCurrentSlide((index + slides.length) % slides.length);
  };

  return (
    <div
      className="relative overflow-hidden rounded-lg bg-teal-dark shadow-deep"
      aria-label="店内环境轮播图"
    >
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <article
            className="relative grid min-h-[clamp(420px,58vw,680px)] min-w-full items-end overflow-hidden max-sm:min-h-[520px]"
            key={slide.title}
          >
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={slide.image}
              alt={slide.alt}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,37,35,0.04)] from-[35%] to-[rgba(10,37,35,0.82)]" />
            <div className="relative z-[1] max-w-[560px] p-[clamp(24px,5vw,46px)] text-white">
              <span className="mb-3 inline-flex text-sm font-black text-[#d9fff4]">
                {slide.label}
              </span>
              <h3 className="text-[clamp(30px,4.5vw,52px)] font-extrabold leading-[1.06]">
                {slide.title}
              </h3>
              <p className="mt-3.5 text-white/80">{slide.body}</p>
            </div>
          </article>
        ))}
      </div>
      <button
        className="absolute left-[18px] top-1/2 z-[3] grid h-[46px] w-[46px] -translate-y-1/2 place-items-center rounded-full border border-white/35 bg-[rgba(10,37,35,0.42)] text-white transition hover:scale-105 hover:bg-[rgba(10,37,35,0.72)] max-sm:bottom-[22px] max-sm:top-auto max-sm:translate-y-0"
        type="button"
        aria-label="上一张"
        onClick={() => showSlide(currentSlide - 1)}
      >
        <Icon className="h-[23px] w-[23px]">
          <path d="m15 18-6-6 6-6" />
        </Icon>
      </button>
      <button
        className="absolute right-[18px] top-1/2 z-[3] grid h-[46px] w-[46px] -translate-y-1/2 place-items-center rounded-full border border-white/35 bg-[rgba(10,37,35,0.42)] text-white transition hover:scale-105 hover:bg-[rgba(10,37,35,0.72)] max-sm:bottom-[22px] max-sm:top-auto max-sm:translate-y-0"
        type="button"
        aria-label="下一张"
        onClick={() => showSlide(currentSlide + 1)}
      >
        <Icon className="h-[23px] w-[23px]">
          <path d="m9 18 6-6-6-6" />
        </Icon>
      </button>
      <div
        className="absolute bottom-7 right-7 z-[3] flex gap-[9px] max-sm:left-1/2 max-sm:right-auto max-sm:bottom-[37px] max-sm:-translate-x-1/2"
        aria-label="轮播图指示器"
      >
        {slides.map((slide, index) => (
          <button
            className={`h-[11px] w-[11px] rounded-full border border-white/70 ${
              index === currentSlide ? "bg-white" : "bg-transparent"
            }`}
            type="button"
            aria-label={`显示${slide.title}`}
            key={slide.title}
            onClick={() => showSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

function BookingForm() {
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setIsSubmitting(true);
    setFeedback("");

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "预约提交失败，请稍后再试。");
      }

      setFeedback(result.message || "预约信息已提交，稍后护理顾问会与你确认具体时段。");
      form.reset();
      window.setTimeout(() => setFeedback(""), 4200);
    } catch (error) {
      setFeedback(error instanceof Error ? error.message : "预约提交失败，请稍后再试。");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-line bg-[#fbfdfb] px-3.5 py-[13px] font-inherit text-ink outline-none transition focus:border-teal focus:shadow-[0_0_0_4px_rgba(15,118,110,0.14)]";
  const labelClass = "grid gap-2 text-sm font-extrabold text-teal-dark";

  return (
    <form
      className="rounded-lg bg-white p-[clamp(22px,4vw,38px)] shadow-deep"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        <label className={labelClass}>
          你的称呼
          <input
            className={inputClass}
            name="name"
            autoComplete="name"
            placeholder="例如：林小姐"
            required
          />
        </label>
        <label className={labelClass}>
          联系电话
          <input
            className={inputClass}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="用于确认预约"
            required
          />
        </label>
        <label className={labelClass}>
          联系邮箱
          <input
            className={inputClass}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="用于接收预约确认"
          />
        </label>
        <label className={labelClass}>
          宠物类型
          <select className={inputClass} name="pet" required defaultValue="">
            <option value="">请选择</option>
            <option>小型犬</option>
            <option>中大型犬</option>
            <option>猫咪</option>
            <option>其他伴侣宠物</option>
          </select>
        </label>
        <label className={labelClass}>
          预约项目
          <select className={inputClass} name="service" required defaultValue="">
            <option value="">请选择</option>
            <option>基础洗护</option>
            <option>洗护加修剪</option>
            <option>皮毛深度护理</option>
            <option>短期寄养</option>
          </select>
        </label>
        <label className={labelClass}>
          期望日期
          <input className={inputClass} name="date" type="date" required />
        </label>
        <label className={labelClass}>
          期望时段
          <select className={inputClass} name="time" required defaultValue="">
            <option value="">请选择</option>
            <option>10:00 到 12:00</option>
            <option>12:00 到 15:00</option>
            <option>15:00 到 18:00</option>
            <option>18:00 到 20:00</option>
          </select>
        </label>
        <label className={`${labelClass} col-span-full`}>
          宠物情况
          <textarea
            className={`${inputClass} min-h-[108px] resize-y`}
            name="note"
            placeholder="可填写年龄、体重、是否怕水、是否打结、近期皮肤状态等"
          />
        </label>
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-4 max-sm:flex-col max-sm:items-stretch">
        <button
          className="inline-flex min-h-[46px] cursor-pointer items-center justify-center rounded-lg border-0 bg-coral px-[18px] py-3 font-extrabold text-white shadow-[0_16px_34px_rgba(236,111,95,0.32)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? "提交中..." : "提交预约"}
        </button>
        <span className="text-sm text-muted">不会自动扣费，到店确认后再开始服务。</span>
      </div>
      {feedback && (
        <div
          className="mt-4 rounded-lg bg-mint px-3.5 py-3 font-bold text-teal-dark"
          role="status"
        >
          {feedback}
        </div>
      )}
    </form>
  );
}

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <nav
        className="fixed inset-x-0 top-0 z-20 flex items-center justify-between gap-6 bg-gradient-to-b from-[rgba(16,30,29,0.72)] to-[rgba(16,30,29,0)] px-[clamp(18px,5vw,72px)] py-[18px] text-white max-sm:px-4 max-sm:py-3.5"
        aria-label="主导航"
      >
        <a
          className="flex min-w-0 items-center gap-2.5 whitespace-nowrap font-extrabold"
          href="#top"
          aria-label="拾光宠物护理店首页"
        >
          <span className="grid h-[38px] w-[38px] place-items-center rounded-full bg-mint text-teal-dark shadow-[inset_0_0_0_2px_rgba(255,255,255,0.62)]">
            <PawIcon className="h-[21px] w-[21px]" />
          </span>
          <span className="truncate">拾光宠物护理</span>
        </a>
        <div className="flex items-center gap-[clamp(14px,2vw,28px)] text-[15px] font-bold max-[960px]:hidden">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
        <a
          className="inline-flex min-h-[46px] items-center justify-center rounded-lg bg-white px-[18px] py-3 font-extrabold text-teal-dark shadow-[0_12px_32px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 max-sm:min-h-10 max-sm:px-3 max-sm:py-[9px] max-sm:text-sm"
          href="#booking"
        >
          立即预约
        </a>
      </nav>

      <header
        className="relative grid min-h-[92vh] items-end overflow-hidden text-white after:absolute after:inset-x-0 after:bottom-0 after:h-[180px] after:bg-gradient-to-b after:from-[rgba(255,250,244,0)] after:to-paper"
        id="top"
        style={{
          background:
            'linear-gradient(90deg, rgba(13, 42, 39, 0.9) 0%, rgba(13, 42, 39, 0.68) 42%, rgba(13, 42, 39, 0.2) 72%), url("/assets/pet-care-hero.png") center right / cover'
        }}
      >
        <div className="relative z-[1] mx-auto w-[min(1160px,calc(100%_-_36px))] py-[150px] pb-[108px] max-sm:py-28 max-sm:pb-[86px]">
          <span className="mb-[22px] inline-flex items-center gap-2.5 text-sm font-extrabold text-[#e8fffa] before:h-0.5 before:w-[42px] before:bg-coral before:content-['']">
            洗护 美容 寄养 行为关怀
          </span>
          <h1 className="max-w-[720px] text-[clamp(44px,8vw,92px)] font-black leading-[0.98]">
            把每一次护理，做成宠物喜欢的温柔日常
          </h1>
          <p className="mt-6 max-w-[620px] text-[clamp(17px,2vw,21px)] text-white/85">
            拾光宠物护理店提供低压力洗护、造型修剪、皮毛养护和短期寄养。透明报价、预约到店、全程记录，让你放心，也让它自在。
          </p>
          <div className="mt-[34px] flex flex-wrap gap-3.5 max-sm:flex-col max-sm:items-stretch">
            <ButtonLink href="#booking">预约护理时段</ButtonLink>
            <ButtonLink href="#services" variant="secondary">
              查看服务项目
            </ButtonLink>
          </div>
          <div
            className="mt-[52px] grid max-w-[740px] grid-cols-3 gap-3 max-[960px]:grid-cols-2 max-sm:grid-cols-1"
            aria-label="门店数据"
          >
            {[
              ["4.9", "本地客户平均评分"],
              ["38min", "基础洗护平均等待"],
              ["1v1", "专属护理师跟进"]
            ].map(([value, label]) => (
              <div
                className="min-h-24 rounded-lg border border-white/20 bg-white/10 p-[18px] backdrop-blur-xl"
                key={label}
              >
                <strong className="block text-[28px] leading-none">{value}</strong>
                <span className="mt-2 block text-sm text-white/80">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section className="px-[clamp(18px,5vw,72px)] py-[86px] max-sm:px-4 max-sm:py-[62px]" id="services">
          <div className="mx-auto w-[min(1160px,100%)]">
            <SectionHead
              title="从清洁到陪伴，一站式照顾毛孩子"
              body="所有项目都会先做皮毛和情绪评估，护理师会根据品种、年龄、皮肤状态和当日精神调整流程。"
            />
            <div className="grid grid-cols-4 gap-4 max-[960px]:grid-cols-2 max-sm:grid-cols-1">
              {services.map((service) => (
                <article
                  className="min-h-[290px] rounded-lg border border-line bg-white p-6 shadow-soft"
                  key={service.title}
                >
                  <div className="mb-6 grid h-12 w-12 place-items-center rounded-lg bg-mint text-teal-dark">
                    <Icon className="h-[25px] w-[25px] stroke-[2.2px]">
                      {service.icon}
                    </Icon>
                  </div>
                  <h3 className="text-[21px] font-extrabold leading-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[15px] text-muted">{service.body}</p>
                  <span className="mt-[22px] inline-block text-sm font-extrabold text-coral">
                    {service.tag}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f6fbf8] px-[clamp(18px,5vw,72px)] py-[86px] max-sm:px-4 max-sm:py-[62px]" id="interior">
          <div className="mx-auto w-[min(1160px,100%)]">
            <SectionHead
              title="高端护理店内环境"
              body="接待、洗护和寄养区域分区明确，采用温润木石、柔和灯光和现代中式细节，减少宠物紧张感。"
            />
            <InteriorCarousel />
          </div>
        </section>

        <section
          className="bg-[linear-gradient(120deg,#d9efe7,#f8f1e8_54%,#ffe2dc)] px-[clamp(18px,5vw,72px)] py-[86px] max-sm:px-4 max-sm:py-[62px]"
          id="booking"
        >
          <div className="mx-auto grid w-[min(1160px,100%)] grid-cols-[0.85fr_1.15fr] items-start gap-[42px] max-[960px]:grid-cols-1">
            <div className="rounded-lg bg-white/65 p-[34px] shadow-deep">
              <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.08]">
                今天想给它安排什么护理？
              </h2>
              <p className="mt-[18px] text-muted">
                提交后我们会在 15 分钟内电话或微信确认时段。第一次到店建议预留 10 分钟做基础评估。
              </p>
              <div className="mt-[30px] grid gap-3.5">
                {[
                  ["营业时间", "周一至周日 10:00 到 20:00"],
                  ["高峰时段", "周五晚间与周末"],
                  ["适合对象", "猫、犬、小型伴侣宠物"]
                ].map(([label, value]) => (
                  <div
                    className="flex min-w-0 justify-between gap-5 border-b border-line pb-3.5 font-bold max-sm:grid max-sm:gap-1.5"
                    key={label}
                  >
                    {label}
                    <span className="min-w-0 text-right font-semibold text-muted max-sm:text-left">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <BookingForm />
          </div>
        </section>

        <section className="bg-white px-[clamp(18px,5vw,72px)] py-[86px] max-sm:px-4 max-sm:py-[62px]" id="pricing">
          <div className="mx-auto w-[min(1160px,100%)]">
            <SectionHead
              title="清晰价格，按宠物状态微调"
              body="以下为常用套餐起步价。实际费用会根据体型、毛量、打结程度和特别护理需求确认。"
            />
            <div className="grid grid-cols-3 gap-4 max-[960px]:grid-cols-2 max-sm:grid-cols-1">
              {prices.map((price) => (
                <article
                  className={`rounded-lg border p-7 ${
                    price.featured
                      ? "border-teal/40 bg-teal-dark text-white max-[960px]:translate-y-0 lg:-translate-y-3"
                      : "border-line bg-[#fffdf9]"
                  }`}
                  key={price.title}
                >
                  <h3 className="text-2xl font-extrabold">{price.title}</h3>
                  <div className="my-[18px] text-[42px] font-black leading-none">
                    {price.price}{" "}
                    <small className="text-[15px] font-bold">{price.suffix}</small>
                  </div>
                  <ul
                    className={`grid gap-2.5 ${
                      price.featured ? "text-white/80" : "text-muted"
                    }`}
                  >
                    {price.items.map((item) => (
                      <li
                        className="before:mr-2 before:font-black before:text-coral before:content-['✓']"
                        key={item}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f4fbf8] px-[clamp(18px,5vw,72px)] py-[86px] max-sm:px-4 max-sm:py-[62px]" id="reviews">
          <div className="mx-auto grid w-[min(1160px,100%)] grid-cols-[1.05fr_0.95fr] items-center gap-[34px] max-[960px]:grid-cols-1">
            <div className="rounded-lg bg-teal-dark p-[38px] text-white">
              <p className="text-[clamp(24px,3vw,38px)] font-black leading-tight">
                “护理师会先陪它熟悉环境，再慢慢开始洗护。以前洗澡很紧张，现在到店还能主动闻一闻。”
              </p>
              <span className="mt-6 block text-white/70">豆包主人，三岁比熊</span>
            </div>
            <div className="grid gap-3.5">
              {[
                ["细节很让人放心", "每次都会说明耳朵、皮肤、脚垫的状态，回家照顾也更有方向。"],
                ["猫咪也能安静完成", "护理师很有耐心，全程没有强迫，结束后毛蓬蓬的还很放松。"],
                ["预约沟通很清楚", "价格和时长提前讲明白，周末高峰也不会一直干等。"]
              ].map(([title, body]) => (
                <div className="rounded-lg border border-line bg-white p-5" key={title}>
                  <strong className="mb-1.5 block text-teal-dark">{title}</strong>
                  <p className="text-[15px] text-muted">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-[clamp(18px,5vw,72px)] py-[86px] max-sm:px-4 max-sm:py-[62px]" id="visit">
          <div className="mx-auto w-[min(1160px,100%)]">
            <SectionHead
              title="带它来店里坐坐"
              body="店内设置等候区和独立护理区，到店前可电话确认停车、猫包或牵引绳等细节。"
            />
            <div className="grid grid-cols-2 items-stretch gap-5 max-[960px]:grid-cols-1">
              <div
                className="relative grid min-h-[360px] place-items-center overflow-hidden rounded-lg bg-[#eaf6ee] bg-cover bg-center shadow-soft"
                aria-label="门店位置示意"
                style={{
                  backgroundImage:
                    'linear-gradient(180deg, rgba(255,250,239,0.08), rgba(255,250,239,0.32)), url("/assets/pet-store-map.png")'
                }}
              >
                <div className="absolute bottom-[22px] left-[22px] grid w-[min(300px,calc(100%-44px))] place-items-center rounded-lg bg-white/80 px-4 py-3.5 text-center shadow-[0_12px_28px_rgba(23,45,42,0.12)] backdrop-blur">
                  <strong className="text-lg leading-tight">拾光宠物护理店</strong>
                  <span className="mt-1 block text-sm text-muted">
                    上海市徐汇区梧桐路 128 号 1 层
                  </span>
                </div>
              </div>
              <div className="min-h-[360px] overflow-hidden rounded-lg bg-white p-[34px] shadow-soft">
                <h2 className="text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.08]">
                  预约和咨询
                </h2>
                <div className="mt-7 grid gap-4">
                  <a
                    className="flex items-center gap-3 rounded-lg border border-line bg-[#fbfdfb] p-4 font-bold"
                    href="tel:021-88996688"
                  >
                    <Icon className="h-[22px] min-w-[22px] text-coral">
                      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
                    </Icon>
                    021-8899-6688
                  </a>
                  <div className="flex min-w-0 items-center gap-3 rounded-lg border border-line bg-[#fbfdfb] p-4 font-bold">
                    <Icon className="h-[22px] min-w-[22px] text-coral">
                      <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </Icon>
                    <span className="min-w-0 break-words">上海市徐汇区梧桐路 128 号</span>
                  </div>
                  <div className="flex min-w-0 items-center gap-3 rounded-lg border border-line bg-[#fbfdfb] p-4 font-bold">
                    <Icon className="h-[22px] min-w-[22px] text-coral">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </Icon>
                    <span className="min-w-0 break-words">周一至周日 10:00 到 20:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-teal-dark px-[clamp(18px,5vw,72px)] py-[30px] text-sm text-white/70">
        <div className="mx-auto flex w-[min(1160px,100%)] justify-between gap-[18px] max-sm:flex-col max-sm:items-stretch">
          <span>© 2026 拾光宠物护理店</span>
          <span>低压力护理 · 透明报价 · 到店预约</span>
        </div>
      </footer>
    </div>
  );
}
