import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { Petals, Sparkles } from "@/components/love/Petals";
import { Reveal } from "@/components/love/Reveal";
import { playChime } from "@/components/love/celebrate";
import heroGarden from "@/assets/hero-garden.jpg";
import rosesBouquet from "@/assets/roses-bouquet.jpg";
import pinkSky from "@/assets/pink-sky.jpg";
import letterPaper from "@/assets/letter-paper.jpg";
import bunny from "@/assets/bunny.jpg";
import album from "@/assets/album.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "For Doroty — Will You Be Mine? ♡" },
      {
        name: "description",
        content:
          "A dreamy pink love letter and proposal made just for Doroty — roses, poetry, our memories and one very important question.",
      },
      { property: "og:title", content: "For Doroty — Will You Be Mine? ♡" },
      {
        property: "og:description",
        content:
          "A dreamy pink love letter and proposal made just for Doroty — roses, poetry, our memories and one very important question.",
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
  {
    tag: "The beginning",
    title: "The day we first talked",
    body: "It started with something so ordinary that I didn't even know it was the start of anything. A message, a reply, a joke that landed better than it should have. I remember rereading your texts before I answered, because I didn't want to sound boring to a girl I had just met. That night the chat kept going long after it should have ended, and when I finally put my phone down I was smiling at nothing. That's the part I'll never forget — how easy it was, from the very first line.",
  },
  {
    tag: "Us, slowly",
    title: "When our conversations became my favourite part of the day",
    body: "Somewhere along the way, 'good morning' stopped being a formality and became something I actually waited for. I'd save little things through the day just to tell you about them — a song, a stupid meme, something someone said that I knew would make you laugh. You told me about your day in that detailed way you do, and I never once got bored. I think that's when I realised: I don't just like talking to you, I like who I am when I'm talking to you.",
  },
  {
    tag: "The realisation",
    title: "The moment I knew it was more than a crush",
    body: "It wasn't a big cinematic moment. It was a normal night, you were tired, half asleep, typing slower and slower, and you still stayed to finish the conversation. That's when it hit me. I wasn't excited anymore — I was calm. The kind of calm you only feel around someone who already feels like home. I sat there for a long time after you fell asleep, just thinking, 'this one is different.'",
  },
  {
    tag: "The little things",
    title: "The things nobody else would notice",
    body: "The way you type 'hehe' when you're actually shy. The way you get louder when you talk about something you love. The songs you replay until they're basically yours. The way you say you're fine and I already know you're not. I keep a whole collection of these tiny details about you in my head, and none of them are important to anyone else — which is exactly why they matter to me.",
  },
  {
    tag: "The hard days",
    title: "The nights that made us closer",
    body: "There were days when you weren't okay and I couldn't fix it, and all I could do was stay. I think those nights taught me more about us than the happy ones. You let me see you when you weren't perfect, and I didn't run — I just wanted to sit there with you until it got lighter. That trust is the most beautiful thing you've ever given me.",
  },
  {
    tag: "What's next",
    title: "The life I keep imagining",
    body: "A small place that smells like your perfume. Roses on the table because you deserve them on a random Tuesday. Your playlist on in the background, you singing the wrong lyrics on purpose. Long drives with no destination. Fights that end in laughing. Growing older with the same person who once was just a name on my screen. Doroty, I don't want a perfect life — I want that one, with you.",
  },
];

const SONGS = [
  { title: "Young and Beautiful", artist: "Lana Del Rey", len: "3:56", vibe: "you, in slow motion" },
  { title: "Sweet", artist: "Playboi Carti", len: "3:47", vibe: "our late-night energy" },
  { title: "Love In The Dark", artist: "Adele", len: "4:45", vibe: "for the heavy nights" },
  { title: "Die For You", artist: "The Weeknd", len: "4:20", vibe: "obviously about you" },
  { title: "Summertime Sadness", artist: "Lana Del Rey", len: "4:25", vibe: "your kind of pretty sad" },
  { title: "Best Part", artist: "Daniel Caesar & H.E.R.", len: "3:29", vibe: "the truth, simply" },
];

