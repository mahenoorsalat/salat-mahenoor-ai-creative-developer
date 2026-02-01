"use client";

import { Column, Row, Text, Grid, Avatar } from "@once-ui-system/core";
import { testimonials } from "@/resources";

export default function TestimonialsView() {
    return (
        <Grid columns={2} s={{ columns: 1 }} gap="l" fillWidth>
            {testimonials.items.map((testimonial, index) => (
                <Column
                    key={index}
                    padding="l"
                    radius="l"
                    background="neutral-alpha-weak"
                    border="neutral-alpha-weak"
                    gap="m"
                >
                    <Text variant="body-default-l" onBackground="neutral-medium">
                        "{testimonial.content}"
                    </Text>
                    <Row gap="m" vertical="center" marginTop="s">
                        {testimonial.avatar && <Avatar src={testimonial.avatar} size="m" />}
                        <Column>
                            <Text variant="label-strong-m">{testimonial.name}</Text>
                            <Text variant="body-default-xs" onBackground="neutral-weak">
                                {testimonial.role}
                            </Text>
                        </Column>
                    </Row>
                </Column>
            ))}
        </Grid>
    );
}
