import { Column, Meta, Schema } from "@once-ui-system/core";
import TestimonialsView from "@/components/testimonials/TestimonialsView";
import { StructuredData } from "@/components";
import { baseURL, testimonials, person, home, about } from "@/resources";


export async function generateMetadata() {
  const metadata = Meta.generate({
    title: testimonials.title,
    description: testimonials.description,
    baseURL: baseURL,
    image: home.image,
    path: testimonials.path,
  });

  return {
    ...metadata,
    keywords: testimonials.keywords,
    alternates: {
      canonical: `${baseURL}${testimonials.path}`,
    },
  };
}



export default function Testimonials() {
  return (
    <Column maxWidth="m" paddingTop="24" gap="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={testimonials.title}
        description={testimonials.description}
        path={testimonials.path}
        image={home.image}
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
              "@type": "WebPage",
              "@id": `${baseURL}${testimonials.path}#webpage`,
              url: `${baseURL}${testimonials.path}`,
              name: testimonials.title,
              description: testimonials.description,
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
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Testimonials",
                  item: `${baseURL}${testimonials.path}`,
                },
              ],
            },
            {
              "@type": "AggregateRating",
              itemReviewed: {
                "@type": "ProfessionalService",
                "@id": `${baseURL}/#service`,
                name: person.name,
                image: `${baseURL}${person.avatar}`,
              },
              ratingValue: "5",
              reviewCount: testimonials.items.length.toString(),
            },
            ...testimonials.items.map((item) => ({
              "@type": "Review",
              author: {
                "@type": "Person",
                name: item.name,
              },
              reviewBody: item.contentPlain || "",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
              itemReviewed: {
                "@id": `${baseURL}/#service`,
              },
            })),
          ],
        }}
      />
      <TestimonialsView />
    </Column>
  );
}
