export default function CareerPage() {
  const experiences = [
    {
      title: "Data Science and Machine Learning Industry Project",
      organization: "InsightFactory.ai",
      logo: "/images/InsightFactory-logo.png",
      category: "University Industry Placement",
      period: "Jul 2025 – Nov 2025",
      description:
        "Developed machine learning models to predict rail breaks within the next 30 days using highly imbalanced operational and sensor data. Conducted end-to-end data science workflows including data cleaning, exploratory data analysis, feature engineering, feature selection, class rebalancing, and model evaluation. Built and optimized training pipelines using PySpark, SQL, and Databricks Lakehouse, and presented findings to engineering and operations stakeholders.",
      achievements: [
        "Improved model accuracy from 38% to 82%",
        "Increased F1 score from 0% to 60%",
        "Improved PR-AUC from 10% to 55%",
        "Reduced pipeline runtime by approximately 40% through PySpark and SQL optimisation",
        "Enhanced data integrity through validation rules and technical documentation",
        "Presented EDA insights and model findings to engineering and operations stakeholders",
      ],
      tags: [
        "Databricks",
        "PySpark",
        "SQL",
        "Machine Learning",
        "XGBoost",
        "Feature Engineering",
        "Feature Selection",
        "EDA",
        "Model Evaluation",
      ],
    },
    {
      title: "Research Aisstant",
      organization: "Australian Institute for Machine Learning",
      logo: "/images/AIML-logo.png",
      category: "Research Project",
      period: "Feb 2025 – Jul 2025",
      description:
        "Conducted research into automated cryptocurrency trading systems using Python, Freqtrade, and Binance. Designed, backtested, and optimized algorithmic trading strategies across multi-year bull and bear market data. Built analytics tools for performance and risk evaluation, and deployed automated trading systems to a cloud server for 24/7 execution.",
      achievements: [
        "Achieved +18.9% ROI with an 83% win rate and less than 10% drawdown during one optimised period",
        "Implemented trailing-stop and adaptive exit logic to improve trade management",
        "Built analytics tools for Sharpe ratio, expectancy, return distributions, and volatility metrics",
        "Automated trade supervision and risk control using Python and Freqtrade REST APIs",
        "Deployed trading bots to a cloud server for 24/7 execution",
      ],
      tags: [
        "Python",
        "Freqtrade",
        "Algorithmic Trading",
        "Backtesting",
        "Risk Management",
        "Binance",
        "REST API",
        "Vultr",
      ],
    },
    {
      title: "Web Application Developer Intern",
      organization: "Morialta Software",
      logo: "/images/MorialtaSoftware-logo.png",
      category: "Internship / Industry Experience",
      period: "Nov 2024 – Feb 2025",
      description:
        "Worked under the supervision of the CTO to develop and maintain a SaaS web application for a real estate client. Learned Elixir and Phoenix LiveView and contributed to backend development, UI components, database migrations, asynchronous background jobs, and production debugging within an Agile development environment.",
      achievements: [
        "Developed application features across frontend and backend modules",
        "Implemented database migrations, validation logic, and background processing workflows",
        "Resolved production issues involving authentication, data integrity, and asynchronous jobs",
        "Completed multiple Jira tickets and participated in Scrum ceremonies",
        "Adapted quickly to Elixir and Phoenix LiveView as a new technology stack",
      ],
      tags: [
        "Elixir",
        "Phoenix LiveView",
        "PostgreSQL",
        "Vue.js",
        "Tailwind CSS",
        "Oban",
        "Git",
        "Jira",
        "Agile",
      ],
    },
  ];

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
            <a href="/career" className="text-sm text-violet-400">
              Career
            </a>
            <a href="/projects" className="text-sm text-slate-300 hover:text-violet-400">
              Projects
            </a>
            <a href="/#contact" className="text-sm text-slate-300 hover:text-violet-400">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
          Career
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight text-white">
          Career Path
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          My career direction sits at the intersection of data science,
          quantitative research, analytics, and software engineering. I enjoy
          building data-driven systems, analysing complex problems, and turning
          technical work into practical outcomes.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <h2 className="text-xl font-semibold text-white">
              Areas of Interest
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Data Science",
                "Quant Research",
                "Quant Trading",
                "Data Analytics",
                "Software Engineering",
                "Data Engineering",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300 hover:border-violet-400 hover:text-violet-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <h2 className="text-xl font-semibold text-white">
              Roles of Interest
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Data Scientist",
                "Data Analyst",
                "Quant Researcher",
                "Quant Trader",
                "Software Engineer",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300 hover:border-violet-400 hover:text-violet-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-white">Experience</h2>

          <div className="mt-8 w-full">
            {experiences.map((item, index) => (
              <div key={`${item.title}-${item.period}`} className="flex gap-x-4">
                <div className="min-w-32 text-right">
                  <span className="text-xs font-medium text-slate-400">
                    {item.period}
                  </span>
                </div>

                <div
                  className={`relative ${
                    index === experiences.length - 1
                      ? ""
                      : "after:absolute after:top-10 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:border-l after:border-slate-700"
                  }`}
                >
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center overflow-hidden square-full border border-slate-700 bg-slate-800">
                    <img
                      src={item.logo}
                      alt={`${item.organization} logo`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>

                <div className="grow pb-10 pt-1">

                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <span className="rounded-full bg-violet-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-violet-400">
                      {item.category}
                    </span>
                  </div>

                  <p className="mt-1 text-sm font-medium text-violet-400">
                    {item.organization}
                  </p>

                  <p className="mt-3 leading-7 text-slate-300">
                    {item.description}
                  </p>

                  <details className="mt-4 group">
                    <summary className="cursor-pointer list-none text-sm font-semibold text-slate-300 hover:text-violet-300">
                      <span className="group-open:hidden">▶ More Details</span>
                      <span className="hidden group-open:inline">▼ Less Details</span>
                    </summary>

                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                      {item.achievements.map((achievement) => (
                        <li key={achievement} className="flex gap-2">
                          <span className="mt-1 text-violet-400">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </details>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300 hover:border-violet-400 hover:text-violet-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
          <h2 className="text-2xl font-bold text-white">Next Direction</h2>
          <p className="mt-4 leading-7 text-slate-300">
            I am continuing to build portfolio projects that combine data
            pipelines, machine learning, risk analytics, and web deployment. My
            current focus is developing practical, reproducible projects that
            demonstrate both technical depth and business value.
          </p>
        </section>
      </section>
    </main>
  );
}