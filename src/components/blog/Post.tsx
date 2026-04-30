"use client";

import { Card, Column, Media, Row, Avatar, Text } from "@once-ui-system/core";
import { formatDate } from "@/utils/formatDate";
import { person } from "@/resources";

interface PostProps {
  post: any;
  thumbnail: boolean;
  direction?: "row" | "column";
}

export default function Post({ post, thumbnail, direction }: PostProps) {
  return (
    <Card
      fillWidth
      key={post.slug}
      href={`/blog/${post.slug}`}
      transition="micro-medium"
      direction={direction}
      border="neutral-alpha-weak"
      background="surface"
      padding="0"
      radius="xl"
      gap="0"
      style={{ overflow: 'hidden' }}
      s={{ direction: "column" }}
    >
      {post.metadata.image && thumbnail && (
        <Media
          priority
          sizes="(max-width: 768px) 100vw, 640px"
          cursor="interactive"
          src={post.metadata.image}
          alt={"Thumbnail of " + post.metadata.title}
          aspectRatio="16 / 9"
        />
      )}
      <Column fillWidth padding="24" gap="16">
        <Row vertical="center" gap="16">
          <Avatar src={person.avatar} size="s" />
          <Column gap="4">
            <Text variant="label-default-s" onBackground="neutral-strong">{person.name}</Text>
            <Text variant="body-default-xs" onBackground="neutral-weak">
              {formatDate(post.metadata.publishedAt, false)}
            </Text>
          </Column>
        </Row>
        <Column gap="8">
          {post.metadata.tag && (
            <Text variant="label-strong-s" onBackground="brand-strong">
              {post.metadata.tag}
            </Text>
          )}
          <Text variant="heading-strong-l" wrap="balance">
            {post.metadata.title}
          </Text>
          <Text variant="body-default-m" onBackground="neutral-weak" lineClamp={2}>
            {post.metadata.summary}
          </Text>
        </Column>
      </Column>
    </Card>
  );
}
