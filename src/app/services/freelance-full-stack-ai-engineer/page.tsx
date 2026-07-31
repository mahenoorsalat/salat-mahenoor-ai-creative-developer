import { Column, Heading, Text, Row, Icon, Button, RevealFx } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import { StructuredData } from "@/components";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelance Full Stack AI Engineer | Salat Mahenoor (Mahenoor Salat)",
  description: "Hire Freelance Full Stack AI Engineer Salat Mahenoor. Specialist in React, Next.js, Python, vector search, n8n AI workflows, and cloud AI infrastructure.",
  keywords: [
    "Freelance Full Stack AI Engineer",
    "Salat Mahenoor AI Engineer",
    "Mahenoor Salat Full Stack Engineer",
    "Hire AI Engineer Freelance",
    "Next.js Python AI Developer"
  ],
  alternates: {
    canonical: `${baseURL}/services/freelance-full-stack-ai-engineer`,
  },
};

export default function FreelanceFullStackAiEngineerServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Freelance Full Stack AI Engineering",
    "description": "End-to-end full stack software engineering combining Next.js frontends, Python backends, vector search, and custom AI model pipelines.",
    "provider": {
      "@type": "Person",
      "name": "Salat Mahenoor",
      "alternateName": "Mahenoor Salat",
      "image": `${baseURL}${person.avatar}`,
      "url": baseURL,
    },
    "areaServed": "Global",
    "offers": {
      "@type": "Offer",
      "priceRange": "$$$",
      "category": "Freelance Software Engineering"
    }
  };

  const pillars = [
    {
      title: "End-to-End SaaS Architecture",
      description: "From database schema design (Supabase, PostgreSQL) to front-end UI components and auth flows (Clerk, NextAuth)."
    },
    {
      title: "RAG & Vector Search Engines",
      description: "Build custom knowledge base search engines using Pinecone, Supabase Vector, LangChain, and OpenAI embeddings."
    },
    {
      title: "Automated AI Workflows",
      description: "Streamline operations with self-healing n8n automations, Python worker queues, and webhook integrations."
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
                Full-Stack AI Software Engineering
              </Text>
            </Row>
          </RevealFx>
          <RevealFx translateY="12" delay={0.1}>
            <Heading as="h1" variant="display-strong-l" align="center" style={{ maxWidth: "850px" }}>
              Freelance <span style={{ color: "var(--brand-solid)" }}>Full Stack AI Engineer</span> for Startups & Scale-ups.
            </Heading>
          </RevealFx>
          <RevealFx translateY="12" delay={0.2}>
            <Text variant="body-default-xl" onBackground="neutral-weak" align="center" style={{ maxWidth: '680px' }}>
              Ship robust, scalable AI applications without hiring an entire multi-person team. Salat Mahenoor delivers end-to-end full stack solutions faster.
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.3}>
            <Row gap="16" wrap horizontal="center">
              <Button href="#contact" label="Hire Salat Mahenoor" prefixIcon="calendar" />
              <Button variant="secondary" href="https://wa.me/919510944489" label="WhatsApp Inquiry" prefixIcon="whatsapp" />
            </Row>
          </RevealFx>
        </Column>

        {/* Pillars Grid */}
        <Column gap="32">
          <Heading as="h2" variant="display-strong-xs">
            Full Stack Capabilities
          </Heading>
          <Row wrap gap="24">
            {pillars.map((item, index) => (
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
                <Icon name="check" onBackground="brand-strong" />
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
            Need an experienced Full Stack AI Engineer?
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center" style={{ maxWidth: '520px' }}>
            Let's discuss your product roadmap and technical architecture. Kick off your build in 24 hours.
          </Text>
          <Button size="l" href="https://calendly.com/salatmahenoor7-8-6/30min" label="Book Architecture Session" prefixIcon="chevronRight" />
        </Column>
      </Column>
    </Column>
  );
}
