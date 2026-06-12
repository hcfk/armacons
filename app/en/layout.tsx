import Script from "next/script";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { content } from "@/lib/content";

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: content.site.name,
    url: "https://www.armacons.com",
    logo: "https://www.armacons.com/images/ArmaLightBackGroundLogo.svg",
    email: content.site.email,
    telephone: content.site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mustafa Kemal Mah. 2139 Cad. No: 29 D: 7 Cankaya",
      addressLocality: "Ankara",
      addressCountry: "TR",
    },
  };

  return (
    <div className="min-h-screen">
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
