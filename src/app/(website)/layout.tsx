import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import TanStackProvider from "@/provider/tanstackProvider";
import { Toaster } from "sonner";
import LayoutVisibilityWrapper from "@/provider/layout-visibility-wraper";
import { organizationJsonLd, siteConfig } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Destiny Abroad | Visa, Immigration & Documentation Support", template: "%s | Destiny Abroad" },
  description: siteConfig.description,
  verification: { google: "4nODIe9xb1fRzvlkNE0OcD_cDOWMhCGKvTmcSVlUe6g" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18408427055"
          strategy="afterInteractive"
        />
        <Script id="google-tag-aw-18408427055" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18408427055');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutVisibilityWrapper>
          <TanStackProvider>
            {children}
            <Toaster position="top-center" richColors closeButton />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
          </TanStackProvider>
        </LayoutVisibilityWrapper>
      </body>
    </html>
  );
}
