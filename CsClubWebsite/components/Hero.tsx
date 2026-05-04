import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen px-12 pt-28 pb-20 relative overflow-hidden">
      <div className="relative max-w-[1440px] mx-auto min-h-[calc(100vh-12rem)] flex flex-col justify-center">
        {/* Logo overlay — sits in front of the binary, hidden on small screens */}
        <div className="hidden md:block absolute right-[10%] top-[14%] w-[clamp(280px,28vw,460px)] aspect-square pointer-events-none reveal reveal-delay-2">
          <Image
            src="/old_cs_logo.png"
            alt=""
            fill
            sizes="(min-width: 768px) 28vw, 0px"
            className="object-contain drop-shadow-[0_8px_24px_rgba(123,28,44,0.25)]"
            priority
          />
        </div>

        <div className="max-w-[900px] w-full relative">
        <p className="font-mono text-[11px] text-maroon tracking-[0.12em] uppercase mb-5 flex items-center gap-2.5 reveal">
          <span className="inline-block w-8 h-px bg-maroon" />
          Chapman University · Orange, CA
        </p>

        <h1 className="font-mono text-[clamp(36px,5.5vw,72px)] font-bold text-ink leading-[1.1] mb-7 reveal reveal-delay-1">
          Create.<br />
          Connect.<br />
          <span className="text-maroon">Collaborate.</span>
        </h1>

        <p className="text-[clamp(16px,2vw,19px)] text-muted max-w-[540px] leading-relaxed mb-11 font-light reveal reveal-delay-2">
          Chapman University&apos;s Computer Science Club brings together students from all disciplines
          to build skills, explore technology, and shape their future in tech.
        </p>

        <div className="flex gap-4 flex-wrap reveal reveal-delay-3">
          <Link
            href="https://pantherconnect.chapman.edu/COMPSC/club_signup"
            target="_blank"
            className="bg-maroon text-white px-7 py-3.5 font-mono text-xs uppercase tracking-widest rounded-sm hover:bg-maroon-light hover:-translate-y-px transition-all"
          >
            Join the Club
          </Link>
          <Link
            href="#about"
            className="border border-maroon text-maroon px-7 py-3.5 font-mono text-xs uppercase tracking-widest rounded-sm hover:bg-maroon hover:text-white hover:-translate-y-px transition-all"
          >
            Learn More
          </Link>
        </div>

        <div className="flex gap-8 mt-16 pt-10 border-t border-maroon/15 flex-wrap reveal reveal-delay-4 max-w-[820px]">
          {[
            { num: "2021", label: "Founded" },
            { num: "Weekly", label: "Club Meetings" },
            { num: "Free", label: "No Dues, Open to All" },
            { num: "Hackathons", label: "Yearly" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-vt text-4xl text-maroon leading-none">{stat.num}</div>
              <div className="text-xs text-muted tracking-wide mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
