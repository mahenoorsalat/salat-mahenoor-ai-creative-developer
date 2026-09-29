import { About, Blog, Home, Newsletter, Person, Social, Work, Testimonials } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Mahenoor",
  lastName: "Salat",
  name: "Mahenoor Salat",
  role: "Senior Full-Stack Engineer — Next.js, TypeScript & AI Integration | Open to Full-Time Remote Roles",
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
  title: `Mahenoor Salat | Senior Full-Stack Engineer (Next.js + AI)`,
  featured: {
    display: true,
    title: "New: Technical SEO Blueprint for #1 Ranking",
    href: "/blog/technical-seo-blueprint",
  },

  description: `Mahenoor Salat — Senior Full-Stack Engineer specializing in Next.js, TypeScript, and production AI integration. Open to full-time remote roles.`,
  keywords: [
    "mahenoor salat",
    "salat mahenoor",
    "mahenoor salat nextjs developer",
    "senior full-stack engineer remote",
    "nextjs typescript ai integration",
    "hire remote full-stack developer",
    "mern stack developer portfolio",
    "core web vitals performance engineer"
  ],
  headline: <>Senior Full-Stack Engineer building production-grade Next.js + AI SaaS platforms.</>,
  subline: (
    <>
      3+ years shipping Next.js/TypeScript SaaS — from UX and system architecture to deployment, Core Web Vitals, and production AI integration. Open to full-time remote roles and high-ownership product teams.
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
      question: "Are you a simple API wrapper developer or do you build production AI architectures?",
      answer: "I build production-grade AI systems with custom RAG pipelines, Supabase/Pinecone vector databases, RLHF prompt alignment, streaming LLM interfaces, and n8n automations. Verified experience at Turing (San Francisco) and OpenClaw.",
      answerPlain: "I build production-grade AI systems with custom RAG pipelines, Supabase/Pinecone vector databases, RLHF prompt alignment, streaming LLM interfaces, and n8n automations. Verified experience at Turing (San Francisco) and OpenClaw."
    },
    {
      question: "How do your rates compare to hiring a boutique US AI agency?",
      answer: "Boutique US agencies charge $30,000-$150,000 with heavy account manager overhead. Working directly with me gives you Senior US-tier AI engineering quality 2x faster at transparent contract rates with zero agency markup.",
      answerPlain: "Boutique US agencies charge $30,000-$150,000 with heavy account manager overhead. Working directly with me gives you Senior US-tier AI engineering quality 2x faster at transparent contract rates with zero agency markup."
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
      label: "Years Experience",
      value: "3+",
      platform: "General"
    },
    {
      label: "Production Projects Shipped",
      value: "15+",
      platform: "General"
    },
    {
      label: "Upwork Job Success",
      value: "100%",
      platform: "Upwork",
      link: "https://www.upwork.com/freelancers/~017b36696fdb312255?mp_source=share"
    }
  ]
};


