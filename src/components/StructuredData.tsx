"use client";

import Script from "next/script";

type StructuredDataProps = {
    data: Record<string, any>;
};

export const StructuredData = ({ data }: StructuredDataProps) => {
    return (
        <Script
            id="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
};
