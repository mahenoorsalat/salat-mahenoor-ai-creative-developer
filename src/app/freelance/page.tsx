import { Column, Heading, Text, Row, Button, RevealFx, Meta, Schema } from "@once-ui-system/core";
import { baseURL, person, about } from "@/resources";
import { StructuredData, ContactForm } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mahenoor Salat — Freelance Developer (Upwork, Fiverr & Direct)",
  description: "Hire Mahenoor Salat as a freelance developer: Top-Rated Upwork profile, Fiverr gigs, and direct contracts for Next.js, TypeScript, and AI integration work.",
  alternates: {
    canonical: `${baseURL}/freelance`,
  },
};

const platforms = [
  {
    title: "Upwork — Top-Rated Profile",
    description: "100% Job Success Score. Fixed-price and hourly contracts with Upwork payment protection, milestone escrow, and verified reviews.",
    href: "https://www.upwork.com/freelancers/~017b36696fdb312255?mp_source=share",
    label: "View Upwork Profile",
  },
  {
    title: "Fiverr — Gigs & Custom Orders",
    description: "Defined packages for audits, MVPs, and AI integrations — or send a custom brief for a tailored quote within 24 hours.",
    href: "https://www.fiverr.com/s/Ldj9N8A",
    label: "View Fiverr Profile",
  },
  {
    title: "Direct Contract",
    description: "No platform fees on either side. Written scope, milestone payments, weekly staging demos, and full code handover.",
    href: "mailto:salatmahenoor7.8.6@gmail.com",
    label: "Email Me Directly",
  },
];

const faqs = [
  {
    question: "How do I hire Mahenoor Salat on Upwork?",
    answer: "Open my Upwork profile, invite me to your job post or message me directly with a one-page brief. I reply within 24 hours with fit, timeline, and a milestone plan. All contracts run under Upwork's escrow and review system."
  },
  {
    question: "Does Mahenoor Salat take Fiverr orders?",
    answer: "Yes — defined gigs for audits, MVP builds, and AI integrations, plus custom orders from any brief. Message first with your requirements and I confirm scope and delivery date before you order."
  },
  {
    question: "Is direct contracting cheaper than Upwork or Fiverr?",
    answer: "Direct contracts skip platform fees on both sides, so the same scope typically costs less. You still get a written scope, milestone payments, and weekly demos — email salatmahenoor7.8.6@gmail.com for a fixed quote in 48 hours."
  },
  {
    question: "What freelance services are offered?",
    answer: "Next.js + TypeScript SaaS builds, production AI integration (chatbots, RAG, automation), MERN authentication systems, Core Web Vitals remediation, and codebase rescue audits. Proof of each is on the Work page with code and live demos."
  },
  {
    question: "Looking for full-time instead of freelance?",
    answer: "I am also open to full-time remote engineering roles. See the Hire page for role-based hiring, process, and FAQs."
  }
];

export default function FreelancePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Freelance Full-Stack Development (Next.js + AI)",
    description: "Freelance developer for hire via Upwork, Fiverr, and direct contract: Next.js SaaS builds, AI integration, and performance audits.",
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
        path="/freelance"
        title="Mahenoor Salat — Freelance Developer (Upwork, Fiverr & Direct)"
        description="Hire Mahenoor Salat as a freelance developer via Upwork, Fiverr, or direct contract."
        image={`${baseURL}${person.avatar}`}
        author={{ name: person.name, url: `${baseURL}${about.path}`, image: `${baseURL}${person.avatar}` }}
      />
      <Column fillWidth paddingX="l" gap="64" paddingBottom="xl">
        <Column gap="24" horizontal="center" align="center" paddingTop="l">
          <RevealFx translateY="12">
            <Heading as="h1" variant="display-strong-l" align="center" style={{ maxWidth: "850px" }}>
              Freelance developer for hire — Upwork, Fiverr, or direct.
            </Heading>
          </RevealFx>
          <RevealFx translateY="12" delay={0.1}>
            <Text variant="body-default-xl" onBackground="neutral-weak" align="center" style={{ maxWidth: "680px" }}>
              Mahenoor Salat — Senior Full-Stack Engineer (Next.js + TypeScript + AI). Pick the platform you trust; the quality is the same everywhere.
            </Text>
          </RevealFx>
        </Column>

        <Column gap="32">
          <Heading as="h2" variant="display-strong-xs">Three ways to hire me freelance</Heading>
          <Column gap="16">
            {platforms.map((item, index) => (
              <Row key={index} fillWidth padding="l" background="surface" radius="xl" border="neutral-alpha-weak" gap="16" vertical="center" s={{ direction: "column", horizontal: "start" }}>
                <Column flex={3} gap="8">
                  <Heading as="h3" variant="heading-strong-m">{item.title}</Heading>
                  <Text variant="body-default-m" onBackground="neutral-weak">{item.description}</Text>
                </Column>
                <Button href={item.href} label={item.label} variant="secondary" suffixIcon="arrowUpRightFromSquare" />
              </Row>
            ))}
          </Column>
        </Column>

        <Column gap="32">
          <Heading as="h2" variant="display-strong-xs">Freelance hiring questions</Heading>
          <Column gap="16">
            {faqs.map((item, index) => (
              <Column key={index} gap="8" padding="l" background="surface" radius="xl" border="neutral-alpha-weak">
                <Heading as="h3" variant="heading-strong-m">{item.question}</Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">{item.answer}</Text>
              </Column>
            ))}
          </Column>
        </Column>

        <Column fillWidth gap="24" padding="xl" background="brand-alpha-weak" radius="xl" border="brand-alpha-medium" horizontal="center">
          <Heading as="h2" variant="display-strong-s" align="center">Prefer a full-time hire?</Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center" style={{ maxWidth: "520px" }}>
            I am open to full-time remote engineering roles as well as freelance contracts.
          </Text>
          <Row gap="16" wrap horizontal="center">
            <Button href="/hire" label="Go to Hire Page" size="l" />
            <Button href="/work" label="See the Work" variant="secondary" size="l" />
          </Row>
        </Column>
      </Column>
      <StructuredData data={jsonLd} />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }}
      />
      <ContactForm />
    </Column>
  );
}
