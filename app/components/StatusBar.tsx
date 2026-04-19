"use client";

import { useEffect, useMemo, useState } from "react";

// 格式化时间
function pad(num: number) {
  return String(num).padStart(2, "0");
}

function formatNow(date: Date) {
  return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
    date.getSeconds()
  )}`;
}

// 计算已运行的天数和小时
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

  // 设置你网站开始的时间
  const startDate = useMemo(() => new Date("2026-04-19T00:00:00+08:00"), []);

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const { days, hours } = getUptimeParts(startDate, now);

  return (
    <div className="glass-panel-light rounded-[28px] p-6 space-y-4">
      <div className="flex justify-between items-center">
        {/* 站点状态加粗和增大字体 */}
        <div className="text-lg font-bold text-zinc-900">站点状态</div>
        {/* 时间右对齐 */}
        <div className="text-3xl text-sky-700">{formatNow(now)}</div>
      </div>

      <div className="flex justify-between items-center">
        {/* 系统运行状态 */}
        <div className="flex items-center gap-3 text-sm text-zinc-600">
          {/* 使用 Image 组件来显示心脏图标 */}
          <img
            src="/icon/heart.svg"
            alt="Heart"
            className="h-5 w-5 animate-pulse"
          />
          <span className="font-medium">系统已稳定运行</span>
        </div>

        {/* 运行时长 */}
        <div className="text-xl font-semibold text-zinc-800">
          {days}天 {hours}小时
        </div>
      </div>

      <p className="mt-3 text-lg font-semibold text-zinc-900">
        正在持续搭建中……
      </p>
      <p className="text-sm leading-7 text-zinc-500">
        当前主页与画廊基础结构已完成，后续会继续加入文章归档、实验整理、项目详情与更多动态效果。
      </p>
      
    </div>
  );
}