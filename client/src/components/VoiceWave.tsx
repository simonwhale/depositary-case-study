export function VoiceWave({ className = "" }: { className?: string }) {
  // 22 bars with varied delay/heights — the audible "always-on" voice motif
  const bars = Array.from({ length: 22 });
  return (
    <div className={`flex items-end gap-[3px] h-8 ${className}`} aria-hidden="true">
      {bars.map((_, i) => {
        const h = [10, 18, 26, 14, 22, 30, 12, 20, 28, 16, 24, 18, 32, 14, 22, 26, 18, 12, 28, 20, 16, 24][i] || 18;
        return (
          <span
            key={i}
            className="voice-bar inline-block w-[3px] rounded-full"
            style={{
              height: `${h}px`,
              animationDelay: `${(i % 8) * 0.12}s`,
              background: i % 3 === 0
                ? "hsl(var(--kendal-cyan))"
                : i % 3 === 1
                ? "hsl(var(--kendal-violet-2))"
                : "rgba(255,255,255,0.55)",
            }}
          />
        );
      })}
    </div>
  );
}

export function PulsingDot({ className = "" }: { className?: string }) {
  return (
    <span className={`relative inline-flex h-2.5 w-2.5 ${className}`} aria-hidden="true">
      <span className="absolute inset-0 rounded-full bg-emerald-400 soft-pulse" />
      <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
    </span>
  );
}
