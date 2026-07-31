import { Column, Heading, Text, Row, Icon, Button, RevealFx } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import { StructuredData } from "@/components";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire AI Model Trainer & Claude Code Specialist | Salat Mahenoor",
  description: "Hire Salat Mahenoor (Mahenoor Salat) – AI Product Manager (AIPM), Turing S2 LLM Model Trainer, OpenClaw CUA Trajectory Specialist & Claude Code Expert.",
  keywords: [
    "Hire AI Model Trainer",
    "Claude Code Specialist for Hire",
    "Turing LLM Annotator Developer",
    "OpenClaw Trajectory Specialist",
    "AI Product Manager AIPM",
    "RLHF Prompt Engineer Hire"
  ],
  alternates: {
    canonical: `${baseURL}/services/hire-ai-model-trainer-claude-coder`,
  },
};

export default function HireAiModelTrainerClaudeCoderServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Model Training & Claude Code Specialization",
    "description": "Enterprise LLM training, RLHF alignment, prompt engineering, OpenClaw CUA trajectory evaluation, and Claude Code automated engineering workflows.",
    "provider": {
      "@type": "Person",
      "name": "Salat Mahenoor",
      "alternateName": "Mahenoor Salat",
      "image": `${baseURL}${person.avatar}`,
      "url": baseURL,
    },
    "areaServed": "US, UK, Europe, Global",
    "offers": {
      "@type": "Offer",
      "priceRange": "$$$",
      "category": "AI Training & Product Engineering"
    }
  };

  const coreNiches = [
    {
      title: "Turing S2 LLM Evaluation & RLHF",
      description: "Proven experience evaluating, annotating, and benchmarking large language model trajectories for complex code generation, reasoning, and safety."
    },
    {
      title: "OpenClaw CUA Trajectory Refinement",
      description: "Specialized in Computer-Using Agent (CUA) trajectory datasets, technical data alignment, and multi-turn agent evaluation."
    },
    {
      title: "Claude Code & Agentic Workflows",
      description: "Building production Next.js & Python systems utilizing Claude 3.5 Sonnet, Cursor AI, and agentic coding patterns for 2x development velocity."
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
                AI Product Manager (AIPM) & Model Evaluation
              </Text>
            </Row>
          </RevealFx>
          <RevealFx translateY="12" delay={0.1}>
            <Heading as="h1" variant="display-strong-l" align="center" style={{ maxWidth: "880px" }}>
              Hire <span style={{ color: "var(--brand-solid)" }}>Salat Mahenoor</span>: AI Model Trainer & Claude Code Specialist.
            </Heading>
          </RevealFx>
          <RevealFx translateY="12" delay={0.2}>
            <Text variant="body-default-xl" onBackground="neutral-weak" align="center" style={{ maxWidth: '700px' }}>
              Vetted experience at Turing (San Francisco), OpenClaw, and HeuristixAI. Delivering high-precision LLM evaluation, RLHF alignment, and agentic AI product engineering.
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.3}>
            <Row gap="16" wrap horizontal="center">
              <Button href="#contact" label="Hire for AI Training / Contract" prefixIcon="calendar" />
              <Button variant="secondary" href="https://wa.me/919510944489" label="Chat Live on WhatsApp" prefixIcon="whatsapp" />
            </Row>
          </RevealFx>
        </Column>

        {/* Pillars */}
        <Column gap="32">
          <Heading as="h2" variant="display-strong-xs">
            Specialized High-Demand Niches
          </Heading>
          <Row wrap gap="24">
            {coreNiches.map((item, index) => (
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
            Need an experienced AI Model Trainer or AI Product Manager?
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center" style={{ maxWidth: '540px' }}>
            Available for immediate onboarding, high-rate LLM contracts, and full-stack AI product development.
          </Text>
          <Button size="l" href="https://calendly.com/salatmahenoor7-8-6/30min" label="Schedule Discovery Call" prefixIcon="chevronRight" />
        </Column>
      </Column>
    </Column>
  );
}
