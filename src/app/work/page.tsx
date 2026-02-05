import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, work, home } from "@/resources";
import { Projects } from "@/components/work/Projects";
import { StructuredData } from "@/components";

export async function generateMetadata() {
  const metadata = Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: home.image,
    path: work.path,
  });

  return {
    ...metadata,
    keywords: work.keywords,
  };
}



export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
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
              "@type": "CollectionPage",
              "@id": `${baseURL}${work.path}#webpage`,
              url: `${baseURL}${work.path}`,
              name: work.title,
              description: work.description,
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
                  name: "Work",
                  item: `${baseURL}${work.path}`,
                },
              ],
            },
          ],
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {work.title}
      </Heading>
      <Projects />
    </Column>
  );
}
