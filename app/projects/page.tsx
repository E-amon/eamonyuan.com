import CollapsibleSection from "@/components/CollapsibleSection";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Rail Break Prediction Project",
      status: "University Industry Placement",
      overview:
        "Predicting rail breaks is a rare-event machine learning problem. This project focused on handling class imbalance, selecting meaningful sensor features, building Databricks-based ML pipelines, and evaluating performance with metrics suited to imbalanced data such as F1 and PR-AUC.",
      problem:
        "The goal was to predict whether a rail section may break within the next 30 days using operational and sensor data. The dataset was highly imbalanced, meaning standard classifiers could easily bias toward the majority non-break class.",
      approach: [
        "Performed EDA on class distribution, location-level imbalance, and temporal break trends.",
        "Researched feature selection methods including correlation filtering, variance thresholding, ANOVA F-test, Lasso logistic regression, and Random Forest feature importance.",
        "Built feature engineering and model training workflows using Databricks notebooks, PySpark, SQL, and project pipelines.",
        "Evaluated models using accuracy, F1 score, PR-AUC, and practical model interpretation for stakeholder reporting.",
      ],
      results: [
        "Improved model accuracy from 38% to 82%.",
        "Increased F1 score from 0% to 60%.",
        "Improved PR-AUC from 10% to 55%.",
        "Reduced pipeline runtime by approximately 40% through PySpark and SQL optimisation.",
        "Presented EDA insights and model findings to engineering and operations stakeholders.",
      ],
      visuals: [
        {
          title: "Target Distribution",
          image: "/images/distribution-of-target.png",
          caption:
            "The dataset showed a strong class imbalance, making F1 and PR-AUC more useful than accuracy alone.",
        },
        {
          title: "Imbalance by Location",
          image: "/images/imbalance-by-location.png",
          caption:
            "Failure likelihood varied by location, showing that risk was not evenly distributed across rail sections.",
        },
        {
          title: "Random Forest Feature Importance",
          image: "/images/random-forest-feature-importance.png",
          caption:
            "Tree-based feature importance helped identify meaningful sensor and operational predictors.",
        },
        {
          title: "Correlation Heatmap",
          image: "/images/correlation-heatmap.png",
          caption:
            "Correlation analysis was used to identify redundant features and reduce multicollinearity.",
        },
      ],
      tags: [
        "Databricks",
        "PySpark",
        "SQL",
        "Machine Learning",
        "XGBoost",
        "Random Forest",
        "Feature Engineering",
        "Feature Selection",
        "Imbalanced Learning",
        "EDA",
        "PR-AUC",
        "F1 Score",
      ],
    },
    {
      title: "Quant Trading Research",
      status: "Research Project",
      overview:
        "This project explored automated cryptocurrency trading systems using Python, Freqtrade, Binance, backtesting, risk management, and cloud deployment. The research focused on understanding market behaviour, testing strategy logic across different market regimes, and improving automated trade supervision. The core strategy logic is not publicly disclosed; this portfolio summary focuses on methodology, risk evaluation, backtesting workflow, and aggregate performance metrics.",
      problem:
        "The goal was to evaluate whether a systematic trading bot could maintain profitability and controlled drawdown across volatile crypto market conditions. The project tested strategy behaviour across approximately two years of historical data, including a period where the overall market declined by around 50%.",
      approach: [
        "Started from public Freqtrade strategies to understand trading bot structure, entry/exit signals, and market behaviour.",
        "Backtested strategy variants across 2022–2024 Binance spot market data using multiple crypto pairs.",
        "Compared stop-loss configurations, including -14% and -13%, to evaluate the trade-off between return, win rate, and drawdown.",
        "Implemented trailing-stop, profit-based exit logic, adaptive exits, and REST API-based trade supervision.",
        "Deployed the trading bot on a Vultr cloud server to support continuous 24/7 execution and monitoring.",
      ],
      results: [
        "Achieved +18.9% ROI with an 83% win rate and less than 10% drawdown during one optimised live trading period.",
        "Implemented trailing-stop and adaptive exits to improve trade management.",
        "Built analytics for Sharpe ratio, expectancy, return distributions, and volatility metrics.",
        "Automated trade supervision and risk controls using Python and Freqtrade REST APIs.",
      ],
      visuals: [
        {
          title: "Representative Trading Performance",
          image: "/images/quant-representative-performance.png",
          caption:
            "A simplified summary of one optimised trading period, highlighting ROI, win rate, and drawdown.",
        },
        {
          title: "Risk and Robustness Metrics",
          image: "/images/quant-risk-robustness-metrics.png",
          caption:
            "Backtest metrics showing win rate, drawdown, and Sharpe ratio for a representative configuration.",
        },
        {
          title: "Configuration Comparison",
          image: "/images/quant-configuration-comparison.png",
          caption:
            "Comparison of win rate, drawdown, and Sharpe ratio across different stop-loss configurations.",
        },
        {
          title: "Exit Reason Contribution",
          image: "/images/quant-exit-reason-contribution.png",
          caption:
            "Breakdown of how different exit mechanisms contributed to strategy performance.",
        },
      ],
      tags: [
        "Python",
        "Freqtrade",
        "Binance",
        "Algorithmic Trading",
        "Backtesting",
        "Risk Management",
        "REST API",
        "Vultr",
        "Sharpe Ratio",
        "Drawdown Analysis",
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
            <a
              href="/"
              className="text-sm text-slate-300 transition hover:text-violet-400"
            >
              Home
            </a>
            <a
              href="/career"
              className="text-sm text-slate-300 transition hover:text-violet-400"
            >
              Career
            </a>
            <a href="/projects" className="text-sm text-violet-400">
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

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
          Projects
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight text-white">
          Selected Projects
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          A collection of technical projects in machine learning, quantitative research,
          data engineering, and software development, highlighting problem-solving
          approaches, methodologies, and measurable outcomes.
        </p>

        <div className="mt-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden ring ring-slate-900/70 bg-slate-900/70 shadow-xl shadow-black/20"
            >
              <div>
                <CollapsibleSection title={project.title} badge={project.status}>
                  <div className="mt-1">
                      <p className="mt-1 leading-7 text-slate-300">
                        {project.overview}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300 hover:border-violet-400 hover:text-violet-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6">
                        <CollapsibleSection title="Problem Statement">
                          <p className="mt-3 text-sm leading-6 text-slate-300">
                            {project.problem}
                          </p>
                        </CollapsibleSection>

                        <CollapsibleSection title="Methodology">
                          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                            {project.approach.map((item) => (
                              <li key={item} className="flex gap-2">
                                <span className="text-violet-400">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CollapsibleSection>

                        <CollapsibleSection title="Results">
                          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                            {project.results.map((item) => (
                              <li key={item} className="flex gap-2">
                                <span className="text-violet-400">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CollapsibleSection>

                        {project.visuals.length > 0 && (
                          <CollapsibleSection title="Visualisations">
                            <div className="mt-6 grid gap-5 md:grid-cols-2">
                              {project.visuals.map((visual) => (
                                <div
                                  key={visual.title}
                                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
                                >
                                  <img
                                    src={visual.image}
                                    alt={visual.title}
                                    className="h-64 w-full rounded-xl object-contain"
                                  />
                                  <h4 className="mt-4 font-semibold text-white">
                                    {visual.title}
                                  </h4>
                                  <p className="mt-2 text-sm leading-6 text-slate-300">
                                    {visual.caption}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </CollapsibleSection>
                        )}                      
                      </div>
                  </div>
                </CollapsibleSection>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}