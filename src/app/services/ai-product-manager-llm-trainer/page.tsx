import { Column, Heading, Text, Row, Icon, Button, RevealFx } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import { StructuredData } from "@/components";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire AI Product Manager (AIPM) & Remote LLM Model Trainer | Mahenoor Salat",
  description: "Senior AI Product Manager (AIPM) & LLM Model Trainer with Turing (San Francisco) evaluation experience. Specializing in RLHF, prompt alignment, AI product roadmaps, and agentic AI systems.",
  keywords: ["Hire AI Product Manager", "LLM Model Trainer", "AIPM Remote Contractor", "RLHF Alignment Specialist", "Turing LLM Evaluator", "AI Product Engineer"],
  alternates: {
    canonical: `${baseURL}/services/ai-product-manager-llm-trainer`,
  },
  openGraph: {
    title: "Hire AI Product Manager (AIPM) & Remote LLM Model Trainer",
    description: "Enterprise-grade AI product leadership, prompt engineering, RLHF model evaluation, and Next.js AI platform architecture.",
    url: `${baseURL}/services/ai-product-manager-llm-trainer`,
    siteName: person.name,
    images: [
      {
        url: `${baseURL}/api/og/generate?title=${encodeURIComponent("Hire AI Product Manager (AIPM) & LLM Trainer")}`,
        width: 1200,
        height: 630,
        alt: "Hire AI Product Manager & LLM Model Trainer",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire AI Product Manager (AIPM) & Remote LLM Trainer",
    description: "Enterprise AI product management, RLHF alignment, and Next.js AI platform engineering.",
    creator: "@mahenoorsalat",
    images: [`${baseURL}/api/og/generate?title=${encodeURIComponent("Hire AI Product Manager (AIPM) & LLM Trainer")}`],
  },
};

export default function AiProductManagerLlmTrainerServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Product Management (AIPM) & LLM Model Evaluation",
    "description": "High-rate contract AI Product Management, RLHF model evaluation, prompt engineering, and end-to-end AI platform execution.",
    "provider": {
      "@type": "Person",
      "name": person.name,
      "image": `${baseURL}${person.avatar}`,
      "url": baseURL,
      "worksFor": [
        { "@type": "Organization", "name": "Turing (San Francisco, CA)" },
        { "@type": "Organization", "name": "OpenClaw" },
        { "@type": "Organization", "name": "HeuristixAI" }
      ]
    },
    "areaServed": "US, UK, Europe, UAE, Global",
    "offers": {
      "@type": "Offer",
      "priceRange": "$$$$",
      "category": "AI Product Engineering & Model Training"
    }
  };

  const capabilities = [
    {
      title: "LLM Training & RLHF Alignment",
      description: "Evaluating complex model outputs, prompt engineering, error detection, and reinforcement learning alignment based on Turing S2 benchmark standards."
    },
    {
      title: "AI Product Strategy (AIPM)",
      description: "Bridging AI research and production deployment — defining product scope, user interaction models, and agentic LLM architecture."
    },
    {
      title: "Full-Stack AI Application Delivery",
      description: "Integrating custom LLMs, vector search (Pinecone/Supabase), and streaming APIs with high-performance Next.js 15 frontends."
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
                Silicon Valley Grade AI Leadership
              </Text>
            </Row>
          </RevealFx>
          <RevealFx translateY="12" delay={0.1}>
            <Heading as="h1" variant="display-strong-l" align="center" style={{ maxWidth: "900px" }}>
              Hire an <span style={{ color: "var(--brand-solid)" }}>AI Product Manager (AIPM)</span> & Remote LLM Evaluation Specialist.
            </Heading>
          </RevealFx>
          <RevealFx translateY="12" delay={0.2}>
            <Text variant="body-default-xl" onBackground="neutral-weak" align="center" style={{ maxWidth: '750px' }}>
              With experience at Turing (San Francisco) and OpenClaw, I help global tech startups & enterprise teams evaluate, fine-tune, and deploy production AI products.
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.3}>
            <Row gap="16" wrap horizontal="center">
              <Button href="https://calendly.com/salatmahenoor7-8-6/30min" label="Book Strategy Call" prefixIcon="calendar" />
              <Button 
                variant="secondary" 
                href="https://drive.google.com/file/d/1YTzfaQZ_dqv1yr8jUVbbY6m9kCiCMbCl/view?usp=drive_link" 
                label="Download CV (PDF)" 
                prefixIcon="document" 
                target="_blank" 
              />
            </Row>
          </RevealFx>
        </Column>

        {/* Capabilities Grid */}
        <Column gap="32">
          <Heading as="h2" variant="display-strong-xs">
            Enterprise AI Core Competencies
          </Heading>
          <Row wrap gap="24">
            {capabilities.map((cap, index) => (
              <Column 
                key={index} 
                flex={1} 
                minWidth={280} 
                padding="32" 
                radius="l" 
                background="surface" 
                border="neutral-alpha-weak"
                gap="16"
              >
                <Heading as="h3" variant="heading-strong-m">{cap.title}</Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {cap.description}
                </Text>
              </Column>
            ))}
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
