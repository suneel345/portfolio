export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
      <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950 p-8 lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
          Contact
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Let’s connect
        </h2>

        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
          Use this section for hiring conversations, collaboration, technical
          consulting, or architecture discussions.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="mailto:havapnor.suneel@gmail.com"
            className="rounded-2xl border border-white/10 px-4 py-3 text-sm text-white hover:bg-white/5"
          >
            havapnor.suneel@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/havapnorsuneel"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 px-4 py-3 text-sm text-white hover:bg-white/5"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 px-4 py-3 text-sm text-white hover:bg-white/5"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}