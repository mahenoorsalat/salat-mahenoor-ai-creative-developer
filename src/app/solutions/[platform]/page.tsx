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
    title: "Hire Top-Rated Upwork AI & Next.js Developer | Mahenoor Salat",
    description: "Hire Mahenoor Salat — Top-Rated Upwork Full-Stack AI Product Engineer & AIPM with 100% Job Success Score. Serving high-ticket clients in US, UK, EU, UAE & Globally ($USD, €EUR, £GBP).",
    headline: "Direct Access to a Top-Rated Upwork AI & Next.js Engineer",
    subline: "Enterprise-grade Next.js 15, LLM model evaluation, and n8n AI solutions. Contracts available in USD ($), EUR (€), GBP (£), and AUD ($).",
    icon: "upwork",
    accent: "brand",
    benefits: [
      "100% Job Success Score (JSS) — Verified Top Rated",
      "Specialist in LLM Training, AIPM & Next.js 15 Architecture",
      "Trusted by US, UK, European & UAE Startups ($USD, €EUR, £GBP)",
      "Direct Contracting & Same-Day Onboarding"
    ],
    cta: "Hire me on Upwork"
  },
  reddit: {
    title: "Full-Stack AI Developer & AIPM for Startups | Recommended on Reddit",
    description: "Mahenoor Salat is a full-stack AI developer & AI Product Manager recommended across r/webdev, r/reactjs & r/startups. Expert in Next.js, LLMs, and agentic workflows.",
    headline: "The AI Engineer Founders on r/webdev & r/startups Trust",
    subline: "Building production AI platforms and LLM architectures that scaling startups talk about — transparent, fast, and high-converting.",
    icon: "reddit",
    accent: "orange",
    benefits: [
      "Community-Vetted Silicon Valley Technical Standards",
      "Turing (San Francisco) LLM Evaluation Experience",
      "Specialist in Agentic AI Workflows (n8n, OpenAI, Claude)",
      "Open Source Contributor & GitHub Active"
    ],
    cta: "Connect on Reddit"
  },
  fiverr: {
    title: "Hire Top-Rated Fiverr Pro AI & Next.js Developer | Mahenoor Salat",
    description: "Looking for elite SaaS engineering on Fiverr? Hire Mahenoor Salat for Next.js AI development, LLM model training, and Figma UI/UX design. 5-star delivery track record.",
    headline: "Elite SaaS & AI Engineering — Premium International Contracts",
    subline: "For global founders who need production-grade Next.js platforms & AI workflows — trusted by clients across USA, Europe, and Asia.",
    icon: "fiverr",
    accent: "green",
    benefits: [
      "5-Star Rated Delivery Track Record — 100% On-Time",
      "Full-Stack Next.js 15 + LLM & Vector Architecture",
      "Figma Design Systems & High-Conversion UI/UX",
      "International Contracts ($USD, €EUR, £GBP, $AUD)"
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

  const ogImageUrl = `${baseURL}/api/og/generate?title=${encodeURIComponent(platform.title)}`;

  const meta = Meta.generate({
    title: platform.title,
    description: platform.description,
    baseURL: baseURL,
    path: `/solutions/${platformKey}`,
    image: home.image,
  });

  return {
    ...meta,
    keywords: [
      `hire ${platformKey} developer usd eur gbp`,
      `top rated ${platformKey} nextjs ai developer`,
      `freelance ${platformKey} ai engineer us uk client`,
      `hire high rate ${platformKey} developer`,
    ],
    openGraph: {
      title: platform.title,
      description: platform.description,
      url: `${baseURL}/solutions/${platformKey}`,
      siteName: person.name,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: platform.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: platform.title,
      description: platform.description,
      creator: "@mahenoorsalat",
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
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
