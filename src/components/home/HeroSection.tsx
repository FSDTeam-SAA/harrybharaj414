"use client";

import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  Plane,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

const ConsultationChoice = () => (
  <a
    href="https://topmate.io/harry_singh12/929425"
    target="_blank"
    rel="noreferrer"
    className="group flex min-w-0 items-center gap-2 rounded-xl bg-linear-to-r from-[#087cff] to-[#0058dc] px-3 py-3 text-white shadow-lg shadow-blue-700/25 transition duration-200 hover:-translate-y-1 hover:shadow-xl sm:gap-3 sm:px-4 sm:py-4"
  >
    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-xl font-black text-[#0874e9] shadow-inner sm:size-11">
      ₹
    </span>
    <span className="min-w-0 flex-1">
      <strong className="block !text-[11px] leading-tight sm:!text-[16px]">
        CONSULT WITH MR. HARRY SINGH
      </strong>
      <small className="block !text-[9px] font-bold tracking-wide text-blue-100 sm:!text-[12px]">
        BOOK NOW
      </small>
    </span>
    <em className="shrink-0 rounded-full bg-white px-2.5 py-1.5 !text-[9px] font-extrabold not-italic text-[#075bcf] sm:px-4 sm:py-2.5 sm:!text-[12px]">
      BOOK NOW
    </em>
    <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1 sm:size-5" />
  </a>
);

const Service = ({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof CalendarDays;
  title: string;
  text: string;
}) => (
  <span className="grid grid-cols-[28px_1fr] items-center gap-x-2 text-[#0c3770] my-4">
    <Icon className="row-span-2 size-7" />
    <b className="text-[12px] font-extrabold leading-tight">{title}</b>
    <small className="text-[10px] font-semibold leading-tight text-[#617898]">
      {text}
    </small>
  </span>
);

const SupportPanel = ({ className = "" }: { className?: string }) => (
  <aside
    className={`w-full rounded-2xl bg-[radial-gradient(circle_at_90%_10%,#167bd8_0%,transparent_30%),linear-gradient(135deg,#063b7d,#02183d)] p-4 text-white shadow-xl shadow-blue-950/25 sm:p-6 ${className}`}
  >
    <p className="text-[8px] font-extrabold tracking-[.35em] text-[#a9d8ff] sm:text-[10px]">
      PROFESSIONAL SUPPORT
    </p>
    <h2 className="my-1.5 text-lg font-black leading-none sm:my-2 sm:text-2xl">
      CLEAR GUIDANCE.
      <br />
      CLEAR NEXT STEPS.
    </h2>
    <p className="flex items-center gap-2 text-[9px] sm:text-xs">
      <CheckCircle2 className="size-3.5 shrink-0 fill-[#ffd03c] text-[#ffd03c] sm:size-4" />{" "}
      Profile assessment and document planning
    </p>
    <p className="mt-1 flex items-center gap-2 text-[9px] sm:text-xs">
      <CheckCircle2 className="size-3.5 shrink-0 fill-[#ffd03c] text-[#ffd03c] sm:size-4" />{" "}
      Application and embassy filing assistance
    </p>
    <span className="float-right mt-2 -rotate-6 border-b-2 border-[#ffce24] pb-1 font-serif text-[10px] leading-none sm:text-sm">
      Same Commitment.
      <br />A Brighter Tomorrow.
    </span>
  </aside>
);

export const HeroSection = () => (
  <section className="relative overflow-hidden bg-linear-to-b from-[#dff4ff] via-[#eef9ff] to-white font-sans text-[#06265a]">
    <picture className="absolute inset-x-0 top-0 block h-[430px] overflow-hidden sm:h-[485px]">
      <source
        media="(min-width: 640px)"
        srcSet="/pc-banner-plane-balanced.png"
      />
      <img
        src="/mobile-banner.png"
        alt=""
        className="size-full origin-center object-cover object-center sm:object-fill sm:scale-y-[1.4]"
      />
    </picture>

    <div className="relative z-10 mx-auto container flex flex-col justify-between gap-6 px-4 pb-16 pt-14 sm:gap-8 sm:px-7 sm:pb-32 sm:pt-24 lg:flex-row">
      <div className="max-w-2xl">
        <p className="mb-2 hidden text-[12px] font-extrabold tracking-[.4em] text-[#0769eb] sm:block">
          DREAM · PLAN · APPLY · BELONG
        </p>
        <h1 className="text-[clamp(1.45rem,4vw,3.25rem)] font-black leading-[1.05] tracking-tight">
          YOUR GATEWAY TO WORK,
          <br />
          <span className="text-[#0769eb]">STUDY </span> &amp;{" "}
          <span className="font-black">IMMIG</span>
          <span className="text-[#0769eb]">RATION.</span>
        </h1>
        <i className="my-1.5 block h-1 w-20 rounded bg-[#ffca28] sm:my-2 sm:h-1.5 sm:w-32" />
        <p className="max-w-xl text-xs font-semibold text-[#506b8e] sm:text-base">
          Clear guidance, documentation support and embassy filing assistance.
        </p>
        <div className="mt-3 flex flex-wrap gap-2 sm:mt-5 sm:gap-3">
          <span className="flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1.5 text-[10px] font-extrabold shadow-lg shadow-blue-900/10 sm:px-3.5 sm:py-2 sm:text-[10px]">
            <ShieldCheck className="size-4 text-[#18ac67]" /> UAE-LICENSED
            COMPANY
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1.5 text-[10px] font-extrabold shadow-lg shadow-blue-900/10 sm:px-3.5 sm:py-2 sm:text-[10px]">
            <UsersRound className="size-4 text-[#f5a800]" /> TRUSTED BY 3400+
            CLIENTS
          </span>
        </div>
      </div>
      <SupportPanel className="max-w-md lg:mt-2" />
    </div>
    <div className="relative z-20 mx-1 mx-auto -mt-2 container rounded-2xl bg-white p-2 shadow-xl shadow-blue-950/15 sm:mx-auto sm:-mt-16 sm:p-4">
      <div className="text-center">
        <h2 className="!text-[17px] font-black sm:!text-[26px]">
          START NOW <span className="text-[#ffbd00]">—</span> CHOOSE YOUR NEXT
          STEP
        </h2>
        <p className="!text-[11px] text-[#506b8e] sm:!text-[18px]">
          Get expert support from Mr. Harry Singh.
        </p>
      </div>
      <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
        <div className="rounded-xl border border-[#9bceff] bg-[linear-gradient(135deg,#f7fcff,#edf8ff)] p-3 shadow-sm sm:p-4">
          <div className="flex items-center gap-2">
            {/* <UserRound className="size-7 shrink-0 rounded-full bg-[#d8efff] p-1.5 text-[#0874d1] sm:size-9" /> */}
            <div>
              <small className="inline-block !text-[10px] my-1 font-extrabold tracking-wider text-[#0769eb] sm:text-[8px] bg-[#CFE5FF] px-1.5 py-0.5 rounded-md">
                NEED GUIDANCE FIRST?
              </small>
              <strong className="block !text-[15px] leading-tight my-1 sm:!text-[18px]">
                BOOK A CONSULTATION
              </strong>
              <p className="!text-[10px] text-[#496482] sm:!text-[14px]">
                Discuss your profile and plan your next steps.
              </p>
            </div>
          </div>
          <div className="mt-3">
            <ConsultationChoice />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-1 text-center !text-[8px] font-semibold text-[#285482] sm:flex sm:justify-around sm:!text-[12px]">
            <span>💬 1:1 Expert Consultation</span>
            <span>👥 Personalized Guidance</span>
            <span>📋 Clear Next Steps</span>
          </div>
        </div>
        <div className="rounded-xl border border-[#ffd167] bg-[linear-gradient(135deg,#fffef8,#fff7dc)] p-3 shadow-sm sm:p-4">
          <div className="flex items-center gap-2">
            {/* <FileText className="size-7 shrink-0 rounded-full bg-[#ffe7a4] p-1.5 text-[#956400] sm:size-9" /> */}
            <div>
              <small className="inline-block !text-[10px] my-1 font-extrabold tracking-wider text-[#F2B31F] sm:text-[8px] bg-[#fff7dc] px-1.5 py-0.5 rounded-md">
                READY TO PROCEED?
              </small>
              <strong className="block !text-[15px] leading-tight my-1 sm:!text-[18px]">
                COMPLETE YOUR REGISTRATION
              </strong>
              <p className="!text-[10px] text-[#496482] sm:!text-[14px]">
                Continue with your secure registration.
              </p>
            </div>
          </div>
          <a
            href="https://topmate.io/harry_singh12/2275677"
            target="_blank"
            rel="noreferrer"
            className="group mt-3 flex min-w-0 items-center gap-2 rounded-xl bg-linear-to-r from-[#ffcf1b] to-[#eea400] px-3 py-3 text-[#172750] shadow-lg shadow-amber-500/25 transition duration-200 hover:-translate-y-1 hover:shadow-xl sm:gap-3 sm:px-4 sm:py-4"
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-xl font-black text-[#a76500] shadow-inner sm:size-11">
              ₹
            </span>
            <span className="min-w-0 flex-1">
              <strong className="block !text-[11px] leading-tight sm:!text-[16px]">
                REGISTRATION — PAY NOW
              </strong>
              <small className="block !text-[8px] font-bold tracking-wide sm:!text-[12px]">
                UPI, SCANNER, ANY CREDIT OR DEBIT CARD ACCEPTED
              </small>
            </span>
            <em className="shrink-0 rounded-full bg-white px-2.5 py-1.5 !text-[9px] font-extrabold not-italic text-[#895500] sm:px-4 sm:py-2.5 sm:!text-[12px]">
              PAY NOW
            </em>
            <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
          </a>
          <div className="mt-4 grid grid-cols-3 gap-1 text-center !text-[8px] font-semibold text-[#285482] sm:flex sm:justify-around sm:!text-[12px]">
            <span>📄 Document Support</span>
            <span>🛡️ Filing Help</span>
            <span>👥 Ongoing Support</span>
          </div>
        </div>
      </div>
    </div>
    <div className="relative z-10 mx-auto grid max-w-sm grid-cols-2 justify-between gap-x-6 px-5 py-5 sm:max-w-5xl sm:grid-cols-6 sm:gap-4 sm:px-0">
      <Service icon={UsersRound} title="3400+" text="Happy Clients" />
      <Service icon={ShieldCheck} title="UAE-LICENSED" text="& Compliant" />
      <Service icon={GraduationCap} title="STUDY" text="Abroad Support" />
      <Service icon={BriefcaseBusiness} title="WORK" text="Abroad Support" />
      <Service icon={Plane} title="IMMIGRATION" text="Support" />
      <Service icon={CheckCircle2} title="TRUSTED" text="& Transparent" />
    </div>
  </section>
);
