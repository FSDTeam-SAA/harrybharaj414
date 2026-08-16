import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";
import { notFound } from "next/navigation";
import ArticleContent from "@/components/blogs/ArticleContent";
import { blogs, getBlogBySlug } from "@/lib/blogs";
import { getRawBlogContent } from "@/lib/raw-blog-content";
import { absoluteUrl, createPageMetadata, siteConfig } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  return blog ? createPageMetadata({ title: blog.metaTitle, description: blog.metaDescription, path: `/blogs/${slug}`, type: "article" }) : {};
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.metaDescription,
    mainEntityOfPage: absoluteUrl(`/blogs/${slug}`),
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  };
  const relatedServices = slug === "germany-work-visa-opportunity-card"
    ? [
        { href: "/services/workvisadetails", label: "Work Visa Consulting" },
        { href: "/services/careervisadetails", label: "Career & CV Guidance" },
      ]
    : [
        { href: "/services/workvisadetails", label: "Work Visa Consulting" },
        { href: "/services/documentationvisadetails", label: "Documentation Support" },
      ];

  return (
    <main id="main-content" className="min-h-screen bg-slate-50 pb-20 text-slate-900">
      <section className={`bg-linear-to-br ${blog.accent} px-4 py-16 text-white sm:py-20`}>
        <div className="mx-auto max-w-4xl">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            <ArrowLeft size={17} aria-hidden="true" />All blogs
          </Link>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">{blog.category}</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">{blog.title}</h1>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/90">
            <span className="flex items-center gap-2"><CalendarDays size={16} aria-hidden="true" />{blog.publishedOn}</span>
            <span className="flex items-center gap-2"><Clock3 size={16} aria-hidden="true" />{blog.readTime}</span>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <div className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/50 ring-1 ring-slate-200 sm:p-10 md:p-12">
          <ArticleContent content={getRawBlogContent(slug) ?? ""} />
        </div>
        <section aria-labelledby="related-services-heading" className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 id="related-services-heading" className="text-xl font-bold text-slate-900">Related services</h2>
          <p className="mt-2 text-slate-600">Explore tailored guidance for your application and document preparation.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {relatedServices.map((service) => (
              <Link key={service.href} href={service.href} className="rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">
                {service.label}
              </Link>
            ))}
          </div>
        </section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      </article>
    </main>
  );
}
