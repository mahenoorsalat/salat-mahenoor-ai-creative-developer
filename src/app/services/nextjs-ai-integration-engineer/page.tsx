import { Column, Heading, Text, Row, Icon, Button, RevealFx, Schema } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import { StructuredData } from "@/components";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire Next.js AI Integration Developer | Startup Product Engineer",
  description: "Connect Next.js layouts with LLM streaming capabilities, Pinecone/Supabase vector embeddings, and real-time OpenAI/Claude agents. High-fidelity remote engineer.",
  keywords: ["Hire Next.js AI Developer", "AI Agent Engineer", "React LLM developer", "Next.js AI Integration"],
  alternates: {
    canonical: `${baseURL}/services/nextjs-ai-integration-engineer`,
  },
};

export default function NextjsAiIntegrationServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Next.js AI Integration & LLM Systems",
    "description": "Production-grade Next.js frontends integrated seamlessly with LLMs, custom vector systems, and real-time streaming architectures.",
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
      title: "Streaming AI Chat interfaces",
      description: "Build ultra-fast streaming responses matching ChatGPT or Claude's UI using React Server Components and edge functions."
    },
    {
      title: "Vector Search & Embeddings",
      description: "Deploy semantic search engines and custom RAG applications powered by Pinecone, pgvector, or Supabase vector databases."
    },
    {
      title: "Clean Next.js Architecture",
      description: "Ship modular component libraries, custom middleware, and optimized server side rendering to ensure flawless UX."
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
                Advanced Product Engineering
              </Text>
            </Row>
          </RevealFx>
          <RevealFx translateY="12" delay={0.1}>
            <Heading as="h1" variant="display-strong-l" align="center" style={{ maxWidth: "800px" }}>
              Architecting Premium <span style={{ color: "var(--brand-solid)" }}>Next.js AI Frontends</span> with Flawless UI/UX.
            </Heading>
          </RevealFx>
          <RevealFx translateY="12" delay={0.2}>
            <Text variant="body-default-xl" onBackground="neutral-weak" align="center" style={{ maxWidth: '650px' }}>
              Bring production-grade artificial intelligence features directly into your Next.js application without sacrificing performance, page load times, or layout fidelity.
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
            Next.js & AI Infrastructure Expertise
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
            Ready to deploy an intelligent Next.js AI feature?
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center" style={{ maxWidth: '500px' }}>
            Scale up your SaaS UI with vetted, lightning-fast engineering. Let's map your technical architecture plan.
          </Text>
          <Button size="l" href="#scoping-call" label="Initialize Scoping Session" prefixIcon="chevronRight" />
        </Column>
      </Column>
    </Column>
  );
}
