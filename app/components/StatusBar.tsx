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
  const totalHours = Math.floor(totalSeconds / 3600);
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;

  return { days, hours };
}

export default function StatusBar() {
  const [now, setNow] = useState(new Date());

  // 这里改成你真正想作为“网站开始运行”的日期
  const startDate = useMemo(() => new Date("2026-04-19T00:00:00+08:00"), []);

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const { days, hours } = getUptimeParts(startDate, now);

  return (
    <section className="mb-8">
      <div className="status-wrap flex flex-col overflow-hidden rounded-[28px] lg:flex-row">
        <div className="status-time flex min-h-[92px] items-center justify-center px-8 py-6 text-3xl font-black tracking-[0.12em] text-white md:text-4xl lg:min-w-[280px]">
          {formatNow(now)}
        </div>

        <div className="status-main flex flex-1 flex-col gap-4 px-5 py-5 lg:flex-row lg:items-center lg:justify-between lg:px-7">
          <div className="flex items-center gap-3 text-sm text-zinc-700 md:text-base">
            <span className="inline-block h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.55)]" />
            <span className="font-medium">系统已稳定运行：</span>
            <span className="font-bold text-sky-700">
              {days}天 {hours}小时
            </span>
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
            <span className="status-badge">Next.js 15</span>
            <span className="status-badge">React 19</span>
            <span className="status-badge">Tailwind 4</span>
            <span className="status-icp">萌ICP备 20260240号</span>
          </div>
        </div>
      </div>
    </section>
  );
}