// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import img1 from "./assets/images/IMG_6634.jpg";
import img2 from "./assets/images/IMG_6635.jpg";
import img3 from "./assets/images/IMG_6624.jpg";
import img4 from "./assets/images/IMG_6625.jpg";
import img5 from "./assets/images/IMG_6633.jpg";
import img6 from "./assets/images/IMG_6632.jpg";

import imgGrid from "./assets/images/IMG_6628.jpg";
import imgSolar from "./assets/images/IMG_6629.jpg";
import imgWind from "./assets/images/IMG_6627.jpg";

import person1 from "./assets/images/person1.png";
import person2 from "./assets/images/person2.png";
import person3 from "./assets/images/person3.png";

export const SITE_TITLE = "Astro Blog";
export const SITE_DESCRIPTION = "Welcome to my website!";
export const SITE = {
  company: "株式会社至誠",
  address: "青森县三户郡五户町大字倉石又重字太田5-7",
  call: "0178326224",
  email: "songjiacheng0528@gmail.com",
  site: "https://www.example.com",
  foundedTime: "2023年",
  board: "株式会社至诚の会社役員",
  paidInCapital: "1000万日元",
  services: ["水稻专属种植与销售"],
  value: [
    "青森县「まっしぐら」",
    {
      text: "水稻专属种植与销售",
      foreground: "green",
    },
  ],
  mission:
    "確かな栽培技術と優良な品種選定を基盤に、日本有数の良質な稲作地帯・青森県より、純正で安定した稲源をお客様へ直接お届けしています",
  headNavigations: [
    { label: "会社概要", url: "/about" },
    { label: "事業内容", url: "/service" },
    { label: "お問い合わせ", url: "/contact" },
  ],
  footerDescription:
    "私たちはエコ栽培（生態栽培）を基本原則とし、化学肥料・農薬の乱用を一切行わず、日本国の有機農業基準および関連法令を厳密に遵守しております。",
  footNavigations: [
    {
      title: "住所",
      items: [
        "青森县三户郡五户町大字倉石又重字太田5-7",
        "songjiacheng0528@gmail.com",
        "0178326224",
      ],
    },
  ],
};

export const KEY_SERVICES = {
  title: [{ text: "高品質稲" }, "の直接供給サービス"],
  section: "事業内容",
  leading:
    "当社の主な事業は、「まっしぐら」水稲の栽培および成品米の販売です。用途や規模に応じ、以下のような直供サービスを提供しています",
  services: [
    {
      title: "Solar Power Solutions",
      description: "食品加工企業様向け：安定供給可能な高品質稲源の一括供給",
      visual: img1,
    },
    {
      title: "Wind Energy Harvesting",
      description:
        "飲食店・高付加価値食材取扱事業者様向け：青森県産「まっしぐら」米の提供",
      visual: img2,
    },
    {
      title: "Hydropower Systems",
      description:
        "カスタマイズ対応：等級・数量などのご要望に応じた柔軟な供給プラン",
      visual: img3,
    },
  ],
  callToAction:
    "Discover the Future of Green Energy. Choose Your Sustainable Solution Today!",
  buttonText: "Explore More",
};

export const INNOVATIONS = {
  title: "",
  section: "企業価値",
  leading: "",
  innovations: [
    {
      title: "青森県産「まっしぐら」の専属栽培",
      description: [
        "「まっしぐら」は、青森県で育成された良食味の水稲品種で、粒立ちの良さ、コクのある味わい、余韻の長い香りが特長です。一方で、気候・土壌・水質への要求が高く、栽培には高度な管理技術が求められます。",
        "当社では、「まっしぐら」の生育に適した青森県内の圃場を厳選し、地域に根ざした伝統的な稲作基準を尊重しながら、現代的なエコ栽培の考え方を取り入れた生産体制を採用しています。自然の恵みを最大限に引き出し、品種本来の風味を大切に育てています。",
      ],
      visual: imgGrid,
    },
    {
      title: "4年間の栽培経験に基づく安定した品質管理",
      description: [
        "「まっしぐら」の栽培に携わって以来、当社は4年間にわたり実地経験を積み重ね、種子選定・育苗・圃場管理・収穫・保管に至るまで、一貫した標準管理プロセスを確立してきました。",
        "育苗期の温湿度管理、生育期の水肥調整、環境に配慮した病害虫対策、そして適期収穫と低温保管まで、各工程を経験豊富なスタッフが丁寧に管理しています。これにより、安定した品質と収量を実現しています。",
      ],
      visual: imgSolar,
    },
    {
      title: "田んぼからお客様まで、一貫した品質管理",
      description: [
        "私たちは「良い米は、良い管理から生まれる」と考えています。化学肥料や農薬の過剰使用を避け、日本の農業関連基準を遵守した持続可能な栽培を実践しています。",
        "収穫後は、すべてのロットに対して品質検査を実施し、粒の状態、異物、水分値などを厳格に確認。常に安定した品質で、青森県産水稲の価値を確実にお届けすることをお約束します。",
      ],
      visual: imgWind,
    },
  ],
  visual: "innovations-section-image.jpg",
  callToAction: "Explore the Future of Green Energy with [Company Name]",
  button: "Learn More",
};

export const TESTIMONIALS = {
  section: "What Our Customers Say",
  title: [
    { text: "Hear from Those " },
    {
      text: "Who Have Embraced Sustainable Living",
      foreground: "green",
    },
  ],
  testimonials: [
    {
      name: "Emily Johnson",
      visual: person1,
      occupation: "Homeowner",
      quote:
        "Switching to [Company Name] was the best decision I made. Our home is now powered by clean energy, and I feel great knowing I'm contributing to a healthier planet.",
    },
    {
      name: "Carlos Rodriguez",
      visual: person2,
      occupation: "Business Owner",
      quote:
        "As a business owner, sustainability is crucial. [Company Name] provided us with a seamless transition to green energy, and we've seen a positive impact on both the environment and our operating costs.",
    },
    {
      name: "Sophie Chen",
      visual: person3,
      occupation: "Environmental Advocate",
      quote:
        "I'm passionate about the environment, and [Company Name] aligns perfectly with my values. Their commitment to renewable energy and reducing carbon footprint is commendable.",
    },
  ],
  visual: "customer-testimonials-image.jpg",
  callToAction: "Join Our Growing Community of Satisfied Customers",
  button: "Get Started",
};

export const SHOWS = [
  { title: "show", description: "description", img: img1 },
  { title: "show", description: "description", img: img2 },
  { title: "show", description: "description", img: img3 },
  { title: "show", description: "description", img: img4 },
  { title: "show", description: "description", img: img5 },
  { title: "show", description: "description", img: img6 },
];
