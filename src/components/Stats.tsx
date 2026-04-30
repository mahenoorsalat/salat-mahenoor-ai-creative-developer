"use client";

import { Column, Row, Text, Icon, SmartLink, Flex } from "@once-ui-system/core";
import { home } from "@/resources";

export const Stats = () => {
    if (!home.stats) return null;

    return (
        <Row fillWidth paddingY="24" gap="24" wrap horizontal="center" borderBottom="neutral-alpha-weak">
            {home.stats.map((stat, index) => (
                <Column key={index} gap="4" horizontal="center" paddingX="24" style={{ minWidth: '200px' }}>
                    <Row gap="8" vertical="center">
                        {stat.platform === "Upwork" && <Icon name="upwork" size="s" onBackground="brand-strong" />}
                        {stat.platform === "Fiverr" && <Icon name="fiverr" size="s" onBackground="brand-strong" />}
                        <Text variant="display-strong-xs" onBackground="neutral-strong">
                            {stat.value}
                        </Text>
                    </Row>
                    {stat.link ? (
                        <SmartLink href={stat.link} style={{ textDecoration: 'none' }}>
                            <Text variant="label-default-s" onBackground="neutral-weak" align="center">
                                {stat.label}
                            </Text>
                        </SmartLink>
                    ) : (
                        <Text variant="label-default-s" onBackground="neutral-weak" align="center">
                            {stat.label}
                        </Text>
                    )}
                </Column>
            ))}
        </Row>
    );
};
