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
import { Footer, Header, Providers, StructuredData } from "@/components";
import { Analytics } from "@vercel/analytics/next";
import { baseURL, effects, fonts, style, dataStyle, home, person, social } from "@/resources";

export async function generateMetadata() {
  const metadata = Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });

  return {
    ...metadata,
    metadataBase: new URL(baseURL),
    alternates: {
      canonical: home.path,
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
        name: person.name,
        jobTitle: person.role,
        image: `${baseURL}${person.avatar}`,
        url: baseURL,
        sameAs: social.map((s) => s.link),
        description: home.description,
        knowsAbout: ["Full-Stack Development", "AI Integration", "Three.js", "Next.js", "Python", "Web Design", "SEO"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Rajkot",
          addressRegion: "Gujarat",
          addressCountry: "India"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": `${baseURL}/#service`,
        name: `${person.name} | Global AI & Web Development Agency`,
        url: baseURL,
        logo: `${baseURL}/images/avatar.jpg`,
        image: `${baseURL}/images/avatar.jpg`,
        description: "Elite Global AI & Web Agency. Delivering premium Next.js platforms, AI automation, and 3D web experiences for high-ticket clients across the USA, Europe, Asia, and globally. Specialized in high-performance digital solutions that dominate search results.",
        priceRange: "$$$",
        areaServed: [
          { "@type": "Country", "name": "US" },
          { "@type": "Country", "name": "DE" },
          { "@type": "Country", "name": "GB" },
          { "@type": "Country", "name": "CA" },
          { "@type": "Country", "name": "AU" },
          { "@type": "Country", "name": "CH" },
          { "@type": "Country", "name": "FR" },
          { "@type": "Country", "name": "NL" },
          { "@type": "Country", "name": "SG" },
          { "@type": "Country", "name": "AE" },
          { "@type": "Country", "name": "SE" },
          { "@type": "Country", "name": "NO" },
          { "@type": "Country", "name": "DK" },
          { "@type": "Country", "name": "Global" }
        ],
        offers: [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom AI & LLM Integration",
              "description": "Enterprise-grade AI solutions using GPT-4 and Claude 3."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Elite Next.js Development",
              "description": "High-performance, SEO-optimized full-stack platforms."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "3D Web Experiences",
              "description": "Immersive WebGL and Three.js environments for premium brands."
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
      }

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
          <Analytics />
        </Column>
      </Providers>
    </Flex>
  );
}
