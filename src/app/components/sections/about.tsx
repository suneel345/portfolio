export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
      <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
          About
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          A portfolio designed to show real engineering depth
        </h2>

        <p className="mt-4 max-w-4xl text-base leading-7 text-slate-300">
          I work at the intersection of cloud infrastructure, security,
          delivery automation, and platform engineering. My focus is on solving
          practical engineering problems with systems thinking: reducing
          operational risk, improving release velocity, enforcing security
          controls, and building solutions that teams can rely on.
        </p>

        <p className="mt-4 max-w-4xl text-base leading-7 text-slate-400">
          This portfolio is intentionally structured to go beyond a resume. It
          gives space for practical projects, architecture thinking, technical
          observations, lessons learned, and technical writing.
        </p>
      </div>
    </section>
  );
}