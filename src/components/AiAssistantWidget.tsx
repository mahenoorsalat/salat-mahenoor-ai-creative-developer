"use client";

import React, { useState } from "react";
import { Flex, Row, Column, Text, Button, Icon, Input } from "@once-ui-system/core";
import { person, baseURL } from "@/resources";

const PRESET_QUESTIONS = [
  "What AI projects has Salat Mahenoor built?",
  "What is Salat Mahenoor's tech stack?",
  "How fast can Salat Mahenoor launch a SaaS MVP?",
  "How do I book a discovery call?",
];

const KNOWLEDGE_BASE: Record<string, string> = {
  projects: "Salat Mahenoor has architected 15+ production AI applications, including custom RAG vector engines, n8n automated lead pipelines, streaming LLM chat platforms (GPT-4o & Claude 3.5), and WebGL 3D interactive experiences.",
  stack: "Salat Mahenoor specializes in Next.js 15, React 19, TypeScript, Python FastAPI, OpenAI API, Anthropic Claude, LangChain, Supabase Vector / Pinecone, n8n Automation, and Three.js / WebGL.",
  speed: "SaaS MVPs are typically delivered in 2 to 4 weeks. High-priority AI integrations and performance optimizations can kick off within 24 to 48 hours.",
  book: "You can book a 1-on-1 discovery call directly via Calendly (https://calendly.com/salatmahenoor7-8-6/30min) or message via WhatsApp (+91 9510944489).",
  default: "Salat Mahenoor is a top-ranked AI Creative Developer & Freelance Full Stack AI Engineer. Specializing in Next.js 15, agentic LLM features, n8n automation, and high-performance WebGL design. Available for global contracts.",
};

export function AiAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [chatLog, setChatLog] = useState<{ role: "user" | "assistant"; text: string }[]>([
    {
      role: "assistant",
      text: `Hello! I am Salat Mahenoor's AI Assistant. Ask me anything about skills, live AI projects, tech stack, or hiring availability!`,
    },
  ]);

  const handleAsk = (userQuery: string) => {
    if (!userQuery.trim()) return;

    const lower = userQuery.toLowerCase();
    let answer = KNOWLEDGE_BASE.default;

    if (lower.includes("project") || lower.includes("built") || lower.includes("work")) {
      answer = KNOWLEDGE_BASE.projects;
    } else if (lower.includes("stack") || lower.includes("tech") || lower.includes("skills") || lower.includes("language")) {
      answer = KNOWLEDGE_BASE.stack;
    } else if (lower.includes("speed") || lower.includes("fast") || lower.includes("timeline") || lower.includes("mvp")) {
      answer = KNOWLEDGE_BASE.speed;
    } else if (lower.includes("book") || lower.includes("hire") || lower.includes("call") || lower.includes("contact")) {
      answer = KNOWLEDGE_BASE.book;
    }

    setChatLog((prev) => [
      ...prev,
      { role: "user", text: userQuery },
      { role: "assistant", text: answer },
    ]);
    setQuery("");
  };

  return (
    <Flex position="fixed" style={{ bottom: "24px", right: "24px", zIndex: 9999 }}>
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          variant="primary"
          size="l"
          prefixIcon="sparkle"
          style={{
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            borderRadius: "30px",
            padding: "12px 24px",
          }}
        >
          Ask AI About Salat Mahenoor
        </Button>
      ) : (
        <Column
          radius="xl"
          border="brand-alpha-medium"
          background="surface"
          style={{
            width: "360px",
            maxHeight: "520px",
            boxShadow: "0 16px 48px rgba(0,0,0,0.6)",
            backdropFilter: "blur(16px)",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <Row
            fillWidth
            padding="m"
            background="brand-alpha-weak"
            horizontal="between"
            vertical="center"
            borderBottom="neutral-alpha-weak"
          >
            <Row gap="8" vertical="center">
              <Icon name="sparkle" onBackground="brand-strong" />
              <Text variant="heading-strong-s">Ask AI Assistant</Text>
            </Row>
            <Button
              size="s"
              variant="tertiary"
              onClick={() => setIsOpen(false)}
              label="✕"
            />
          </Row>

          {/* Chat Body */}
          <Column
            padding="m"
            gap="12"
            style={{
              overflowY: "auto",
              maxHeight: "340px",
            }}
          >
            {chatLog.map((msg, idx) => (
              <Column
                key={idx}
                align={msg.role === "user" ? "end" : "start"}
                fillWidth
              >
                <Row
                  paddingX="12"
                  paddingY="8"
                  radius="l"
                  background={msg.role === "user" ? "brand-alpha-medium" : "neutral-alpha-weak"}
                  style={{ maxWidth: "85%" }}
                >
                  <Text variant="body-default-s" onBackground="neutral-strong">
                    {msg.text}
                  </Text>
                </Row>
              </Column>
            ))}
          </Column>

          {/* Preset Buttons */}
          <Column paddingX="m" paddingBottom="8" gap="8">
            <Text variant="label-default-s" onBackground="neutral-weak">
              Quick questions:
            </Text>
            <Row wrap gap="8">
              {PRESET_QUESTIONS.map((q, i) => (
                <Button
                  key={i}
                  size="s"
                  variant="tertiary"
                  onClick={() => handleAsk(q)}
                  label={q}
                  style={{ fontSize: "11px" }}
                />
              ))}
            </Row>
          </Column>

          {/* Input Bar */}
          <Row padding="m" gap="8" borderTop="neutral-alpha-weak" vertical="center">
            <Input
              id="ai-widget-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAsk(query)}
              placeholder="Ask about AI skills, projects..."
            />
            <Button
              size="m"
              variant="primary"
              onClick={() => handleAsk(query)}
              prefixIcon="chevronRight"
            />
          </Row>
        </Column>
      )}
    </Flex>
  );
}
