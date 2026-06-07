import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight, PlayCircle, Star, Award, CheckCircle2,
  TrendingUp, Users, ExternalLink, Quote, MessagesSquare,
  Target, Sparkles, Building2, ThumbsUp, Repeat, Zap, BarChart3,
  Trophy, Link2, Mail, Clock, FileCheck, Shield, Workflow,
} from "lucide-react";

function LiteYouTube({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  if (playing) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
        title={title}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }
  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="absolute inset-0 w-full h-full group cursor-pointer overflow-hidden"
      aria-label={`Play ${title}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
        onError={(e) => { (e.currentTarget as HTMLImageElement).src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`; }}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110" style={{ background: "#FE1C6A" }}>
          <svg viewBox="0 0 24 24" className="w-7 h-7 text-white ml-1" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </div>
      </div>
    </button>
  );
}

/* ---------- animation helpers ---------- */
const fade = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as any } },
};
const stagger = { show: { transition: { staggerChildren: 0.08 } } };

/* ---------- BRAND ---------- */
const PINK = "#FE1C6A";
const NAVY = "#151929";
const TEAL = "#09AE9D";
const CREAM = "#f0ece0";

/* ---------- DATA ---------- */
const HERO_VIDEO = "u_DmzoyY4U0"; // Perry Power — strongest named agent testimonial

const VIDEOS = [
  { id: "u_DmzoyY4U0", title: "The Depositary review", agent: "Perry Power", firm: "Power Bespoke" },
  { id: "iwmmBLn2pwI", title: "Working with The Depositary", agent: "Byfield", firm: "Byfield letting agents" },
  { id: "cIR7o-EhA5Y", title: "The Depositary × Reapit integration", agent: "Supplier spotlight", firm: "Reapit integration" },
  { id: "NVyrCZ1EnfE", title: "Agent testimonial — The Depositary", agent: "Verified Kerfuffle agent", firm: "Independent testimonial" },
  { id: "xs8ANx-S3O4", title: "Agent testimonial — The Depositary", agent: "Verified Kerfuffle agent", firm: "Independent testimonial" },
  { id: "XIHk6fyRroM", title: "Kerfuffle agent testimonial — The Depositary", agent: "Verified Kerfuffle agent", firm: "Independent testimonial" },
];

const KEY_STATS = [
  { value: "90%", label: "End-of-tenancy admin removed", icon: <Zap className="h-5 w-5" /> },
  { value: "4.9", label: "Kerfuffle supplier rating (out of 5)", icon: <Star className="h-5 w-5" /> },
  { value: "52", label: "Verified agent reviews on Kerfuffle", icon: <ThumbsUp className="h-5 w-5" /> },
  { value: "24/7", label: "Tenant self-service — any time, any device", icon: <Clock className="h-5 w-5" /> },
];

const PROBLEMS = [
  {
    icon: <Clock className="h-6 w-6" />,
    title: "End-of-tenancy is the most time-consuming job in PM",
    body: "Checkouts, deposit negotiations, statements, schedules, supplier coordination — every move-out is a stack of admin that property managers do manually, over and over. It's the single biggest drag on a property management team's capacity.",
  },
  {
    icon: <MessagesSquare className="h-6 w-6" />,
    title: "Tenants and landlords don't know what's happening",
    body: "Without a transparent process, tenants chase, landlords chase, and the property manager becomes a switchboard. Disputes escalate not because of disagreement on the figures — but because nobody can see the figures.",
  },
  {
    icon: <Repeat className="h-6 w-6" />,
    title: "Disputes drag on and on",
    body: "When deposit return is opaque and paper-based, tenants push back, landlords dig in, and routine disagreements end up at the deposit scheme. Months of back-and-forth on a process that should take days.",
  },
  {
    icon: <Workflow className="h-6 w-6" />,
    title: "The team is firefighting instead of building",
    body: "Property managers spend their day on move-outs rather than on the work that actually grows the business — landlord retention, new instructions, portfolio growth. End-of-tenancy is eating the operational budget alive.",
  },
];

