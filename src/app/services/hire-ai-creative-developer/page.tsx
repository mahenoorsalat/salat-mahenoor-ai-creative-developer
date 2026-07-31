import { Column, Heading, Text, Row, Icon, Button, RevealFx } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import { StructuredData } from "@/components";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire AI Creative Developer | Salat Mahenoor (Mahenoor Salat)",
  description: "Hire Salat Mahenoor – Senior AI Creative Developer specializing in custom AI agents, LLM feature integration, 3D WebGL interfaces, and Next.js SaaS engineering.",
  keywords: [
    "Hire AI Creative Developer",
    "Salat Mahenoor AI Creative Developer",
    "Mahenoor Salat Developer",
    "AI Creative Developer Portfolio",
    "Hire AI Engineer Next.js",
    "AI SaaS Developer"
  ],
  alternates: {
    canonical: `${baseURL}/services/hire-ai-creative-developer`,
  },
};

export default function HireAiCreativeDeveloperServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Creative Developer Contract Services",
    "description": "High-end UI/UX combined with production-grade AI agent integrations, Next.js 15 architectures, and custom LLM workflows.",
    "provider": {
      "@type": "Person",
      "name": "Salat Mahenoor",
      "alternateName": "Mahenoor Salat",
      "image": `${baseURL}${person.avatar}`,
      "url": baseURL,
    },
    "areaServed": "US, UK, Europe, UAE, Global",
    "offers": {
      "@type": "Offer",
      "priceRange": "$$$",
      "category": "AI Development Services"
    }
  };

  const capabilities = [
    {
      title: "Generative AI & LLM Streaming",
      description: "Integrate OpenAI GPT-4o, Anthropic Claude 3.5, and open-source models with real-time UI streaming and zero latency lag."
    },
    {
      title: "3D & Interactive WebGL Experiences",
      description: "Immersive Three.js motion graphics and interactive UI components designed to wow prospective investors and buyers."
    },
    {
      title: "Production Next.js 15 Architecture",
      description: "Clean TypeScript codebases built with React Server Components, Tailwind CSS, and 100/100 Core Web Vitals optimization."
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
              <Icon name="star" onBackground="brand-weak" />
              <Text variant="label-default-s" onBackground="brand-weak">
                Elite AI Creative Engineering
              </Text>
            </Row>
          </RevealFx>
          <RevealFx translateY="12" delay={0.1}>
            <Heading as="h1" variant="display-strong-l" align="center" style={{ maxWidth: "850px" }}>
              Hire <span style={{ color: "var(--brand-solid)" }}>Salat Mahenoor</span>: AI Creative Developer & Next.js Architect.
            </Heading>
          </RevealFx>
          <RevealFx translateY="12" delay={0.2}>
            <Text variant="body-default-xl" onBackground="neutral-weak" align="center" style={{ maxWidth: '680px' }}>
              Transform your digital vision into an intelligent, high-converting web platform. Combining modern UI/UX design with state-of-the-art AI capabilities.
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.3}>
            <Row gap="16" wrap horizontal="center">
              <Button href="#contact" label="Book Discovery Call" prefixIcon="calendar" />
              <Button variant="secondary" href="https://wa.me/919510944489" label="Chat Live on WhatsApp" prefixIcon="whatsapp" />
            </Row>
          </RevealFx>
        </Column>

        {/* Capability Grid */}
        <Column gap="32">
          <Heading as="h2" variant="display-strong-xs">
            Core Engineering Specializations
          </Heading>
          <Row wrap gap="24">
            {capabilities.map((item, index) => (
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
                  {item.title}
                </Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {item.description}
                </Text>
              </Column>
            ))}
          </Row>
        </Column>

        {/* CTA Banner */}
        <Column fillWidth gap="32" padding="xl" background="brand-alpha-weak" radius="xl" border="brand-alpha-medium" horizontal="center">
          <Heading as="h2" variant="display-strong-s" align="center">
            Ready to hire a top AI Creative Developer?
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center" style={{ maxWidth: '520px' }}>
            Available for high-impact contracts, full-stack builds, and enterprise AI integrations. Direct booking within 24 hours.
          </Text>
          <Button size="l" href="https://calendly.com/salatmahenoor7-8-6/30min" label="Schedule 1-on-1 Call" prefixIcon="chevronRight" />
        </Column>
      </Column>
    </Column>
  );
}
