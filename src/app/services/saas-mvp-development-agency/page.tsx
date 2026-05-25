import { Column, Heading, Text, Row, Icon, Button, RevealFx, Schema } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import { StructuredData } from "@/components";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outsource SaaS MVP Development | MERN & Next.js Agency India",
  description: "Elite plug-and-play engineering delivering production-ready, beautiful SaaS MVPs in weeks, backed by Figma design systems and robust backend structures.",
  keywords: ["Outsource SaaS MVP Development", "Next.js Startup Agency", "Full-Stack MERN Contractor", "SaaS Developer India"],
  alternates: {
    canonical: `${baseURL}/services/saas-mvp-development-agency`,
  },
};

export default function SaasMvpDevelopmentServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SaaS MVP Development & Full-Stack Engineering",
    "description": "Rapid development and deployment of premium full-stack SaaS MVPs using MERN stack, Next.js, and modern Figma design systems.",
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
      title: "Rapid MVP Launch",
      description: "Launch beautifully designed, highly performant products in 2–4 weeks without sacrificing codebase scalability or design consistency."
    },
    {
      title: "Figma to Next.js Systems",
      description: "Convert pixel-perfect UI/UX designs from Figma into production code systems utilizing robust component libraries and variables."
    },
    {
      title: "Scalable Full-Stack Core",
      description: "Build robust backends, secure cookie-based auth, dynamic database modeling, and fast server actions optimized for global distribution."
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
                MVP & SaaS Product Engineering
              </Text>
            </Row>
          </RevealFx>
          <RevealFx translateY="12" delay={0.1}>
            <Heading as="h1" variant="display-strong-l" align="center" style={{ maxWidth: "800px" }}>
              Launch Your SaaS Product in Weeks, Not Months. Vetted <span style={{ color: "var(--brand-solid)" }}>MVP Delivery</span>.
            </Heading>
          </RevealFx>
          <RevealFx translateY="12" delay={0.2}>
            <Text variant="body-default-xl" onBackground="neutral-weak" align="center" style={{ maxWidth: '650px' }}>
              Scale up your validation velocity. I help startups and agencies structure, design, and build complete, production-grade SaaS products fast and efficiently.
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
            SaaS Engineering Capabilities
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
            Have a brilliant SaaS concept you want to validate?
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center" style={{ maxWidth: '500px' }}>
            Work with an elite MERN and Next.js specialist. Stop wasting cash on low-velocity dev agencies.
          </Text>
          <Button size="l" href="#scoping-call" label="Initialize Scoping Session" prefixIcon="chevronRight" />
        </Column>
      </Column>
    </Column>
  );
}
