import { walkwayAlbums, walkwayTimeline } from "./lightWalkwayData";

const totalAlbums = walkwayAlbums.length;
const totalPhotos = walkwayAlbums.reduce((sum, album) => sum + album.count, 0);
const activeYears = new Set(walkwayAlbums.map((album) => album.year)).size;

export default function LightWalkway() {
  return (
    <section id="walkway" className="mt-8">
      <div className="glass-panel-light rounded-[32px] p-6 md:p-8">
        {/* 1 + 2 合并后的顶部总栏 */}
        <div className="rounded-[28px] border border-white/70 bg-white/66 px-6 py-6 shadow-[0_10px_24px_rgba(15,23,42,0.05)] md:px-8">
          {/* 上半部分：标题与说明 */}
          <div className="max-w-4xl">
            <div className="text-sm tracking-[0.26em] text-zinc-400">
              LIGHT WALKWAY
            </div>
            <h2 className="mt-3 text-[2.4rem] font-bold leading-tight text-zinc-900 md:text-[3.6rem]">
              光影栈道
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-zinc-600 md:text-lg">
              这里不再只是首页里的附加内容，而是一条独立展开的视觉路径。
              它保留总站的顶栏与结构，但内部以“相册”为基本单位，让照片沿着一条栈道被依次看见。
            </p>
          </div>

          {/* 分隔线 */}
          <div className="my-6 h-px bg-white/70" />

          {/* 下半部分：状态统计 */}
          <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
            <div className="shrink-0">
              <div className="text-xs uppercase tracking-[0.24em] text-zinc-400">
                WALKWAY STATUS
              </div>
              <div className="mt-2 text-[1.2rem] font-bold text-zinc-900 md:text-[1.35rem]">
                光影栈道状态栏
              </div>
            </div>

            <div className="grid flex-1 gap-3 sm:grid-cols-3 xl:mx-8">
              <div className="rounded-2xl border border-white/70 bg-white/78 px-4 py-3">
                <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-400">
                  Albums
                </div>
                <div className="mt-2 text-[1.8rem] font-bold leading-none text-zinc-900">
                  {totalAlbums}
                </div>
              </div>

              <div className="rounded-2xl border border-white/70 bg-white/78 px-4 py-3">
                <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-400">
                  Photos
                </div>
                <div className="mt-2 text-[1.8rem] font-bold leading-none text-zinc-900">
                  {totalPhotos}
                </div>
              </div>

              <div className="rounded-2xl border border-white/70 bg-white/78 px-4 py-3">
                <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-400">
                  Years
                </div>
                <div className="mt-2 text-[1.8rem] font-bold leading-none text-zinc-900">
                  {activeYears}
                </div>
              </div>
            </div>

            <div className="shrink-0 rounded-2xl bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-700">
              相册制展示 / 时间归档
            </div>
          </div>
        </div>

        {/* 3. 主体区：窄时间轴 + 右侧相册展示 */}
        <div className="mt-6 grid items-start gap-5 lg:grid-cols-[240px_minmax(0,1fr)]">
          {/* 左侧：窄时间轴 */}
          <aside className="min-w-0">
            <div className="rounded-[24px] border border-white/70 bg-white/72 p-5 shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
              <div className="text-sm text-zinc-500">时间轴</div>

              <div className="relative mt-4 pl-4">
                <div className="absolute left-[6px] top-1 bottom-1 w-px bg-zinc-200" />

                <div className="space-y-3">
                  {walkwayTimeline.map((item) => (
                    <div key={`${item.date}-${item.title}`} className="relative">
                      <div className="absolute left-[-12px] top-[6px] h-2.5 w-2.5 rounded-full border-2 border-white bg-sky-600 shadow-sm" />

                      <div className="rounded-2xl bg-white/76 px-3 py-3">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
                          {item.date}
                        </div>
                        <div className="mt-1 text-sm font-bold text-zinc-900">
                          {item.title}
                        </div>
                        <p className="mt-1 text-[13px] leading-5 text-zinc-500">
                          {item.note}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* 右侧：相册展示 */}
          <div className="min-w-0">
            <div className="grid gap-5 md:grid-cols-2">
              {walkwayAlbums.map((album) => (
                <article
                  key={album.id}
                  className="group overflow-hidden rounded-[28px] border border-white/70 bg-white/72 shadow-[0_12px_28px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img
                      src={album.cover}
                      alt={album.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.04)_0%,rgba(15,23,42,0.58)_100%)]" />

                    <div className="absolute left-5 top-5 inline-flex rounded-full bg-white/82 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-zinc-700 backdrop-blur-sm">
                      {album.date}
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">
                        {album.subtitle}
                      </div>
                      <h3 className="mt-1 text-[1.45rem] font-bold text-white">
                        {album.title}
                      </h3>
                    </div>
                  </div>

                  <div className="px-5 py-4">
                    <div className="flex items-center justify-between gap-4 text-sm text-zinc-500">
                      <span>{album.location ?? "未标注地点"}</span>
                      <span>{album.count} 张</span>
                    </div>

                    <p className="mt-3 text-sm leading-7 text-zinc-500">
                      {album.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}