import { About, Blog, Home, Newsletter, Person, Social, Work, Testimonials } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Mahenoor",
  lastName: "Salat",
  name: "Mahenoor Salat",
  role: "Elite Full-Stack Product Engineer | Expert UI/UX Designer & Figma Specialist | AI Automation Expert",
  avatar: "/images/avatar.jpg",
  email: "salatmahenoor7.8.6@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi", "Gujarati"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s insights</>,
  description: (
    <>
      I write about building scalable SaaS products, UI/UX strategy, performance optimization, and the intersection of AI & 3D Web.
    </>
  ),
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/mahenoorsalat",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/salat-mahenoor/",
    essential: true,
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/mahenoorsalat",
    essential: true,
  },
  {
    name: "Dribbble",
    icon: "dribbble",
    link: "https://dribbble.com/salatmahenoor7-8-6",
    essential: true,
  },
  {
    name: "Fiverr",
    icon: "fiverr",
    link: "https://www.fiverr.com/s/Ldj9N8A",
    essential: true,
  },
  {
    name: "Upwork",
    icon: "upwork",
    link: "https://www.upwork.com/freelancers/~017b36696fdb312255?mp_source=share",
    essential: true,
  },
];

const home: Home = {
  label: "Home",
  title: `Hire Mahenoor Salat | AI & Next.js Creative Developer`,
  featured: {
    display: true,
    title: "New: Technical SEO Blueprint for #1 Ranking",
    href: "/blog/technical-seo-blueprint",
  },

  description: `Hire Mahenoor Salat – Top AI Creative Developer & Next.js Engineer. Specialized in Agentic AI, Next.js SaaS, n8n automation, and WebGL products.`,
  keywords: [
    "hire ai creative developer",
    "nextjs ai integration engineer",
    "agentic ai developer langchain",
    "full stack ai developer for hire",
    "hire nextjs developer freelance",
    "full stack developer for hire react nextjs",
    "figma to nextjs developer",
    "ai integration developer freelance",
    "saas mvp developer nextjs india",
    "freelance ui ux designer figma expert",
    "nextjs performance optimization developer",
    "n8n ai automation developer",
    "hire mern stack developer",
    "full stack ai developer for startup",
    "nextjs developer upwork top rated",
    "freelance product engineer nextjs react",
    "webgl threejs developer freelance",
    "ai saas developer india",
    "nextjs developer for saas startup",
    "hire remote developer next js typescript"
  ],
  headline: <>I Build Production-Grade Next.js SaaS Platforms & Automate Operations with n8n AI Agents.</>,
  subline: (
    <>
      Stop losing velocity to technical debt. I function as an <Text as="span" variant="body-default-s" onBackground="neutral-strong">elite plug-and-play contract engineer</Text> helping digital agencies and global tech startups ship high-fidelity products <Text as="span" variant="body-default-s" onBackground="brand-strong">2x faster</Text> with zero operational bottlenecks.
    </>
  ),
  image: "/images/avatar.jpg",
  path: "/",
  faq: [
    {
      question: "How quickly can we start an urgent project?",
      answer: "I prioritize high-impact, high-priority collaborations and can typically kick off a project within 24-48 hours of the initial discovery call. I am optimized for speed and immediate onboarding.",
      answerPlain: "I prioritize high-impact, high-priority collaborations and can typically kick off a project within 24-48 hours of the initial discovery call. I am optimized for speed and immediate onboarding."
    },
    {
      question: "Do you specialize in global SaaS markets?",
      answer: "Yes, I have a proven track record of architecting platforms for high-ticket clients in 40+ countries. I specialize in international SEO (hreflang, geo-routing) and global performance standards for the USA, Europe, and Asia.",
      answerPlain: "Yes, I have a proven track record of architecting platforms for high-ticket clients in 40+ countries. I specialize in international SEO (hreflang, geo-routing) and global performance standards for the USA, Europe, and Asia."
    },
    {
      question: "Can you optimize my existing site for Core Web Vitals?",
      answer: "Performance is my specialty. I provide deep technical audits and 'performance rescues,' often reducing LCP by over 50% and ensuring your site hits perfect scores on Lighthouse for maximum SEO ranking power.",
      answerPlain: "Performance is my specialty. I provide deep technical audits and 'performance rescues,' often reducing LCP by over 50% and ensuring your site hits perfect scores on Lighthouse for maximum SEO ranking power."
    },
    {
      question: "What is your stack for AI-driven products?",
      answer: "I build elite AI solutions using Next.js, OpenAI/Claude APIs, and Vector Databases like Pinecone or Supabase. My architecture focuses on streaming responses, secure server-side logic, and immersive UI/UX.",
      answerPlain: "I build elite AI solutions using Next.js, OpenAI/Claude APIs, and Vector Databases like Pinecone or Supabase. My architecture focuses on streaming responses, secure server-side logic, and immersive UI/UX."
    },
    {
      question: "How can we start working together?",
      answer: (
        <>
          The best way is to <Text as="span" variant="body-default-s" onBackground="neutral-strong">book a strategy call</Text> or send an email. I specialize in high-impact solutions for businesses that need to scale fast with Next.js and AI.
        </>
      ),
      answerPlain: "The best way is to book a strategy call or send an email. I specialize in high-impact solutions for businesses that need to scale fast with Next.js and AI.",
    },
    {
      question: "What is your typical project timeline?",
      answer: (
        <>
          I focus on speed without compromising quality. A <Text as="span" variant="body-default-s" onBackground="neutral-strong">SaaS MVP</Text> typically launches in 2-4 weeks, while complex 3D or AI systems take 6-8 weeks.
        </>
      ),
      answerPlain: "I focus on speed without compromising quality. A SaaS MVP typically launches in 2-4 weeks, while complex 3D or AI systems take 6-8 weeks.",
    },
    {
      question: "Do you partner with agencies?",
      answer: (
        <>
          Yes, I act as a <Text as="span" variant="body-default-s" onBackground="neutral-strong">specialist technical lead</Text> for creative agencies, delivering the high-end AI and 3D features that help them win and retain premium clients.
        </>
      ),
      answerPlain: "Yes, I act as a specialist technical lead for creative agencies, delivering the high-end AI and 3D features that help them win and retain premium clients.",
    },
    {
      question: "Why Next.js for high-performance projects?",
      answer: (
        <>
          Next.js offers the best balance of <Text as="span" variant="body-default-s" onBackground="neutral-strong">SEO supremacy</Text> and speed. By optimizing Core Web Vitals, I ensure your platform ranks higher and converts better.
        </>
      ),
      answerPlain: "Next.js offers the best balance of SEO supremacy and speed. By optimizing Core Web Vitals, I ensure your platform ranks higher and converts better.",
    }
  ],
  services: [
    {
      title: "Enterprise AI Infrastructure",
      description: "Deploy custom LLM systems and autonomous agents that dominate workflows and drive measurable conversion lift.",
      content: (
        <>
          <Text variant="heading-strong-l" onBackground="neutral-strong">AI Integration</Text>
          <Text variant="body-default-m" onBackground="neutral-weak">Implementing industrial-grade LLMs (GPT-4, Claude) for dynamic content engines and intelligent automation that scales effortlessly.</Text>
        </>
      )
    },
    {
      title: "Immersive 3D Experience",
      description: "Command attention and eliminate bounce rates with high-fidelity 3D environments built on Three.js and WebGL.",
      content: (
        <>
          <Text variant="heading-strong-l" onBackground="neutral-strong">3D Web Systems</Text>
          <Text variant="body-default-m" onBackground="neutral-weak">Building pixel-perfect, high-performance 3D worlds that captivate elite audiences and maximize user session duration.</Text>
        </>
      )
    },
    {
      title: "Elite Full-Stack SaaS",
      description: "Scale with authority using high-performance Next.js architectures optimized for sub-1s load times and global reach.",
      content: (
        <>
          <Text variant="heading-strong-l" onBackground="neutral-strong">Premium SaaS Dev</Text>
          <Text variant="body-default-m" onBackground="neutral-weak">Crafting robust, accessible, and high-conversion interfaces that reduce technical debt and accelerate product market fit.</Text>
        </>
      )
    },
    {
      title: "High-Ticket MVP Launch",
      description: "Launch market-ready platforms in weeks. Scalable architectures designed for rapid validation and explosive growth.",
      content: (
        <>
          <Text variant="heading-strong-l" onBackground="neutral-strong">SaaS MVP Delivery</Text>
          <Text variant="body-default-m" onBackground="neutral-weak">Rapidly prototyping and deploying production-grade MVPs with 2x faster delivery cycles and zero technical compromise.</Text>
        </>
      )
    },
    {
      title: "Conversion-Led Strategy",
      description: "Premium UI/UX and growth engineering that transforms users into advocates through sensory and motion design.",
      content: (
        <>
          <Text variant="heading-strong-l" onBackground="neutral-strong">Growth Architecture</Text>
          <Text variant="body-default-m" onBackground="neutral-weak">Creating weighted, high-authority digital experiences that command premium rates and drive measurable business outcomes.</Text>
        </>
      )
    }
  ],
  stats: [
    {
      label: "Job Success Score",
      value: "100%",
      platform: "Upwork",
      link: "https://www.upwork.com/freelancers/~017b36696fdb312255?mp_source=share"
    },
    {
      label: "Projects Delivered",
      value: "11+",
      platform: "Fiverr",
      link: "https://www.fiverr.com/s/Ldj9N8A"
    },
    {
      label: "Global Clients",
      value: "250+",
      platform: "General"
    }
  ]
};


