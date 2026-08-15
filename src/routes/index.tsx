import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { Petals, Sparkles } from "@/components/love/Petals";
import { Reveal } from "@/components/love/Reveal";
import { Rose } from "@/components/love/Rose";
import { playChime } from "@/components/love/celebrate";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "For Doroty — Will You Be Mine? ♡" },
      {
        name: "description",
        content:
          "A dreamy pink love letter and proposal made just for Doroty — roses, poetry, memories and one very important question.",
      },
      { property: "og:title", content: "For Doroty — Will You Be Mine? ♡" },
      {
        property: "og:description",
        content:
          "A dreamy pink love letter and proposal made just for Doroty — roses, poetry, memories and one very important question.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const THINGS = [
  { icon: "🌹", label: "Red roses", note: "the colour of every thought of you" },
  { icon: "🎀", label: "Pink everything", note: "you turned my world that shade" },
  { icon: "🐰", label: "Bunnies", note: "soft, sweet, a little shy — like you" },
  { icon: "👑", label: "Princesses", note: "except you're the real one" },
  { icon: "🎮", label: "Video games", note: "player two, forever" },
  { icon: "🎵", label: "Music", note: "every love song makes sense now" },
  { icon: "🛍️", label: "Shopping", note: "I'd carry all the bags, happily" },
  { icon: "🌙", label: "Sleeping", note: "goodnight is my favourite word" },
  { icon: "✍️", label: "Poetry", note: "you're the line I keep rewriting" },
];

const TIMELINE = [
  { title: "Our first conversation", hint: "[ Add the day we first talked here ]" },
  { title: "My favorite memory with you", hint: "[ Add that memory here ]" },
  { title: "The moment I realized I loved you", hint: "[ Add that moment here ]" },
  { title: "A special moment", hint: "[ Add something only we know here ]" },
  { title: "Our future together", hint: "[ Add the life I want with you here ]" },
];

const SONGS = [
  { title: "[ Song one ]", artist: "add your song here", len: "3:24" },
  { title: "[ Song two ]", artist: "add your song here", len: "4:02" },
  { title: "[ Song three ]", artist: "add your song here", len: "2:58" },
  { title: "[ Song four ]", artist: "add your song here", len: "3:47" },
];

