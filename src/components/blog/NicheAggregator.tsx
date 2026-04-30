"use client";

import { useEffect, useState } from "react";
import { Column, Row, Text, RevealFx, Icon, SmartLink, Heading, Badge, Flex } from "@once-ui-system/core";

interface Article {
    id: number;
    title: string;
    description: string;
    url: string;
    tag_list: string[];
    user: {
        name: string;
    };
    published_at: string;
}

export const NicheAggregator = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNicheNews = async () => {
            try {
                // Multi-source scraping simulation via APIs
                const [devRes, hnRes] = await Promise.all([
                    fetch("https://dev.to/api/articles?tag=ai&per_page=3"),
                    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
                ]);

                const devData = await devRes.json();
                const hnIds = await hnRes.json();

                // Fetch details for HN stories and filter for niche keywords
                const hnDetails = await Promise.all(
                    hnIds.slice(0, 10).map(async (id: number) => {
                        const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
                        return res.json();
                    })
                );

                const nicheKeywords = ['ai', 'saas', 'nextjs', 'performance', 'automation', 'llm', 'cloud'];
                const filteredHn = hnDetails.filter((item: any) => 
                    item.title && nicheKeywords.some(kw => item.title.toLowerCase().includes(kw))
                ).slice(0, 2);

                const combined = [
                    ...devData.map((a: any) => ({
                        id: a.id,
                        title: a.title,
                        description: a.description,
                        url: a.url,
                        source: 'Dev.to Authority',
                        tags: a.tag_list,
                        author: a.user.name,
                        date: a.published_at
                    })),
                    ...filteredHn.map((a: any) => ({
                        id: a.id,
                        title: a.title,
                        description: 'Top trending discussion in high-authority tech circles.',
                        url: a.url || `https://news.ycombinator.com/item?id=${a.id}`,
                        source: 'HackerNews Trending',
                        tags: ['trending', 'tech'],
                        author: a.by,
                        date: new Date(a.time * 1000).toISOString()
                    }))
                ];

                setArticles(combined);
            } catch (error) {
                console.error("Failed to fetch niche news:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchNicheNews();
    }, []);

    if (loading || articles.length === 0) return null;

    return (
        <Column fillWidth gap="24" marginTop="64" padding="24" background="surface" radius="xl" border="neutral-alpha-weak">
            <Row horizontal="between" vertical="center" fillWidth>
                <Row vertical="center" gap="12">
                    <Icon name="globe" onBackground="brand-strong" size="m" />
                    <Column gap="4">
                        <Heading as="h2" variant="heading-strong-l">
                            Global Niche Intelligence
                        </Heading>
                        <Text variant="body-default-s" onBackground="neutral-weak">
                            Aggregated high-authority insights from the global AI & SaaS ecosystem.
                        </Text>
                    </Column>
                </Row>
                <Badge variant="outline" size="s">LIVE FEEDS</Badge>
            </Row>
            
            <Column gap="16" marginTop="16">
                {articles.map((article, index) => (
                    <RevealFx key={article.id} translateY="12" delay={index * 0.1}>
                        <SmartLink href={article.url} style={{ width: '100%' }}>
                            <Column 
                                fillWidth 
                                padding="20" 
                                background="neutral-alpha-weak" 
                                radius="l" 
                                border="neutral-alpha-weak"
                                gap="8"
                                style={{ transition: 'all 0.3s ease' }}
                                // Hover effect via CSS is handled by SmartLink or system but we can add inline if needed
                            >
                                <Row horizontal="between" vertical="start" gap="16">
                                    <Text variant="heading-strong-xs" onBackground="neutral-strong">
                                        {article.title}
                                    </Text>
                                    <Icon name="openLink" size="xs" onBackground="neutral-weak" />
                                </Row>
                                <Text variant="body-default-s" onBackground="neutral-weak" style={{
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden'
                                }}>
                                    {article.description}
                                </Text>
                                <Row gap="8" wrap marginTop="8" vertical="center">
                                    <Badge variant="neutral" size="s">{article.source}</Badge>
                                    <Flex flex={1} />
                                    <Text variant="label-default-s" onBackground="neutral-weak">
                                        By {article.author} • {new Date(article.date).toLocaleDateString()}
                                    </Text>
                                </Row>
                            </Column>
                        </SmartLink>
                    </RevealFx>
                ))}
            </Column>
        </Column>
    );
};
