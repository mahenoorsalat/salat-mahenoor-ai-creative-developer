import { Column, Heading, Text, Row, Icon, Button, RevealFx, Meta, Schema } from "@once-ui-system/core";
import { baseURL, person, about } from "@/resources";
import { StructuredData, ContactForm } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire Mahenoor Salat — Senior Full-Stack Engineer (Next.js + AI)",
  description: "Hire Mahenoor Salat, Senior Full-Stack Engineer specializing in Next.js, TypeScript, and production AI integration. Open to full-time remote roles and high-ownership contracts.",
  alternates: {
    canonical: `${baseURL}/hire`,
  },
};

const offers = [
  {
    title: "Full-Time Remote Role",
    description: "Senior Full-Stack Engineer for your product team. Next.js + TypeScript, clean architecture, Core Web Vitals discipline, and production AI features shipped with ownership.",
  },
  {
    title: "Contract Build",
    description: "A defined SaaS build or AI integration with a fixed scope and timeline. Weekly demos, direct communication, no agency overhead.",
  },
  {
    title: "Rescue & Audit",
    description: "Slow site, failing Core Web Vitals, or an AI feature that never shipped? Technical audit with a prioritized fix list, then hands-on remediation.",
  },
];

const process = [
  { title: "1. Scoping call", description: "15 minutes. Goals, constraints, timeline. You get a written scope within 48 hours." },
  { title: "2. Build in the open", description: "Weekly demos on a staging URL. You see progress, not promises." },
  { title: "3. Ship & hand over", description: "Production deploy, documentation, and a walkthrough. No lock-in." },
];

const proof = [
  { title: "Job Executive — Full-Stack Job Platform", href: "/work/fullstack-task2", note: "Role-based auth, job flows. Code + live demo." },
  { title: "LinkSpark — AI Chatbot App", href: "/work/linkspark-chatbot", note: "Self-built streaming chat UI. Code + live demo." },
  { title: "MERN Auth App — JWT Starter", href: "/work/mern-auth-app", note: "Login, registration, protected routes. Open source." },
  { title: "VaultPay — ERC20 Escrow dApp", href: "/work/vaultpay-home-task", note: "Solidity + React/Wagmi. Contracts, tests, UI." },
];

export default function HirePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Senior Full-Stack Engineering (Next.js + AI)",
    description: "Full-time remote engineering and fixed-scope contract builds: Next.js SaaS platforms, production AI integration, and performance remediation.",
    provider: {
      "@type": "Person",
      name: person.name,
      url: `${baseURL}/about`,
      image: `${baseURL}${person.avatar}`,
      sameAs: ["https://www.linkedin.com/in/salat-mahenoor/", "https://github.com/mahenoorsalat"],
    },
    areaServed: "Remote, worldwide",
  };

  return (
    <Column maxWidth="m" horizontal="center" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/hire"
        title="Hire Mahenoor Salat — Senior Full-Stack Engineer (Next.js + AI)"
        description="Hire Mahenoor Salat for full-time remote roles or fixed-scope builds."
        image={`${baseURL}${person.avatar}`}
        author={{ name: person.name, url: `${baseURL}${about.path}`, image: `${baseURL}${person.avatar}` }}
      />
      <Column fillWidth paddingX="l" gap="64" paddingBottom="xl">
        <Column gap="24" horizontal="center" align="center" paddingTop="l">
          <RevealFx translateY="12">
            <Heading as="h1" variant="display-strong-l" align="center" style={{ maxWidth: "850px" }}>
              Hire a Senior Full-Stack Engineer who ships.
            </Heading>
          </RevealFx>
          <RevealFx translateY="12" delay={0.1}>
            <Text variant="body-default-xl" onBackground="neutral-weak" align="center" style={{ maxWidth: "680px" }}>
              Next.js + TypeScript SaaS platforms and production AI integration. Open to full-time remote roles and fixed-scope contracts.
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.2}>
            <Row gap="16" wrap horizontal="center">
              <Button href="mailto:salatmahenoor7.8.6@gmail.com" label="Email Me" prefixIcon="email" variant="primary" size="l" />
              <Button href="/resume.pdf" label="Download Resume" prefixIcon="document" variant="secondary" size="l" />
              <Button href="/work" label="See the Work" variant="tertiary" size="l" />
            </Row>
          </RevealFx>
        </Column>

        <Column gap="32">
          <Heading as="h2" variant="display-strong-xs">Ways to work together</Heading>
          <Row wrap gap="24">
            {offers.map((item, index) => (
              <Column key={index} flex={1} minWidth={280} padding="l" background="surface" radius="xl" border="neutral-alpha-weak" gap="16">
                <Icon name="star" onBackground="brand-strong" />
                <Heading as="h3" variant="heading-strong-m">{item.title}</Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">{item.description}</Text>
              </Column>
            ))}
          </Row>
        </Column>

        <Column gap="32">
          <Heading as="h2" variant="display-strong-xs">Proof, not promises</Heading>
          <Column gap="16">
            {proof.map((item, index) => (
              <Row key={index} fillWidth padding="l" background="surface" radius="xl" border="neutral-alpha-weak" gap="16" vertical="center" s={{ direction: "column", horizontal: "start" }}>
                <Column flex={3} gap="8">
                  <Heading as="h3" variant="heading-strong-m">{item.title}</Heading>
                  <Text variant="body-default-m" onBackground="neutral-weak">{item.note}</Text>
                </Column>
                <Button href={item.href} label="Read case study" variant="secondary" suffixIcon="arrowRight" />
              </Row>
            ))}
          </Column>
        </Column>

        <Column gap="32">
          <Heading as="h2" variant="display-strong-xs">How it works</Heading>
          <Row wrap gap="24">
            {process.map((item, index) => (
              <Column key={index} flex={1} minWidth={280} gap="8">
                <Heading as="h3" variant="heading-strong-m">{item.title}</Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">{item.description}</Text>
              </Column>
            ))}
          </Row>
        </Column>

        <Column fillWidth gap="24" padding="xl" background="brand-alpha-weak" radius="xl" border="brand-alpha-medium" horizontal="center">
          <Heading as="h2" variant="display-strong-s" align="center">Have a role or a project in mind?</Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center" style={{ maxWidth: "520px" }}>
            Send the job description or a short brief — I reply within 24 hours with honest fit and next steps.
          </Text>
          <Row gap="16" wrap horizontal="center">
            <Button href="mailto:salatmahenoor7.8.6@gmail.com" label="salatmahenoor7.8.6@gmail.com" prefixIcon="email" size="l" />
            <Button href="https://www.linkedin.com/in/salat-mahenoor/" label="LinkedIn" variant="secondary" size="l" />
            <Button href="https://www.upwork.com/freelancers/~017b36696fdb312255?mp_source=share" label="Upwork" variant="secondary" size="l" />
          </Row>
        </Column>
      </Column>
      <StructuredData data={jsonLd} />
      <ContactForm />
    </Column>
  );
}
