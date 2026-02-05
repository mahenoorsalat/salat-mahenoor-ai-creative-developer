import { About, Blog, Home, Newsletter, Person, Social, Work, Testimonials } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Salat",
  lastName: "Mahenoor",
  name: "Salat Mahenoor",
  role: "Creative Developer & AI Architect",
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
      I write about the intersection of AI, 3D design, and elite frontend engineering.
      Join my newsletter to stay ahead of the curve.
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
    link: "https://www.fiverr.com/salat_mahenoor",
    essential: true,
  },
];

const home: Home = {
  label: "Home",
  title: `Hire ${person.name} | Top Freelance Full-Stack Developer & AI Architect`,
  featured: {
    display: false,
    title: "New 3D Project",
    href: "/work/project-001",
  },

  description: `Hire ${person.name}, a top-tier Freelance Full-Stack Developer and AI Architect specializing in Next.js, Python, and 3D web experiences. Partner with an expert developer to scale your business or agency with high-performance AI solutions.`,
  keywords: ["Hire Freelance Developer", "Next.js Expert Freelancer", "AI Full-Stack Developer", "Hire AI Architect", "Creative Web Agency", "Next.js Agency", "Portfolio", "Freelance Web Designer", "Mahenoor Salat"],
  headline: <>Crafting the future of AI & Interactive 3D Web</>,
  subline: (
    <>
      I’m Mahenoor, a <Text variant="body-default-s" onBackground="neutral-strong">Creative Developer</Text> and
      <Text variant="body-default-s" onBackground="neutral-strong"> AI Architect</Text> building
      high-performance digital solutions. From <Text variant="body-default-s" onBackground="neutral-strong">Next.js</Text> platforms to immersive <Text variant="body-default-s" onBackground="neutral-strong">WebGL</Text> experiences.
    </>
  ),
  image: "/images/avatar.jpg",
  path: "/",
  services: [
    <>
      <Text variant="heading-strong-l" onBackground="neutral-strong">AI Integration</Text>
      <Text variant="body-default-m" onBackground="neutral-weak">Implementing LLMs (ChatGPT, Claude) for dynamic content generation, chatbots, and personalized user experiences.</Text>
    </>,
    <>
      <Text variant="heading-strong-l" onBackground="neutral-strong">3D Web Experiences</Text>
      <Text variant="body-default-m" onBackground="neutral-weak">Building immersive, high-performance 3D environments with Three.js and WebGL to captivate audiences.</Text>
    </>,
    <>
      <Text variant="heading-strong-l" onBackground="neutral-strong">Premium Frontend & Backend Dev</Text>
      <Text variant="body-default-m" onBackground="neutral-weak">Crafting pixel-perfect, responsive, and accessible user interfaces using Next.js and Tailwind CSS.</Text>
    </>,
    <>
      <Text variant="heading-strong-l" onBackground="neutral-strong">SaaS MVP Development</Text>
      <Text variant="body-default-m" onBackground="neutral-weak">Rapidly prototyping and launching scalable Minimum Viable Products to validate business ideas.</Text>
    </>
  ],
  faq: [
    {
      question: "How do I hire you for my project?",
      answer: (
        <>
          You can start by <Text variant="body-default-s" onBackground="neutral-strong">scheduling a call</Text> or sending an email. I specialize in working with businesses and agencies that need high-end Next.js, AI, or 3D web solutions.
        </>
      ),
    },
    {
      question: "What is your typical project timeline?",
      answer: (
        <>
          Timelines vary by complexity. A standard <Text variant="body-default-s" onBackground="neutral-strong">Next.js MVP</Text> typically takes 2-4 weeks, while immersive 3D experiences or complex AI integrations may take 6-10 weeks.
        </>
      ),
    },
    {
      question: "Do you work with agencies?",
      answer: (
        <>
          Yes, I frequently partner with <Text variant="body-default-s" onBackground="neutral-strong">creative agencies</Text> as a specialist technical lead for AI and 3D web projects, ensuring their clients receive cutting-edge digital products.
        </>
      ),
    },
    {
      question: "What tech stack do you recommend for SEO?",
      answer: (
        <>
          For maximum search visibility and performance, I recommend <Text variant="body-default-s" onBackground="neutral-strong">Next.js (App Router)</Text>, Tailwind CSS, and optimized assets. This ensures fast Core Web Vitals, which is critical for Google ranking.
        </>
      ),
    }
  ]
};


