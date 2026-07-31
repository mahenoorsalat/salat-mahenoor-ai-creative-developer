"use client";

import React, { useState } from "react";
import { Column, Heading, Text, Row, Icon, Button, Badge } from "@once-ui-system/core";

interface Option {
  id: string;
  name: string;
  days: number;
  description: string;
}

const SERVICES_OPTIONS: Option[] = [
  { id: "nextjs", name: "Next.js 15 Full-Stack App", days: 10, description: "TypeScript, RSC, Tailwind CSS, Authentication & DB" },
  { id: "ai_llm", name: "Custom LLM & Streaming AI Features", days: 7, description: "OpenAI/Claude streaming UI, prompt engineering & guards" },
  { id: "rag_vector", name: "Vector Search & RAG Knowledge Base", days: 6, description: "Supabase Vector / Pinecone embedding search pipeline" },
  { id: "n8n_auto", name: "n8n AI Operations Automation", days: 4, description: "CRM webhooks, AI lead qualification & background tasks" },
  { id: "webgl_3d", name: "3D WebGL / Three.js Interface", days: 8, description: "Interactive 3D models, smooth camera animation & shaders" },
  { id: "seo_vitals", name: "100/100 Core Web Vitals & Technical SEO", days: 3, description: "Lighthouse optimization, schema markup & instant indexing" },
];

export function ProjectEstimatorWidget() {
  const [selectedIds, setSelectedIds] = useState<string[]>(["nextjs", "ai_llm"]);

  const toggleOption = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const totalDays = selectedIds.reduce((sum, id) => {
    const found = SERVICES_OPTIONS.find((opt) => opt.id === id);
    return sum + (found ? found.days : 0);
  }, 0);

  const estimatedWeeks = Math.ceil(totalDays / 5);

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
          Interactive Scope Calculator
        </Badge>
        <Heading as="h2" variant="display-strong-s" align="center">
          Estimate Your AI & Web Project Timeline
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center" style={{ maxWidth: "640px" }}>
          Select the features you need for an instant estimated launch timeline and architecture scope.
        </Text>
      </Column>

      <Row gap="24" fillWidth s={{ direction: "column" }}>
        {/* Options Grid */}
        <Column flex={3} gap="12">
          {SERVICES_OPTIONS.map((opt) => {
            const isSelected = selectedIds.includes(opt.id);
            return (
              <Row
                key={opt.id}
                fillWidth
                padding="m"
                radius="l"
                border={isSelected ? "brand-alpha-medium" : "neutral-alpha-weak"}
                background={isSelected ? "brand-alpha-weak" : "surface"}
                vertical="center"
                horizontal="between"
                onClick={() => toggleOption(opt.id)}
                style={{ cursor: "pointer", transition: "all 0.2s ease" }}
              >
                <Row gap="12" vertical="center" flex={1}>
                  <Icon
                    name={isSelected ? "check" : "chevronRight"}
                    onBackground={isSelected ? "brand-strong" : "neutral-weak"}
                  />
                  <Column gap="2">
                    <Text variant="heading-strong-xs" onBackground={isSelected ? "neutral-strong" : "neutral-weak"}>
                      {opt.name}
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {opt.description}
                    </Text>
                  </Column>
                </Row>
                <Badge onBackground={isSelected ? "brand-strong" : "neutral-weak"}>
                  ~{opt.days} days
                </Badge>
              </Row>
            );
          })}
        </Column>

        {/* Estimation Summary Box */}
        <Column
          flex={2}
          padding="xl"
          radius="xl"
          background="surface"
          border="brand-alpha-medium"
          gap="24"
          style={{ height: "fit-content", position: "sticky", top: "80px" }}
        >
          <Heading as="h3" variant="heading-strong-m">
            Project Scope Summary
          </Heading>

          <Column gap="12">
            <Row horizontal="between" vertical="center">
              <Text variant="body-default-m" onBackground="neutral-weak">
                Selected Modules:
              </Text>
              <Text variant="heading-strong-m" onBackground="brand-strong">
                {selectedIds.length} Features
              </Text>
            </Row>

            <Row horizontal="between" vertical="center">
              <Text variant="body-default-m" onBackground="neutral-weak">
                Estimated Delivery:
              </Text>
              <Text variant="heading-strong-m" onBackground="brand-strong">
                ~{estimatedWeeks} {estimatedWeeks === 1 ? "Week" : "Weeks"} ({totalDays} Days)
              </Text>
            </Row>

            <Row horizontal="between" vertical="center">
              <Text variant="body-default-m" onBackground="neutral-weak">
                Engineering Lead:
              </Text>
              <Text variant="body-default-s" onBackground="neutral-strong">
                Salat Mahenoor
              </Text>
            </Row>
          </Column>

          <Button
            href="https://calendly.com/salatmahenoor7-8-6/30min"
            variant="primary"
            size="l"
            prefixIcon="calendar"
            fillWidth
          >
            Lock In This Scope & Schedule Call
          </Button>
        </Column>
      </Row>
    </Column>
  );
}
