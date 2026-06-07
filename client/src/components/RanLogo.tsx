export function RanLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`} aria-label="Relocation Agent Network">
      <svg viewBox="0 0 40 40" width="36" height="36" aria-hidden="true">
        <defs>
          <linearGradient id="ranGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="36" height="36" rx="9" fill="url(#ranGrad)" />
        <path d="M12 27V13h7.5a4.5 4.5 0 0 1 1.4 8.78L25 27h-3.7l-3.6-5.6H15V27h-3Zm3-8.2h4.4a1.9 1.9 0 0 0 0-3.8H15v3.8Z" fill="#fff" />
      </svg>
      <div className="leading-tight">
        <div className="text-[15px] font-bold tracking-tight text-foreground">Relocation Agent</div>
        <div className="text-[13px] font-semibold tracking-tight text-[#5B2D8E]">Network</div>
      </div>
    </div>
  );
}

export function KendalLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`} aria-label="Kendal AI">
      <svg viewBox="0 0 40 40" width="28" height="28" aria-hidden="true">
        <defs>
          <linearGradient id="kGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="18" stroke="url(#kGrad)" strokeWidth="2" fill="none" />
        <path d="M14 12v16M14 20l9-8M14 20l9 8" stroke="url(#kGrad)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
      <span className="font-display text-base font-bold tracking-tight">Kendal AI</span>
    </div>
  );
}
