import { useEffect, useState } from "react";

function getInitialTheme() {
  if (typeof window === "undefined") return false;
  if (localStorage.theme === "dark") return true;
  if (localStorage.theme === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function LandingPage() {
  const [dark, setDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.theme = dark ? "dark" : "light";
  }, [dark]);

  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen selection:bg-primary selection:text-black">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed w-full z-50 backdrop-blur-md bg-background-light/80 dark:bg-background-dark/80 border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-black font-bold font-display text-xl">
                D
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                DevRooms<span className="text-primary">.ai</span>
              </span>
            </div>

            <div className="hidden md:flex space-x-8 text-sm font-medium">
              {["Features", "Integrations", "Pricing", "Docs"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setDark((p) => !p)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
              >
                <span className="material-symbols-outlined text-sm">
                  {dark ? "light_mode" : "dark_mode"}
                </span>
              </button>

              <a className="hidden sm:block text-sm font-medium" href="/login">
                Sign In
              </a>

              <a className="bg-primary hover:bg-primary-dark text-black px-4 py-2 rounded-md text-sm font-bold shadow-[0_0_15px_rgba(223,255,94,0.3)] hover:shadow-[0_0_25px_rgba(223,255,94,0.5)] transition">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-24 lg:pt-48 overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow-light dark:bg-hero-glow opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-light dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            DevRooms AI 2.0 is now live
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Collaborate. Code.
            <br />
            <span className="light-text-gradient dark:text-gradient">
              Debug. Together.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400 mb-10">
            The first AI-native collaboration platform. Spin up instant dev
            environments, chat with context-aware AI, and ship faster than ever
            before.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a className="px-8 py-4 bg-primary text-black font-bold rounded-lg shadow-lg hover:scale-105 transition">
              Create Room →
            </a>
            <a className="px-8 py-4 bg-surface-light dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg">
              Join Existing
            </a>
          </div>

          {/* DASHBOARD IMAGE */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-20" />
            <img
              className="relative rounded-xl border border-gray-200 dark:border-white/10 shadow-2xl margin-auto shadow-2xl"
              src="dashboard.svg"
              alt="DevRooms dashboard"
            />
          </div>
        </div>
      </section>

      {/* ================= LOGOS ================= */}
      <section className="py-10 border-y border-gray-200 dark:border-white/5 bg-surface-light dark:bg-surface-dark">
        <p className="text-center text-xs tracking-widest uppercase mb-6 text-gray-500">
          Powering engineering teams at
        </p>
        <div className="flex justify-center flex-wrap gap-12 opacity-60">
          {["AcmeCorp", "StarShip", "FastScale", "InfinityLoop", "GridStack"].map(
            (c) => (
              <div
                key={c}
                className="font-display font-bold text-xl text-gray-800 dark:text-white"
              >
                {c}
              </div>
            )
          )}
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Supercharge your git workflow
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-20">
            Forget screen sharing and merge conflicts. DevRooms brings your entire
            team into the same context.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["chat", "Real-time Collaboration"],
              ["bug_report", "AI Bug Detection"],
              ["smart_toy", "Context-Aware Assistant"],
            ].map(([icon, title]) => (
              <div
                key={title}
                className="p-8 rounded-2xl bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-white/5"
              >
                <span className="material-symbols-outlined text-primary mb-4 block">
                  {icon}
                </span>
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Built for modern distributed teams.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LAPTOP SECTION ================= */}
      <section className="py-24 bg-gray-50 dark:bg-[#050507]">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6">
              From Idea to Production in{" "}
              <span className="text-primary">Record Time</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Connect GitHub, GitLab, or Bitbucket and start coding instantly.
            </p>
          </div>

          <img
            className="rounded-xl shadow-2xl border border-gray-200 dark:border-white/10"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBPbJn2HUs7xAJ1nKp6A_50PNrH96K4UuIV9CyCCTCk0WTCxHH2w4EatM8lwNorGJNrDp4V_KvNikt5yY4M3nU-vrpXJJmWDirQ_FlFNdFEP3_e4XqxmwlHtek1NLr8aiEXnbc0w7Ppx_4e9R7SUiuZ_4C89mOarglz3MbdEQ8haYmdDimAfTYzF6wA4Ed3zVXorZTYp9BSJRF5PjHHVbCA_o0nwoUVbwqbErTBZALnC2MykcQX_iSKJDBjYKjko6JR1DFmU29jMY"
            alt="Laptop"
          />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center">
        <h2 className="text-5xl font-display font-bold mb-6">
          Start coding for free.
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          Join thousands of developers building with AI collaboration.
        </p>
        <a className="px-10 py-4 bg-primary text-black font-bold rounded-lg">
          Get Started Now
        </a>
      </section>
    </div>
  );
}