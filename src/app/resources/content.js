import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "BUI",
  lastName: "NGOC QUY",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "DevOps Engineer",
  avatar: "/images/quybn.jpg",
  location: "Asia/Ho_Chi_Minh", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Vietnamese"], // optional: Leave the array empty if you don't want to display languages
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/QuyNgocB",
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/bui.ngoc.quy.337349",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:quybn027@gmail.com",
  },
];
/*
const home = {
  label: "Home",
  headline: <>DevOps Engineer & System Builder</>,
  subline: (
    <>
    I'm Quy, a DevOps engineer passionate about building scalable, reliable systems.
    <br /> I specialize in CI/CD, container orchestration, and cloud infrastructure.
    </>
  ),
};
*/
const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a progressive, eager to learn, responsible and agile person at work, knowing how to listen to other people's opinions to improve myself. 
        I am a cheerful, sociable person, able to integrate into different environments. 
        I am always proactive in learning, improving my expertise and professional skills, and ready to seize opportunities to develop my career. My goal is to become a good DevOps Engineer in the next few years.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Gotadi",
        timeframe: "09/2024 - Present",
        role: "Junior System Engineer",
        achievements: [
          <>
            Installed, monitored, and troubleshooted Windows and Linux server systems, ensuring stable and secure operations across environments.
          </>,
          <>
            Managed internal LAN/WAN networks, including routers, switches, and firewalls, and enforced security policies such as VPN, access control, and password management.
          </>,
          <>
            Automated CI/CD pipelines with GitLab CI and Docker, streamlining image build and deployment to container registries.
          </>,
          <>
            Deployed and managed containerized applications on Kubernetes, integrating Longhorn for persistent storage and ensuring system reliability.
          </>,
          <>
            Implemented HAProxy + Keepalived clusters for load balancing and high availability across backend systems.
          </>,
          <>
            Integrated ArgoCD with GitLab CI for automated release and GitOps-based deployment workflows.
          </>,
          <>
            Designed and deployed centralized logging (ELK stack) and monitoring systems (Prometheus & Grafana) for end-to-end observability.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Van Hien University",
        description: <>Studied network engineering.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Linux LPI",
      },
      {
        title: "Docker",
      },
      {
        title: "Python",
      },
      {
        title: "Kubernetes",
      },  
    ],
  },
};
/*
const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};
*/
export { person, social, about };
