"use client";

import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-3.5 bg-cream/90 backdrop-blur-md border-b border-maroon/15">
      <Link href="#" className="flex items-center gap-3 no-underline">
        <Image src="/old_cs_logo.png" alt="CS Club Logo" width={36} height={36} className="object-contain" />
        <span className="font-mono text-[13px] font-bold text-maroon leading-tight tracking-wide">
          Chapman<br />CS Club
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {[
          { href: "#about", label: "About" },
          { href: "#events", label: "Events" },
          { href: "#pantherhacks", label: "PantherHacks" },
          { href: "#board", label: "Board" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-mono text-[11px] text-muted uppercase tracking-widest hover:text-maroon transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="https://pantherconnect.chapman.edu/COMPSC/club_signup"
          target="_blank"
          className="font-mono text-[11px] uppercase tracking-widest bg-maroon text-white px-4 py-2 rounded-sm hover:bg-maroon-light transition-colors"
        >
          Join
        </Link>
      </div>
    </nav>
  );
}
