// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import img1 from "./assets/images/IMG_6626.jpg";
import img2 from "./assets/images/IMG_6628.jpg";
import img3 from "./assets/images/IMG_6624.jpg";
import img4 from "./assets/images/IMG_6625.jpg";
import img5 from "./assets/images/IMG_6633.jpg";
import img6 from "./assets/images/IMG_6632.jpg";

import imgGrid from "./assets/images/IMG_6629.jpg";
import imgSolar from "./assets/images/IMG_6629.jpg";
import imgWind from "./assets/images/IMG_6629.jpg";

import person1 from "./assets/images/person1.png";
import person2 from "./assets/images/person2.png";
import person3 from "./assets/images/person3.png";

export const SITE_TITLE = "Astro Blog";
export const SITE_DESCRIPTION = "Welcome to my website!";
export const SITE = {
  company: "株式会社至诚",
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
    "每一批稻子在收获后都会经过严格的品质检测，确保颗粒完整、无杂质、水分达标，以稳定的品质为客户提供可靠的稻源保障，传递日本青森水稻的独特价值",
  headNavigations: [
    { label: "About", url: "/about" },
    // { label: "Services", url: "/services" },
    { label: "Contact", url: "/contact" },
  ],
  footerDescription:
    "我们坚持以生态种植为原则，拒绝滥用化学肥料与农药，严格遵循日本农业生产相关标准",
  footNavigations: [
    {
      title: "联系我们",
      items: [
        "青森县三户郡五户町大字倉石又重字太田5-7",
        "songjiacheng0528@gmail.com",
        "0178326224",
      ],
    },
  ],
};

export const KEY_SERVICES = {
  title: "我们的核心业务为「まっしぐら」水稻的种植与成品稻子销售",
  section: "优质稻子直供服务",
  leading:
    "• 针对粮食加工企业，提供批量优质稻源，保障加工产品的品质基础\n• 面向餐饮机构与特色食材商，供应纯正青森县「まっしぐら」大米，满足高端饮食场景需求\n• 支持定制化采购服务，根据客户对稻子等级、产量的具体要求，提供适配的供应方案",
  services: [
    {
      title: "Solar Power Solutions",
      description:
        "Harness the power of the sun with our state-of-the-art solar panels. Generate clean energy for your home or business and reduce your carbon footprint.",
      visual: img1,
    },
    {
      title: "Wind Energy Harvesting",
      description:
        "Embrace the power of the wind. Our wind energy solutions provide a sustainable and efficient way to generate electricity, ensuring a greener future.",
      visual: img2,
    },
    {
      title: "Hydropower Systems",
      description:
        "Flow with nature. Our hydropower systems harness the energy of flowing water, delivering reliable and eco-friendly electricity to your doorstep.",
      visual: img3,
    },
    {
      title: "Energy Storage Solutions",
      description:
        "Store excess energy efficiently. Our cutting-edge energy storage solutions ensure uninterrupted power supply, even during cloudy days or low-wind periods.",
      visual: img4,
    },
    {
      title: "Smart Grid Technology",
      description:
        "Navigate the future with our smart grid technology. Optimize energy distribution, monitor consumption, and contribute to a more sustainable and efficient energy ecosystem.",
      visual: img5,
    },
    {
      title: "Energy-efficient Lighting",
      description:
        "Illuminate your space responsibly. Our energy-efficient lighting solutions provide bright, sustainable, and cost-effective illumination for homes and businesses.",
      visual: img6,
    },
  ],
  callToAction:
    "Discover the Future of Green Energy. Choose Your Sustainable Solution Today!",
  buttonText: "Explore More",
};

export const INNOVATIONS = {
  title:
    "我们坚持以生态种植为原则，拒绝滥用化学肥料与农药，严格遵循日本农业生产相关标准",
  section: "公司价值",
  leading: "",
  innovations: [
    {
      title: "青森县「まっしぐら」的专属培育",
      description:
        "「まっしぐら」作为青森县本土优质水稻品种，以颗粒饱满、口感醇厚、香气绵长的特质闻名，其生长对气候、土壤、水质有着严苛要求。我们精准选址日本适宜该品种生长的优质地块，严格遵循青森县传统水稻种植标准，结合现代生态种植理念，确保每一株水稻都能充分吸收自然养分，还原品种本真风味。",
      visual: imgGrid,
    },
    {
      title: "四年深耕的种植经验背书",
      description:
        "自涉足「まっしぐら」水稻种植以来，我们已积累四年成熟种植经验，形成一套涵盖选种、育苗、田间管理、收割仓储的标准化流程。团队深谙该品种的生长习性，从育苗阶段的温湿度调控，到生长期的水肥管理、病虫害绿色防治，再到成熟后的精准收割与低温仓储，每一个环节都由经验丰富的种植人员全程把控，有效规避种植风险，保障稻子的稳定品质与高产稳产。",
      visual: imgSolar,
    },
    {
      title: "从田间到客户的全程把控",
      description:
        "四年种植经验让我们深刻理解“好稻源于好管理”，我们坚持以生态种植为原则，拒绝滥用化学肥料与农药，严格遵循日本农业生产相关标准。每一批稻子在收获后都会经过严格的品质检测，确保颗粒完整、无杂质、水分达标，以稳定的品质为客户提供可靠的稻源保障，传递日本青森水稻的独特价值。",
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
