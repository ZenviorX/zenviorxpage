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

  // 设置你网站开始运行的日期
  const startDate = useMemo(() => new Date("2026-04-19T00:00:00+08:00"), []);

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const { days, hours } = getUptimeParts(startDate, now);

  return (
    <div className="text-white font-semibold text-lg flex gap-4">
      <div className="text-3xl">{formatNow(now)}</div>
      <div className="text-xl">
        系统已稳定运行：{days}天 {hours}小时
      </div>
    </div>
  );
}