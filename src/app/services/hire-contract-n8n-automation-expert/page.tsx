import { Column, Heading, Text, Row, Icon, Button, RevealFx, Schema, Badge } from "@once-ui-system/core";
import { baseURL, person, home } from "@/resources";
import { StructuredData } from "@/components";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire n8n Developer & Workflow Automation Expert | India & Remote",
  description: "Elite contract engineering delivering custom n8n pipelines, agentic AI integrations, LLM orchestration, and advanced webhook setups to slash your operational bottlenecks.",
  keywords: ["Hire n8n Developer", "n8n Specialist India", "Freelance Automation Engineer", "n8n workflow developer"],
  alternates: {
    canonical: `${baseURL}/services/hire-contract-n8n-automation-expert`,
  },
};

export default function N8nAutomationServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "n8n Workflow Automation & Agentic AI Orchestration",
    "description": "Custom enterprise n8n workflow automation pipelines connecting APIs, CRMs, vector databases, and multi-agent LLM systems seamlessly.",
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
      title: "Multi-LLM Orchestration",
      description: "Deploy robust background workflows connecting Claude, OpenAI, and Gemini models natively inside unified pipelines."
    },
    {
      title: "Advanced API & Webhooks",
      description: "Secure payload handshakes, rate limiting, and fallback queues aligned to your existing Postgres or MongoDB stack."
    },
    {
      title: "CRM & DB Syncing",
      description: "Automatically sync Webflow or custom Next.js leads into HubSpot, Salesforce, or Airtable databases in real-time."
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
                Operations & Systems Optimization
              </Text>
            </Row>
          </RevealFx>
          <RevealFx translateY="12" delay={0.1}>
            <Heading as="h1" variant="display-strong-l" align="center" style={{ maxWidth: "800px" }}>
              Stop Wasting Developer Hours. Automate via Custom <span style={{ color: "var(--brand-solid)" }}>n8n Architectures</span>.
            </Heading>
          </RevealFx>
          <RevealFx translateY="12" delay={0.2}>
            <Text variant="body-default-xl" onBackground="neutral-weak" align="center" style={{ maxWidth: '650px' }}>
              I eliminate manual data bottlenecks by building autonomous n8n workflows that connect Next.js frontends to CRM pipelines, vector databases, and automated AI triggers.
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
            High-Performance n8n Solutions We Deliver
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
            Ready to integrate custom AI agents into your business operations?
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center" style={{ maxWidth: '500px' }}>
            Allow your core engineering team to focus on features. I will design, scale, and maintain your background pipelines.
          </Text>
          <Button size="l" href="#scoping-call" label="Initialize Scoping Session" prefixIcon="chevronRight" />
        </Column>
      </Column>
    </Column>
  );
}
