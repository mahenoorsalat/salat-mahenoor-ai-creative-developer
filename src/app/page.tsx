import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
  Flex,
  Icon,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { ContactCTA, Services, ContactForm, FAQ, StructuredData, Testimonials, Stats } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";

export async function generateMetadata() {
  const metadata = Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });

  return {
    ...metadata,
    keywords: home.keywords,
    alternates: {
      canonical: baseURL,
    },
  };
}

export default function Home() {
  return (
    <Column maxWidth="m" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `${baseURL}/#website`,
              url: baseURL,
              name: person.name,
              description: home.description,
              publisher: {
                "@id": `${baseURL}/#person`,
              },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: baseURL,
                },
              ],
            },
            ...home.services.map((service, index) => ({
              "@type": "Service",
              name: service.title,
              description: service.description,
              provider: {
                "@id": `${baseURL}/#person`,
              },
            })),
            {
              "@type": "FAQPage",
              mainEntity: home.faq?.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  "text": typeof item.answer === 'string' ? item.answer : (item.answerPlain || ''),
                },
              })),
            },
          ],
        }}
      />
      
      <Column fillWidth gap="l" paddingX="l" vertical="center" horizontal="center" align="center" style={{ minHeight: '100vh', paddingTop: '40px' }}>
        {home.featured.display && (
          <RevealFx translateY="12" delay={0.1}>
            <Row fillWidth horizontal="center">
              <Badge
                style={{ background: 'var(--brand-alpha-weak)', border: '1px solid var(--brand-alpha-medium)' }}
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                href={home.featured.href}
              >
                <Row paddingY="2" gap="8" vertical="center">
                  <Flex
                    radius="full"
                    background="brand-strong"
                    style={{ width: '6px', height: '6px', boxShadow: '0 0 8px var(--brand-strong)' }}
                  />
                  {home.featured.title}
                </Row>
              </Badge>
            </Row>
          </RevealFx>
        )}
        
        <Flex direction="column" align="center" gap="16" fillWidth>
          <Heading
            as="h1"
            variant="display-strong-s"
            align="center"
            style={{
              maxWidth: '1000px',
              lineHeight: '1.05',
              letterSpacing: '-0.05em'
            }}>
            <RevealFx translateY="16" delay={0.2}>
              {home.headline}
            </RevealFx>
          </Heading>
          
          <RevealFx translateY="16" delay={0.25}>
            <Text
              variant="heading-default-l"
              onBackground="neutral-weak"
              align="center"
              style={{ maxWidth: '800px' }}>
              {home.subline}
            </Text>
          </RevealFx>
        </Flex>
        
        <RevealFx translateY="24" delay={0.3}>
          <Row gap="16" vertical="center" horizontal="center" fillWidth>
            <Button
              href="mailto:salatmahenoor7.8.6@gmail.com"
              variant="primary"
              size="l"
              prefixIcon="chevronRight">
              Secure your edge
            </Button>
            <Button
              href="/work"
              variant="tertiary"
              size="l">
              View Blueprint
            </Button>
          </Row>
        </RevealFx>

        <RevealFx translateY="16" delay={0.35}>
          <Stats />
        </RevealFx>
        <Row fillWidth paddingRight="64">
          <Line maxWidth={48} />
        </Row>
        <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
          <Row flex={1} paddingLeft="l" paddingTop="24">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Selected Work
            </Heading>
          </Row>
          <Row flex={3}>
            <Projects range={[1, 6]} />
          </Row>
        </Row>
      </Column>

      <RevealFx translateY="16" delay={0.4}>
        <Services />
      </RevealFx>

      <Column fillWidth gap="40" marginBottom="xl" paddingX="l">
        <Column fillWidth gap="16">
          <Row fillWidth horizontal="between" vertical="end">
            <Heading as="h2" variant="display-strong-xs">
              Reviews
            </Heading>
            <Text variant="body-default-s" onBackground="neutral-weak">
              100+ B2B companies trusted us...
            </Text>
          </Row>
          <Row fillWidth horizontal="between" vertical="center" borderTop="neutral-alpha-weak" paddingTop="16">
            <Text variant="body-default-s" onBackground="neutral-strong">
              ©2026
            </Text>
          </Row>
        </Column>
        <Column fillWidth>
          <Testimonials limit={2} />
        </Column>
      </Column>

      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest from the blog
              </Heading>
            </Row>
            <Row flex={3} paddingX="20">
              <Posts range={[1, 2]} columns="2" />
            </Row>
          </Row>
        </Column>
      )}

      <ContactForm />
      <FAQ />
      <ContactCTA />
    </Column>
  );
}
