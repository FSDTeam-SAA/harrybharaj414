import type { Metadata } from "next";

export const siteConfig = {
  name: "Destiny Abroad FZ-LLC",
  url: "https://www.destinyabroad.ae",
  description: "Professional work visa, study visa, immigration and documentation consulting for global opportunities.",
  email: "harrysingh@destinyabroad.ae",
  address: {
    streetAddress: "FDBC4169 Compass Building, Al Shohada Road, Al Hamra Industrial Zone-FZ",
    addressLocality: "Ras Al Khaimah",
    addressCountry: "AE",
  },
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
};

export function createPageMetadata({ title, description, path, type = "website" }: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type, url, title, description, siteName: siteConfig.name, locale: "en_US" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: absoluteUrl("/logo5.png"),
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    ...siteConfig.address,
  },
};
