export type WalkwayAlbum = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  year: string;
  count: number;
  cover: string;
  desc: string;
  location?: string;
};

export const walkwayAlbums: WalkwayAlbum[] = [
  {
    id: "campus-afterglow",
    title: "校道余光",
    subtitle: "Campus Afterglow",
    date: "2026.04",
    year: "2026",
    count: 12,
    cover: "/images/gallery1.jpg",
    desc: "把最熟悉的校园、街口和天色收进同一条视觉路径里，让日常场景有一点被重新看见的意味。",
    location: "山东大学",
  },
  {
    id: "wind-over-bridge",
    title: "风从桥面经过",
    subtitle: "Wind over Bridge",
    date: "2026.03",
    year: "2026",
    count: 8,
    cover: "/images/gallery2.jpg",
    desc: "偏冷、偏静的一组照片，更多是留白和空气感，不靠复杂元素取胜。",
    location: "城市边缘",
  },
  {
    id: "lamps-coming-down",
    title: "晚灯落下来",
    subtitle: "When Lamps Fall",
    date: "2026.02",
    year: "2026",
    count: 10,
    cover: "/images/gallery3.jpg",
    desc: "把傍晚灯光压进更安静的画面里，节奏比白天更慢，颜色也更克制。",
    location: "夜景街道",
  },
  {
    id: "turning-blue",
    title: "远处正在变蓝",
    subtitle: "Turning Blue",
    date: "2025.12",
    year: "2025",
    count: 9,
    cover: "/images/gallery4.jpg",
    desc: "天色从亮到暗的过程很适合做成一组连续观看的照片，像走路时的视线变化。",
    location: "冬季傍晚",
  },
  {
    id: "corner-scenery",
    title: "风景停在拐角",
    subtitle: "Corner Light",
    date: "2025.10",
    year: "2025",
    count: 11,
    cover: "/images/gallery5.jpg",
    desc: "把一些不显眼的角落收集起来，它们不是最显眼的风景，但很适合被慢慢看。",
    location: "街角与路口",
  },
];

export const walkwayTimeline = [
  {
    date: "2026.04",
    title: "校道余光",
    note: "新增校园主题相册，补充春季和傍晚时段内容。",
  },
  {
    date: "2026.03",
    title: "风从桥面经过",
    note: "加入更冷色、更留白的一组桥面与城市边缘画面。",
  },
  {
    date: "2026.02",
    title: "晚灯落下来",
    note: "整理夜景光线，形成适合独立浏览的一段节奏。",
  },
  {
    date: "2025.12",
    title: "远处正在变蓝",
    note: "加入天色变化明显的傍晚照片，形成时间过渡感。",
  },
  {
    date: "2025.10",
    title: "风景停在拐角",
    note: "最早整理的一组街角图像，成为栈道的起点。",
  },
];