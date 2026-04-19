import Link from "next/link";

const featuredCards = [
  {
    title: "网络安全学习记录",
    desc: "整理密码学、CTF、Web 与实验过程中的笔记与思考。",
    tag: "Study",
  },
  {
    title: "课程实验整理",
    desc: "将实验流程、代码修改点和报告写作内容做成系统归档。",
    tag: "Lab",
  },
  {
    title: "光影画廊",
    desc: "展示个人摄影作品，保留光线、色彩与瞬间的情绪表达。",
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
    <main className="min-h-screen bg-[#09090b] text-zinc-100">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute right-[-80px] top-[120px] h-[260px] w-[260px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-[-120px] left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
      </div>

      <section className="mx-auto max-w-6xl px-5 pb-16 pt-6 md:px-8">
        <header className="sticky top-4 z-20 mb-10">
          <div className="glass-panel flex items-center justify-between rounded-2xl px-5 py-4">
            <div className="text-lg font-semibold tracking-wide">ZenviorX</div>

            <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
              <a href="#about" className="transition hover:text-white">
                关于
              </a>
              <a href="#featured" className="transition hover:text-white">
                主页内容
              </a>
              <Link href="/photowall" className="transition hover:text-white">
                光影画廊
              </Link>
              <a href="#contact" className="transition hover:text-white">
                联系
              </a>
            </nav>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="glass-panel rounded-[28px] p-8 md:p-10">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-zinc-400">
              Personal Homepage
            </p>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              你好，我是
              <span className="ml-3 text-white/95">ZenviorX</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
              这里是我的个人主页。我希望它既能承载网络安全学习记录，
              也能展示摄影作品、课程实验与个人表达。
              当前版本正在持续向更完整、更统一、更有质感的风格迭代。
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/photowall"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                进入光影画廊
              </Link>

              <a
                href="#featured"
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-white/10"
              >
                查看主页内容
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {quickStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-5"
                >
                  <div className="text-2xl font-bold">{item.value}</div>
                  <div className="mt-1 text-sm text-zinc-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="glass-panel rounded-[28px] p-5">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/images/avatar.jpg"
                  alt="avatar"
                  className="h-72 w-full object-cover"
                />
              </div>

              <div className="mt-5">
                <h2 className="text-xl font-semibold">当前关注</h2>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-300">
                  <li>• 密码学与网络安全基础</li>
                  <li>• CTF / Web / PWN 学习过程</li>
                  <li>• Python 与前端开发实践</li>
                  <li>• 摄影作品整理与展示表达</li>
                </ul>
              </div>
            </div>

            <div className="glass-panel rounded-[28px] p-5">
              <div className="text-sm text-zinc-400">站点状态</div>
              <div className="mt-3 text-lg font-semibold">正在持续搭建中</div>
              <p className="mt-2 text-sm leading-7 text-zinc-300">
                目前已完成主页与画廊基础结构，后续会继续加入文章归档、
                实验整理、项目详情与更多动态效果。
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-panel rounded-[28px] p-8">
            <div className="mb-4 text-sm text-zinc-400">关于这个主页</div>
            <h2 className="text-3xl font-bold">不仅是简历页，更像一个个人空间</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-300">
              我不希望这个网站只是把个人信息简单堆上去。
              我更想让它逐渐变成一个有连续性、有审美、有内容沉淀的空间：
              可以记录学习，整理项目，也可以展示摄影和生活中的观察。
            </p>
          </div>

          <div className="glass-panel rounded-[28px] p-8">
            <div className="mb-4 text-sm text-zinc-400">主页风格目标</div>
            <ul className="space-y-3 text-sm leading-7 text-zinc-300">
              <li>• 暗色基调</li>
              <li>• 毛玻璃卡片感</li>
              <li>• 层次清晰、留白充足</li>
              <li>• 首页具有“个人气质”而不是模板感</li>
            </ul>
          </div>
        </section>

        <section id="featured" className="mt-8">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <div className="text-sm text-zinc-400">Featured</div>
              <h2 className="mt-2 text-3xl font-bold">主页内容区</h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredCards.map((card) => (
              <article
                key={card.title}
                className="glass-panel rounded-[28px] p-6 transition duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                  {card.tag}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{card.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="glass-panel rounded-[28px] p-8">
            <div className="mb-4 text-sm text-zinc-400">Gallery Entry</div>
            <h2 className="text-3xl font-bold">把摄影部分做成一个独立入口</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-300">
              主页不直接堆满全部照片，而是保留一个更精致的入口，
              让画廊作为单独页面去承载更纯粹的视觉内容。
            </p>
            <Link
              href="/photowall"
              className="mt-6 inline-flex rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
            >
              前往光影画廊
            </Link>
          </div>

          <div className="glass-panel rounded-[28px] p-8" id="contact">
            <div className="mb-4 text-sm text-zinc-400">Contact</div>
            <h2 className="text-2xl font-bold">联系方式</h2>
            <div className="mt-5 space-y-3 text-sm text-zinc-300">
              <p>GitHub：后面替换成你的真实链接</p>
              <p>邮箱：后面替换成你的真实邮箱</p>
              <p>说明：这一版先把整体视觉和结构打稳。</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}