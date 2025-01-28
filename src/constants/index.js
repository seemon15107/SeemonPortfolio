import project1 from "../assets/project1.png";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";



export const LINKS = [
  { href: "#Hero", label: "Home" },
  { href: "#project", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];



export const HERO_CONTENT = {
  greeting: "Hello!🙏 ",
  name: "I am Seemon Bhadoria",
  introduction:
    "Welcome to my portfolio! Here, you’ll find a collection of my work, including innovative applications and key projects that highlight my journey as a software engineer.",
  description:
    "Driven by curiosity and a commitment to learning, I aim to build impactful solutions that make a difference. I enjoy exploring new ideas and building solutions that create meaningful impact. Always eager to learn and grow in the ever-evolving world of technology.",
  resumeLinkText: "Download Resume",
  resumeLink: "/Seemon_resume.pdf",
};



export const PROJECTS = [
  {
    name: "ImaginAIry",
    description: "Unleash your creativity with AI—generate stunning images from your imagination in seconds!",
    image: project1,
    link: "https://github.com/seemon15107/ImaginAIry",
  },
  {
    name: "Fun App",
    description: "Your all-in-one hub for everyday essentials—music, games, tools, and more!",
    image: project2,
    link: "https://github.com/seemon15107/Fun-App",
  },
  {
    name: "server Less WebApp",
    description: "A serverless web application designed for scalability, efficiency, and seamless user experience."
,
    image: project3,
    link: "https://github.com/your-github/hairrevive",
  },
];


export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a dedicated frontend developer with a passion for building modern web applications that are both functional and aesthetically pleasing. Over the years, I have worked on numerous projects ranging from single-page applications to complex multi-tiered systems, always ensuring high performance and seamless user experiences.",
    "I specialize in using technologies like React, Next.js, and Tailwind CSS to create responsive and scalable interfaces. My focus is on writing clean, maintainable code while collaborating with cross-functional teams to deliver projects that meet both business goals and user needs. I thrive in environments that challenge me to continuously learn and grow.",
  ],
};



export const EXPERIENCES = [
  {
    yearRange: "Apr 2024-Sept 2024",
    title: "Genius Labs",
    location: "Software Developer Intern",
    place: "Noida",
    description: [
      "Worked with the frontend team and designed and implemented a responsive user interface using HTML, CSS and JAVASCRIPT to ensure compatibility across devices and browsers.",
      "Worked with backend team and gained knowledge to build and integrate server-side logic with database connectivity through mySQL.",
      "Integrated secure payment gateways with Razorpay to enable seamless online transactions.",
    ],
  },
  {
    yearRange: "july 2023-Aug 2023",
    title: "HP Internship and Training Center",
    location: "Android Developer",
    place: "Kanpur",
    description: [
      "During my internship, I gained hands-on experience in Android app development using Java, enhancing my skills in building and optimizing mobile applications.",
      "I worked as part of a team on a project where we developed a mobile application that has daily essential apps like a music, gallery, calculator, and more.",
      "The project focused on creating a user-friendly interface, integrating essential tools and features that are easy to navigate and enhance the user experience.",
    ],
  },
];



export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "bhadoriaseemon12@gmail.com",
  socialLinks: [
    {
      platform: "Twitter",
      url: "https://twitter.com/yourprofile",
      ariaLabel: "Follow me on Twitter",
      icon: "RiTwitterXFill",
    },
    {
      platform: "GitHub",
      url: "https://github.com/seemon15107",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/seemon-bhadoria-b66189303",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Seemon Bhadoria. All rights reserved.`,
};
