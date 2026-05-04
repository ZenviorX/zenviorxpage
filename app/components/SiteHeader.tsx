"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  {
    href: "/",
    label: "首页",
    match: (pathname: string) => pathname === "/",
  },
  {
    href: "/walkway",
    label: "光影栈道",
    match: (pathname: string) => pathname.startsWith("/walkway"),
  },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // 路由切换时自动关闭菜单
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-4 z-20 mb-10">
      <div className="glass-panel-light glass-panel-strong flex items-center justify-between rounded-2xl px-5 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-wide text-zinc-900"
        >
          ZenviorX
        </Link>

        {/* 桌面端导航 */}
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = item.match(pathname);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-xl px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                  isActive
                    ? "text-sky-700"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                <span className="relative z-10">{item.label}</span>

                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 bottom-1 h-[2px] rounded-full bg-sky-700"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 32,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* 移动端汉堡按钮 */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="relative z-30 flex h-9 w-9 items-center justify-center rounded-xl md:hidden"
          aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
        >
          <div className="flex w-5 flex-col gap-[5px]">
            <span
              className={`block h-[2px] rounded-full bg-zinc-700 transition-all duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] rounded-full bg-zinc-700 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] rounded-full bg-zinc-700 transition-all duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* 移动端下拉菜单 */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -12, scaleY: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mt-2 overflow-hidden rounded-2xl border border-white/30 bg-white/82 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-1 p-3">
              {navItems.map((item) => {
                const isActive = item.match(pathname);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                      isActive
                        ? "bg-sky-50 text-sky-700"
                        : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
