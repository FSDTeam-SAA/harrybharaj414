import Link from "next/link";
import { ArrowRight, BookOpen, Clock3, FileCheck2, ShieldCheck } from "lucide-react";
import { blogs } from "@/lib/blogs";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Visa & Immigration Guides",
  description: "Read practical work visa, immigration, documentation and fraud-prevention guides from Destiny Abroad.",
  path: "/blogs",
});

const icons = [FileCheck2, BookOpen, ShieldCheck, BookOpen];

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20 text-slate-900">

      <section className="mx-auto max-w-6xl px-4 pt-12 sm:pt-16">
        <div className="mb-8"><p className="text-sm font-semibold uppercase tracking-wider text-blue-700">Latest resources</p><h2 className="mt-2 text-2xl font-bold sm:text-3xl">Explore our guides</h2></div>
        <div className="grid gap-6 md:grid-cols-2">
          {blogs.map((blog, index) => {
            const Icon = icons[index];
            return <article key={blog.slug} className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition duration-200 hover:-translate-y-1 hover:shadow-lg">
              <div className={`relative h-44 overflow-hidden bg-linear-to-br ${blog.accent} p-6`}>
                <div className="absolute -right-5 -top-7 h-36 w-36 rounded-full border-[18px] border-white/15" />
                <div className="absolute -bottom-12 left-12 h-28 w-28 rounded-full bg-white/10" />
                <div className="relative flex h-full flex-col justify-between"><Icon size={34} strokeWidth={1.6} aria-hidden="true" className="text-white" /><span className="w-fit rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">{blog.category}</span></div>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-center gap-3 text-sm text-slate-500"><span>{blog.publishedOn}</span><span aria-hidden="true">•</span><span className="flex items-center gap-1"><Clock3 size={14} aria-hidden="true" />{blog.readTime}</span></div>
                <h2 className="mt-4 text-xl font-bold leading-snug sm:text-2xl">{blog.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{blog.excerpt}</p>
                <Link href={`/blogs/${blog.slug}`} className="mt-6 inline-flex w-fit items-center gap-2 font-semibold text-blue-700 transition-colors hover:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700">Read more <ArrowRight size={17} aria-hidden="true" /></Link>
              </div>
            </article>;
          })}
        </div>
      </section>
    </main>
  );
}
