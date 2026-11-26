import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import JsonLd from "@/components/JsonLd";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kira AI Ring — Talk to your brain. In any language.",
    template: "%s | Kira AI Ring",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Kira AI Ring",
    "AI ring",
    "smart ring",
    "AI translator ring",
    "voice recorder ring",
    "AI transcription",
    "health tracking ring",
    "sleep tracker",
    "SpO2 ring",
    "wearable AI",
  ],
  authors: [{ name: "Kira AI" }],
  creator: "Kira AI",
  publisher: "Kira AI",
  category: "technology",
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    title: "Kira AI Ring — Talk to your brain. In any language.",
    description: SITE_DESCRIPTION,
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "Kira AI Ring in Midnight Black standing in desert dunes at sunset" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kira AI Ring — Talk to your brain. In any language.",
    description: SITE_DESCRIPTION,
    images: ["/images/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

const orgLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: "Kira AI",
      url: SITE_URL,
      logo: `${SITE_URL}/images/kira-orb.png`,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#org` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <noscript>
          <style>{`.reveal,.rv,.bubble,.bub,.hchip,.pillcap{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <JsonLd data={orgLd} />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