const about: About = {
  label: "About",
  title: `Salat Mahenoor | About & Experience`,
  description: `View the portfolio and resume of ${person.name}, a Senior Freelance Full-Stack Developer and AI Expert. Specializing in MERN, Next.js, and scaling AI-driven businesses and agencies.`,
  keywords: ["Hire Developer Resume", "Senior Freelance Portfolio", "AI Developer Experience", "Full-Stack Engineer for Hire", "Next.js Developer Rajkot"],
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
        I specialize in building high-end digital experiences that convert.
        Whether it's an AI-driven text humanizer or a complex 3D WebGL environment,
        I focus on precision, performance, and premium aesthetics.
        <br /><br />
        Versatile Full-Stack Developer and UI/UX Designer skilled in MERN, Next.js, Django, Python, REST APIs, AI/ML fundamentals, automation, and Web3 integrations. Experienced in building responsive interfaces, backend systems, SEO-optimized workflows, and high-performance applications across diverse industries.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "Developer Studios",
        timeframe: "Dec 2025 - Present",
        role: "Full-Stack Developer",
        achievements: [
          <>Working on full-stack projects involving Next.js, Python, AI APIs, and high-performance UI systems.</>,
        ],
        images: [],
      },
      {
        company: "Stealth Startup",
        timeframe: "2024 - Present",
        role: "Founding Engineer",
        achievements: [
          <>Architected AI-driven workflows for real-world interpersonal connections.</>,
          <>Developed high-performance React components with heavy 3D interactivity.</>,
        ],
        images: [],
      },
      {
        company: "Student Diwan, Qatar",
        timeframe: "Nov 2025 - Present",
        role: "LMS Developer",
        achievements: [
          <>Built and managed LMS features for students using React + Node.</>,
        ],
        images: [],
      },
      {
        company: "Hexoforge LLC",
        timeframe: "Sep 2025 - Present",
        role: "Full-Stack Developer",
        achievements: [
          <>Developed full-stack modules using MERN, Django, and API integrations.</>,
        ],
        images: [],
      },
      {
        company: "GFE Foundation",
        timeframe: "2025 - Present",
        role: "Frontend & Backend Developer",
        achievements: [
          <>Built blockchain-powered dashboards for decentralized energy trading.</>,
        ],
        images: [],
      },
      {
        company: "EGMA",
        timeframe: "Nov 2024 - Dec 2024",
        role: "UI/UX Designer",
        achievements: [
          <>Designed responsive prototypes and improved usability by 40%.</>,
        ],
        images: [],
      },
      {
        company: "Stability Nexus",
        timeframe: "Oct 2024 - Nov 2024",
        role: "Frontend Developer",
        achievements: [
          <>Enhanced mobile responsiveness by 35% and delivered scalable frontend architecture.</>,
        ],
        images: [],
      },
      {
        company: "Xorio",
        timeframe: "Sep 2024 - Oct 2024",
        role: "UI/UX Designer",
        achievements: [
          <>Built interactive prototypes aligned with client branding and design systems.</>,
        ],
        images: [],
      },
      {
        company: "AOSSIE",
        timeframe: "Oct 2024 - Nov 2024",
        role: "Developer Designer",
        achievements: [
          <>Created robotic control UI and optimized REST API workflows.</>,
        ],
        images: [],
      },
      {
        company: "RKWEB",
        timeframe: "Dec 2023 - Jan 2024",
        role: "Frontend Developer",
        achievements: [
          <>Developed and optimized responsive React applications improving load speed by 45%.</>,
        ],
        images: [],
      },
      {
        company: "Freelance",
        timeframe: "2023 - 2024",
        role: "Fullstack Developer & Designer",
        achievements: [
          <>Delivered 10+ high-ticket projects for clients across DeFi, AI, and E-commerce.</>,
          <>Optimized legacy systems for 300% faster load times and 50% better SEO ranking.</>,
        ],
        images: [],
      },
      {
        company: "Al Amaan Institute",
        timeframe: "Apr 2022 - Jul 2022",
        role: "Designer",
        achievements: [
          <>Delivered app interfaces and visual assets improving student engagement.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Manipal University Jaipur",
        description: <>Bachelor of Computer Applications (BCA)</>,
      },
      {
        name: "Royal Commerce School",
        description: <>Higher Secondary (HSC)</>,
      },
      {
        name: "Self-Taught & Specialized Certifications",
        description: (
          <>
            Advanced study in WebGL, NLP, and Modern Frontend Architecture.
            <br />
            <strong>Certifications:</strong>
            <br />
            • Responsive Web Design (freeCodeCamp, Nov 2025)
            <br />
            • Introduction to Google SEO (UC Davis, Jan 2025)
            <br />
            • Microsoft Learn Student Ambassador (Sep 2024)
            <br />
            • Foundations of UX Design (Coursera, Jul 2024)
            <br />
            • Meta Front-End Development (Coursera, Jul 2024)
            <br />
            • UI/UX Certification (Great Learning, May 2024)
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
        title: "Full-Stack Development",
        description: (
          <>
            Scale-ready architecture using React, Next.js, Node.js, and Python frameworks (Django, FastAPI).
          </>
        ),
        tags: [
          { name: "MERN Stack", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Django", icon: "python" },
          { name: "FastAPI", icon: "rocket" },
          { name: "Node.js", icon: "node" },
        ],
      },
      {
        title: "AI & Automation",
        description: (
          <>
            Building intelligent workflows with OpenAI/Anthropic APIs, LangChain, and ML fundamentals.
            Specialized in NLP, prompt engineering, and automated pipelines.
          </>
        ),
        tags: [
          { name: "OpenAI API", icon: "rocket" },
          { name: "LangChain", icon: "grid" },
          { name: "Automation", icon: "gear" },
          { name: "Python", icon: "python" },
        ],
      },
      {
        title: "UI/UX & Interactive Design",
        description: (
          <>
            Creating visually stunning interfaces with Figma, Framer, and Adobe Suite, focused on usability and conversion.
          </>
        ),
        tags: [
          { name: "Figma", icon: "figma" },
          { name: "Adobe CC", icon: "star" },
          { name: "Framer", icon: "layout" },
          { name: "Motion Design", icon: "eye" },
        ],
      },
      {
        title: "Database & Cloud",
        description: (
          <>
            Robust data management with MongoDB, PostgreSQL, and Supabase.
            Deploying on Vercel and AWS.
          </>
        ),
        tags: [
          { name: "MongoDB", icon: "grid" },
          { name: "PostgreSQL", icon: "disc" },
          { name: "Supabase", icon: "terminal" },
          { name: "Vercel" as any, icon: "globe" },
        ],
      },
      {
        title: "Mobile & Other",
        description: (
          <>
            Cross-platform development with Flutter and React Native. Experience with CMS like WordPress and Shopify.
          </>
        ),
        tags: [
          { name: "Flutter", icon: "play" },
          { name: "Shopify", icon: "book" },
          { name: "WordPress", icon: "code" },
        ],
      },
    ],
  },
};

