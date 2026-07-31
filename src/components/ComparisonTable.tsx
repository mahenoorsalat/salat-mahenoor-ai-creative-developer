"use client";

import React from "react";
import { Column, Heading, Text, Row, Icon, Badge } from "@once-ui-system/core";

export function ComparisonTable() {
  const comparisonData = [
    {
      feature: "Engineering Depth",
      salat: "Senior Next.js 15 + AI Agent Architect",
      agency: "Junior developers managed by account managers",
      freelancers: "Variable / unverified skill level",
    },
    {
      feature: "Delivery Velocity",
      salat: "2x Faster (1-on-1 direct execution)",
      agency: "Slow (2-4 weeks setup & approval delays)",
      freelancers: "Unpredictable deadlines & delays",
    },
    {
      feature: "Cost & Value",
      salat: "Transparent contract / project pricing",
      agency: "$30k - $150k+ with heavy agency markup",
      freelancers: "Cheap upfront, high debt cost later",
    },
    {
      feature: "AI & Vector Search Expertise",
      salat: "Custom RAG, Pinecone/Supabase, streaming LLMs",
      agency: "Basic API wrappers or outsourced AI dev",
      freelancers: "Limited to simple OpenAI API calls",
    },
    {
      feature: "Performance Guarantee",
      salat: "100/100 Core Web Vitals & Sub-1s Load",
      agency: "Not guaranteed without extra fee",
      freelancers: "Rarely optimized for SEO/Speed",
    },
    {
      feature: "Communication",
      salat: "Direct WhatsApp / Slack / Weekly Video Syncs",
      agency: "Filtered through account managers",
      freelancers: "Inconsistent availability",
    },
  ];

  return (
    <Column fillWidth gap="24" paddingX="l" marginY="xl">
      <Column gap="12" horizontal="center" align="center">
        <Badge
          style={{ background: "var(--brand-alpha-weak)", border: "1px solid var(--brand-alpha-medium)" }}
          paddingX="12"
          paddingY="4"
          onBackground="brand-weak"
          textVariant="label-default-s"
        >
          Competitive Advantage
        </Badge>
        <Heading as="h2" variant="display-strong-s" align="center">
          Why Hire Salat Mahenoor vs. Agencies vs. Traditional Freelancers
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center" style={{ maxWidth: "680px" }}>
          Get agency-grade technical quality with the speed, agility, and direct communication of a senior lead engineer.
        </Text>
      </Column>

      <Column
        fillWidth
        radius="xl"
        border="neutral-alpha-weak"
        background="surface"
        style={{ overflow: "hidden" }}
      >
        {/* Table Header */}
        <Row
          fillWidth
          padding="m"
          background="brand-alpha-weak"
          borderBottom="neutral-alpha-weak"
          vertical="center"
        >
          <Row flex={2}>
            <Text variant="heading-strong-s" onBackground="neutral-strong">
              Evaluation Criteria
            </Text>
          </Row>
          <Row flex={3}>
            <Text variant="heading-strong-s" onBackground="brand-strong">
              ★ Salat Mahenoor
            </Text>
          </Row>
          <Row flex={3}>
            <Text variant="heading-strong-s" onBackground="neutral-weak">
              Boutique Agency
            </Text>
          </Row>
          <Row flex={3}>
            <Text variant="heading-strong-s" onBackground="neutral-weak">
              Standard Freelancer
            </Text>
          </Row>
        </Row>

        {/* Table Rows */}
        {comparisonData.map((row, index) => (
          <Row
            key={index}
            fillWidth
            padding="m"
            borderBottom={index === comparisonData.length - 1 ? undefined : "neutral-alpha-weak"}
            vertical="center"
            style={{
              background: index % 2 === 0 ? "transparent" : "var(--neutral-alpha-weak)",
            }}
          >
            <Row flex={2} vertical="center" gap="8">
              <Icon name="check" onBackground="brand-weak" />
              <Text variant="heading-default-xs" onBackground="neutral-strong">
                {row.feature}
              </Text>
            </Row>
            <Row flex={3}>
              <Text variant="body-default-s" onBackground="brand-strong">
                {row.salat}
              </Text>
            </Row>
            <Row flex={3}>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {row.agency}
              </Text>
            </Row>
            <Row flex={3}>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {row.freelancers}
              </Text>
            </Row>
          </Row>
        ))}
      </Column>
    </Column>
  );
}
