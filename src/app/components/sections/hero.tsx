import Image from "next/image";

const profile = {
  name: 'Sunil Kumar',
  role: 'DevSecOps Engineer & Cloud Platform Specialist',
  tagline:
    'I design secure cloud platforms, automation systems, and engineering foundations that scale.',
  summary:
    'This portfolio is built to showcase my work, technical depth, observations, notes, and articles across DevSecOps, cloud engineering, platform reliability, compliance, and automation.',
  email: 'sunil@example.com',
  linkedin: '#',
  github: '#',
};
export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-10 lg:pb-24 lg:pt-24">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">

        <div className="grid gap-4">
          <div className="rounded-xl min-h-[10px]">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/profile/avatar.png"
                alt="Suneel Havapnor"
                width={280}
                height={280}
                className="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 via-white/10 to-white/10 p-4 object-cover shadow-2xl"
                priority
              />
              <br/>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20">
                <p className="text-base font-semibold leading-9 text-slate-200 italic sm:text-xl">
                  “Leading with ownership, securing with intent, and automating with agility for scale.”
                </p>
              </div>
               <div className="mt-10 flex flex-wrap gap-3">
            {[
              "AWS",
              "DevSecOps",
              "Cloud Security",
              "DevOps",
              "Automation",
              "Compliance",
              "Certified Profiessional",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
            </div>
          </div>
        </div>
        <div>
          <span className="text-ls text-white-200 sm:text-2xl italic">
            Hi I'm  Suneel Havapnor,
          </span>

          <h1 className="mt-3 max-w-2xl text-2xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            Building cloud, DevSecOps, and platform systems with security,
            reliability, and clarity.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            I design secure cloud platforms, automation systems, and engineering
            foundations that scale.
          </p>


          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#writing"
              className="rounded-2xl border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              Read Articles
            </a>
          </div>
          <br/>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-9 shadow-2xl shadow-black/20">
            <p className="text-xl font-semibold uppercase tracking-[0.14em] text-slate-100">
              <b>Profile Snapshot</b>
            </p>

            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  Experience Focus
                </p>
                <p className="mt-2 text-sm font-medium leading-6 text-slate-200">
                  Cloud, DevSecOps, Platform Engineering
                </p>
              </div>

              

              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  Portfolio Direction
                </p>
                <p className="mt-2 text-sm font-medium leading-6 text-slate-200">
                  Projects, experience , articles, observations, notes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}