import { Column, Heading, Text, Row, Icon, Button, RevealFx, Meta, Schema } from "@once-ui-system/core";
import { baseURL, person, social, home, about } from "@/resources";
import { StructuredData } from "@/components";
import React from "react";
import { notFound } from "next/navigation";

export const dynamicParams = true;

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
    title: "Hire Top-Rated Upwork Full-Stack Developer | Mahenoor Salat",
    description: "Hire Mahenoor Salat — a Top-Rated Upwork Full-Stack Developer with 100% Job Success Score. Expert in Next.js, React, AI integration, and SaaS development. Start your project today.",
    headline: "Skip the Queue: Direct Access to a Top-Rated Upwork Engineer",
    subline: "Get enterprise-grade Next.js and AI solutions with the reliability of a Top-Rated Upwork developer — faster, direct, and without platform overhead.",
    icon: "upwork",
    accent: "brand",
    benefits: [
      "100% Job Success Score (JSS) — Verified",
      "Expert in Next.js 15, React, AI & Performance",
      "Direct Communication & Same-Day Onboarding",
      "Production-Grade Scalable Codebase"
    ],
    cta: "Hire me on Upwork"
  },
  reddit: {
    title: "Full-Stack AI Developer for Startups | Recommended on Reddit",
    description: "Mahenoor Salat is a full-stack AI developer highly recommended across developer communities. Expert in Next.js, AI agentic workflows, and building real products founders talk about.",
    headline: "The Developer Founders on r/webdev & r/startups Trust",
    subline: "Building the products that developer communities talk about — transparent process, no-BS engineering, real results.",
    icon: "reddit",
    accent: "orange",
    benefits: [
      "Community-Vetted Technical Expertise",
      "Transparent, No-BS Development Process",
      "Specialist in AI Agentic Workflows (n8n, LangChain)",
      "Open Source Contributor — GitHub Active"
    ],
    cta: "Connect on Reddit"
  },
  fiverr: {
    title: "Hire Freelance Full-Stack Developer on Fiverr | Mahenoor Salat",
    description: "Looking beyond basic Fiverr gigs? Hire Mahenoor Salat for elite SaaS engineering, Next.js development, and Figma UI/UX design. 5-star delivery track record.",
    headline: "Elite SaaS Engineering — Far Beyond a Standard Fiverr Gig",
    subline: "For founders who need more than a template — I build production-grade Next.js platforms that scale to thousands of users.",
    icon: "fiverr",
    accent: "green",
    benefits: [
      "5-Star Rated Delivery Track Record",
      "Full-Stack Next.js + AI Architecture",
      "Figma Design Systems & 3D Integration",
      "Long-Term Technical Partnership Available"
    ],
    cta: "View Fiverr Profile"
  }
};

export async function generateStaticParams() {
  return Object.keys(platforms).map((platform) => ({
    platform,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ platform: string }> }) {
  const awaitedParams = await params;
  const platformParam = awaitedParams?.platform;
  const platformKey = platformParam?.toLowerCase() || "";
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

export default async function PlatformSolutions({ params }: { params: Promise<{ platform: string }> }) {
  const awaitedParams = await params;
  const platformParam = awaitedParams?.platform;
  const platformKey = platformParam?.toLowerCase() || "";
  const platform = platforms[platformKey as keyof typeof platforms];

  if (!platform) {
    notFound();
  }

  const socialLink = social.find(s => s?.name?.toLowerCase() === platformKey);

  return (
    <Column fillWidth horizontal="center" paddingTop="xl" paddingBottom="160">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={platform.title}
        description={platform.description}
        path={`/solutions/${platformKey}`}
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
                    Why {platformKey.charAt(0).toUpperCase() + platformKey.slice(1)} Clients Choose Me
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
                Whether you found me on {platformKey} or Reddit, the quality remains the same: Elite.
            </Text>
            <Button size="l" href="https://calendly.com/salatmahenoor7-8-6/30min" label="Schedule a Strategy Call" prefixIcon="calendar" />
        </Column>
      </Column>
    </Column>
  );
}
