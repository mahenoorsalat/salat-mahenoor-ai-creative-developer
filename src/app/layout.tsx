import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "@/resources/custom.css";

import classNames from "classnames";

import {
  Background,
  Column,
  Flex,
  Meta,
  opacity,
  RevealFx,
  SpacingToken,
} from "@once-ui-system/core";
import { Footer, Header, Providers, StructuredData, AiAssistantWidget } from "@/components";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { baseURL, effects, fonts, style, dataStyle, home, person, social } from "@/resources";

export async function generateMetadata() {
  const metadata = Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });

  const ogImageUrl = `${baseURL}/api/og/generate?title=${encodeURIComponent(home.title)}`;

  return {
    ...metadata,
    metadataBase: new URL(baseURL),
    openGraph: {
      title: home.title,
      description: home.description,
      url: baseURL,
      siteName: person.name,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: home.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: home.title,
      description: home.description,
      creator: "@mahenoorsalat",
      site: "@mahenoorsalat",
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD for Person/Organization
  /* Enhanced SEO: Professional Service Schema */
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${baseURL}/#person`,
        name: "Salat Mahenoor",
        alternateName: [
          "Mahenoor Salat"
        ],
        givenName: "Mahenoor",
        familyName: "Salat",
        jobTitle: "Senior Full-Stack Engineer",
        image: `${baseURL}${person.avatar}`,
        url: baseURL,
        mainEntityOfPage: baseURL,
        sameAs: [
          "https://github.com/mahenoorsalat",
          "https://www.linkedin.com/in/salat-mahenoor/",
          "https://x.com/mahenoorsalat",
          "https://dribbble.com/salatmahenoor7-8-6",
          "https://www.fiverr.com/salat_mahenoor",
          "https://www.upwork.com/freelancers/~017b36696fdb312255"
        ],
        description: home.description,
        worksFor: [
          { "@type": "Organization", "name": "Turing (San Francisco, CA)", "url": "https://www.turing.com" },
          { "@type": "Organization", "name": "OpenClaw" },
          { "@type": "Organization", "name": "HeuristixAI" }
        ],
        alumniOf: [
          { "@type": "EducationalOrganization", "name": "Manipal University Jaipur" },
          { "@type": "Organization", "name": "AOSSIE Open Source" }
        ],
        knowsAbout: ["Full-Stack Development", "Next.js", "TypeScript", "React", "Node.js", "AI Integration", "Core Web Vitals", "Technical SEO"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Rajkot",
          addressRegion: "Gujarat",
          addressCountry: "India"
        }
      },
      {
        "@type": "WebSite",
        "@id": `${baseURL}/#website`,
        url: baseURL,
        name: "Salat Mahenoor | Senior Full-Stack Engineer (Next.js + AI)",
        alternateName: "Mahenoor Salat Portfolio",
        publisher: {
          "@id": `${baseURL}/#person`
        },
        inLanguage: "en-US"
      },
      {
        "@type": "ProfilePage",
        "@id": `${baseURL}/#profilepage`,
        url: baseURL,
        name: "Mahenoor Salat - Senior Full-Stack Engineer Profile",
        mainEntity: {
          "@id": `${baseURL}/#person`
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": `${baseURL}/hire`,
        name: `Mahenoor Salat | Senior Full-Stack Engineering (Next.js + AI)`,
        url: `${baseURL}/hire`,
        logo: `${baseURL}/images/avatar.jpg`,
        image: `${baseURL}/images/avatar.jpg`,
        description: "Senior Full-Stack Engineer for remote roles and fixed-scope contracts: Next.js SaaS platforms, production AI integration, and performance remediation.",
        priceRange: "$$",
        areaServed: "Remote, worldwide",
        offers: [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Full-Time Remote Engineering",
              "description": "Senior Full-Stack Engineer for product teams: Next.js, TypeScript, clean architecture."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Contract Builds & AI Integration",
              "description": "Fixed-scope SaaS builds and production AI features with weekly demos."
            }
          }
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Rajkot",
          addressRegion: "Gujarat",
          addressCountry: "India"
        },
        telephone: "+919510944489",
        founder: {
          "@id": `${baseURL}/#person`
        }
      },
      ...(home.faq && home.faq.length > 0 ? [{
        "@type": "FAQPage",
        "mainEntity": home.faq.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": typeof item.answer === 'string' ? item.answer : (item.answerPlain || '')
          }
        }))
      }] : [])
    ]
  };

  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang="en"
      fillWidth
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
      )}
    >
      <head>
        <link rel="icon" href="/images/avatar.jpg" />
        <link rel="apple-touch-icon" href="/images/avatar.jpg" />
        <meta name="google-site-verification" content="cMnZb7DD-LViMD84Lb68pko6L9heuvK-bCiTL7ET8Dk" />
        <StructuredData data={structuredData} />
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const root = document.documentElement;
                  const defaultTheme = 'system';
                  
                  // Set defaults from config
                  const config = ${JSON.stringify({
              brand: style.brand,
              accent: style.accent,
              neutral: style.neutral,
              solid: style.solid,
              "solid-style": style.solidStyle,
              border: style.border,
              surface: style.surface,
              transition: style.transition,
              scaling: style.scaling,
              "viz-style": dataStyle.variant,
            })};
                  
                  // Apply default values
                  Object.entries(config).forEach(([key, value]) => {
                    root.setAttribute('data-' + key, value);
                  });
                  
                  // Resolve theme
                  const resolveTheme = (themeValue) => {
                    if (!themeValue || themeValue === 'system') {
                      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    }
                    return themeValue;
                  };
                  
                  // Apply saved theme
                  const savedTheme = localStorage.getItem('data-theme');
                  const resolvedTheme = resolveTheme(savedTheme);
                  root.setAttribute('data-theme', resolvedTheme);
                  
                  // Apply any saved style overrides
                  const styleKeys = Object.keys(config);
                  styleKeys.forEach(key => {
                    const value = localStorage.getItem('data-' + key);
                    if (value) {
                      root.setAttribute('data-' + key, value);
                    }
                  });
                } catch (e) {
                  console.error('Failed to initialize theme:', e);
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <Providers>
        <Column
          as="body"
          suppressHydrationWarning
          background="page"
          fillWidth
          style={{ minHeight: "100vh" }}
          margin="0"
          padding="0"
          horizontal="center"
        >
          <RevealFx fill position="absolute">
            <Background
              mask={{
                x: effects.mask.x,
                y: effects.mask.y,
                radius: effects.mask.radius,
                cursor: effects.mask.cursor,
              }}
              gradient={{
                display: effects.gradient.display,
                opacity: effects.gradient.opacity as opacity,
                x: effects.gradient.x,
                y: effects.gradient.y,
                width: effects.gradient.width,
                height: effects.gradient.height,
                tilt: effects.gradient.tilt,
                colorStart: effects.gradient.colorStart,
                colorEnd: effects.gradient.colorEnd,
              }}
              dots={{
                display: effects.dots.display,
                opacity: effects.dots.opacity as opacity,
                size: effects.dots.size as SpacingToken,
                color: effects.dots.color,
              }}
              grid={{
                display: effects.grid.display,
                opacity: effects.grid.opacity as opacity,
                color: effects.grid.color,
                width: effects.grid.width,
                height: effects.grid.height,
              }}
              lines={{
                display: effects.lines.display,
                opacity: effects.lines.opacity as opacity,
                size: effects.lines.size as SpacingToken,
                thickness: effects.lines.thickness,
                angle: effects.lines.angle,
                color: effects.lines.color,
              }}
            />
          </RevealFx>
          <Flex fillWidth minHeight="16" s={{ hide: true }} />
          <Header />
          <Flex zIndex={0} fillWidth padding="l" horizontal="center" flex={1}>
            <Flex horizontal="center" fillWidth minHeight="0">
              {children}
            </Flex>
          </Flex>
          <Footer />
          <AiAssistantWidget />
          <Analytics />
          <SpeedInsights />
        </Column>
      </Providers>
    </Flex>
  );
}
