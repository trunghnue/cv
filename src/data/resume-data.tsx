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
    "Senior Game Developer",
  summary:
    "With five years of mobile game development experience, specializing in Cocos Creator, I have a proven track record of developing and launching games on Facebook Instant Game, Android, and iOS platforms. My contributions have driven the successful release of multiple projects, attracting millions of monthly players.",
  avatarUrl: "https://avatars.githubusercontent.com/u/63865082?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "trungnguyenthanh.dev@gmail.com",
    // tel: "+84966964899",
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
      company: "GameZoka",
      link: "https://gamezoka.com",
      badges: [],
      title: "Senior Game Developer",
      start: "06/2024",
      end: "Present",
      description:
        "Lead the development of a multiplayer game using Cocos Creator and the SmartFoxServer framework. Spearheaded product development, collaborating with team members to design and implement core gameplay mechanics and multiplayer functionalities. Provided mentorship and training to a teammate, fostering a collaborative environment to ensure the successful execution of project goals. Continuously optimized game performance and quality, integrating new features based on evolving requirements and player feedback.",
    },
    {
      company: "HayHay Global",
      link: "https://hayhay.one",
      badges: [],
      title: "Game Developer",
      start: "03/2019",
      end: "05/2024",
      description:
        "Responsible for developing games using Cocos Creator (JavaScript, TypeScript). Led the design and construction of the codebase, implementing game features based on detailed Game Designer documentation. Collaborated closely with Game Artists and Designers to optimize game performance and ensure high-quality experiences. Diagnosed and resolved game errors, leveraging Firebase for log monitoring and metric analysis to evaluate and propose new features. Engaged with Facebook Reviewers to ensure compliance with platform policies, while quickly integrating new gaming trends and technologies into existing projects.",
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
    "Game Design",
    "Multiplayer Game",
    "SmartFoxServer",
    "Firebase Analytics",
  ],
  projects: [
    {
      title: "Pusoy Dos",
      techStack: [
        "Cocos Creator",
        "TypeScript",
        "Facebook Instant Game",
        "Multiplayer Game",
      ],
      description: `"Pusoy Dos" is a multiplayer card game that allows players to compete against each other in real-time.`,
      link: {
        label: "Pusoy Dos",
        href: "https://fb.gg/play/pusoydosgame",
      },
    },
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
        `"DOP 1: Remove One Part" is a puzzle game where players touch and drag to remove parts of an image. Clearing the correct area reveals the solution, advancing players to the next level.`,
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
        `DOP 2: Draw One Part followed the success of DOP 1, challenging players to draw missing parts in images to advance to the next level.`,
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
    {
      title: "PopUs",
      techStack: [
        "Cocos Creator",
        "TypeScript",
        "Facebook Instant Game",
      ],
      description:
        `"PopUs" is a casual game where players pop bubbles by tapping on them.`,
      link: {
        label: "PopUs",
        href: "https://www.facebook.com/gaming/play/166365298923895/",
      },
    },
    {
      title: "Candy Kingdom",
      techStack: [
        "Cocos Creator",
        "Javascript",
        "Facebook Instant Game",
      ],
      description:
        `"Candy Kingdom" is a match-3 game where players match candies to clear the board.`,
      link: {
        label: "Candy Kingdom",
        href: "https://www.facebook.com/gaming/play/3280083422063465/",
      },
    },
  ],
} as const;
