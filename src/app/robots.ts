import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/admingenerateslike690fee68-b534-832d-ab52-a7d6fce50316generateslike690fee68-b534-832d-ab52-a7d6fce50316"] },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
