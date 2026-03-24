import React from "react"

const steps = [
  {
    year: "2025",
    role: "SDE II – Applied AI",
    company: "Amazon",
    detail: "Agentic AI Platform · 1M+ agents/day · $950M+ saved",
  },
  {
    year: "2023",
    role: "M.S. Software Engineering",
    company: "Carnegie Mellon University",
    detail: "Deep Learning, Distributed Systems, Cloud Computing",
  },
  {
    year: "2020",
    role: "Software Engineer → Senior SDE",
    company: "Oracle",
    detail: "Enterprise full-stack & distributed systems at scale",
  },
  {
    year: "2018",
    role: "Co-Founder & CTO",
    company: "Eat From Home & Daily Locally",
    detail: "Built a food delivery platform from 0 → 45K+ installs",
  },
]

const JourneySection = () => {
  return (
    <section id="journey" className="my-12 pb-12">
      <h1 className="text-center font-bold text-4xl">
        My Journey
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      {/* Mobile: vertical */}
      <div className="flex flex-col items-start space-y-0 md:hidden mt-8 pl-4">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-row items-start">
            <div className="flex flex-col items-center mr-4">
              <div className="w-4 h-4 rounded-full bg-teal-500 mt-1 shrink-0" />
              {idx < steps.length - 1 && (
                <div className="w-0.5 h-16 bg-teal-500 opacity-40" />
              )}
            </div>
            <div className="pb-10">
              <span className="text-sm font-semibold text-teal-500 uppercase tracking-widest">
                {step.year}
              </span>
              <h3 className="font-bold text-xl leading-tight">{step.role}</h3>
              <p className="text-base font-semibold text-neutral-500 dark:text-neutral-400">
                {step.company}
              </p>
              <p className="text-base text-neutral-500 dark:text-neutral-400 mt-1">
                {step.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: horizontal */}
      <div className="hidden md:flex flex-row items-start justify-between mt-10 relative">
        {/* connecting line */}
        <div className="absolute top-[10px] left-0 right-0 h-0.5 bg-teal-500 opacity-30 z-0" />

        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center flex-1 relative z-10 px-3">
            <div className="w-5 h-5 rounded-full bg-teal-500 mb-4 shrink-0" />
            <span className="text-sm font-semibold text-teal-500 uppercase tracking-widest mb-1">
              {step.year}
            </span>
            <h3 className="font-bold text-lg text-center leading-snug">{step.role}</h3>
            <p className="text-base font-semibold text-neutral-500 dark:text-neutral-400 text-center mt-1">
              {step.company}
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center mt-2 leading-relaxed">
              {step.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default JourneySection
