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
  name: "Trung Nguyen Thanh",
  initials: "TrungNT",
  location: "Hà Nội, Việt Nam",
  locationLink: "https://www.google.com/maps/place/Hanoi",
  about:
    "Game Developer",
  summary:
    "With five years of mobile game development experience, I bring four years of focused expertise in programming games using the Cocos Creator engine. Specializing in the development and release of games on the Facebook Instant Game platform, I have contributed to various successful projects, introducing games to the market that attract millions of players monthly.",
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
      school: "Hanoi National University of Education - Viet Nam",
      degree: "Bachelor's Degree in Information technology",
      start: "2013",
      end: "2017",
    },
  ],
  work: [
    {
      company: "HayHay Global",
      link: "https://hayhay.one",
      badges: [],
      title: "Cocos Creator Game Developer",
      start: "03/2019",
      end: "Present",
      description:
        "Responsible for developing games using Cocos Creator (JavaScript, TypeScript), designing and constructing the codebase, planning and implementing game features based on documentation from Game Designers. Collaborate with Game Artists and Game Designers to ensure game performance and quality. Address and troubleshoot game errors, monitor and analyze log metrics on Firebase for evaluation and proposal of new features. Engage with Facebook Reviewers to adhere to policies, swiftly adapt to emerging gaming trends for integration into existing games.",
    },
    {
      company: "Vietnam Cable Television and Electronics",
      link: "https://www.vtvcab.vn/",
      badges: [],
      title: "Mobile Application Developer",
      start: "05/2018",
      end: "02/2019",
      description:
        "Participated in the development of the ICAB application using React Native (JavaScript). The application operates on Android/iOS mobile devices, facilitating the management of employees across nationwide branches. Provided support in handling issues related to television signal transmission and customer subscriptions for branch locations.",
    },
    {
      company: "Viet Archery",
      link: "",
      badges: [],
      title: "Cocos 2dx / Unity Game Developer",
      start: "08/2017",
      end: "04/2018",
      description:
        "Engaged in game development using Cocos 2dx, Cocos 2d-js, and Unity.",
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
      description: `"Egg Shoot Dynomite Bubble Pop" - Dinosaur Egg Shooting is a casual/puzzle game crafted in the format of the popular and renowned title of the same name.`,
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
        `"Shoot Bubbles: Ocean Pop" is a classic casual/puzzle game known for its addictive gameplay.`,
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
        `"Onet X Connect Matched Animals" belongs to the classic genre of animal pairing puzzle games.`,
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
        `"DOP 1: Remove One Part" is a puzzle game known for its straightforward gameplay. Players can easily interact by touching the screen and dragging their fingers to remove a portion of the image. Successfully clearing the correct area allows players to progress to the next level.`,
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
        `Building on the success of DOP 1, the project DOP 2: Draw One Part was immediately launched following the successful release of DOP 1. As the name suggests, players are required to draw missing parts into images, progressing to the next level upon successful completion.`,
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
      description: `Belonging to the endless runner genre, this game puts players in control of a piece of sushi, aiming to collect coins and overcome as many obstacles as possible.`,
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
        `"Color Water Sort" is a puzzle game where the objective is to organize liquids by color through proper mixing and sorting techniques.`,
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
        `Another version of Egg Shoot Dynomite Bubble Pop. This game introduces timed gameplay per session instead of endless play.`,
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
        `A basketball game where the player's objective is to shoot the ball into the basket, aiming for as many successful shots as possible.`,
      link: {
        label: "Basket Hit",
        href: "https://fb.gg/play/baskethit",
      },
    },
  ],
} as const;
