"use client";

import { mailchimp } from "@/resources";
import { Button, Heading, Text, Background, Column, Row } from "@once-ui-system/core";
import { opacity, SpacingToken } from "@once-ui-system/core";

export const ContactCTA: React.FC<React.ComponentProps<typeof Column>> = ({ ...flex }) => {
    const whatsappLink = "https://wa.me/919510944489";
    const emailLink = "mailto:salatmahenoor7.8.6@gmail.com";

    return (
        <Column
            overflow="hidden"
            fillWidth
            padding="xl"
            radius="l"
            marginBottom="m"
            horizontal="center"
            align="center"
            background="surface"
            border="neutral-alpha-weak"
            {...flex}
        >
            <Background
                top="0"
                position="absolute"
                mask={{
                    x: mailchimp.effects.mask.x,
                    y: mailchimp.effects.mask.y,
                    radius: mailchimp.effects.mask.radius,
                    cursor: mailchimp.effects.mask.cursor,
                }}
                gradient={{
                    display: mailchimp.effects.gradient.display,
                    opacity: mailchimp.effects.gradient.opacity as opacity,
                    x: mailchimp.effects.gradient.x,
                    y: mailchimp.effects.gradient.y,
                    width: mailchimp.effects.gradient.width,
                    height: mailchimp.effects.gradient.height,
                    tilt: mailchimp.effects.gradient.tilt,
                    colorStart: mailchimp.effects.gradient.colorStart,
                    colorEnd: mailchimp.effects.gradient.colorEnd,
                }}
                dots={{
                    display: mailchimp.effects.dots.display,
                    opacity: mailchimp.effects.dots.opacity as opacity,
                    size: mailchimp.effects.dots.size as SpacingToken,
                    color: mailchimp.effects.dots.color,
                }}
                grid={{
                    display: mailchimp.effects.grid.display,
                    opacity: mailchimp.effects.grid.opacity as opacity,
                    color: mailchimp.effects.grid.color,
                    width: mailchimp.effects.grid.width,
                    height: mailchimp.effects.grid.height,
                }}
                lines={{
                    display: mailchimp.effects.lines.display,
                    opacity: mailchimp.effects.lines.opacity as opacity,
                    size: mailchimp.effects.lines.size as SpacingToken,
                    thickness: mailchimp.effects.lines.thickness,
                    angle: mailchimp.effects.lines.angle,
                    color: mailchimp.effects.lines.color,
                }}
            />
            <Column maxWidth="m" horizontal="center" align="center" gap="l" style={{ zIndex: 1 }}>
                <Column horizontal="center" align="center" gap="s">
                    <Heading align="center" variant="display-strong-xs">
                        Ready to launch your project?
                    </Heading>
                    <Text align="center" wrap="balance" variant="body-default-l" onBackground="neutral-weak">
                        Let's discuss how we can bring your vision to life.
                    </Text>
                </Column>
                <Row gap="16" wrap horizontal="center">
                    <Button
                        href={whatsappLink}
                        prefixIcon="whatsapp"
                        variant="primary"
                        size="l"
                        weight="default"
                    >
                        Chat on WhatsApp
                    </Button>
                    <Button
                        href={emailLink}
                        prefixIcon="email"
                        variant="secondary"
                        size="l"
                        weight="default"
                    >
                        Send an Email
                    </Button>
                    <Button
                        href="https://www.fiverr.com/salat_mahenoor"
                        prefixIcon="world"
                        variant="secondary"
                        size="l"
                        weight="default"
                    >
                        Order on Fiverr
                    </Button>
                    <Button
                        href="https://calendly.com/salatmahenoor7-8-6/30min"
                        prefixIcon="calendar"
                        variant="secondary"
                        size="l"
                        weight="default"
                    >
                        Book a Call
                    </Button>
                </Row>
            </Column>
        </Column>
    );
};
