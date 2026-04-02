const writing = [
  {
    kind: "Observation",
    title: "What strong DevSecOps really looks like in delivery",
    excerpt:
      "Practical thoughts on balancing compliance, developer speed, platform guardrails, and production reality.",
  },
  {
    kind: "Article",
    title: "Cloud cost, logging, and security tooling: where architecture matters",
    excerpt:
      "A portfolio article area for lessons learned from cost spikes, visibility design, and operational control.",
  },
  {
    kind: "Notes",
    title: "My working notes on platform reliability",
    excerpt:
      "A space to publish short technical notes, patterns, checklists, and implementation insights.",
  },
];

export default function Writing() {
  return (
    <section id="writing" className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
        Observations, Notes & Articles
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Writing section for your ideas and technical voice
      </h2>

      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
        This area is meant for long-form articles, short notes, observations
        from work, architecture lessons, incident learnings, and engineering
        reflections.
      </p>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {writing.map((item) => (
          <article
            key={item.title}
            className="rounded-[28px] border border-white/10 bg-white/5 p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              {item.kind}
            </p>
            <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.excerpt}</p>

            <button className="mt-6 rounded-2xl border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/5">
              Open Article
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}