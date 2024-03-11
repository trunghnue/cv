import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Nguyễn Thành Trung",
  initials: "TrungNT",
  location: "Hà Nội, Việt Nam",
  locationLink: "https://www.google.com/maps/place/Hanoi",
  about:
    "Game Developer",
  summary:
    "Có 5 năm kinh nghiệm trong lĩnh vực lập trình game di dộng, trong đó có 4 năm kinh nghiệm chuyên sâu về lập trình game bằng engine Cocos Creator, đặc biệt là trong việc phát triển và phát hành trên nền tảng Facebook Instant Game. Đã tham gia vào rất nhiều các dự án game khác nhau và cho ra mắt thị trường nhiều game thành công với hàng triệu người chơi mỗi tháng.",
  avatarUrl: "https://avatars.githubusercontent.com/u/63865082?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "trungnguyenthanh.dev@gmail.com",
    tel: "0966964899",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/trunghnue",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/thanhtrungdev/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Đại học Sư Phạm Hà Nội",
      degree: "Công nghệ thông tin",
      start: "2013",
      end: "2017",
    },
  ],
  work: [
    {
      company: "HAYHAY GLOBAL",
      link: "https://hayhay.one",
      badges: [],
      title: "Cocos Creator Game Developer",
      start: "03/2019",
      end: "Nay",
      description:
        "Chịu trách nhiệm phát triển game sử dụng Cocos Creator (Javasript, TypeScript), thiết kế và xây dựng code base, lập kế hoạch và thực hiện các tính năng của game theo tài liệu từ Game Designer, làm việc với Game Artist và Game Designer để đảm bảo hiệu suất và chất lượng của game, sửa lỗi cho game, theo dõi và phân tích các chỉ số log trên Firebase để đánh giá và đề xuất các tính năng mới, trao đổi với Facebook Reviewer để tuân thủ các chính sách, nhanh chóng nắm bắt các xu hướng game hot để tích hợp vào các game hiện có.",
    },
    {
      company: "TỔNG CÔNG TY TRUYỀN HÌNH CÁP VIỆT NAM",
      link: "https://www.vtvcab.vn/",
      badges: [],
      title: "Mobile Application Developer",
      start: "05/2018",
      end: "02/2019",
      description:
        "Tham gia phát triển ứng dụng ICAB sử dụng React Native (Javascript). Ứng dụng chạy trên các thiết bị di động Android / IOS giúp quản lý các nhân viên tại các chi nhánh trên toàn quốc. Hỗ trợ xử lý các vấn đề về tín hiệu truyền hình, thuê bao khách hàng cho các chi nhánh.",
    },
    {
      company: "VIET ARCHERY",
      link: "",
      badges: [],
      title: "Cocos 2dx / Unity Game Developer",
      start: "08/2017",
      end: "04/2018",
      description:
        "Tham gia phát triển game với Cocos 2dx, Cocos 2d-js, Unity",
    },
  ],
  skills: [
    "Cocos Creator",
    "JavaScript",
    "TypeScript",
    "Game Development",
    "HTML5",
    "Facebook Instant Game",
    "Git",
    "Team work",
    "Game Design"
  ],
  projects: [
    {
      title: "Egg Shoot Dynomite Bubble Pop",
      techStack: [
        "Cocos Creator",
        "Javascript",
        "Facebook Instant Game",
      ],
      description: "Egg Shoot Dynomite Bubble Pop - Bắn trứng khủng long là game casual/puzzle được làm theo format của tựa game đình đám cùng tên rất nổi tiếng.",
      link: {
        label: "Egg Shoot Dynomite Bubble Pop",
        href: "https://fb.gg/play/eggshoot",
      },
    },
    {
      title: "Shoot Bubbles: Ocean Pop",
      techStack: [
        "Cocos Creator",
        "Javascript",
        "Facebook Instant Game",
      ],
      description:
        "Shoot Bubbles: Ocean Pop là game thuộc dòng game casual/puzzle kinh điển và rất dễ gây nghiện.",
      link: {
        label: "Shoot Bubbles: Ocean Pop",
        href: "https://fb.gg/play/bubbleshoot",
      },
    },
    {
      title: "Onet X Connect Matched Animals",
      techStack: [
        "Cocos Creator",
        "Javascript",
        "Facebook Instant Game",
      ],
      description:
        "Onet X Connect Matched Animals thuộc dòng game nối thú kinh điển.",
      link: {
        label: "Onet X Connect Matched Animals",
        href: "https://fb.gg/play/onetxanimal",
      },
    },
    {
      title: "DOP 1: Remove One Part",
      techStack: [
        "Cocos Creator",
        "Javascript",
        "Facebook Instant Game",
      ],
      description:
        "DOP 1: Remove One Part là game thuộc dòng game puzzle. Cách chơi rất dễ dàng, chỉ cần chạm vào màn hình và kéo ngón tay của bạn để xóa một phần hình ảnh và nếu xoá đúng chỗ, người chơi sẽ qua level.",
      link: {
        label: "DOP 1: Remove One Part",
        href: "https://fb.gg/play/removeonepart",
      },
    },
    {
      title: "DOP 2: Draw One Part",
      techStack: [
        "Cocos Creator",
        "Javascript",
        "Facebook Instant Game",
      ],
      description:
        "Tiếp nối sự thành công của DOP 1, dự án DOP 2: Draw One Part đã được triển khai ngay khi ra mắt thành công DOP 1. Đúng như tên gọi, người chơi cần vẽ thêm vào các hình ảnh còn thiếu, và nếu vẽ đúng thì sẽ qua level.",
      link: {
        label: "DOP 2: Draw One Part",
        href: "https://fb.gg/play/drawpuzzle",
      },
    },
    {
      title: "Sweet Party",
      techStack: [
        "Cocos Creator",
        "Javascript",
        "Facebook Instant Game",
      ],
      description: "Thuộc dòng game endless runner, người chơi sẽ điều khiển miếng sushi sao cho ăn được coin và vượt nhiều chướng ngại vật nhất có thể.",
      link: {
        label: "Sweet Party",
        href: "https://fb.gg/play/sushirollnew",
      },
    },
    {
      title: "Color Water Sort",
      techStack: [
        "Cocos Creator",
        "Javascript",
        "Facebook Instant Game",
      ],
      description:
        "Color Water Sort là một trò chơi giải đố trong đó mục tiêu là sắp xếp chất lỏng theo màu sắc bằng cách trộn chúng đúng cách",
      link: {
        label: "Color Water Sort",
        href: "https://fb.gg/play/colorwatersort",
      },
    },
    {
      title: "Egg Shoot Dynomite Time Attack",
      techStack: [
        "Cocos Creator",
        "Javascript",
        "Facebook Instant Game",
      ],
      description:
        "Phiên bản khác của Egg Shoot Dynomite Bubble Pop. Game sẽ tính giờ mỗi lượt chơi thay vì chơi endless",
      logo: EvercastLogo,
      link: {
        label: "Egg Shoot Dynomite Time Attack",
        href: "https://fb.gg/play/eggshootpro",
      },
    },
    {
      title: "Basket Hit",
      techStack: [
        "Cocos Creator",
        "Javascript",
        "Facebook Instant Game",
      ],
      description:
        "Trò chơi bóng rổ, nhiệm vụ của người chơi là đưa bóng vào rổ càng nhiều càng tốt",
      link: {
        label: "Basket Hit",
        href: "https://fb.gg/play/baskethit",
      },
    },
  ],
} as const;
