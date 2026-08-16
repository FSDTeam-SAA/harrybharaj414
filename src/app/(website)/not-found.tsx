import Link from "next/link";
import { ArrowLeft, BookOpen, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-slate-950 px-4 py-16 text-white sm:py-24">
      <div className="absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />
      <div className="absolute -bottom-28 -right-16 -z-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

      <section className="mx-auto max-w-2xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
          <Compass size={31} aria-hidden="true" className="text-blue-300" />
        </div>
        <p className="mt-8 text-7xl font-extrabold tracking-tighter text-white sm:text-8xl">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">This page is not on the map.</h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
          The page you&apos;re looking for may have moved, been updated, or no longer exists.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-slate-950 transition-colors hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            <ArrowLeft size={17} aria-hidden="true" />Back to home
          </Link>
          <Link href="/blogs" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/25 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            <BookOpen size={17} aria-hidden="true" />Explore blogs
          </Link>
        </div>
      </section>
    </main>
  );
}
