"use client";

import { useEffect, useMemo, useState } from "react";

function pad(num: number) {
  return String(num).padStart(2, "0");
}

function formatNow(date: Date) {
  return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
    date.getSeconds()
  )}`;
}

function getUptimeParts(startDate: Date, now: Date) {
  let diff = now.getTime() - startDate.getTime();
  if (diff < 0) diff = 0;

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}

const statusItems = [
  { label: "首页框架", value: "已完成" },
  { label: "画廊页面", value: "已上线" },
  { label: "内容系统", value: "建设中" },
  { label: "下一步", value: "文章归档" },
];

export default function StatusBar() {
  const [now, setNow] = useState(new Date());
  const [dotStep, setDotStep] = useState(0);
  const startDate = useMemo(() => new Date("2026-04-19T00:00:00+08:00"), []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const dotTimer = window.setInterval(() => {
      setDotStep((prev) => (prev + 1) % 4);
    }, 420);

    return () => window.clearInterval(dotTimer);
  }, []);

  const { days, hours, minutes, seconds } = getUptimeParts(startDate, now);

  return (
    <section className="overflow-hidden rounded-[18px] border border-white/70 bg-white/58 shadow-[0_8px_22px_rgba(15,23,42,0.06)] backdrop-blur-[10px]">
      <div className="grid lg:grid-cols-[190px_260px_1fr]">
        <div className="flex items-center justify-center bg-[linear-gradient(180deg,#0d0d0d_0%,#050505_100%)] px-4 py-3">
          <div className="font-mono text-[1.7rem] font-bold tracking-[0.08em] text-white md:text-[1.9rem]">
            {formatNow(now)}
          </div>
        </div>

        <div className="border-t border-white/60 px-4 py-3 lg:border-l lg:border-t-0 lg:border-white/60">
          <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1 text-[0.82rem] font-semibold text-zinc-700">
            <img
              src="/icon/heart.svg"
              alt="Heart"
              className="h-4 w-4 animate-pulse"
            />
            <span>系统已稳定运行：</span>
          </div>

          <div className="mt-2.5 text-[1rem] font-bold text-sky-700 md:text-[1.08rem]">
            {days} 天 {hours} 小时 {minutes} 分 {seconds} 秒
          </div>

          <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-zinc-400">
            UPTIME
          </div>
        </div>

        <div className="border-t border-white/60 px-4 py-3 lg:border-l lg:border-t-0 lg:border-white/60">
          <div className="grid items-center gap-3 lg:grid-cols-[190px_1fr]">
            <div className="flex items-center text-[1.08rem] font-bold text-zinc-950 md:text-[1.18rem] whitespace-nowrap">
              <span>站点持续搭建中</span>
              <span className="ml-1 inline-flex w-[1.5em] justify-start">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className={`transition-opacity duration-300 ${
                      dotStep > i ? "opacity-100" : "opacity-20"
                    }`}
                  >
                    .
                  </span>
                ))}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {statusItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/70 bg-white/72 px-3 py-2"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[11px] uppercase tracking-[0.16em] text-zinc-400">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-zinc-900 whitespace-nowrap">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}