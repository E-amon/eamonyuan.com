export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">

      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/icon.png"
              alt="Cat logo"
              className="h-8 w-8 rounded-lg"
            />
            <span className="font-semibold text-white">Eamon</span>
          </a>

          <div className="flex items-center gap-5">
            <a href="/" className="text-sm text-slate-300 hover:text-violet-400">
              Home
            </a>
            <a
              href="/career"
              className="text-sm text-slate-300 transition hover:text-violet-400"
            >
              Career
            </a>
            <a
              href="/projects"
              className="text-sm transition text-violet-400"
            >
              Projects
            </a>
            <a
              href="/#contact"
              className="text-sm text-slate-300 transition hover:text-violet-400"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
          Projects
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight text-white">
          Project Portfolio
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          This page will showcase detailed case studies covering data science,
          quant research, machine learning, and software engineering projects.
        </p>

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-xl shadow-black/20">
          <h2 className="text-2xl font-semibold text-white">
            Detailed project write-ups are coming soon.
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            I am currently preparing in-depth project pages with technical
            architecture, methodologies, results, and lessons learned.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/"
              className="rounded-2xl bg-violet-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-violet-300"
            >
              Back to Home
            </a>

            <a
              href="https://github.com/E-amon"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-violet-400 hover:text-violet-400"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}