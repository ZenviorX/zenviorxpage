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

  // 这里改成你真正想作为“网站开始运行”的时间
  const startDate = useMemo(() => new Date("2026-04-19T00:00:00+08:00"), []);

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const { days, hours } = getUptimeParts(startDate, now);

  return (
    <div className="space-y-4">
      <div>
        <div className="mb-2 text-sm text-zinc-500">站点状态</div>
        <div className="rounded-2xl bg-sky-300 px-4 py-3 text-3xl font-bold tracking-tight text-sky-700">
          {formatNow(now)}
        </div>
      </div>

      <div className="flex items-center gap-3 text-sm text-zinc-600">
        <span className="inline-block h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.45)]" />
        <span className="font-medium">系统已稳定运行</span>
      </div>

      <div className="text-xl font-semibold text-zinc-900">
        {days}天 {hours}小时
      </div>

    </div>
  );
}