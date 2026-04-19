import Link from "next/link";

const photos = [
  { src: "/images/gallery1.jpg", title: "Light 01" },
  { src: "/images/gallery2.jpg", title: "Light 02" },
  { src: "/images/gallery3.jpg", title: "Light 03" },
  { src: "/images/gallery4.jpg", title: "Light 04" },
  { src: "/images/gallery5.jpg", title: "Light 05" },
  { src: "/images/gallery6.jpg", title: "Light 06" },
];

export default function PhotowallPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto max-w-6xl px-6 py-10">
        <header className="mb-10 flex items-center justify-between">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.35em] text-zinc-500">
              Gallery
            </p>
            <h1 className="text-4xl font-bold">光影画廊</h1>
          </div>
          <Link
            href="/"
            className="rounded-2xl border border-zinc-700 px-4 py-2 text-sm transition hover:bg-zinc-900"
          >
            返回主页
          </Link>
        </header>

        <p className="mb-10 max-w-3xl leading-8 text-zinc-400">
          这里用于展示我的摄影作品。当前版本先在本地放置静态图片，
          后续可以继续扩展为按题材分类、按时间归档，或者点击放大查看。
        </p>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <article
              key={photo.src}
              className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60"
            >
              <div className="overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h2 className="text-base font-medium text-zinc-200">
                  {photo.title}
                </h2>
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}