const SOLUTIONS = [
  {
    icon: <Workflow className="h-6 w-6" />,
    title: "One online app, the whole checkout, beginning to end",
    body: "From check-out date through to deposit return, the entire end-of-tenancy journey runs on one platform that tenants, landlords, contractors and the agent all share. No more email chains, no more spreadsheets, no more chasing.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Transparent to tenants — disputes evaporate",
    body: "Tenants see every line, every photo, every quote. When the process is visible, they engage with it. Agents using The Depositary repeatedly report dispute volume collapsing — most checkouts now resolve directly between landlord and tenant on the platform.",
  },
  {
    icon: <FileCheck className="h-6 w-6" />,
    title: "Fully customisable to how YOUR agency works",
    body: "Not a rigid SaaS. The platform adapts to each agency's process, branding, supplier panel and approval flow. It's the agent's checkout workflow, just digitised and automated — not a vendor's opinion forced on top.",
  },
  {
    icon: <Link2 className="h-6 w-6" />,
    title: "Plugs into your existing stack",
    body: "Integrations with Reapit and the wider CRM ecosystem mean The Depositary slots in alongside what you already run. No rip-and-replace. The tooling sits where the property manager already works.",
  },
];

const HARD_METRICS = [
  { stat: "90%", line: "of end-of-tenancy admin removed", source: "The Depositary, verified by 52 agent reviews on Kerfuffle" },
  { stat: "4.9/5", line: "average rating across 52 verified Kerfuffle reviews", source: "kerfuffle.com/suppliers/the-depositary" },
  { stat: "0", line: "tenant accounts to set up — they use it instantly", source: "Tenant flow is link-based, no registration required" },
  { stat: "Reapit", line: "two-way integration available", source: "Plus open API for other CRMs" },
];

/* curated verbatim agent quotes from Kerfuffle reviews */
const KILLER_QUOTES = [
  {
    quote: "I LOVE IT — for the first time in 5 years I am confidently on top of all my checkouts and apart from a couple of disputes going through to TDS I only have 2 checkouts outstanding! 2!!! It's taken months of work but the company is in such a better position than where we were.",
    agent: "Claire Seymour",
    firm: "Haslams",
  },
  {
    quote: "Wow, where to start? The Depositary has been a game changer to our business. Streamlining the checkout process from beginning to end and helping our property management team concentrate on more important things.",
    agent: "Wes Carney",
    firm: "Harvey & Wheeler",
  },
  {
    quote: "Every now and then you come across a platform that is a genuine game changer and The Depositary is exactly that. Undoubtedly The Depositary will become a platform used by everyone in our industry.",
    agent: "Industry verdict",
    firm: "Verified Kerfuffle review",
  },
  {
    quote: "As a Property Manager, Depositary is everything you want the deposit release process to be like. Its super easy to use, tenants and landlords get all the information they need and so much time is saved.",
    agent: "Princess O",
    firm: "Johns & Co",
  },
  {
    quote: "As a Team Leader of Property Management department this platform makes end of tenancy deposit negotiations so much easier and faster for not only the staff but Landlords and Tenants.",
    agent: "Ellie Logan",
    firm: "Leaders",
  },
  {
    quote: "We have been using The Depositary platform for our end-of-tenancy processes at Martin & Co Chelmsford, and it's made a noticeable difference to how we manage tenant move-outs.",
    agent: "Kim Reay",
    firm: "Martin & Co Chelmsford",
  },
];

const AI_THEMES = [
  { phrase: "Deposit release process", desc: "Smoother and faster than agents have ever had it" },
  { phrase: "Time spent ending tenancies", desc: "Materially reduced — the headline win agents repeatedly call out" },
  { phrase: "Intuitive process", desc: "Property managers describe it as 'how you'd design it if you could'" },
  { phrase: "Tenant experience", desc: "Tenants engage instead of disputing — disputes go down" },
  { phrase: "Landlord transparency", desc: "Landlords see what's happening at every stage" },
  { phrase: "Stack integration", desc: "Slots in with Reapit and the wider agent toolset" },
];

