import { CheckCircle2, ExternalLink } from "lucide-react";

type ArticleContentProps = { content: string };

const titleCaseWords = new Set(["a", "an", "and", "as", "at", "by", "for", "from", "in", "of", "on", "or", "the", "to", "with"]);

const isHeading = (line: string) => {
  const words = line.replace(/^\d+\.\s*/, "").match(/[A-Za-z0-9]+/g) ?? [];
  const titleCaseCount = words.filter((word) => titleCaseWords.has(word.toLowerCase()) || /^[A-Z0-9]/.test(word)).length;
  return line.length < 105 && words.length > 1 && (/[?]$/.test(line) || titleCaseCount / words.length >= 0.75);
};

const isChecklistItem = (line: string) =>
  line.length < 210 &&
  !/[?]$/.test(line) &&
  !isHeading(line) &&
  (/^[-•]/.test(line) || /^\d+\.\s/.test(line) || /^(A |An |The |Proof |Copies |Travel |Bank |Health |Valid |Signed |Professional |Certified |Employer |Passport |Visa |Academic |Vocational |Police |Medical |Civil |GCC )/.test(line));

function renderInlineLinks(text: string) {
  const parts = text.split(/(\[[^\]]+\]\(https?:\/\/[^)]+\))/g);
  return parts.map((part, index) => {
    const match = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/);
    if (!match) return part;
    const [, label, href] = match;
    return <a key={`${href}-${index}`} href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 transition-colors hover:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700">{label}<ExternalLink size={14} aria-hidden="true" /></a>;
  });
}

export default function ArticleContent({ content }: ArticleContentProps) {
  const articleLines = content.split("\n").filter((line) => !/^(URL:|Meta Title:|SEO title:|Meta Description:)/.test(line));

  return <div className="space-y-1">{articleLines.map((line, index) => {
    if (!line.trim()) return <div key={`space-${index}`} className="h-5" />;
    if (isHeading(line)) return <h2 key={`${line}-${index}`} className="mt-10 border-l-4 border-blue-600 pl-4 text-2xl font-extrabold leading-tight tracking-tight text-slate-950 sm:mt-12 sm:text-3xl">{renderInlineLinks(line)}</h2>;
    if (isChecklistItem(line)) return <p key={`${line}-${index}`} className="mt-3 flex gap-3 rounded-xl bg-slate-50 px-4 py-3 leading-7 text-slate-700 ring-1 ring-slate-100"><CheckCircle2 className="mt-1 shrink-0 text-blue-600" size={17} aria-hidden="true" /><span>{renderInlineLinks(line.replace(/^[-•]\s*/, ""))}</span></p>;
    return <p key={`${line}-${index}`} className="mt-4 text-[1.05rem] leading-8 text-slate-700 first:mt-0">{renderInlineLinks(line)}</p>;
  })}</div>;
}