const blog: Blog = {
  label: "Blog",
  title: "Writing & Insights",
  description: `Read about AI, 3D design, and elite web engineering by ${person.name}. Get insights into building high-performance solutions for businesses.`,
  keywords: ["AI Engineering Blog", "Next.js Development Tips", "3D Web Design Insights", "Modern Web Engineering", "Mahenoor Salat Writing"],
  path: "/blog",
};

const work: Work = {
  label: "Work",
  title: "Selected Projects",
  description: `A showcase of high-end projects involving AI, 3D, and premium frontend design by ${person.name}. Hire an expert for your next project.`,
  keywords: ["Full-Stack Portfolio", "AI Project Showcase", "Next.js Web Apps", "Three.js Work", "Digital Agency Portfolio"],
  path: "/work",
};

const testimonials: Testimonials = {
  path: "/testimonials",
  label: "Testimonials",
  title: `Client Testimonials – ${person.name}`,
  description: `What clients say about working with Mahenoor Salat. Read reviews from founders and engineers about high-quality AI and web development services.`,
  keywords: ["Client Testimonials", "Freelance Developer Reviews", "Salat Mahenoor Feedback", "Professional Recommendations", "AI Project Reviews"],
  items: [
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
    },
    {
      name: "Alexene Tomate",
      role: "AI & Data Science | UNESCO Global MIL Youth Hackathon Champion",
      content: (
        <>
          Mahenoor is not only quick to execute tasks but also incredibly proactive, constantly volunteering
          to take on responsibilities and delivering results efficiently. She consistently offered thoughtful
          recommendations that elevated the project. Her initiative and sense of ownership is admirable.
        </>
      ),
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
    },
    {
      name: "Nathan Wong",
      role: "Software Engineer | Security Researcher",
      content: (
        <>
          It was a pleasure working with Mahenoor. She has exceeded my expectations and went above and beyond
          to provide a better user experience. Her creativity and attention to detail provide users with an
          overall great experience. She thoughtfully listens to the client's wants and needs.
        </>
      ),
    },
    {
      name: "Dhrumilkumar Patel",
      role: "Front-end Specialist & Collaborator",
      content: (
        <>
          Mahenoor stands out for her creative approach and front-end expertise. She has consistently
          demonstrated exceptional design skills, innovative problem-solving, and a genuine passion for
          delivering user-friendly experiences. She’s a true asset and a joy to work with.
        </>
      ),
    },
  ],
};

export { person, newsletter, social, home, about, blog, work, testimonials };
