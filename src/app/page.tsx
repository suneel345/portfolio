export default function HomePage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="section-container text-center">
          <div className="mb-6 inline-block">
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1 mx-auto">
              <div className="h-full w-full rounded-full bg-slate-900 flex items-center justify-center">
                <span className="text-3xl">👨‍💻</span>
              </div>
            </div>
          </div>
          
          <h1 className="section-heading mb-4 text-5xl md:text-6xl font-bold">
            Suneel
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Full Stack Developer & UI Portfolio Specialist
          </p>
          
          <p className="text-base md:text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
            Crafting exceptional digital experiences with Next.js, React, and modern web technologies. 
            Specializing in responsive design, performance optimization, and scalable architecture.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary">
              View My Work
            </button>
            <button className="btn-secondary">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-gradient-to-b from-transparent via-slate-900/30 to-transparent">
        <div className="section-container">
          <h2 className="section-heading mb-16 text-center">Skills & Expertise</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="card-gradient p-6">
              <h3 className="text-xl font-bold mb-4 gradient-text">Frontend</h3>
              <ul className="space-y-2 text-slate-300">
                <li>✓ React & Next.js</li>
                <li>✓ TypeScript</li>
                <li>✓ Tailwind CSS</li>
                <li>✓ Responsive Design</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="card-gradient p-6">
              <h3 className="text-xl font-bold mb-4 gradient-text">Backend</h3>
              <ul className="space-y-2 text-slate-300">
                <li>✓ Node.js</li>
                <li>✓ Prisma ORM</li>
                <li>✓ PostgreSQL</li>
                <li>✓ REST APIs</li>
              </ul>
            </div>

            {/* DevOps */}
            <div className="card-gradient p-6">
              <h3 className="text-xl font-bold mb-4 gradient-text">DevOps</h3>
              <ul className="space-y-2 text-slate-300">
                <li>✓ AWS</li>
                <li>✓ Docker</li>
                <li>✓ CI/CD</li>
                <li>✓ Cloud Architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="section-heading mb-16 text-center">Certifications</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-gradient p-6">
              <h3 className="text-lg font-bold mb-2">AWS Certified Solutions Architect</h3>
              <p className="text-slate-400 mb-4">Amazon Web Services</p>
              <p className="text-sm text-cyan-400">Issued: January 2024 • Expires: January 2026</p>
            </div>

            <div className="card-gradient p-6">
              <h3 className="text-lg font-bold mb-2">Google Cloud Associate Cloud Engineer</h3>
              <p className="text-slate-400 mb-4">Google Cloud</p>
              <p className="text-sm text-cyan-400">Issued: June 2023 • Expires: June 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="section-padding bg-gradient-to-b from-transparent via-slate-900/30 to-transparent">
        <div className="section-container">
          <h2 className="section-heading mb-16 text-center">Articles & Writing</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <article className="card-gradient p-6">
              <div className="mb-4 inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                Next.js
              </div>
              <h3 className="text-xl font-bold mb-3">Building Scalable Next.js Applications with Prisma</h3>
              <p className="text-slate-400 mb-4">
                Learn how to build scalable full-stack applications using Next.js and Prisma ORM with best practices.
              </p>
              <p className="text-sm text-slate-500">8 min read • January 10, 2024</p>
            </article>

            <article className="card-gradient p-6">
              <div className="mb-4 inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                React
              </div>
              <h3 className="text-xl font-bold mb-3">Modern UI Design Patterns in React</h3>
              <p className="text-slate-400 mb-4">
                Exploring component composition and design patterns for building maintainable React applications.
              </p>
              <p className="text-sm text-slate-500">10 min read • January 5, 2024</p>
            </article>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="section-heading mb-16 text-center">Book Recommendations</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-gradient p-6">
              <h3 className="text-lg font-bold mb-2">Clean Code</h3>
              <p className="text-slate-400 mb-4">Robert C. Martin</p>
              <p className="text-sm text-slate-300 mb-4">
                A Handbook of Agile Software Craftsmanship - Essential reading for developers.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-cyan-400">★★★★★</span>
                <span className="text-xs text-slate-500">Completed</span>
              </div>
            </div>

            <div className="card-gradient p-6">
              <h3 className="text-lg font-bold mb-2">The Pragmatic Programmer</h3>
              <p className="text-slate-400 mb-4">David Thomas & Andrew Hunt</p>
              <p className="text-sm text-slate-300 mb-4">
                Your Journey to Mastery in Software Development - Timeless wisdom.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-cyan-400">★★★★★</span>
                <span className="text-xs text-slate-500">Completed</span>
              </div>
            </div>

            <div className="card-gradient p-6">
              <h3 className="text-lg font-bold mb-2">Atomic Habits</h3>
              <p className="text-slate-400 mb-4">James Clear</p>
              <p className="text-sm text-slate-300 mb-4">
                An Easy & Proven Way to Build Good Habits and Break Bad Ones.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-cyan-400">★★★★☆</span>
                <span className="text-xs text-slate-500">Reading</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gradient-to-b from-transparent via-slate-900/30 to-transparent">
        <div className="section-container text-center">
          <h2 className="section-heading mb-8">Let's Work Together</h2>
          
          <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a href="https://github.com/suneel345" className="btn-primary">
              GitHub
            </a>
            <a href="https://linkedin.com/in/suneel" className="btn-primary">
              LinkedIn
            </a>
            <a href="mailto:suneel@example.com" className="btn-primary">
              Email
            </a>
          </div>
          
          <p className="text-slate-500 text-sm">
            © 2024 Suneel. All rights reserved.
          </p>
        </div>
      </section>
    </main>
  );
}