function Index() {
  const [opened, setOpened] = useState(false);
  const [closing, setClosing] = useState(false);
  const [muted, setMuted] = useState(false);
  const [said, setSaid] = useState<null | "yes" | "course">(null);
  const [nowPlaying, setNowPlaying] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [openCard, setOpenCard] = useState<number | null>(0);

  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  const open = useCallback(() => {
    setClosing(true);
    window.setTimeout(() => setOpened(true), 650);
  }, []);

  const answer = useCallback(
    (kind: "yes" | "course") => {
      setSaid(kind);
      playChime(muted);
      window.setTimeout(() => {
        document.getElementById("after")?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    },
    [muted],
  );

  return (
    <div className="relative min-h-screen dream-bg font-body text-foreground">
      {/* ---------- Opening veil ---------- */}
      {!opened && (
        <div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden px-6 text-center transition-all duration-700 ${
            closing ? "scale-105 opacity-0 blur-xl" : "opacity-100"
          }`}
        >
          <img
            src={heroGarden}
            alt="Soft rose garden at golden hour"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.99_0.02_350/0.55),oklch(0.93_0.06_350/0.75))] backdrop-blur-[2px]"
          />
          <Petals count={20} />
          <Sparkles count={12} />
          <div className="relative">
            <p className="font-script text-2xl text-rose-deep">for you,</p>
            <h1 className="animate-shimmer-text mt-1 font-display text-6xl leading-none text-gradient-rose sm:text-7xl">
              Doroty
            </h1>
            <p className="mt-5 max-w-xs text-balance text-base tracking-wide text-plum/80">
              I made a little something for you ♡
            </p>
            <button
              onClick={open}
              className="animate-breathe mt-10 rounded-full bg-[image:var(--gradient-rose)] px-9 py-4 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              Open My Heart ♡
            </button>
          </div>
        </div>
      )}

      {opened && (
        <button
          onClick={() => setMuted((m) => !m)}
          aria-label={muted ? "Unmute sounds" : "Mute sounds"}
          className="glass fixed bottom-5 right-5 z-40 h-11 w-11 rounded-full text-base transition-transform hover:scale-110 active:scale-95"
        >
          {muted ? "🔇" : "🔈"}
        </button>
      )}

      {opened && (
        <main className="relative">
          {/* ---------- Section 1 ---------- */}
          <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-6 py-24">
            <img
              src={rosesBouquet}
              alt="Bouquet of blush and red roses"
              className="absolute inset-0 h-full w-full object-cover"
              width={1280}
              height={864}
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.99_0.02_350/0.75),oklch(0.96_0.04_350/0.9))]"
            />
            <Petals count={14} opacity={0.55} />
            <div className="relative mx-auto max-w-xl text-center">
              <Reveal>
                <p className="font-script text-3xl text-rose">My favorite person</p>
              </Reveal>
              <Reveal delay={200}>
                <h2 className="mt-6 text-balance font-display text-4xl leading-snug text-plum sm:text-5xl">
                  Out of all the people in this world, somehow I got lucky enough to
                  find you.
                </h2>
              </Reveal>
              <Reveal delay={450}>
                <p className="mt-6 text-balance text-sm leading-7 text-plum/70">
                  Scroll slowly. Every part of this was written thinking about you.
                </p>
              </Reveal>
            </div>
          </section>

          {/* ---------- Section 2 ---------- */}
          <section className="relative px-5 py-24">
            <div className="mx-auto max-w-4xl">
              <Reveal className="text-center">
                <h2 className="text-balance font-display text-4xl text-plum sm:text-5xl">
                  Things that make me think of you
                </h2>
              </Reveal>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <Reveal className="sm:col-span-2">
                  <div className="relative h-56 overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)] sm:h-full">
                    <img
                      src={rosesBouquet}
                      alt="Close up of pink roses"
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[3000ms] hover:scale-110"
                      width={1280}
                      height={864}
                    />
                    <p className="absolute bottom-5 left-6 font-script text-3xl text-white drop-shadow">
                      roses, always
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={150}>
                  <div className="relative h-56 overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)] sm:h-full">
                    <img
                      src={bunny}
                      alt="Soft white bunny with a pink ribbon"
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[3000ms] hover:scale-110"
                      width={912}
                      height={912}
                    />
                    <p className="absolute bottom-5 left-6 font-script text-3xl text-white drop-shadow">
                      soft like you
                    </p>
                  </div>
                </Reveal>
              </div>

              <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
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
            <img
              src={pinkSky}
              alt="Pink and lavender night sky"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-90"
              width={1280}
              height={864}
            />
            <Sparkles count={14} />
            <div className="relative mx-auto max-w-xl">
              <Reveal>
                <div className="glass-dark rounded-[2.5rem] px-7 py-12 text-center">
                  <h2 className="text-balance font-script text-4xl text-white">
                    For the girl who made my world pink
                  </h2>
                  <div className="mt-8 space-y-4 font-display text-lg leading-relaxed text-white/85">
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
              <Reveal delay={150} className="text-center">
                <p className="mx-auto mt-4 max-w-md text-balance text-sm leading-7 text-muted-foreground">
                  Tap each one — these are the parts of us I'll always remember.
                </p>
              </Reveal>
              <ol className="relative mt-14 space-y-6 pl-8">
                <span
                  aria-hidden
                  className="absolute left-[7px] top-2 h-full w-px bg-[linear-gradient(180deg,transparent,var(--rose),transparent)]"
                />
                {TIMELINE.map((m, i) => (
                  <Reveal as="li" key={m.title} delay={i * 110} className="relative">
                    <span
                      aria-hidden
                      className="absolute -left-8 top-7 h-4 w-4 rounded-full bg-[image:var(--gradient-rose)] glow-soft"
                    />
                    <button
                      type="button"
                      onClick={() => setOpenCard(openCard === i ? null : i)}
                      className="glass block w-full rounded-3xl p-6 text-left transition-all duration-500 hover:-translate-y-1"
                    >
                      <span className="text-[11px] uppercase tracking-[0.25em] text-rose">
                        {m.tag}
                      </span>
                      <h3 className="mt-2 font-display text-2xl leading-snug text-rose-deep">
                        {m.title}
                      </h3>
                      <div
                        className={`grid transition-all duration-700 ${
                          openCard === i
                            ? "mt-3 grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <p className="overflow-hidden text-[15px] leading-8 text-plum/80">
                          {m.body}
                        </p>
                      </div>
                      <span className="mt-3 block text-xs text-muted-foreground">
                        {openCard === i ? "— close" : "— read this one ♡"}
                      </span>
                    </button>
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
                    <img
                      src={album}
                      alt="Moody rose album artwork"
                      loading="lazy"
                      className={`h-24 w-24 shrink-0 rounded-3xl object-cover ${playing ? "animate-breathe" : ""}`}
                    />
                    <div className="min-w-0">
                      <p className="truncate font-display text-2xl text-white">
                        {SONGS[nowPlaying]?.title}
                      </p>
                      <p className="truncate text-xs uppercase tracking-[0.2em] text-white/55">
                        {SONGS[nowPlaying]?.artist}
                      </p>
                      <p className="mt-1 truncate font-script text-lg text-rose">
                        {SONGS[nowPlaying]?.vibe}
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
                          <span className="min-w-0">
                            <span className="block truncate">{s.title}</span>
                            <span className="block truncate text-[11px] text-white/40">
                              {s.artist}
                            </span>
                          </span>
                          <span className="ml-3 shrink-0 text-xs text-white/40">
                            {s.len}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                  <p className="relative mt-5 text-center text-[11px] text-white/40">
                    our playlist — play it somewhere and think of me ♡
                  </p>
                </div>
              </Reveal>
            </div>
          </section>

          {/* ---------- Section 6 — love letter ---------- */}
          <section className="relative overflow-hidden px-5 py-24">
            <img
              src={letterPaper}
              alt="Handwritten letter with rose petals and pearls"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
              width={1280}
              height={864}
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.99_0.01_60/0.8),oklch(0.96_0.03_350/0.9))]"
            />
            <div className="relative mx-auto max-w-xl">
              <Reveal>
                <article className="glass rounded-[2rem] p-8 shadow-[var(--shadow-soft)] sm:p-12">
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
            <img
              src={pinkSky}
              alt="Dreamy pink sky"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
              width={1280}
              height={864}
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_45%,oklch(0.2_0.05_330/0.25),oklch(0.15_0.06_320/0.6))]"
            />
            <Petals count={20} />
            <Sparkles count={16} />
            <div className="relative">
              <Reveal>
                <h2 className="font-display text-5xl text-white">Doroty...</h2>
              </Reveal>
              <Reveal delay={250}>
                <p className="mt-6 font-display text-2xl text-white/85">
                  I don't need a perfect world.
                </p>
              </Reveal>
              <Reveal delay={500}>
                <p className="mt-2 font-display text-2xl text-white/85">
                  I just want a world where I get to keep loving you.
                </p>
              </Reveal>
              <Reveal delay={800}>
                <h3 className="animate-shimmer-text mt-12 text-balance font-script text-5xl text-gradient-rose sm:text-6xl">
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
                    className="glass-dark w-full max-w-[240px] rounded-full px-10 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white transition-transform hover:scale-105 active:scale-95"
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
              <img
                src={rosesBouquet}
                alt="Roses celebrating"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
                width={1280}
                height={864}
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.99_0.02_350/0.8),oklch(0.94_0.05_350/0.88))]"
              />
              <Petals count={26} />
              <Petals count={18} kind="heart" opacity={0.85} />
              <Sparkles count={20} />
              <div className="relative animate-bloom">
                <h2 className="text-balance font-display text-4xl text-plum sm:text-5xl">
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
      )}
    </div>
  );
}
