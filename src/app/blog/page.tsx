import { Column, Heading, Meta, Schema, RevealFx, Text } from "@once-ui-system/core";
import { Mailchimp, StructuredData } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { TrendingNews } from "@/components/blog/TrendingNews";
import { NicheAggregator } from "@/components/blog/NicheAggregator";
import { baseURL, blog, person, newsletter, home } from "@/resources";

export async function generateMetadata() {
  const metadata = Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: home.image,
    path: blog.path,
  });

  return {
    ...metadata,
    keywords: blog.keywords,
    alternates: {
      canonical: `${baseURL}${blog.path}`,
    },
  };
}

export default function Blog() {
  return (
    <Column fillWidth horizontal="center" paddingTop="l" paddingBottom="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={home.image}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: baseURL,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Blog",
              item: `${baseURL}${blog.path}`,
            },
          ],
        }}
      />
      
      <Column fillWidth maxWidth="m" paddingX="l" gap="64">
        <Column gap="16">
          <RevealFx translateY="12">
            <Heading as="h1" variant="display-strong-xs">
              {blog.title}
            </Heading>
          </RevealFx>
          <RevealFx translateY="12" delay={0.1}>
            <Text variant="body-default-l" onBackground="neutral-weak">
              Deep insights on AI, high-performance engineering, and high-ticket strategy.
            </Text>
          </RevealFx>
        </Column>

        <Column fillWidth gap="xl">
          <Column gap="32">
            <Heading as="h2" variant="heading-strong-l">
              Featured Insights
            </Heading>
            <Posts range={[1, 1]} thumbnail />
          </Column>

          <Column gap="32">
            <Heading as="h2" variant="heading-strong-l">
              Recent Analysis
            </Heading>
            <Posts range={[2, 5]} columns="2" thumbnail direction="column" />
          </Column>

          <Mailchimp padding="l" radius="xl" background="surface" border="neutral-alpha-weak" />

          <Column gap="32">
            <Heading as="h2" variant="heading-strong-l">
              The Archive
            </Heading>
            <Posts range={[6]} columns="3" thumbnail={false} />
          </Column>

          <TrendingNews />
          <NicheAggregator />
        </Column>
      </Column>
    </Column>
  );
}
