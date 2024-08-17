import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rushikesh Biradar",
  initials: "RB",
  url: "https://dillion.io",
  location: "Pune, INDIA",
  locationLink: "https://www.google.com/maps/place/pune",
  description:
    "I'm in the crypto and NFT space since 2020, I've worked with more than 100 projects and helped them",
  summary:
    "Curious about cinema, I closely follow industry developments, staying updated on the latest trends and releases. My passion for film is paired with strong marketing skills, especially in creating engaging content for platforms like Instagram and Twitter. Whether it's analyzing trends or promoting films, I combine my love for cinema with a talent for crafting content that resonates with audiences.",
  avatarUrl: "/rushi.jpg",
  skills: [
    "Content Writing",
    "ORM",
    "Social Media Strategy",
    "Short Form Video Editing",
    "Meme Making",
    "Excel",
    "Content Generation using AI",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "irushibiradar@gmail.com",
    tel: "+91 9673820215",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/gurglemonster",
        icon: Icons.x,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/coldfuzzz",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:irushibiradar@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  education: [
    {
      school: "Sinhgad College of Engineering Pune",
      href: "https://cms.sinhgad.edu/sinhgad_engineering_institutes/vadgaon_scoe/about.aspx#",
      degree: "Bachelor of Engineering",
      logoUrl: "/sppu.png",
      start: "2019",
      end: "2023",
    },
    // {
    //   school: "University of Waterloo",
    //   href: "https://uwaterloo.ca",
    //   degree: "Bachelor's Degree of Computer Science (BCS)",
    //   logoUrl: "/waterloo.png",
    //   start: "2016",
    //   end: "2021",
    // },
    // {
    //   school: "Wilfrid Laurier University",
    //   href: "https://wlu.ca",
    //   degree: "Bachelor's Degree of Business Administration (BBA)",
    //   logoUrl: "/laurier.png",
    //   start: "2016",
    //   end: "2021",
    // },
    // {
    //   school: "International Baccalaureate",
    //   href: "https://ibo.org",
    //   degree: "IB Diploma",
    //   logoUrl: "/ib.png",
    //   start: "2012",
    //   end: "2016",
    // },
  ],
  projects: [
    {
      title: "Instagram Content",
      href: "https://www.instagram.com/reel/CpE7WvUghAo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      dates: "",
      active: true,
      description:
        "Remixed a Jackie Shroff Reel on Personal Account that got 3M+ plays on Instagram.",
      technologies: [],
      links: [
        {
          type: "Link",
          href: "https://www.instagram.com/reel/CpE7WvUghAo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/apnabhidu1.mp4",
    },
    {
      title: "Twitter Content",
      href: "https://x.com/solana/status/1817873710503653823",
      dates: "",
      active: true,
      description:
        "I recently put together a collection of engaging and humorous meme content specifically tailored for the Solana community on Twitter, aiming to capture attention and spark conversations within the crypto space.",
      technologies: [],
      links: [
        {
          type: "Link",
          href: "https://x.com/solana/status/1817873710503653823",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/magicuidesign/magicui",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "",
      video: "/solana.mp4",
    },
    {
      title: "Twitter Content",
      href: "https://x.com/solana/status/1811383028293173675",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "I created memes for Solana, contributing to the community’s engagement and presence on social media platforms like Twitter.",
      technologies: [],
      links: [
        {
          type: "Link",
          href: "https://x.com/solana/status/1811383028293173675",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/twitter2.mp4",
    },
    {
      title: "Reddit Work",
      href: "https://www.reddit.com/r/AethirCloud/",
      dates: "",
      active: true,
      description:
        "I successfully managed the subreddit r/AethirCloud, focusing on content creation and community building, which led to an impressive growth in membership from 0 to over 35k members on Reddit.",
      technologies: [""],
      links: [
        {
          type: "Link",
          href: "https://www.reddit.com/r/AethirCloud/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/aethir.mp4",
    },
  ],
  hackathons: [
    {
      title: " Gray Spark Audio",
      dates: "Jan 2024- Present",
      location: "Pune",
      description:
        " Social Media Management, Digital marketing,  Content creation, SEO, SEM",

      image: "/gray.png",
      mlh: "",
      links: [],
    },
    {
      title: "Gazette.hq (staderlabs)",
      dates: "Oct 2023-Jan 2024",
      location: "Remote",
      description:
        " Newsletter, Social  media management, Content Writing, hashtag research .",

      image: "/stadarlabs.png",
      mlh: "",
      links: [],
    },
    {
      title: "One Hand Clap (CoinDCX)",
      dates: " Feb 2022-May 2023",
      location: "Mumbai",
      description:
        " Content Creator and Twitter Manager-Handled regular ORM (Online Reputation Management) for the brand on Twitter and Instagram,formulated content strategy and was involved regularly in content writing and copywriting for tweets.● Assisted in managing end-to-end social media strategy and content creation for CoinDCX on Twitter and Instagram.● Ideated for several campaigns, editorials and viral content in accordance to latest trends and pop culture movements for Indian crypto brand CoinDCX (10M+ users)● Worked with filmmakers and ideated on campaigns ● Executed Influencer Marketing, Performance Marketing, Data Reporting and Client Servicing with brand teams to ensure cohesive brand image.",
      icon: "",
      image: "/ohc.jpeg",
      links: [],
    },
    {
      title: "Genesis Shards- Chief Meme Officer",
      dates: "Apr 2021-Apr 2023",
      location: "Remote",
      description:
        "Did content management and copywriting for brand’s twitter regularly along with creation of editorials and media pieces like meme videos and more. ● Assisted in ideation and execution of Instagram Ads and paid media strategy for the brand. ● Curated latest content for weekly newsletter (Crypto Pulse) and memefied it to make it fun-to-read than regular newsletters.",
      image: "/gen.png",
      // links: [
      //   {
      //     title: "Github",
      //     icon: <Icons.github className="h-4 w-4" />,
      //     href: "https://github.com/cryptotrends/cryptotrends",
      //   },
      // ],
    },
    {
      title: "Spenny, Nuo - SMM Specialist",
      dates: "August 2020 - Feb 2022 ",
      location: "Remote",
      description:
        "Leveraged several tools to track social trends, identify influencers and formulate an effect outreach strategy for the target audience. ● Ideated and executed several campaigns with the objective of user onboarding and driving awareness for the app along with an approach to measure successes and failures of campaigns.● Assisted in copywriting, content writing for brand’s Instagram and Twitter on a regular basis that got viral and got brand popularity amongst youth audiences in India",
      image: "spenny.png",

      // links: [
      //   {
      //     title: "Devpost",
      //     icon: <Icons.globe className="h-4 w-4" />,
      //     href: "https://devpost.com/software/my6footprint",
      //   },
      //   {
      //     title: "ML",
      //     icon: <Icons.github className="h-4 w-4" />,
      //     href: "https://github.com/Wallet6/my6footprint-machine-learning",
      //   },
      //   {
      //     title: "iOS",
      //     icon: <Icons.github className="h-4 w-4" />,
      //     href: "https://github.com/Wallet6/CarbonWallet",
      //   },
      //   {
      //     title: "Server",
      //     icon: <Icons.github className="h-4 w-4" />,
      //     href: "https://github.com/Wallet6/wallet6-server",
      //   },
      // ],
    },
  ],
} as const;
