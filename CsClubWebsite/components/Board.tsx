import { Fragment } from "react";
import Image from "next/image";
import { boardTiers, type BoardMember } from "@/lib/boardData";

function BoardCard({ member, delay }: { member: BoardMember; delay: number }) {
  const className = `block border border-maroon/15 rounded-sm overflow-hidden hover:border-maroon hover:-translate-y-0.5 transition-all reveal reveal-delay-${delay}`;

  const inner = (
    <>
      <div className="w-full aspect-square bg-[repeating-linear-gradient(45deg,rgba(123,28,44,0.05)_0px,rgba(123,28,44,0.05)_2px,transparent_2px,transparent_10px)] flex items-center justify-center">
        {member.photo ? (
          <Image src={member.photo} alt={member.name} width={200} height={200} className="w-full h-full object-cover" />
        ) : (
          <span className="font-vt text-xs text-muted opacity-40 text-center px-1 leading-snug">photo</span>
        )}
      </div>
      <div className="p-3 px-4">
        <div className="font-mono text-[12px] font-bold text-ink mb-1">{member.name}</div>
        <div className="text-[11px] text-maroon tracking-wide">{member.role}</div>
      </div>
    </>
  );

  if (member.linkedin) {
    return (
      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return <div className={className}>{inner}</div>;
}

export default function Board() {
  return (
    <section id="board" className="max-w-[1100px] mx-auto px-12 py-24">
      <p className="font-mono text-[11px] text-maroon tracking-[0.12em] uppercase mb-3.5 flex items-center gap-2.5 reveal">
        <span className="inline-block w-6 h-px bg-maroon" />
        The Team
      </p>
      <h2 className="font-mono text-[clamp(24px,3vw,38px)] font-bold text-ink leading-tight mb-4 reveal reveal-delay-1">
        Meet the Board
      </h2>
      <p className="text-base text-muted max-w-[560px] leading-relaxed font-light mb-14 reveal reveal-delay-2">
        Our executive board keeps the club running. Interested in joining the board? Come to a meeting and get involved.
      </p>

      <div className="grid grid-cols-5 gap-4 max-sm:grid-cols-3">
        {boardTiers.map((tier) => (
          <Fragment key={tier.label}>
            <div className="col-span-5 max-sm:col-span-3 font-mono text-[10px] text-muted tracking-[0.12em] uppercase pb-2 border-b border-maroon/15 mt-4 first:mt-0">
              {tier.label}
            </div>
            {tier.members.map((m, i) => (
              <BoardCard key={`${tier.label}-${i}`} member={m} delay={(i % 4) + 1} />
            ))}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
