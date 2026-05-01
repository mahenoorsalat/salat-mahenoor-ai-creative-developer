import { Column, Heading, Text, Row, Icon, Button, RevealFx, Meta, Schema } from "@once-ui-system/core";
import { baseURL, person, social, home, about } from "@/resources";
import { StructuredData } from "@/components";
import React from "react";
import { notFound } from "next/navigation";

interface PlatformData {
  title: string;
  description: string;
  headline: string;
  subline: string;
  icon: string;
  accent: string;
  benefits: string[];
  cta: string;
}

const platforms: Record<string, PlatformData> = {
  upwork: {
    title: "Elite Upwork Full-Stack Developer",
    description: "Looking for the top 1% of Upwork developers? Salat Mahenoor delivers enterprise-grade Next.js and AI solutions with a 100% Job Success Score.",
    headline: "Skip the Upwork Queue: Direct Access to a Top-Rated Plus Engineer",
    subline: "Get the reliability and quality of a Top-Rated Upwork developer without the platform overhead.",
    icon: "upwork",
    accent: "brand",
    benefits: [
      "100% Job Success Score (JSS) History",
      "Expert in Next.js, AI, and Performance",
      "Direct Communication & Rapid Onboarding",
      "Enterprise-Grade Scalable Codebase"
    ],
    cta: "Hire me on Upwork"
  },
  reddit: {
    title: "Reddit's Choice for Full-Stack AI Development",
    description: "Highly recommended across developer communities on Reddit for high-performance Next.js and AI agentic workflows.",
    headline: "The 'Reddit Recommended' Engineer for Your Next Big Idea",
    subline: "Building the products that r/webdev and r/startups talk about.",
    icon: "reddit",
    accent: "orange",
    benefits: [
      "Community-Vetted Technical Expertise",
      "Transparent, No-BS Development Process",
      "Specialist in AI Agentic Workflows",
      "Active Contributor to Open Source"
    ],
    cta: "Connect on Reddit"
  },
  fiverr: {
    title: "Premium Fiverr Pro Alternative for SaaS",
    description: "Moving beyond basic gigs? Salat Mahenoor provides elite SaaS engineering and technical SEO that exceeds Fiverr Pro standards.",
    headline: "Elite SaaS Engineering: Far Beyond a Standard 'Gig'",
    subline: "For founders who need more than a template—I build multi-million dollar revenue engines.",
    icon: "fiverr",
    accent: "green",
    benefits: [
      "5-Star Delivery Track Record",
      "Premium Technical SEO Blueprint Included",
      "Full-Stack Architecture & 3D Integration",
      "Long-term Technical Partnership"
    ],
    cta: "View Fiverr Profile"
  }
};

export async function generateStaticParams() {
  return Object.keys(platforms).map((platform) => ({
    platform,
  }));
}

export async function generateMetadata({ params }: { params: { platform: string } }) {
  const platformKey = params.platform.toLowerCase();
  const platform = platforms[platformKey as keyof typeof platforms];
  if (!platform) return {};

  return Meta.generate({
    title: platform.title,
    description: platform.description,
    baseURL: baseURL,
    path: `/solutions/${platformKey}`,
    image: home.image,
  });
}

export default function PlatformSolutions({ params }: { params: { platform: string } }) {
  const platformKey = params.platform.toLowerCase();
  const platform = platforms[platformKey as keyof typeof platforms];

  if (!platform) {
    notFound();
  }

  const socialLink = social.find(s => s.name.toLowerCase() === platformKey);

  return (
    <Column fillWidth horizontal="center" paddingTop="xl" paddingBottom="160">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={platform.title}
        description={platform.description}
        path={`/solutions/${params.platform}`}
        image={home.image}
      />
      <Column maxWidth="m" paddingX="l" gap="64">
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
                    <Icon name={platform.icon} size="s" />
                    <Text variant="label-default-s" onBackground="brand-weak">
                        Trusted Platform Partner
                    </Text>
                </Row>
            </RevealFx>
            <RevealFx translateY="12" delay={0.1}>
                <Heading as="h1" variant="display-strong-l" align="center">
                    {platform.headline}
                </Heading>
            </RevealFx>
            <RevealFx translateY="12" delay={0.2}>
                <Text variant="body-default-xl" onBackground="neutral-weak" align="center" style={{ maxWidth: '600px' }}>
                    {platform.subline}
                </Text>
            </RevealFx>
            <RevealFx translateY="12" delay={0.3}>
                <Row gap="16">
                    <Button href={socialLink?.link || "/"} label={platform.cta} prefixIcon={platform.icon} />
                    <Button variant="secondary" href="/work" label="View My Work" />
                </Row>
            </RevealFx>
        </Column>

        <Column fillWidth>
            <Column gap="32">
                <Heading as="h2" variant="display-strong-xs">
                    Why {params.platform.charAt(0).toUpperCase() + params.platform.slice(1)} Clients Choose Me
                </Heading>
                <Row wrap gap="24">
                    {platform.benefits.map((benefit, index) => (
                        <Column 
                            key={index} 
                            flex={1} 
                            minWidth={240} 
                            padding="l" 
                            background="surface" 
                            radius="xl" 
                            border="neutral-alpha-weak"
                            gap="16"
                        >
                            <Icon name="star" onBackground="brand-strong" />
                            <Text variant="heading-strong-m">
                                {benefit}
                            </Text>
                        </Column>
                    ))}
                </Row>
            </Column>
        </Column>

        <Column fillWidth gap="32" padding="xl" background="brand-alpha-weak" radius="xl" border="brand-alpha-medium" horizontal="center">
            <Heading as="h2" variant="display-strong-s" align="center">
                Ready to elevate your project beyond the platform?
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak" align="center" style={{ maxWidth: '500px' }}>
                Whether you found me on {params.platform} or Reddit, the quality remains the same: Elite.
            </Text>
            <Button size="l" href="https://calendly.com/salatmahenoor7-8-6/30min" label="Schedule a Strategy Call" prefixIcon="calendar" />
        </Column>
      </Column>
    </Column>
  );
}
