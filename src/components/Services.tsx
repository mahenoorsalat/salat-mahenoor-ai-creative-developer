"use client";

import { Heading, Text, Column, Grid, RevealFx } from "@once-ui-system/core";
import { home } from "@/resources";

export const Services = () => {
    return (
        <Column fillWidth paddingY="64" gap="48" horizontal="center">
            <Column horizontal="center" gap="16">
                <RevealFx translateY="8">
                    <Heading variant="display-strong-s" align="center">
                        Services
                    </Heading>
                </RevealFx>
                <RevealFx translateY="8" delay={0.2}>
                    <Text variant="body-default-l" onBackground="neutral-weak" align="center">
                        High-impact solutions for digital growth.
                    </Text>
                </RevealFx>
            </Column>

            <Grid columns="2" gap="16" fillWidth s={{ columns: 1 }}>
                {home.services.map((service, index) => (
                    <RevealFx key={index} translateY="16" delay={0.1 * index}>
                        <Column
                            fillWidth
                            padding="32"
                            radius="l"
                            border="neutral-alpha-weak"
                            background="surface"
                            gap="12"
                            align="center"
                            s={{ textAlign: "center" }}
                            style={{
                                height: '100%',
                            }}
                        >
                            {service}
                        </Column>
                    </RevealFx>
                ))}
            </Grid>
        </Column>
    );
};