export default function Home() {
  return (
    <div style={{ background: CREAM, color: NAVY }} className="min-h-screen overflow-x-hidden">
      {/* ============== TOP BAR ============== */}
      <header className="border-b border-black/5" style={{ background: NAVY, color: CREAM }}>
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <a href="https://www.kerfuffle.com" className="flex items-center gap-2 font-semibold text-base">
            <span style={{ color: PINK }}>Kerfuffle</span>
            <span className="opacity-60 text-sm">supplier case study</span>
          </a>
          <a
            href="https://www.kerfuffle.com/suppliers/the-depositary"
            className="text-sm font-medium flex items-center gap-1.5 hover:opacity-80 transition-opacity"
            style={{ color: CREAM }}
          >
            View on Kerfuffle <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      {/* ============== HERO ============== */}
      <section className="relative overflow-hidden" style={{ background: NAVY, color: CREAM }}>
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full opacity-20"
             style={{ background: `radial-gradient(circle, ${PINK}, transparent 70%)` }} />
        <div className="absolute -bottom-32 -left-20 w-[500px] h-[500px] rounded-full opacity-15"
             style={{ background: `radial-gradient(circle, ${TEAL}, transparent 70%)` }} />

        <div className="relative max-w-7xl mx-auto px-5 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fade} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6"
                 style={{ background: `${PINK}22`, color: PINK, border: `1px solid ${PINK}44` }}>
              <Trophy className="h-3.5 w-3.5" /> Kerfuffle supplier · 4.9 / 5
            </motion.div>
            <motion.h1 variants={fade} className="text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight mb-6"
                 style={{ fontFamily: "Fraunces, serif" }}>
              The Depositary <span style={{ color: PINK }}>removes 90%</span> of your end-of-tenancy admin.
            </motion.h1>
            <motion.p variants={fade} className="text-lg lg:text-xl opacity-85 leading-relaxed mb-8 max-w-xl">
              An online app that handles the entire checkout process — transparent to tenants, simple for landlords, configurable to your agency. Property managers using it call it the biggest single change to lettings operations they've made.
            </motion.p>
            <motion.div variants={fade} className="flex flex-col sm:flex-row gap-3">
              <a href="https://www.kerfuffle.com/suppliers/the-depositary" target="_blank" rel="noreferrer"
                 className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold transition-transform hover:scale-[1.02]"
                 style={{ background: PINK, color: "white" }}>
                Book a demo <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#reviews"
                 className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-medium border transition-colors hover:bg-white/10"
                 style={{ borderColor: `${CREAM}44`, color: CREAM }}>
                Read the agent reviews
              </a>
            </motion.div>
            <motion.div variants={fade} className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
              {KEY_STATS.map((s, i) => (
                <div key={i} className="p-4 rounded-2xl backdrop-blur" style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${CREAM}22` }}>
                  <div className="flex items-center gap-2 mb-1.5" style={{ color: PINK }}>{s.icon}</div>
                  <div className="text-2xl font-semibold" style={{ fontFamily: "Fraunces, serif" }}>{s.value}</div>
                  <div className="text-xs opacity-70 mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
                      className="relative">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <LiteYouTube id={HERO_VIDEO} title="Perry Power, Power Bespoke — on The Depositary" />
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs opacity-70">
              <PlayCircle className="h-4 w-4" /> Perry Power, Power Bespoke — on working with The Depositary
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============== PROBLEM ============== */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fade}
                      className="max-w-3xl mb-14">
            <div className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: PINK }}>
              The job-to-be-done
            </div>
            <h2 className="text-4xl lg:text-5xl font-semibold leading-tight tracking-tight"
                style={{ fontFamily: "Fraunces, serif" }}>
              End-of-tenancy is where lettings operations <span style={{ color: PINK }}>quietly bleed time</span>.
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={stagger}
                      className="grid md:grid-cols-2 gap-5">
            {PROBLEMS.map((p, i) => (
              <motion.div key={i} variants={fade}
                          className="p-7 rounded-3xl bg-white/60 backdrop-blur border border-black/5 hover:border-black/10 transition-colors">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                     style={{ background: `${PINK}15`, color: PINK }}>{p.icon}</div>
                <h3 className="text-xl font-semibold mb-2.5" style={{ fontFamily: "Fraunces, serif" }}>{p.title}</h3>
                <p className="text-base leading-relaxed opacity-80">{p.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============== HOW IT HELPS ============== */}
      <section className="py-20 lg:py-24" style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-5">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}
                      className="max-w-3xl mb-14">
            <div className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: TEAL }}>
              How The Depositary helps
            </div>
            <h2 className="text-4xl lg:text-5xl font-semibold leading-tight tracking-tight"
                style={{ fontFamily: "Fraunces, serif" }}>
              One online app. The whole checkout. <span style={{ color: TEAL }}>Transparent end-to-end.</span>
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
                      className="grid md:grid-cols-2 gap-5">
            {SOLUTIONS.map((s, i) => (
              <motion.div key={i} variants={fade}
                          className="p-7 rounded-3xl border-2 transition-all hover:shadow-lg"
                          style={{ borderColor: `${TEAL}22`, background: `${TEAL}06` }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                     style={{ background: TEAL, color: "white" }}>{s.icon}</div>
                <h3 className="text-xl font-semibold mb-2.5" style={{ fontFamily: "Fraunces, serif" }}>{s.title}</h3>
                <p className="text-base leading-relaxed opacity-85">{s.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============== HARD METRICS ============== */}
      <section className="py-20 lg:py-24" style={{ background: NAVY, color: CREAM }}>
        <div className="max-w-7xl mx-auto px-5">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}
                      className="max-w-3xl mb-14">
            <div className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: PINK }}>
              The receipts
            </div>
            <h2 className="text-4xl lg:text-5xl font-semibold leading-tight tracking-tight"
                style={{ fontFamily: "Fraunces, serif" }}>
              Hard numbers from the <span style={{ color: PINK }}>verified Kerfuffle reviews</span>.
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
                      className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {HARD_METRICS.map((m, i) => (
              <motion.div key={i} variants={fade} className="p-6 rounded-3xl"
                          style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${CREAM}22` }}>
                <div className="text-5xl font-semibold mb-3" style={{ color: PINK, fontFamily: "Fraunces, serif" }}>{m.stat}</div>
                <div className="text-base font-medium mb-2">{m.line}</div>
                <div className="text-xs opacity-60 leading-relaxed">{m.source}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============== KILLER QUOTES ============== */}
      <section className="py-20 lg:py-24" id="reviews">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade} className="mb-14 max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: PINK }}>
              In their own words
            </div>
            <h2 className="text-4xl lg:text-5xl font-semibold leading-tight tracking-tight"
                style={{ fontFamily: "Fraunces, serif" }}>
              Six killer quotes from <span style={{ color: PINK }}>real paying agents</span>.
            </h2>
            <p className="mt-4 text-lg opacity-75">Every quote below is verbatim from a verified Kerfuffle review.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
                      className="grid md:grid-cols-2 gap-5">
            {KILLER_QUOTES.map((q, i) => (
              <motion.figure key={i} variants={fade}
                             className="p-7 rounded-3xl bg-white border border-black/5 shadow-sm">
                <Quote className="h-7 w-7 mb-3" style={{ color: PINK }} />
                <blockquote className="text-lg leading-relaxed font-medium mb-5" style={{ fontFamily: "Fraunces, serif" }}>
                  "{q.quote}"
                </blockquote>
                <figcaption className="flex items-center gap-3 pt-4 border-t border-black/5">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold"
                       style={{ background: PINK, color: "white" }}>{q.agent.charAt(0)}</div>
                  <div>
                    <div className="font-semibold text-sm">{q.agent}</div>
                    <div className="text-xs opacity-70">{q.firm}</div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============== AGENT VIDEO SHOWCASE ============== */}
      <section className="py-20 lg:py-24" style={{ background: CREAM }}>
        <div className="max-w-7xl mx-auto px-5">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}
                      className="max-w-3xl mb-14">
            <div className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: TEAL }}>
              Watch agents talking about it
            </div>
            <h2 className="text-4xl lg:text-5xl font-semibold leading-tight tracking-tight"
                style={{ fontFamily: "Fraunces, serif" }}>
              <span style={{ color: TEAL }}>Six agent testimonials</span> — straight from the customers.
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
                      className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {VIDEOS.map((v, i) => (
              <motion.div key={i} variants={fade}
                          className="rounded-3xl overflow-hidden bg-white shadow-sm border border-black/5">
                <div className="aspect-video relative">
                  <LiteYouTube id={v.id} title={`${v.agent} — ${v.title}`} />
                </div>
                <div className="p-5">
                  <div className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: PINK }}>{v.agent}</div>
                  <div className="font-semibold leading-snug" style={{ fontFamily: "Fraunces, serif" }}>{v.firm}</div>
                  <div className="text-sm opacity-70 mt-1.5">{v.title}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============== AI THEMES / SENTIMENT ============== */}
      <section className="py-20 lg:py-24" style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-5">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}
                      className="max-w-3xl mb-14">
            <div className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: PINK }}>
              What agents repeatedly call out
            </div>
            <h2 className="text-4xl lg:text-5xl font-semibold leading-tight tracking-tight"
                style={{ fontFamily: "Fraunces, serif" }}>
              The themes that show up in <span style={{ color: PINK }}>review after review</span>.
            </h2>
            <p className="mt-4 text-base opacity-75">
              These themes were extracted from the 52 verified Kerfuffle reviews — what agents talk about most when they describe working with The Depositary.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
                      className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {AI_THEMES.map((t, i) => (
              <motion.div key={i} variants={fade}
                          className="p-5 rounded-2xl border-2 transition-all hover:scale-[1.02]"
                          style={{ borderColor: `${PINK}22`, background: `${PINK}06` }}>
                <Sparkles className="h-5 w-5 mb-2.5" style={{ color: PINK }} />
                <div className="font-semibold mb-1.5" style={{ fontFamily: "Fraunces, serif" }}>{t.phrase}</div>
                <div className="text-sm opacity-75 leading-relaxed">{t.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============== CTA ============== */}
      <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: NAVY, color: CREAM }}>
        <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] rounded-full opacity-20"
             style={{ background: `radial-gradient(circle, ${PINK}, transparent 70%)` }} />

        <div className="relative max-w-4xl mx-auto px-5 text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
            <div className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: PINK }}>
              Ready to see it work for your agency?
            </div>
            <h2 className="text-4xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6"
                style={{ fontFamily: "Fraunces, serif" }}>
              Remove 90% of your end-of-tenancy admin. <span style={{ color: PINK }}>This week.</span>
            </h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Book a tailored demo via the Kerfuffle page — see exactly how The Depositary slots into your existing process, your CRM and your team. No rip-and-replace, no hard sell.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://www.kerfuffle.com/suppliers/the-depositary" target="_blank" rel="noreferrer"
                 className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold transition-transform hover:scale-[1.02]"
                 style={{ background: PINK, color: "white" }}>
                Book a demo <ArrowRight className="h-4 w-4" />
              </a>
              <a href="https://www.kerfuffle.com/suppliers/the-depositary" target="_blank" rel="noreferrer"
                 className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-medium border transition-colors hover:bg-white/10"
                 style={{ borderColor: `${CREAM}44`, color: CREAM }}>
                Read all 52 reviews on Kerfuffle <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============== FOOTER ============== */}
      <footer className="py-10" style={{ background: NAVY, color: CREAM, borderTop: `1px solid ${CREAM}11` }}>
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="text-sm opacity-70">
            A Kerfuffle supplier case study · The Depositary · Updated {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
          </div>
          <div className="flex gap-5 text-sm">
            <a href="https://www.kerfuffle.com" className="hover:opacity-80 transition-opacity">Kerfuffle.com</a>
            <a href="https://www.kerfuffle.com/suppliers/the-depositary" className="hover:opacity-80 transition-opacity">The Depositary on Kerfuffle</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
