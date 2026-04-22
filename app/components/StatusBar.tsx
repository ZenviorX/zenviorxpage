"use client";

import { useEffect, useMemo, useState } from "react";

type StatItem = {
  label: string;
  value: string;
};

type StatusBarProps = {
  stats: StatItem[];
};

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

export default function StatusBar({ stats }: StatusBarProps) {
  const [now, setNow] = useState(new Date());
  const startDate = useMemo(() => new Date("2026-04-19T00:00:00+08:00"), []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const { days, hours } = getUptimeParts(startDate, now);

  return (
    <div className="glass-panel-light rounded-[28px] p-5 md:p-6">
      <div className="grid gap-4 lg:grid-cols-[1.15fr_1fr] lg:items-stretch">
        <div className="grid gap-4 md:grid-cols-[0.95fr_1.35fr]">
          <div className="rounded-2xl border border-white/70 bg-white/72 px-5 py-5 shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
            <div className="text-sm font-medium text-zinc-500">站点状态</div>
            <div className="mt-3 text-3xl font-bold text-sky-700 md:text-4xl">
              {formatNow(now)}
            </div>
          </div>

          <div className="rounded-2xl border border-white/70 bg-white/72 px-5 py-5 shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <div className="flex items-center gap-2 text-sm text-zinc-600">
                <img
                  src="/icon/heart.svg"
                  alt="Heart"
                  className="h-5 w-5 animate-pulse"
                />
                <span className="font-medium">系统稳定运行中</span>
              </div>

              <div className="text-lg font-bold text-zinc-900 md:text-2xl">
                {days} 天 {hours} 小时
              </div>
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

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/70 bg-white/72 px-4 py-4 shadow-[0_8px_20px_rgba(15,23,42,0.05)]"
            >
              <div className="text-[1.8rem] font-bold leading-none text-zinc-900">
                {item.value}
              </div>
              <div className="mt-2 text-sm text-zinc-500">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}