function Index() {
  const [opened, setOpened] = useState(false);
  const [muted, setMuted] = useState(false);
  const [said, setSaid] = useState<null | "yes" | "course">(null);
  const [nowPlaying, setNowPlaying] = useState(0);
  const [playing, setPlaying] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (opened) {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  const answer = useCallback(
    (kind: "yes" | "course") => {
      setSaid(kind);
      playChime(muted);
      window.setTimeout(() => {
        document.getElementById("after")?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    },
    [muted],
  );

  return (
    <div className="relative min-h-screen dream-bg font-body text-foreground">
      {/* ---------- Opening veil ---------- */}
      {!opened && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden dream-bg px-6 text-center">
          <Petals count={22} />
          <Sparkles count={12} />
          <Rose size={72} bloom className="mb-6 animate-float-soft" />
          <h1 className="animate-shimmer-text font-display text-6xl leading-none text-gradient-rose sm:text-7xl">
            Doroty...
          </h1>
          <p className="mt-5 max-w-xs text-balance text-base tracking-wide text-muted-foreground">
            I made a little something for you ♡
          </p>
          <button
            onClick={() => setOpened(true)}
            className="animate-breathe mt-10 rounded-full bg-[image:var(--gradient-rose)] px-9 py-4 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            Open My Heart ♡
          </button>
        </div>
      )}

      {/* ---------- Mute control ---------- */}
      {opened && (
        <button
          onClick={() => setMuted((m) => !m)}
          aria-label={muted ? "Unmute sounds" : "Mute sounds"}
          className="glass fixed bottom-5 right-5 z-40 h-11 w-11 rounded-full text-base transition-transform hover:scale-110 active:scale-95"
        >
          {muted ? "🔇" : "🔈"}
        </button>
      )}

      <main
        ref={mainRef}
        className={`relative transition-all duration-1000 ${opened ? "opacity-100 blur-0" : "pointer-events-none opacity-0 blur-md"}`}
      >
        {/* ---------- Section 1 ---------- */}
        <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-6 py-24">
          <Petals count={14} opacity={0.55} />
          <div className="relative mx-auto max-w-xl text-center">
            <Reveal>
              <p className="font-script text-3xl text-rose">My favorite person</p>
            </Reveal>
            <Reveal delay={200}>
              <h2 className="mt-6 text-balance font-display text-4xl leading-snug text-plum sm:text-5xl">
                Out of all the people in this world, somehow I got lucky enough to find
                you.
              </h2>
            </Reveal>
            <div className="mt-12 flex items-end justify-center gap-4">
              {[0, 1, 2, 3, 4].map((i) => (
                <Reveal key={i} delay={400 + i * 220}>
                  <Rose size={i === 2 ? 76 : 48} className="animate-float-soft" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Section 2 ---------- */}
        <section className="relative px-5 py-24">
          <div className="mx-auto max-w-3xl">
            <Reveal className="text-center">
              <h2 className="text-balance font-display text-4xl text-plum sm:text-5xl">
                Things that make me think of you
              </h2>
            </Reveal>
            <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
              {THINGS.map((t, i) => (
                <Reveal as="li" key={t.label} delay={i * 70}>
                  <button
                    type="button"
                    className="glass group h-full w-full rounded-3xl p-5 text-left transition-all duration-500 hover:-translate-y-2 hover:rotate-[-1.5deg] hover:glow-soft active:scale-95"
                  >
                    <span className="block text-3xl transition-transform duration-500 group-hover:scale-125">
                      {t.icon}
                    </span>
                    <span className="mt-3 block font-display text-xl text-plum">
                      {t.label}
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                      {t.note}
                    </span>
                  </button>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- Section 3 — poem ---------- */}
        <section className="relative overflow-hidden px-5 py-24">
          <Sparkles count={10} />
          <div className="mx-auto max-w-xl">
            <Reveal>
              <div className="glass rounded-[2.5rem] px-7 py-12 text-center">
                <Rose size={44} className="mx-auto" />
                <h2 className="mt-5 text-balance font-script text-4xl text-rose-deep">
                  For the girl who made my world pink
                </h2>
                <div className="mt-8 space-y-4 font-display text-lg leading-relaxed text-plum/90">
                  {[
                    "Before you, the sky was only sky,",
                    "and mornings were just something I got through.",
                    "Then you laughed, somewhere near me,",
                    "and the whole day turned a softer shade.",
                    "",
                    "Now roses look like your name to me,",
                    "and pink is not a colour, it's a feeling —",
                    "the one I get when your message lights the room",
                    "at an hour that should have been ordinary.",
                    "",
                    "I don't need the world to be beautiful, Doroty.",
                    "You keep handing me small, quiet moments,",
                    "and somehow every one of them",
                    "feels like the luckiest thing I own.",
                  ].map((line, i) =>
                    line === "" ? (
                      <div key={i} className="h-2" />
                    ) : (
                      <Reveal key={i} delay={i * 90}>
                        <p>{line}</p>
                      </Reveal>
                    ),
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Section 4 — timeline ---------- */}
        <section className="relative px-5 py-24">
          <div className="mx-auto max-w-2xl">
            <Reveal className="text-center">
              <h2 className="font-display text-4xl text-plum sm:text-5xl">
                Our little world
              </h2>
            </Reveal>
            <ol className="relative mt-14 space-y-8 pl-8">
              <span
                aria-hidden
                className="absolute left-[7px] top-2 h-full w-px bg-[linear-gradient(180deg,transparent,var(--rose),transparent)]"
              />
              {TIMELINE.map((m, i) => (
                <Reveal as="li" key={m.title} delay={i * 120} className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-8 top-6 h-4 w-4 rounded-full bg-[image:var(--gradient-rose)] glow-soft"
                  />
                  <div className="glass rounded-3xl p-6 transition-transform duration-500 hover:-translate-y-1">
                    <h3 className="font-display text-2xl text-rose-deep">{m.title}</h3>
                    <p className="mt-2 text-sm italic text-muted-foreground">{m.hint}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- Section 5 — music ---------- */}
        <section className="relative overflow-hidden px-5 py-24">
          <div className="mx-auto max-w-md">
            <Reveal>
              <div className="night-bg relative overflow-hidden rounded-[2.5rem] p-7 text-white/90 shadow-[var(--shadow-soft)]">
                <Petals count={8} kind="sparkle" opacity={0.4} />
                <h2 className="relative font-display text-3xl text-white">
                  Songs that feel like you ♡
                </h2>
                <div className="relative mt-6 flex items-center gap-4">
                  <div
                    className={`grid h-24 w-24 shrink-0 place-items-center rounded-3xl bg-[image:var(--gradient-rose)] text-3xl ${playing ? "animate-breathe" : ""}`}
                  >
                    🌹
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-display text-2xl text-white">
                      {SONGS[nowPlaying].title}
                    </p>
                    <p className="truncate text-xs uppercase tracking-[0.2em] text-white/55">
                      {SONGS[nowPlaying].artist}
                    </p>
                  </div>
                </div>

                <div className="relative mt-6 h-1 rounded-full bg-white/15">
                  <div
                    className="h-full rounded-full bg-[image:var(--gradient-rose)] transition-all duration-700"
                    style={{ width: playing ? "62%" : "8%" }}
                  />
                </div>

                <div className="relative mt-5 flex items-center justify-center gap-7 text-xl">
                  <button
                    aria-label="Previous song"
                    onClick={() =>
                      setNowPlaying((n) => (n - 1 + SONGS.length) % SONGS.length)
                    }
                    className="opacity-70 transition hover:opacity-100 active:scale-90"
                  >
                    ⏮
                  </button>
                  <button
                    aria-label={playing ? "Pause" : "Play"}
                    onClick={() => setPlaying((p) => !p)}
                    className="grid h-14 w-14 place-items-center rounded-full bg-[image:var(--gradient-rose)] text-lg transition hover:scale-105 active:scale-95"
                  >
                    {playing ? "❚❚" : "▶"}
                  </button>
                  <button
                    aria-label="Next song"
                    onClick={() => setNowPlaying((n) => (n + 1) % SONGS.length)}
                    className="opacity-70 transition hover:opacity-100 active:scale-90"
                  >
                    ⏭
                  </button>
                </div>

                <ul className="relative mt-7 space-y-1">
                  {SONGS.map((s, i) => (
                    <li key={s.title}>
                      <button
                        onClick={() => setNowPlaying(i)}
                        className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm transition ${
                          i === nowPlaying
                            ? "glass-dark text-white"
                            : "text-white/60 hover:bg-white/5"
                        }`}
                      >
                        <span className="truncate">{s.title}</span>
                        <span className="ml-3 shrink-0 text-xs text-white/40">
                          {s.len}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
                <p className="relative mt-5 text-center text-[11px] text-white/40">
                  Placeholders — add her songs here later.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Section 6 — love letter ---------- */}
        <section className="relative px-5 py-24">
          <div className="mx-auto max-w-xl">
            <Reveal>
              <article className="relative rounded-[2rem] bg-[linear-gradient(160deg,oklch(0.995_0.008_90),oklch(0.96_0.03_350))] p-8 shadow-[var(--shadow-soft)] sm:p-12">
                <span
                  aria-hidden
                  className="absolute -top-5 left-1/2 -translate-x-1/2 text-3xl"
                >
                  🌹
                </span>
                <h2 className="font-script text-4xl text-rose-deep">Dear Doroty,</h2>
                <div className="mt-6 space-y-5 text-[15px] leading-8 text-plum/85">
                  {[
                    "I've started this letter a few times, because there isn't a neat way to say what you've become to me. You didn't arrive loudly. You just showed up, kept showing up, and slowly the days started arranging themselves around you.",
                    "I love how you care about small things — the songs you replay, the way you notice details nobody else does, the way you're soft with people even when you're tired. That's the part of you I admire most, and I don't think you give yourself enough credit for it.",
                    "You've made ordinary hours feel like something worth keeping. A normal evening turns into a memory just because you're in it. That's not a small thing. That's most of what happiness actually is.",
                    "So thank you for being patient with me, for laughing at me, for letting me be part of your world. I'm not going anywhere. I just want to keep choosing you, quietly, on the good days and the boring ones.",
                  ].map((p, i) => (
                    <Reveal key={i} delay={i * 160}>
                      <p>{p}</p>
                    </Reveal>
                  ))}
                </div>
                <p className="mt-8 text-right font-script text-3xl text-rose">
                  Always yours ♡
                </p>
              </article>
            </Reveal>
          </div>
        </section>

        {/* ---------- Final proposal ---------- */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-28 text-center">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_20%,oklch(0.96_0.05_350),transparent_70%),linear-gradient(180deg,oklch(0.97_0.03_20),oklch(0.9_0.07_355))]"
          />
          <Petals count={20} />
          <Sparkles count={16} />
          <div className="relative">
            <Reveal>
              <h2 className="font-display text-5xl text-gradient-rose">Doroty...</h2>
            </Reveal>
            <Reveal delay={250}>
              <p className="mt-6 font-display text-2xl text-plum">
                I don't need a perfect world.
              </p>
            </Reveal>
            <Reveal delay={500}>
              <p className="mt-2 font-display text-2xl text-plum">
                I just want a world where I get to keep loving you.
              </p>
            </Reveal>
            <Reveal delay={800}>
              <h3 className="animate-shimmer-text mt-12 text-balance font-script text-5xl text-rose-deep sm:text-6xl">
                Will you be mine? ♡
              </h3>
            </Reveal>
            <Reveal delay={1000}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button
                  onClick={() => answer("yes")}
                  className="animate-breathe w-full max-w-[240px] rounded-full bg-[image:var(--gradient-rose)] px-10 py-4 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:scale-105 active:scale-95"
                >
                  Yes ♡
                </button>
                <button
                  onClick={() => answer("course")}
                  className="glass w-full max-w-[240px] rounded-full px-10 py-4 text-sm font-medium uppercase tracking-[0.2em] text-rose-deep transition-transform hover:scale-105 active:scale-95"
                >
                  Of course 🎀
                </button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- After yes ---------- */}
        {said && (
          <section
            id="after"
            className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-28 text-center"
          >
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,oklch(0.98_0.03_20),oklch(0.91_0.06_350))]"
            />
            <Petals count={26} />
            <Petals count={18} kind="heart" opacity={0.85} />
            <Sparkles count={20} />
            <div className="relative animate-bloom">
              <Rose size={140} bloom className="mx-auto" />
              <h2 className="mt-8 text-balance font-display text-4xl text-plum sm:text-5xl">
                You just made my whole world even more beautiful. ♡
              </h2>
              <p className="mt-6 font-script text-5xl text-gradient-rose">
                I love you, Doroty.
              </p>
              <button
                onClick={() => playChime(muted)}
                className="glass mt-10 rounded-full px-7 py-3 text-xs uppercase tracking-[0.2em] text-rose-deep transition-transform hover:scale-105 active:scale-95"
              >
                Celebrate again ✦
              </button>
            </div>
          </section>
        )}

        <footer className="relative pb-14 pt-6 text-center">
          <p className="font-script text-2xl text-rose">
            made with love by Jeff (Manav) ♡
          </p>
        </footer>
      </main>
    </div>
  );
}
