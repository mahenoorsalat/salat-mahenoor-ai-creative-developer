import { Column, Heading, Text, Row, Icon, Button, RevealFx, Schema } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import { StructuredData } from "@/components";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire Core Web Vitals & Technical SEO Expert | India & Remote",
  description: "Rescue your Lighthouse scores, eliminate Layout Shifts (CLS), achieve sub-1s LCP speeds, and optimize dynamic sitemaps and schema structures for #1 ranking.",
  keywords: ["Hire Core Web Vitals Expert", "Technical SEO Consultant Next.js", "Next.js speed optimization", "Core Web Vitals Specialist"],
  alternates: {
    canonical: `${baseURL}/services/technical-seo-core-web-vitals-consultant`,
  },
};

export default function TechnicalSeoCoreWebVitalsServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Technical SEO & Core Web Vitals Speed Optimization",
    "description": "Enterprise-grade site speed optimization, schema injection, bundle size tuning, and programmatic SEO layout indexing.",
    "provider": {
      "@type": "Person",
      "name": person.name,
      "image": `${baseURL}${person.avatar}`,
      "url": baseURL,
    },
    "areaServed": "US, UK, Europe, Global",
    "offers": {
      "@type": "Offer",
      "priceRange": "$$$",
      "category": "Software Contract Development"
    }
  };

  const benefits = [
    {
      title: "Core Web Vitals Rescue",
      description: "Optimize above-the-fold content, load typography efficiently, and eliminate layout shifts to achieve perfect 100/100 Lighthouse scores."
    },
    {
      title: "Programmatic SEO Scaling",
      description: "Scale high-intent, crawl-friendly route architectures, dynamic metadata configurations, and structured sitemap indexing for thousands of keywords."
    },
    {
      title: "Modern Schema JSON-LD",
      description: "Inject detailed semantic schema blocks (FAQPage, ProfessionalService, JobPosting) to capture rich snippets on Google Search Console."
    }
  ];

  return (
    <Column fillWidth horizontal="center" paddingTop="xl" paddingBottom="160">
      <StructuredData data={jsonLd} />
      <Column maxWidth="m" paddingX="l" gap="64">
        {/* Hero Section */}
        <Column gap="24" horizontal="center" align="center">
          <RevealFx translateY="12">
            <Row 
              paddingX="16" paddingY="8" 
              background="brand-alpha-weak" 
              border="brand-alpha-medium" 
              radius="full" 
              vertical="center" 
              gap="8"
            >
              <Icon name="rocket" onBackground="brand-weak" />
              <Text variant="label-default-s" onBackground="brand-weak">
                Search Engine Optimization & Performance
              </Text>
            </Row>
          </RevealFx>
          <RevealFx translateY="12" delay={0.1}>
            <Heading as="h1" variant="display-strong-l" align="center" style={{ maxWidth: "800px" }}>
              Crush Your Core Web Vitals. Dominate Google <span style={{ color: "var(--brand-solid)" }}>Lighthouse Scores</span>.
            </Heading>
          </RevealFx>
          <RevealFx translateY="12" delay={0.2}>
            <Text variant="body-default-xl" onBackground="neutral-weak" align="center" style={{ maxWidth: '650px' }}>
              Slow speeds destroy conversion. I rewrite assets, balance bundle footprints, and structure rich dynamic route indexes that rank higher and convert better.
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.3}>
            <Row gap="16" wrap horizontal="center">
              <Button href="#scoping-call" label="Book Scoping Session" prefixIcon="calendar" />
              <Button variant="secondary" href="https://wa.me/919510944489" label="Chat Live on WhatsApp" prefixIcon="whatsapp" />
            </Row>
          </RevealFx>
        </Column>

        {/* Benefits Grid */}
        <Column gap="32">
          <Heading as="h2" variant="display-strong-xs">
            Performance & Technical SEO Capabilities
          </Heading>
          <Row wrap gap="24">
            {benefits.map((benefit, index) => (
              <Column 
                key={index} 
                flex={1} 
                minWidth={280} 
                padding="l" 
                background="surface" 
                radius="xl" 
                border="neutral-alpha-weak"
                gap="16"
              >
                <Icon name="star" onBackground="brand-strong" />
                <Heading as="h3" variant="heading-strong-m">
                  {benefit.title}
                </Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {benefit.description}
                </Text>
              </Column>
            ))}
          </Row>
        </Column>

        {/* Call to Action Banner */}
        <Column fillWidth gap="32" padding="xl" background="brand-alpha-weak" radius="xl" border="brand-alpha-medium" horizontal="center">
          <Heading as="h2" variant="display-strong-s" align="center">
            Is your mobile load time killing customer retention?
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center" style={{ maxWidth: '500px' }}>
            Work with an elite Core Web Vitals optimization specialist. Secure a perfect page experience score this week.
          </Text>
          <Button size="l" href="#scoping-call" label="Initialize Scoping Session" prefixIcon="chevronRight" />
        </Column>
      </Column>
    </Column>
  );
}
