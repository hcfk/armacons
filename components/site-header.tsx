"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { content } from "@/lib/content";

function isDarkRoute(pathname: string) {
  return pathname === "/en" || pathname.startsWith("/en/capabilities");
}

export function SiteHeader() {
  const pathname = usePathname();
  const resolvedPathname = pathname ?? "/en";
  const isHomepage = resolvedPathname === "/en";
  const dark = isDarkRoute(resolvedPathname);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClassName = isHomepage
    ? hasScrolled
      ? "border-b border-white/10 bg-[rgba(16,38,63,0.9)] text-[rgb(245,244,241)] shadow-[0_14px_40px_rgba(7,18,31,0.24)] backdrop-blur-xl"
      : "border-b border-white/8 bg-[rgba(16,38,63,0.3)] text-[rgb(245,244,241)] backdrop-blur-md"
    : "border-b border-[rgba(16,38,63,0.08)] bg-[rgba(245,244,241,0.92)] text-[rgb(16,38,63)] shadow-[0_10px_30px_rgba(16,38,63,0.06)] backdrop-blur-xl";

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${headerClassName}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/en" className="flex items-center">
          <Image
            src={dark ? "/images/ArmaDarkBackgroundLogo.svg" : "/images/ArmaLightBackGroundLogo.svg"}
            alt="Arma Infrastructure"
            width={220}
            height={56}
            priority
            className="h-auto w-[180px] lg:w-[220px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {content.navigation.map((item) => {
            const active = resolvedPathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "rounded-full border border-current/20 px-4 py-2 opacity-100"
                    : `rounded-full px-4 py-2 opacity-80 transition-all hover:opacity-100 ${
                        isHomepage ? "hover:bg-white/6" : "hover:bg-[rgba(16,38,63,0.06)]"
                      }`
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