const about: About = {
  label: "About",
  title: `Mahenoor Salat | Full-Stack Developer & UI/UX Designer – Resume & Portfolio`,
  description: `Portfolio and resume of Mahenoor Salat, a Freelance Full-Stack Developer and UI/UX Designer. Specializing in Next.js, React, MERN, Figma, and AI automation. 5+ years building SaaS products and digital platforms for global clients.`,
  keywords: [
    "mahenoor salat developer portfolio",
    "full stack developer resume india 2025",
    "nextjs developer experience figma",
    "ai automation developer n8n upwork",
    "saas product engineer india freelance",
    "figma ui ux designer developer portfolio",
    "full stack developer for saas hire"
  ],
  path: "/about",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/salatmahenoor7-8-6/30min",
  },
  intro: {
    display: true,
    title: "The Vision",
    description: (
      <>
        I am a Full-Stack Product Engineer focused on building scalable, high-performance SaaS products and
        conversion-driven digital platforms. With a proven track record of <Text as="span" variant="body-default-s" onBackground="neutral-strong">reducing load times by up to 40%</Text>, 
        accelerating <Text as="span" variant="body-default-s" onBackground="neutral-strong">product delivery by 2x</Text>, and supporting systems used by <Text as="span" variant="body-default-s" onBackground="neutral-strong">1000+ users</Text>. 
        I combine engineering, UI/UX strategy, and performance optimization to deliver measurable business outcomes.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "The GKT Web",
        timeframe: "Dec 2024 – Apr 2026",
        role: "Senior Software Engineer (Remote)",
        achievements: [
          <>Led development of 5+ SaaS platforms, cutting product launch timelines by 50%.</>,
          <>Reduced application load times by up to 40%, increasing session duration and retention.</>,
          <>Improved engagement across core flows by redesigning UI structure and frontend logic.</>,
          <>Shipped features used by 1000+ active users, maintaining high system stability and uptime.</>,
          <>Boosted organic traffic through structured technical SEO and performance enhancements.</>,
        ],
        images: [],
      },
      {
        company: "Hexoforge LLC",
        timeframe: "Nov 2025 – Jan 2026",
        role: "Senior Frontend Developer (Remote)",
        achievements: [
          <>Architected scalable frontend systems using React and Next.js supporting 3+ production applications and improving deployment efficiency.</>,
          <>Reduced development cycles by 30–40% through reusable component systems.</>,
          <>Increased user interaction by simplifying navigation and improving accessibility.</>,
          <>Raised Core Web Vitals scores, leading to faster rendering and responsiveness.</>,
        ],
        images: [],
      },
      {
        company: "Developer Studios",
        timeframe: "Nov 2025 – Dec 2025",
        role: "Full-Stack Developer (Remote)",
        achievements: [
          <>Built 5+ full-stack modules aligned with business requirements, accelerating feature delivery cycles.</>,
          <>Strengthened system reliability, reducing production issues by ~25% through structured backend and frontend practices.</>,
          <>Delivered maintainable codebase lowering long-term technical debt and reducing bug resolution time by ~20%.</>,
        ],
        images: [],
      },
      {
        company: "AOSSIE",
        timeframe: "Jan 2024 – Nov 2025",
        role: "Full-Stack Developer",
        achievements: [
          <>Contributed to platforms used by global open-source communities (100+ contributors) improving collaboration and feature scalability.</>,
          <>Improved system efficiency across multiple modules and user flows.</>,
          <>Collaborated in distributed teams of 10+ developers to deliver consistent releases.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies & Certifications",
    institutions: [
      {
        name: "Manipal University Jaipur",
        description: <>Bachelor’s Degree in Computer Science (2024 – 2026)</>,
      },
      {
        name: "Specialized Certifications",
        description: (
          <>
            • Responsive Web Design (freeCodeCamp)
            <br />
            • Introduction to Google SEO (University of California, Davis)
            <br />
            • Microsoft Learn Student Ambassador (2024)
            <br />
            • Meta Front-End Development (Coursera)
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Expertise",
    skills: [
      {
        title: "Frontend Development",
        description: (
          <>
            Specializing in high-performance React and Next.js (SSR/SSG) interfaces with sub-1s load times and elite motion design.
          </>
        ),
        tags: [
          { name: "React.js", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "TypeScript", icon: "javascript" },
          { name: "MERN Stack", icon: "node" },
          { name: "Tailwind CSS", icon: "tailwind" },
        ],
      },
      {
        title: "Backend & Systems",
        description: (
          <>
            Architecting scalable backend infrastructures and secure API integrations for production-grade SaaS products.
          </>
        ),
        tags: [
          { name: "Node.js", icon: "node" },
          { name: "Express.js", icon: "node" },
          { name: "REST APIs", icon: "openLink" },
          { name: "API Integrations", icon: "globe" },
        ],
      },
      {
        title: "Databases & Infrastructure",
        description: (
          <>
            Managing secure, performant data layers across NoSQL and SQL environments.
          </>
        ),
        tags: [
          { name: "MongoDB", icon: "mongodb" },
          { name: "PostgreSQL", icon: "supabase" },
          { name: "Supabase", icon: "supabase" },
          { name: "Git", icon: "github" },
          { name: "Vercel", icon: "rocket" },
          { name: "CI/CD", icon: "rocket" },
        ],
      },
      {
        title: "Expert UI/UX & Figma Strategy",
        description: (
          <>
            Building high-fidelity design systems, wireframes, and prototypes in Figma that bridge the gap between user experience and engineering.
          </>
        ),
        tags: [
          { name: "Figma Expert", icon: "figma" },
          { name: "Design Systems", icon: "grid" },
          { name: "UI/UX Strategy", icon: "person" },
          { name: "App Design", icon: "grid" },
          { name: "Presentation Design", icon: "document" },
        ],
      },
      {
        title: "AI & Automation Strategy",
        description: (
          <>
            Specializing in n8n workflow automation, AI agent development, and high-fidelity LLM S2 annotation for enterprise applications.
          </>
        ),
        tags: [
          { name: "n8n Automation", icon: "grid" },
          { name: "AI Agents", icon: "rocket" },
          { name: "LLM Annotation", icon: "person" },
          { name: "AI Training", icon: "rocket" },
          { name: "OpenAI/Claude", icon: "rocket" },
        ],
      },
      {
        title: "Performance & Growth",
        description: (
          <>
            Optimizing for Core Web Vitals and Technical SEO to ensure maximum reach and conversion.
          </>
        ),
        tags: [
          { name: "Technical SEO", icon: "globe" },
          { name: "Core Web Vitals", icon: "rocket" },
          { name: "Performance Optimization", icon: "rocket" },
        ],
      },
    ],
  },
};

const blog: Blog = {
  label: "Blog",
  title: "Next.js, AI & SaaS Engineering Blog | Mahenoor Salat",
  description: `Technical blog by Mahenoor Salat — freelance full-stack developer. Covers Next.js performance, AI automation, SaaS architecture, Figma design systems, and WebGL/Three.js. Updated regularly.`,
  keywords: [
    "nextjs saas development tutorial",
    "ai integration web development blog",
    "nextjs performance optimization guide",
    "how to build saas with nextjs react",
    "ai powered product development tips",
    "full stack developer engineering blog",
    "webgl threejs web development tutorial"
  ],
  path: "/blog",
};

const work: Work = {
  label: "Work",
  title: `Mahenoor Salat | Full-Stack Developer Portfolio & Case Studies`,
  description: `Explore Mahenoor Salat's portfolio of Next.js SaaS products, AI-powered platforms, Figma UI/UX design systems, and 3D web experiences. Real case studies with measurable results.`,
  keywords: ["nextjs developer portfolio projects", "saas product ui ux showcase", "react nextjs performance case study", "figma ui ux design portfolio", "ai integration project examples"],
  path: "/work",
};

const testimonials: Testimonials = {
  path: "/testimonials",
  label: "Testimonials",
  title: `Mahenoor Salat Reviews | Client Testimonials & Feedback`,
  description: `Read verified client reviews for Mahenoor Salat — freelance full-stack developer and UI/UX designer. Real testimonials from founders, engineers, and agencies across Upwork and global projects.`,
  keywords: ["mahenoor salat reviews", "freelance developer upwork testimonials", "nextjs developer client feedback", "ui ux designer testimonials", "full stack developer reviews india"],
  items: [
    {
      name: "Upwork Client",
      role: "Website Full Stack Development Revamp",
      content: (
        <>
          Mahenoor delivered an excellent full stack revamp with strong attention to both UI quality and backend performance. She communicated proactively throughout the project and handled technical challenges with confidence. Her understanding of modern web technologies is solid, and the final result exceeded expectations. Highly recommend her for any full stack development work.
        </>
      ),
      contentPlain: "Mahenoor delivered an excellent full stack revamp with strong attention to both UI quality and backend performance. She communicated proactively throughout the project and handled technical challenges with confidence. Her understanding of modern web technologies is solid, and the final result exceeded expectations. Highly recommend her for any full stack development work.",
      rating: 5,
    },
    {
      name: "Upwork Client",
      role: "Senior UI/UX Designer (Figma)",
      content: (
        <>
          Good result, fast responsible. Thanks!
        </>
      ),
      contentPlain: "Good result, fast responsible. Thanks!",
      rating: 5,
    },
    {
      name: "Murtaza Ali",
      role: "Founder @ Stealth Startup / xFounder @ Fintech",
      content: (
        <>
          I’ve worked closely with Mahenoor. She’s fast-learning, reliable, and delivers with ownership
          exactly the kind of talent early-stage teams need. I’ve been impressed by her growth, her attitude,
          and her willingness to take on challenges. Strongly recommend her.
        </>
      ),
      contentPlain: "I’ve worked closely with Mahenoor. She’s fast-learning, reliable, and delivers with ownership exactly the kind of talent early-stage teams need. I’ve been impressed by her growth, her attitude, and her willingness to take on challenges. Strongly recommend her.",
      rating: 5,
      metrics: [
        { label: "Productivity", value: "+50%" },
        { label: "Stability", value: "High" }
      ]
    },
    {
      name: "Alex Tomate",
      role: "Product & Systems | AI & Data | Creative Tech",
      content: (
        <>
          Mahenoor is not only quick to execute tasks but also incredibly proactive, constantly volunteering
          to take on responsibilities and delivering results efficiently. She consistently offered thoughtful
          recommendations and improvements that elevated the project. Her initiative and sense of ownership is admirable.
        </>
      ),
      contentPlain: "Mahenoor is not only quick to execute tasks but also incredibly proactive, constantly volunteering to take on responsibilities and delivering results efficiently. She consistently offered thoughtful recommendations and improvements that elevated the project. Her initiative and sense of ownership is admirable.",
      rating: 5,
      metrics: [
        { label: "Execution", value: "Rapid" },
        { label: "Proactivity", value: "100%" }
      ]
    },
    {
      name: "Radu Marias",
      role: "Senior Software Developer | Rust Specialist",
      content: (
        <>
          Mahenoor's expertise in web development, SEO, and design was exceptional. She created professional,
          user-friendly websites for rencfs and genie-do, translating complex technical concepts into
          clear and visually appealing platforms. Her work on my portfolio site was a testament to her reliability.
        </>
      ),
      contentPlain: "Mahenoor's expertise in web development, SEO, and design was exceptional. She created professional, user-friendly websites for rencfs and genie-do, translating complex technical concepts into clear and visually appealing platforms. Her work on my portfolio site was a testament to her reliability.",
      rating: 5,
      metrics: [
        { label: "SEO Growth", value: "3x" },
        { label: "UX Fidelity", value: "Pixel Perfect" }
      ]
    },
    {
      name: "Dr. Bruno Woltzenlogel Paleo",
      role: "The Stable Order / DeFi Stability Specialist",
      content: (
        <>
          Mahenoor replaced the landing page of our hodlCoin staking protocol with a completely new and
          nice-looking page using v0.dev, Next.js and Tailwind CSS. She was attentive to feedback and
          persistent to achieve the end goal. We are grateful for her contribution.
        </>
      ),
      contentPlain: "Mahenoor replaced the landing page of our hodlCoin staking protocol with a completely new and nice-looking page using v0.dev, Next.js and Tailwind CSS. She was attentive to feedback and persistent to achieve the end goal. We are grateful for her contribution.",
      rating: 5,
      metrics: [
        { label: "Load Time", value: "-40%" },
        { label: "Conversion", value: "+25%" }
      ]
    },
    {
      name: "Nathan Wong",
      role: "Software Engineer | Security Researcher",
      content: (
        <>
          She has exceeded my expectations and went above and beyond to provide a better user experience.
          Her creativity and attention to detail provide users with an overall great experience.
          Mahenoor thoughtfully listens to the client's wants and needs.
        </>
      ),
      contentPlain: "She has exceeded my expectations and went above and beyond to provide a better user experience. Her creativity and attention to detail provide users with an overall great experience. Mahenoor thoughtfully listens to the client's wants and needs.",
      rating: 5,
    },
    {
      name: "Dhrumilkumar Patel",
      role: "Software/Cloud Engineer | Full-Stack specialist",
      content: (
        <>
          Mahenoor stands out for her creative approach and front-end expertise. She has consistently
          demonstrated exceptional design skills, innovative problem-solving, and a genuine passion for
          delivering user-friendly experiences. She’s a true asset and a joy to work with.
        </>
      ),
      contentPlain: "Mahenoor stands out for her creative approach and front-end expertise. She has consistently demonstrated exceptional design skills, innovative problem-solving, and a genuine passion for delivering user-friendly experiences. She’s a true asset and a joy to work with.",
      rating: 5,
    },
  ],
};

export { person, newsletter, social, home, about, blog, work, testimonials };
