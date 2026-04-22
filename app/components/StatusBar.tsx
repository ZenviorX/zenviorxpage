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

export default function StatusBar() {
  const [now, setNow] = useState(new Date());
  const startDate = useMemo(() => new Date("2026-04-19T00:00:00+08:00"), []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const { days, hours, minutes, seconds } = getUptimeParts(startDate, now);

  return (
    <div className="glass-panel-light rounded-[28px] p-5 md:p-6">
      <div className="grid gap-4 md:grid-cols-[240px_1fr]">
        <div className="rounded-2xl border border-white/70 bg-white/72 px-5 py-5 shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
          <div className="text-sm font-medium text-zinc-500">站点状态</div>

          <div className="mt-3 text-3xl font-bold text-sky-700 md:text-4xl">
            {formatNow(now)}
          </div>

          <div className="mt-3 text-sm font-semibold text-zinc-700 leading-6">
            {days} 天 {hours} 小时 {minutes} 分 {seconds} 秒
          </div>
        </div>

        <div className="rounded-2xl border border-white/70 bg-white/72 px-5 py-5 shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
          <div className="flex items-center gap-2 text-sm text-zinc-600">
            <img
              src="/icon/heart.svg"
              alt="Heart"
              className="h-5 w-5 animate-pulse"
            />
            <span className="font-medium">系统稳定运行中</span>
          </div>

          <p className="mt-4 text-2xl font-bold text-zinc-900">
            正在持续搭建中...
          </p>

          <p className="mt-3 text-sm leading-7 text-zinc-500">
            当前首页与画廊基础结构已经完成，后续会继续加入文章归档、实验整理、
            项目详情与更多动态效果。
          </p>
        </div>
      </div>
    </div>
  );
}