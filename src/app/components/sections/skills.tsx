const skillGroups = [
  {
    title: "Cloud & Infrastructure",
    description: "Core platform and infrastructure capabilities.",
    items: ["AWS", "Azure", "Kubernetes", "EKS", "Terraform", "AWS CDK", "Serverless"],
  },
  {
    title: "Security & Compliance",
    description: "Security-first engineering and governance knowledge.",
    items: ["DevSecOps", "IAM", "WAF", "GuardDuty", "CloudTrail", "Prisma", "FIPS", "ISO 27001"],
  },
  {
    title: "CI/CD & Automation",
    description: "Delivery pipelines and automation systems.",
    items: ["Jenkins", "GitHub Actions", "Ansible", "Helm", "Groovy", "Shell", "Python"],
  },
  {
    title: "Development",
    description: "Application and service engineering stack.",
    items: ["React", "Next.js", "TypeScript", "Node.js", "Java", "Spring Boot", "Microservices"],
  },
  {
    title: "Data, AI & Operations",
    description: "Operational intelligence and ML-adjacent areas.",
    items: ["MLOps", "SageMaker", "Pandas", "NumPy", "Observability", "Monitoring"],
  },
  {
    title: "Architecture Mindset",
    description: "System design and engineering thinking.",
    items: ["Scalability", "Reliability", "Security by Design", "Automation", "Cost Optimization"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
        Skill Set
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Core capabilities
      </h2>

      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
        Grouped by domain so recruiters, hiring managers, and technical leaders
        can scan quickly and understand my range.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]"
          >
            <h3 className="text-xl font-semibold text-white">{group.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              {group.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}