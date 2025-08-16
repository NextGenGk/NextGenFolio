import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Gaurav Kumar",
  initials: "GK",
  url: "https://devgaurav.social",
  location: "Durg, CG",
  locationLink: "https://www.google.com/maps/place/durg",
  description:
    "Student at Bhilai Institute of Technology, BIT | Web Developer | Software Developer",
  summary:
    "Enthusiastic and dedicated software developer with a strong foundation in web development and a keen interest in learning and applying new technologies. Proficient in Html, CSS, C, C++, Python, Java, and Spring Boot, and also have a strong knowledge of AWS Cloud. I am eager to leverage my skills to contribute to innovative projects.",
  avatarUrl: "/gaurav_profile.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "AWS",
    "Java",
    "C++",
    "Supabase",
    "Mongo DB",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/NextGenGk",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/gauravkumar077/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/gauravkumar1697",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Paramount Tech Solutions Pvt Ltd",
      href: "https://paramounttechnetwork.com/",
      badges: [],
      location: "On Site",
      title: "Wordpress Developer",
      logoUrl: "/paramount-company.jfif",
      start: "May 2021",
      end: "Oct 2022",
      description: [
        "Built a mobile app using react native and typescript.",
        "Created and implemented website layouts and user interfaces.",
        "Developed web applications and features to enhance user experience.",
        "Ensured websites are responsive and accessible across various devices and platforms.",
        "Implemented responsive design techniques to optimize user experience on desktops, tablets, and mobile devices.",
        "Conducted thorough testing of websites and web applications to identify and fix bugs, errors, or issues.",
      ],
    },
  ],
  education: [
    {
      school: "Bhilai Institute of Technology, (BIT) Durg",
      href: "https://bitdurg.ac.in/",
      degree: "Master's Degree of Computer Science",
      logoUrl: "/bit-logo.jfif",
      start: "2024",
      end: "2026",
    },
    {
      school: "Durg University",
      href: "https://www.durguniversity.ac.in/",
      degree: "Bachelor's Degree of Computer Science",
      logoUrl: "/Durg_University.png",
      start: "2020",
      end: "2023",
    },
    {
      school: "CGBSE Board",
      href: "https://www.google.com/maps/place/Modern+Public+School/@21.1666039,81.3391199,17z/data=!4m14!1m7!3m6!1s0x3a293cacd87a60ed:0x8b0af94518c84c1!2sModern+Public+School!8m2!3d21.1666039!4d81.3391199!16s%2Fg%2F11cp7k7j3p!3m5!1s0x3a293cacd87a60ed:0x8b0af94518c84c1!8m2!3d21.1666039!4d81.3391199!16s%2Fg%2F11cp7k7j3p?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D",
      degree: "Senior Secondary XII (Science)",
      logoUrl: "/cgbse.png",
      start: "2019",
      end: "2020",
    },
    {
      school: "CGBSE Board",
      href: "https://www.facebook.com/p/Mind-Public-School-Newai-Bhatha-Bhilai-100057325853699/",
      degree: "Secondary X",
      logoUrl: "/cgbse.png",
      start: "2018",
      end: "2019",
    },
  ],
  certification: [
    {
      school: "Udemy",
      href: "https://www.udemy.com",
      degree: "Complete Web Development Bootcamp",
      logoUrl: "/udemy_logo.jfif",
      start: "2023",
      end: "2023",
    },
    {
      school: "Great Learning",
      href: "https://www.greatlearning.in",
      degree: "Java Programming",
      logoUrl: "/great_learning_logo.jfif",
      start: "2023",
      end: "2023",
    },
    {
      school: "Cognitive Class",
      href: "https://cognitiveclass.ai",
      degree: "Python for Data Science",
      logoUrl: "/cognitiveclass_logo.jfif",
      start: "2022",
      end: "2022",
    },
    {
      school: "Simplilearn",
      href: "https://www.simplilearn.com",
      degree: "AWS Cloud Practitioner",
      logoUrl: "/simpiliearn_logo.jfif",
      start: "2022",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "CodeSprint - An Ultimate Code Editor",
      href: "https://codeeditor.devgaurav.me/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "A LeetCode-like coding platform built with Next.js, TypeScript, and Tailwind CSS, where you can add your own questions, practice them, search problems, solve using the Monaco editor, run/submit via Judge0, and track progress with user authentication—all in a clean, responsive UI.",
      technologies: [
        "Next.js",
        "Typescript",
        "Supabase",
        "Clerk",
        "TailwindCSS",
        "Shadcn UI",
        "Judge0",
      ],
      links: [
        {
          type: "Website",
          href: "https://codeeditor.devgaurav.me/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/NextGenGk/Code-Sprint-An-Ultimate-Code-Editor-For-Devs",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/code-editor.png",
      video: "",
    },
    {
      title: "XyStorage - Data Reimagined",
      href: "hhttps://xy-storage-data-reimagined.vercel.app/",
      dates: "Apr 2025 - May 2025",
      active: true,
      description:
        "XyStorage is a fast, secure, and developer-first cloud storage solution designed to scale with your applications. Whether you're building a SaaS product, managing large datasets, or delivering content at scale, XyStorage gives you the tools you need to store, access, and manage files with ease.",
      technologies: [
        "Next.Js",
        "Typescript",
        "AWS SDK",
        "AWS S3",
        "Supabase",
        "Clerk",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://xy-storage-data-reimagined.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/NextGenGk/XyStorage-Data-Reimagined",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/storage.png",
      video: "",
    },
    {
      title: "GitDocs - AI Powered Documentation Generator",
      href: "https://www.gitdocs.xyz/",
      dates: "June 2025 - June 2025",
      active: true,
      description:
        "Paste any GitHub repository link and get a fully formatted README.md in seconds. Includes project title, badges, features, installation steps, usage guide, license, contribution instructions, and contact info — all in clean, structured Markdown. Ideal for open-source projects, portfolios, and hackathons.",
      technologies: [
        "Next.js",
        "Typescript",
        "Supabase",
        "TailwindCSS",
        "Shadcn UI",
        "Google Gemini",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.gitdocs.xyz/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/NextGenGk/GitDocs-AI-Powered-Readme-Generator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/gitdocs.png",
      video: "",
    },
    {
      title: "Teaching Assistant - SaaS",
      href: "https://teaching-assistant-saa-s-app",
      dates: "May 2025 - May 2024",
      active: true,
      description:
        "A web application that allows teachers to manage their classes and students. It provides features such as attendance tracking, grade submission, and communication between teachers and students.",
      technologies: [
        "Next.js",
        "Typescript",
        "Supabase",
        "TailwindCSS",
        "Shadcn UI",
        "Vapi",
        "Clerk",
      ],
      links: [
        {
          type: "Website",
          href: "https://teaching-assistant-saa-s-app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/teaching-assistant.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Youth Conclave 2024 (INAE Innovation Hackathon - IIT Bhilai)",
      dates: "Dec 12th - 13th, 2024",
      location: "IIT Bhilai, C.G",
      description: "",
      image: "/iitbhilai.png",
      mlh: "",
      links: [],
    },
    {
      title: "HackIndia Hacakthon 2025",
      dates: "Apr 1st - 2nd, 2025",
      location: "Durg, C.G",
      description: "",
      image: "/hackindia.png",
      mlh: "",
      links: [],
    },
    {
      title: "Tech x Survival Hackathon (Organized by IEEE Durg)",
      dates: "May 18, 2018",
      location: "Durg, C.G",
      description: "",
      icon: "public",
      image: "/techxsurvival.jpg",
      links: [],
    },
  ],
};
