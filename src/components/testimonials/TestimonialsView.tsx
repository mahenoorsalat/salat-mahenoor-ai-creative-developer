"use client";

import { Column, Row, Text, Grid, Avatar, Icon } from "@once-ui-system/core";
import { testimonials } from "@/resources";

export default function TestimonialsView({ limit, variant = "grid" }: { limit?: number, variant?: "grid" | "compact" }) {
    const displayedTestimonials = limit ? testimonials.items.slice(0, limit) : testimonials.items;

    return (
        <Grid columns={2} s={{ columns: 1 }} gap="24" fillWidth>
            {displayedTestimonials.map((testimonial, index) => (
                <Column
                    key={index}
                    padding="32"
                    radius="xl"
                    background={index % 2 === 0 ? "neutral-alpha-medium" : "neutral-alpha-weak"}
                    border="neutral-alpha-weak"
                    gap="24"
                    style={{
                        minHeight: index % 3 === 0 ? '400px' : 'auto',
                        justifyContent: 'space-between'
                    }}
                >
                    <Column gap="16">
                        <Row gap="4">
                            {[...Array(testimonial.rating || 5)].map((_, i) => (
                                <Icon key={i} name="star" size="s" onBackground="brand-strong" />
                            ))}
                        </Row>
                        <Text variant="body-default-l" onBackground="neutral-strong">
                            "{testimonial.content}"
                        </Text>
                    </Column>

                    <Column gap="24">
                        {testimonial.metrics && (
                            <Row gap="32" borderTop="neutral-alpha-weak" paddingTop="24">
                                {testimonial.metrics.map((metric, i) => (
                                    <Column key={i} gap="4">
                                        <Text variant="display-strong-xs" onBackground="neutral-strong">
                                            {metric.value}
                                        </Text>
                                        <Text variant="body-default-xs" onBackground="neutral-weak">
                                            {metric.label}
                                        </Text>
                                    </Column>
                                ))}
                            </Row>
                        )}
                        <Row gap="m" vertical="center">
                            {testimonial.avatar && <Avatar src={testimonial.avatar} size="m" />}
                            <Column>
                                <Text variant="label-strong-m">{testimonial.name}</Text>
                                <Text variant="body-default-xs" onBackground="neutral-weak">
                                    {testimonial.role}
                                </Text>
                            </Column>
                        </Row>
                    </Column>
                </Column>
            ))}
        </Grid>
    );
}
