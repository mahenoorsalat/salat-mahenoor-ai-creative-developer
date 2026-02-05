"use client";

import { Heading, Text, Column, RevealFx, Row, Icon } from "@once-ui-system/core";
import { home } from "@/resources";
import { useState } from "react";

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    if (!home.faq || home.faq.length === 0) return null;

    return (
        <Column fillWidth paddingY="64" gap="48" horizontal="center">
            <Column horizontal="center" gap="16">
                <RevealFx translateY="8">
                    <Heading variant="display-strong-s" align="center">
                        Frequently Asked Questions
                    </Heading>
                </RevealFx>
                <RevealFx translateY="8" delay={0.2}>
                    <Text variant="body-default-l" onBackground="neutral-weak" align="center">
                        Answers to common inquiries about hiring and process.
                    </Text>
                </RevealFx>
            </Column>

            <Column fillWidth maxWidth={48} gap="12">
                {home.faq.map((item, index) => (
                    <RevealFx key={index} translateY="16" delay={0.1 * index}>
                        <Column
                            fillWidth
                            padding="24"
                            radius="l"
                            border="neutral-alpha-weak"
                            background="surface"
                            gap="12"
                            style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <Row
                                fillWidth
                                horizontal="between"
                                vertical="center"
                                as="button"
                                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-content-${index}`}
                            >
                                <Text variant="heading-strong-m" onBackground="neutral-strong">
                                    {item.question}
                                </Text>
                                <Icon
                                    name="chevronDown"
                                    style={{
                                        transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.3s ease'
                                    }}
                                />
                            </Row>
                            {openIndex === index && (
                                <RevealFx speed="fast">
                                    <Text
                                        id={`faq-content-${index}`}
                                        variant="body-default-m"
                                        onBackground="neutral-weak"
                                    >
                                        {item.answer}
                                    </Text>
                                </RevealFx>
                            )}

                        </Column>
                    </RevealFx>
                ))}
            </Column>
        </Column>
    );
};
