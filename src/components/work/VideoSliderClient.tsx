"use client";

import { useState, useEffect } from "react";
import { Column, Row, IconButton, Text, Flex, Heading, SmartLink } from "@once-ui-system/core";

interface VideoSliderClientProps {
    videoProjects: any[];
}

export const VideoSliderClient: React.FC<VideoSliderClientProps> = ({ videoProjects }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextVideo = () => {
        setActiveIndex((prev) => (prev + 1) % videoProjects.length);
    };

    const prevVideo = () => {
        setActiveIndex((prev) => (prev - 1 + videoProjects.length) % videoProjects.length);
    };

    useEffect(() => {
        const timer = setInterval(nextVideo, 8000);
        return () => clearInterval(timer);
    }, [videoProjects.length]);

    if (videoProjects.length === 0) return null;

    const currentProject = videoProjects[activeIndex];

    return (
        <Column fillWidth gap="m" paddingX="l">
            <Flex
                position="relative"
                fillWidth
                aspectRatio="16/9"
                radius="l"
                overflow="hidden"
                border="neutral-alpha-weak"
                background="neutral-alpha-weak"
            >
                <video
                    key={currentProject.metadata.video}
                    src={currentProject.metadata.video}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                />

                <Row
                    position="absolute"
                    fillWidth
                    fillHeight
                    horizontal="between"
                    vertical="center"
                    padding="m"
                    style={{ pointerEvents: "none" }}
                >
                    <IconButton
                        icon="chevronLeft"
                        onClick={prevVideo}
                        variant="secondary"
                        style={{ pointerEvents: "auto" }}
                    />
                    <IconButton
                        icon="chevronRight"
                        onClick={nextVideo}
                        variant="secondary"
                        style={{ pointerEvents: "auto" }}
                    />
                </Row>

                <Row
                    position="absolute"
                    bottom="12"
                    fillWidth
                    horizontal="center"
                    gap="8"
                >
                    {videoProjects.map((_, i) => (
                        <Flex
                            key={i}
                            width="8"
                            height="8"
                            radius="full"
                            background={i === activeIndex ? "neutral-strong" : "neutral-alpha-medium"}
                            style={{ transition: "background 0.3s ease" }}
                        />
                    ))}
                </Row>
            </Flex>

            <Flex
                s={{ direction: "column" }}
                fillWidth
                paddingX="s"
                paddingTop="12"
                paddingBottom="24"
                gap="l"
            >
                <Flex flex={5}>
                    <Heading as="h2" wrap="balance" variant="heading-strong-xl">
                        {currentProject.metadata.title}
                    </Heading>
                </Flex>
                <Column flex={7} gap="16">
                    <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
                        {currentProject.metadata.summary}
                    </Text>
                    <Flex gap="24" wrap>
                        <SmartLink
                            suffixIcon="arrowRight"
                            style={{ margin: "0", width: "fit-content" }}
                            href={`/work/${currentProject.slug}`}
                        >
                            <Text variant="body-default-s">Read case study</Text>
                        </SmartLink>
                        {currentProject.metadata.link && (
                            <SmartLink
                                suffixIcon="arrowUpRightFromSquare"
                                style={{ margin: "0", width: "fit-content" }}
                                href={currentProject.metadata.link}
                            >
                                <Text variant="body-default-s">View project</Text>
                            </SmartLink>
                        )}
                    </Flex>
                </Column>
            </Flex>
        </Column>
    );
};
