import Link from "next/link";

const projects = [
  {
    title: "个人摄影主页",
    description: "展示我拍摄的风景、人像和街头摄影作品。",
  },
  {
    title: "网络安全学习记录",
    description: "记录密码学、CTF、Web 安全与课程实验内容。",
  },
  {
    title: "实验报告整理",
    description: "整理课程实验、代码分析和阶段成果。",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto max-w-6xl px-6 py-10">
        <header className="mb-14 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-wide">Toby</div>
          <nav className="flex gap-6 text-sm text-zinc-300">
            <a href="#about" className="transition hover:text-white">
              关于我
            </a>
            <a href="#projects" className="transition hover:text-white">
              项目
            </a>
            <Link href="/photowall" className="transition hover:text-white">
              光影画廊
            </Link>
            <a href="#contact" className="transition hover:text-white">
              联系
            </a>
          </nav>
        </header>

        <section className="grid gap-10 md:grid-cols-[1.3fr_0.9fr] md:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-zinc-500">
              Personal Homepage
            </p>
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              你好，我是 Toby
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-8 text-zinc-300">
              山东大学网络空间安全学院学生，正在学习密码学、网络安全与开发。
              这里是我的个人主页，我会在这里展示项目、学习记录，以及摄影作品。
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                查看项目
              </a>
              <Link
                href="/photowall"
                className="rounded-2xl border border-zinc-700 px-5 py-3 text-sm font-semibold transition hover:bg-zinc-900"
              >
                进入光影画廊
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 shadow-2xl">
            <div className="mb-6 overflow-hidden rounded-2xl">
              <img
                src="/images/avatar.jpg"
                alt="avatar"
                className="h-64 w-full object-cover"
              />
            </div>
            <h2 className="mb-4 text-xl font-semibold">当前关注方向</h2>
            <ul className="space-y-3 text-zinc-300">
              <li>• 密码学基础与课程实验</li>
              <li>• CTF / Web / PWN 学习</li>
              <li>• Python 与前端开发</li>
              <li>• 摄影作品整理与展示</li>
            </ul>
          </div>
        </section>

        <section id="about" className="mt-24">
          <h2 className="mb-6 text-3xl font-bold">关于我</h2>
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 leading-8 text-zinc-300">
            我想把这个网站做成一个长期维护的个人主页。
            第一阶段先在本地完成主页和摄影画廊，
            后续再逐步增加文章、项目详情、照片分类和更多视觉效果。
          </div>
        </section>

        <section id="projects" className="mt-24">
          <h2 className="mb-6 text-3xl font-bold">项目</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 transition hover:-translate-y-1 hover:border-zinc-600"
              >
                <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>
                <p className="text-sm leading-7 text-zinc-400">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-24 pb-10">
          <h2 className="mb-6 text-3xl font-bold">联系</h2>
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 text-zinc-300">
            <p className="mb-3">GitHub：这里后面换成你的 GitHub 地址</p>
            <p className="mb-3">邮箱：这里后面换成你的邮箱</p>
            <p>本地阶段先把结构和样式做出来，部署阶段再补真实链接。</p>
          </div>
        </section>
      </section>
    </main>
  );
}