const about: About = {
  label: "About",
  title: `Mahenoor Salat | Senior Full-Stack Engineer (Next.js + AI)`,
  description: `Background of Mahenoor Salat – Senior Full-Stack Engineer specializing in Next.js 15, TypeScript, SaaS platforms, and production AI integration. Open to full-time remote roles.`,
  keywords: [
    "mahenoor salat",
    "salat mahenoor",
    "mahenoor salat nextjs developer",
    "senior full-stack engineer resume",
    "remote nextjs engineer india"
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
        I am a Senior Full-Stack Engineer specializing in production-grade Next.js SaaS platforms and practical AI integration.
        Previously with <Text as="span" variant="body-default-s" onBackground="neutral-strong">Turing, OpenClaw, and HeuristixAI</Text>, I focus on
        clean architecture, <Text as="span" variant="body-default-s" onBackground="brand-strong">Core Web Vitals and measurable product impact</Text> for
        remote product teams across the USA, Europe, and Asia. Open to full-time remote roles.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "Turing",
        timeframe: "Mar 2026 – Jun 2026 · Contract",
        role: "LLM Evaluation Specialist — Contract (San Francisco, CA · Remote)",
        achievements: [
          <>Contributed to training, evaluation, and optimization of large language models (LLMs) for enterprise AI applications.</>,
          <>Reviewed and annotated AI-generated code and responses for accuracy, complex reasoning, safety, and contextual relevance.</>,
          <>Performed prompt engineering, response ranking, error detection, and reinforcement feedback (RLHF) to improve LLM accuracy.</>,
          <>Collaborated with Silicon Valley AI research and engineering teams to refine evaluation pipelines and alignment standards.</>,
        ],
        images: [],
      },
      {
        company: "OpenClaw",
        timeframe: "Mar 2026 – Jun 2026 · Contract",
        role: "AI Trajectory Specialist — Contract (Remote)",
        achievements: [
          <>Utilized OpenClaw sandbox environments for technical data alignment, prompt engineering, and model trajectory refinement.</>,
          <>Evaluated complex model agent behaviors to improve reasoning capabilities, coding safety, and task execution precision.</>,
        ],
        images: [],
      },
      {
        company: "HeuristixAI",
        timeframe: "Nov 2025 – Apr 2026 · Contract",
        role: "Senior Software Engineer — Contract (Remote)",
        achievements: [
          <>Owned end-to-end full-stack SaaS product development — from UX strategy and system architecture to Next.js deployment.</>,
          <>Collaborated with founders to transform early-stage concepts into production-ready platforms, optimizing speed and conversion rates.</>,
          <>Implemented technical SEO and Core Web Vitals strategies to increase organic search reach and visibility.</>,
        ],
        images: [],
      },
      {
        company: "The GKT Web",
        timeframe: "Dec 2024 – Apr 2026 · Part-time",
        role: "Senior Software Engineer — Part-time (Remote)",
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
        timeframe: "Nov 2025 – Jan 2026 · Contract",
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
        timeframe: "Nov 2025 – Dec 2025 · Contract",
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
        timeframe: "Jan 2024 – Nov 2025 · Open Source",
        role: "Full-Stack Developer",
        achievements: [
          <>Contributed to platforms used by global open-source communities (100+ contributors) improving collaboration and feature scalability.</>,
          <>Improved system efficiency across multiple modules and user flows.</>,
          <>Collaborated in distributed teams of 10+ developers to deliver consistent releases.</>,
        ],
        images: [],
      },
      {
        company: "RKWEB",
        timeframe: "Jan 2023 – Dec 2023",
        role: "Full Stack Engineer (Remote)",
        achievements: [
          <>Developed responsive user interfaces using React.js, Tailwind CSS, HTML, and JavaScript.</>,
          <>Collaborated closely with design and backend teams to integrate front-end and back-end functionalities seamlessly.</>,
          <>Converted design mockups into interactive web applications, focusing on performance optimization and UX enhancement.</>,
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
        title: "AI Product Management & LLM Model Training",
        description: (
          <>
            Specialized in AI Product Management (AIPM), Turing S2 LLM evaluation, RLHF prompt engineering, OpenClaw CUA trajectory alignment, and Claude Code automated AI development workflows.
          </>
        ),
        tags: [
          { name: "AI Product Manager (AIPM)", icon: "star" },
          { name: "LLM Trainer & Evaluator", icon: "rocket" },
          { name: "Claude Code / Cursor Specialist", icon: "openLink" },
          { name: "OpenClaw Trajectory Specialist", icon: "globe" },
          { name: "RLHF & Prompt Engineering", icon: "star" },
          { name: "Turing S2 Annotator", icon: "rocket" },
        ],
      },
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
        title: "LLM Model Training, RLHF & AI Product Management (AIPM)",
        description: (
          <>
            Specializing in high-rate LLM model evaluation (Turing S2 benchmark standards), prompt engineering, RLHF feedback alignment, and AI Product Management (AIPM) for Silicon Valley & global tech enterprises.
          </>
        ),
        tags: [
          { name: "LLM Model Trainer", icon: "rocket" },
          { name: "AI Product Manager (AIPM)", icon: "person" },
          { name: "RLHF & Prompt Alignment", icon: "document" },
          { name: "Complex Code Reasoning", icon: "javascript" },
          { name: "n8n AI Automations", icon: "grid" },
          { name: "OpenAI / Claude / Gemini", icon: "rocket" },
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
    "mahenoor salat blog",
    "nextjs performance guide",
    "saas architecture nextjs",
    "ai integration web development"
  ],
  path: "/blog",
};

const work: Work = {
  label: "Work",
  title: `Mahenoor Salat | Senior Full-Stack Engineer — Selected Work`,
  description: `Selected production work by Mahenoor Salat — Next.js SaaS platforms, AI-integrated products, and high-performance web experiences with measurable results.`,
  keywords: ["mahenoor salat portfolio", "nextjs saas case studies", "full-stack engineer selected work"],
  path: "/work",
};

const testimonials: Testimonials = {
  path: "/testimonials",
  label: "Testimonials",
  title: `Mahenoor Salat Reviews | Client Testimonials & Feedback`,
  description: `Read verified client reviews for Mahenoor Salat — freelance full-stack developer and UI/UX designer. Real testimonials from founders, engineers, and agencies across Upwork and global projects.`,
  keywords: ["mahenoor salat reviews", "full-stack developer client feedback"],
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
