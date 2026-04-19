import Link from "next/link";
import StatusBar from "./components/StatusBar";

const featuredCards = [
  {
    title: "网络安全学习记录",
    desc: "整理密码学、CTF、Web 与实验过程中的笔记、问题与思考。",
    tag: "Study",
  },
  {
    title: "课程实验整理",
    desc: "把实验流程、代码修改点、调试过程与报告写作内容做成清晰归档。",
    tag: "Lab",
  },
  {
    title: "光影画廊",
    desc: "展示个人摄影作品，让页面既有学习内容，也有更具审美表达的一面。",
    tag: "Gallery",
  },
];

const quickStats = [
  { label: "已完成页面", value: "2" },
  { label: "当前方向", value: "4" },
  { label: "摄影作品", value: "6+" },
  { label: "持续更新", value: "ON" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#eef2f7_45%,#e9eef5_100%)] text-zinc-800">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-100px] top-[-80px] h-[260px] w-[260px] rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute right-[-60px] top-[120px] h-[240px] w-[240px] rounded-full bg-indigo-100/50 blur-3xl" />
        <div className="absolute bottom-[-100px] left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-cyan-100/40 blur-3xl" />
      </div>

      <section className="mx-auto max-w-6xl px-5 pb-16 pt-6 md:px-8">
        <header className="sticky top-4 z-20 mb-10">
          <div className="glass-panel-light flex items-center justify-between rounded-2xl px-5 py-4">
            <div className="text-lg font-semibold tracking-wide text-zinc-900">
              ZenviorX
            </div>

            <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
              <a href="#about" className="transition hover:text-zinc-900">
                关于
              </a>
              <a href="#featured" className="transition hover:text-zinc-900">
                主页内容
              </a>
              <Link href="/photowall" className="transition hover:text-zinc-900">
                光影画廊
              </Link>
              <a href="#contact" className="transition hover:text-zinc-900">
                联系
              </a>
            </nav>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="glass-panel-light rounded-[28px] p-8 md:p-10">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-zinc-500">
              Personal Homepage
            </p>

            <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] text-zinc-900 md:text-6xl">
              你好，我是
              <span className="ml-3 text-sky-700">ZenviorX</span>
            </h1>

            <p className="mt-6 max-w-[46rem] text-base leading-8 text-zinc-600 md:text-lg">
              这里是我的个人主页。我希望它既能承载网络安全学习记录，
              也能展示摄影作品、课程实验与个人表达。当前版本正在逐步向更完整、
              更统一、也更有气质的风格继续完善。
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/photowall"
                className="rounded-2xl bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(3,105,161,0.22)] transition hover:scale-[1.02] hover:bg-sky-800"
              >
                进入光影画廊
              </Link>

              <a
                href="#featured"
                className="rounded-2xl border border-sky-100 bg-white/72 px-5 py-3 text-sm font-semibold text-zinc-800 shadow-sm transition hover:border-sky-200 hover:bg-white"
              >
                查看主页内容
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {quickStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/70 bg-white/68 px-4 py-5 shadow-[0_8px_20px_rgba(15,23,42,0.05)]"
                >
                  <div className="text-2xl font-bold text-zinc-900">
                    {item.value}
                  </div>
                  <div className="mt-1 text-sm text-zinc-500">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="glass-panel-light rounded-[28px] p-5">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/images/avatar.jpg"
                  alt="avatar"
                  className="h-72 w-full object-cover transition duration-500 hover:scale-[1.03]"
                />
              </div>

              <div className="mt-5">
                <h2 className="text-xl font-semibold text-zinc-900">当前关注</h2>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-600">
                  <li>• 密码学与网络安全基础</li>
                  <li>• CTF / Web / PWN 学习过程</li>
                  <li>• Python 与前端开发实践</li>
                  <li>• 摄影作品整理与展示表达</li>
                </ul>
              </div>
            </div>

            <div className="glass-panel-light rounded-[28px] p-5">
              <StatusBar />
              <div className="mt-3 text-lg font-semibold text-zinc-900">
                正在持续搭建中……
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-panel-light rounded-[28px] p-8">
            <div className="mb-4 text-sm text-zinc-500">关于这个主页</div>
            <h2 className="text-3xl font-bold text-zinc-900">
              不只是展示页，更像一个会生长的个人空间
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-600">
              我不希望这个网站只是把个人信息简单堆上去。
              我更想让它逐渐变成一个有连续性、有审美、有内容沉淀的空间：
              可以记录学习，整理项目，也可以展示摄影和生活中的观察。
            </p>
          </div>

          <div className="glass-panel-light rounded-[28px] p-8">
            <div className="mb-4 text-sm text-zinc-500">主页风格目标</div>
            <ul className="space-y-3 text-sm leading-7 text-zinc-600">
              <li>• 更明亮、更清爽</li>
              <li>• 保留毛玻璃卡片感</li>
              <li>• 留白充足，层次清晰</li>
              <li>• 看起来像个人站，而不是模板页</li>
            </ul>
          </div>
        </section>

        <section id="featured" className="mt-8">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <div className="text-sm text-zinc-500">Featured</div>
              <h2 className="mt-2 text-3xl font-bold text-zinc-900">
                主页内容区
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredCards.map((card) => (
              <article
                key={card.title}
                className="glass-panel-light rounded-[28px] p-6 transition duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs text-sky-700">
                  {card.tag}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-zinc-900">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  {card.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="glass-panel-light rounded-[28px] p-8">
            <div className="mb-4 text-sm text-zinc-500">Gallery Entry</div>
            <h2 className="text-3xl font-bold text-zinc-900">
              把摄影部分做成一个独立入口
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-600">
              主页不直接堆满全部照片，而是保留一个更精致的入口，
              让画廊作为单独页面去承载更纯粹的视觉内容，也让整个主页更有呼吸感。
            </p>
            <Link
              href="/photowall"
              className="mt-6 inline-flex rounded-2xl border border-white/60 bg-white/70 px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-white"
            >
              前往光影画廊
            </Link>
          </div>

          <div className="glass-panel-light rounded-[28px] p-8" id="contact">
            <div className="mb-4 text-sm text-zinc-500">Contact</div>
            <h2 className="text-2xl font-bold text-zinc-900">联系方式</h2>
            <div className="mt-5 space-y-3 text-sm text-zinc-600">
              <p>GitHub：后面替换成你的真实链接</p>
              <p>邮箱：ZenviorX@163.com</p>
              <p>说明：这一版先把整体视觉和结构打稳。</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}