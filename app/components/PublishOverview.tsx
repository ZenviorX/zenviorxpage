type StatItem = {
  label: string;
  value: string;
};

type PublishOverviewProps = {
  stats: StatItem[];
  title?: string;
};

export default function PublishOverview({
  stats,
  title = "发布概览",
}: PublishOverviewProps) {
  return (
    <div className="glass-panel-light rounded-[28px] p-5">
      <div className="mb-4 text-sm text-zinc-500">{title}</div>

      <div className="grid grid-cols-2 gap-3">
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
  );
}