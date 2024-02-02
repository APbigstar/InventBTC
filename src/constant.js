import ProjectImg1 from "./assets/images/project.png";
import Mining from "./assets/images/mining.png";
import Layer from "./assets/images/layer.png";
import Original from "./assets/images/original.png";
import BRC20 from "./assets/images/brc-20.png";
import Wallet from "./assets/images/wallet.png";
import Defi from "./assets/images/defi.png";
import Corner1 from "./assets/images/corner_1.png";
import Corner2 from "./assets/images/corner_2.png";
import Corner3 from "./assets/images/corner_3.png";
import Corner4 from "./assets/images/corner_4.png";

export const sliderSettings = {
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        arrows: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        dots: true,
        arrows: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
      },
    },
  ],
};

export const ProjectsData = [
  {
    image: ProjectImg1,
    title: "Quite Happy Without It: A Feature Film",
    content:
      "Seeking funds for an independent drama about authenticity, the theatre, and the dangers of love.",
    type: "FILM",
    amout: "5,327",
    percent: 67,
    leftDays: "44",
  },
  {
    image: ProjectImg1,
    title: "AKASO Seemore: AI Full-Color Night Vision Goggles",
    content:
      "AI-ISP | Ultra-Low LIght Full-Color | 99$ Color Reproduction | 1640-3280ft Clear Vision | 4K Quality.",
    type: "Travel & Outdoors",
    amout: "250,652",
    percent: 5013,
    leftDays: "33",
  },
  {
    image: ProjectImg1,
    title: "Skate to Hell - Horror Comedy Slasher Film",
    content:
      "An 80's Inspired Horror Comedy Slasher Film ($35,000 Stretch goal).",
    type: "FILM",
    amout: "33,090",
    percent: 221,
    leftDays: "37",
  },
  {
    image: ProjectImg1,
    title: "Journey To Eden",
    content:
      "Sci-Fi Rom-Com NYU short film with bits of magical relism set in San Jose, California.",
    type: "FILM",
    amout: "7980",
    percent: 50,
    leftDays: "17",
  },
  {
    image: ProjectImg1,
    title: "Quite Happy Without It: A Feature Film",
    content:
      "Seeking funds for an independent drama about authenticity, the theatre, and the dangers of love.",
    type: "FILM",
    amout: "5,327",
    percent: 67,
    leftDays: "44",
  },
  {
    image: ProjectImg1,
    title: "Quite Happy Without It: A Feature Film",
    content:
      "Seeking funds for an independent drama about authenticity, the theatre, and the dangers of love.",
    type: "FILM",
    amout: "5,327",
    percent: 67,
    leftDays: "44",
  },
];

export const PressData = [
  {
    image: ProjectImg1,
    title: "10 Ways to Level Up Your Campaign Page in 2024",
    content:
      "Are you a Creator looking to attract backers and enhance your project's story? This is the blueprint you need.",
  },
  {
    image: ProjectImg1,
    title: "The Innovations that transformed InventBTC for Creators in 2023",
    content:
      "One years in review examines the products, updates, and partnerships that have helped shape InventBTC's future.",
  },
  {
    image: ProjectImg1,
    title: "A Guide to Choose the Perfect Pledge Manager",
    content:
      "Utilizing a pledge manager survey tool can prove to be a cost-effective solution for expanding your campaign, offering an array of features that can make your life easier.",
  },
  {
    image: ProjectImg1,
    title: "The Benefits of Crowdfunding for Entrepreneurs",
    content:
      "Entrepreneurs benefit greatly from crowdfunding as it provides access to a larger pool of potential investors who may not have been avaiable otheriwse.",
  },
];

export const CategoryData = [
  { image: Mining, title: "mining" },
  { image: Layer, title: "layer 2" },
  { image: Original, title: "originals" },
  { image: BRC20, title: "brc-20" },
  { image: Wallet, title: "wallets" },
  { image: Defi, title: "defi" },
];

export const CornerData = [
  {
    image: Corner1,
    title: "Kickstarter Creator Resources",
    content:
      "Our definitive roundup of everything from planning shipping to communicatiing with backers",
  },
  {
    image: Corner2,
    title: "How to tell the story of your creative work",
    content:
      "Tips for uncovering the best story you can tell to press, funders, followers, and everybody else",
  },
  {
    image: Corner3,
    title: "How to tell the story of your creative work",
    content:
      "Our advice for crafting a project page that's honest, open, and transparent in both text and visuals",
  },
  {
    image: Corner4,
    title: "How to tell the story of your creative work",
    content:
      "A list of services that can help you with prototyping, manufacturing, packaging, shipping and more  ",
  },
];

export const BackerData = [
  {
    title: "Deal 1",
    content:
      "Learn more about the project and its goals. See how your contribution can make a difference.",
  },
  {
    title: "Deal 2",
    content:
      "Discover the marketing material created to promote the project and attract more contributors.",
  },
  {
    title: "Deal 3",
    content:
      "Track the funding progress with a visually appealing progress bar. See how close the project is to reaching its goal.",
  },
];
