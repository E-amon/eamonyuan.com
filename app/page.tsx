"use client";

import React from "react";
import { Mail, ExternalLink, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function PortfolioHome() {
  const projects = [
    {
      title: "Crypto Risk & Prediction Dashboard",
      status: "In progress",
      imageLinks:"/images/img_placeholder_1.JPG",
      description:
        "A Python and Streamlit analytics platform for crypto market analysis, benchmark strategy backtesting, risk metrics, ML prediction, and anomaly detection.",
      tags: ["Python", "Streamlit", "pandas", "scikit-learn", "Quant"]
    },
    {
      title: "Rail Break Prediction Project",
      status: "Industry project",
      imageLinks:"/images/img_placeholder_2.JPG",
      description:
        "Applied feature engineering and ML workflows on rail sensor data, improving predictive performance and optimising data pipelines.",
      tags: ["Databricks", "PySpark", "SQL", "Machine Learning"]
    },
    {
      title: "Quant Trading Research",
      status: "Research Project",
      imageLinks:"/images/img_placeholder_3.JPG",
      description:
        "Research-focused automated trading bot with optimised strategy deployed on Binance using historical market data, risk controls, backtesting, and strategy evaluation. (Strategy is not public)",
      tags: ["Python", "Freqtrade", "Backtesting", "Risk Management"]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center"
        >
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
              Personal Website
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Eamon Yuan
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Data Science, Quant Research, and Software Engineering portfolio. I build data-driven systems using Python, machine learning, analytics pipelines, and web technologies.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:eamon.yuan@outlook.com"
                className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
              >
                <Mail size={18} /> Contact Me
              </a>
              <a
                href="https://github.com/E-amon"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-300"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/eamon-yuan"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-300"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-black/30">
            <h2 className="text-xl font-semibold text-white">Current Focus</h2>
            <div className="mt-5 space-y-4 text-sm text-slate-300">
              <div className="rounded-2xl bg-slate-800/80 p-4">
                <p className="font-semibold text-cyan-300">Quant & Data Science</p>
                <p className="mt-1">Backtesting, risk analytics, ML prediction, and data engineering.</p>
              </div>
              <div className="rounded-2xl bg-slate-800/80 p-4">
                <p className="font-semibold text-cyan-300">Portfolio Build</p>
                <p className="mt-1">Publishing clean, reproducible projects with live demos and documentation.</p>
              </div>
              <div className="rounded-2xl bg-slate-800/80 p-4">
                <p className="font-semibold text-cyan-300">Career Direction</p>
                <p className="mt-1">Targeting data science, quant research, data analytics, and software engineering roles.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">Projects</p>
            <h2 className="mt-3 text-3xl font-bold text-white">Featured Work</h2>
          </div>
          <a
            href="https://github.com/E-amon"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200 sm:inline-flex"
          >
            View GitHub <ExternalLink size={16} />
          </a>
        </div>

        {/* <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-black/20"
            >
              <div className="mb-4 inline-flex rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                {project.status}
              </div>
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div> */}

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) =>(
            <a key={project.title} className="flex flex-col group bg-card border border-card-line shadow-2xs rounded-xl overflow-hidden hover:shadow-lg focus:outline-hidden focus:shadow-lg transition" href="#">
              <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
                <img className="size-full absolute top-0 inset-s-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl" src={project.imageLinks} alt={project.title}/>
              </div>
              <div className="p-4">
                <div className="mb-4 inline-flex rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                  {project.status}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-1 text-muted-foreground-1">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Contact</h2>
              <p className="mt-2 text-slate-300">
                This website is under active development. More project details, and case studies will be added soon.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-300"
              >
                <FileText size={18} /> More Information Coming Soon
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
