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
      <TestimonialsView />
    </Column>
  );
}
