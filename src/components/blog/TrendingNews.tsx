"use client";

import { useEffect, useState } from "react";
import { Column, Row, Text, RevealFx, Icon, SmartLink, Heading } from "@once-ui-system/core";

interface NewsItem {
    id: number;
    title: string;
    url: string;
    score: number;
    time: number;
}

export const TrendingNews = () => {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                // Fetch top stories IDs from Hacker News
                const response = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json");
                const ids = await response.json();
                
                // Fetch details for the first 5 stories
                const top5Ids = ids.slice(0, 5);
                const details = await Promise.all(
                    top5Ids.map(async (id: number) => {
                        const itemRes = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
                        return itemRes.json();
                    })
                );
                
                setNews(details);
            } catch (error) {
                console.error("Failed to fetch news:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) return null;

    return (
        <Column fillWidth gap="24" marginTop="40">
            <Row vertical="center" gap="8">
                <Icon name="rocket" onBackground="brand-strong" size="s" />
                <Heading as="h2" variant="heading-strong-l">
                    Trending in Tech
                </Heading>
            </Row>
            <Column gap="12">
                {news.map((item, index) => (
                    <RevealFx key={item.id} translateY="8" delay={index * 0.1}>
                        <SmartLink href={item.url} style={{ width: '100%' }}>
                            <Row 
                                fillWidth 
                                padding="16" 
                                background="surface" 
                                radius="l" 
                                border="neutral-alpha-weak"
                                horizontal="between"
                                vertical="center"
                                style={{ transition: 'all 0.2s ease' }}
                            >
                                <Column gap="4" flex={1}>
                                    <Text variant="body-default-s" onBackground="neutral-strong" weight="strong">
                                        {item.title}
                                    </Text>
                                    <Text variant="label-default-s" onBackground="neutral-weak">
                                        {item.score} points • {new Date(item.time * 1000).toLocaleDateString()}
                                    </Text>
                                </Column>
                                <Icon name="openLink" size="xs" onBackground="neutral-weak" />
                            </Row>
                        </SmartLink>
                    </RevealFx>
                ))}
            </Column>
        </Column>
    );
};
