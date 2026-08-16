import type { MetadataRoute } from "next";
import { blogs } from "@/lib/blogs";
import { absoluteUrl } from "@/lib/seo";

const staticRoutes = [
  "/", "/about", "/contact", "/services", "/services/workvisadetails", "/services/studyvisadetails",
  "/services/immigrationvisadetails", "/services/careervisadetails", "/services/documentationvisadetails",
  "/services/languagevisadetails", "/blogs", "/t&c",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    ...staticRoutes.map((path) => ({ url: absoluteUrl(path), lastModified, changeFrequency: path === "/" ? "weekly" as const : "monthly" as const, priority: path === "/" ? 1 : 0.8 })),
    ...blogs.map((blog) => ({ url: absoluteUrl(`/blogs/${blog.slug}`), lastModified, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
