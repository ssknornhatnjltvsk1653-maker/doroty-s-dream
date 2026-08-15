let ctx: AudioContext | null = null;

/** Soft, original chime generated with the Web Audio API (no copyrighted audio). */
export function playChime(muted: boolean) {
  if (muted || typeof window === "undefined") return;
  try {
    const AC = window.AudioContext ?? (window as any).webkitAudioContext;
    if (!AC) return;
    ctx = ctx ?? new AC();
    if (ctx.state === "suspended") void ctx.resume();
    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, i) => {
      const osc = ctx!.createOscillator();
      const gain = ctx!.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      const start = now + i * 0.16;
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.12, start + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 1.6);
      osc.connect(gain).connect(ctx!.destination);
      osc.start(start);
      osc.stop(start + 1.7);
    });
  } catch {
    /* audio unavailable — silent fallback */
  }
}
