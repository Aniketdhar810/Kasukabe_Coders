import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

function getInitialTheme() {
  if (typeof window === "undefined") return false;
  if (localStorage.theme === "dark") return true;
  if (localStorage.theme === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function LandingPage() {
  const [dark, setDark] = useState(getInitialTheme);
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const codeLayerY = useTransform(scrollYProgress, [0, 1], [0, -260]);
  const codeLayerOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    dark ? [0.12, 0.2, 0.16, 0.1] : [0.04, 0.08, 0.06, 0.03]
  );

  const binaryColumns = [
    "1010110010110",
    "0101101110011",
    "1100101001011",
    "0011010111100",
    "1110001010010",
    "0100110101110",
    "1001110010101",
    "0110100111001",
    "1011001010111",
    "0010111010100",
  ];

  const fadeUp = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.2 } },
      }
    : {
        hidden: { opacity: 0, y: 28 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: "easeOut" },
        },
      };

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.theme = dark ? "dark" : "light";
  }, [dark]);

  return (
    <div className="relative bg-background-light dark:bg-background-dark transition-colors duration-300 min-h-screen selection:bg-primary selection:text-black overflow-hidden" style={{ color: dark ? '#e5e7eb' : '#111827' }}>

      <motion.div
        style={{ y: codeLayerY, opacity: codeLayerOpacity }}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-400/5 dark:via-primary/5 to-transparent" />
        <div className="h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-5 md:grid-cols-10 gap-6">
          {binaryColumns.map((bits, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0.2, y: 0 }}
              animate={
                shouldReduceMotion
                  ? { opacity: 0.16, y: 0 }
                  : { opacity: [0.16, 0.38, 0.16], y: [0, 18, 0] }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0.2 }
                  : {
                      duration: 3 + (idx % 4),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: idx * 0.15,
                    }
              }
              className="font-mono text-[10px] md:text-xs leading-5 text-gray-500/20 dark:text-primary/45 tracking-[0.22em] whitespace-pre-line select-none"
            >
              {(bits + "\n").repeat(10)}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="relative z-10">

      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="fixed w-full z-50 backdrop-blur-md bg-background-light/80 dark:bg-background-dark/80 border-b border-gray-200 dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-black font-bold font-display text-xl">
                D
              </div>
              <span className="font-display font-bold text-xl tracking-tight" style={{ color: dark ? '#ffffff' : '#111827' }}>
                DevRooms<span className="text-primary">.ai</span>
              </span>
            </div>

            <div className="hidden md:flex space-x-8 text-sm font-medium">
              {["Features", "Integrations", "Pricing", "Docs"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-primary transition-colors" style={{ color: dark ? '#d1d5db' : '#374151' }}
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

              <a className="hidden sm:block text-sm font-medium" style={{ color: dark ? '#d1d5db' : '#374151' }} href="/login">
                Sign In
              </a>

              <a className="bg-primary hover:bg-primary-dark text-black px-4 py-2 rounded-md text-sm font-bold shadow-[0_0_15px_rgba(223,255,94,0.3)] hover:shadow-[0_0_25px_rgba(223,255,94,0.5)] transition">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-24 lg:pt-48 overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow-light dark:bg-hero-glow opacity-30 pointer-events-none" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-7xl mx-auto px-4 text-center"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-light dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            DevRooms AI 2.0 is now live
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight"
            style={{ color: dark ? '#ffffff' : '#111827' }}
          >
            Collaborate. Code.
            <br />
            <span className="light-text-gradient dark:text-gradient">
              Debug. Together.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-2xl mx-auto text-xl mb-10"
            style={{ color: dark ? '#9ca3af' : '#4b5563' }}
          >
            The first AI-native collaboration platform. Spin up instant dev
            environments, chat with context-aware AI, and ship faster than ever
            before.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          >
            <motion.a
              whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="px-8 py-4 bg-primary text-black font-bold rounded-lg shadow-lg hover:scale-105 transition"
            >
              Create Room →
            </motion.a>
            <motion.a
              whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="px-8 py-4 border rounded-lg"
              style={{
                backgroundColor: dark ? 'rgba(255,255,255,0.05)' : '#ffffff',
                borderColor: dark ? 'rgba(255,255,255,0.1)' : '#d1d5db',
                color: dark ? '#e5e7eb' : '#111827',
              }}
            >
              Join Existing
            </motion.a>
          </motion.div>

          {/* DASHBOARD IMAGE */}
          <motion.div
            variants={fadeUp}
            className="relative max-w-5xl mx-auto"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-20" />
            <motion.img
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative rounded-xl border border-gray-200 dark:border-white/10 shadow-2xl margin-auto shadow-2xl"
              src="dashboard.svg"
              alt="DevRooms dashboard"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ================= LOGOS ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
        className="py-10 border-y"
        style={{
          borderColor: dark ? 'rgba(255,255,255,0.05)' : '#e5e7eb',
          backgroundColor: dark ? '#15151A' : '#ffffff',
        }}
      >
        <p className="text-center text-xs tracking-widest uppercase mb-6" style={{ color: dark ? '#6b7280' : '#6b7280' }}>
          Powering engineering teams at
        </p>
        <div className="flex justify-center flex-wrap gap-12 opacity-60">
          {["AcmeCorp", "StarShip", "FastScale", "InfinityLoop", "GridStack"].map(
            (c) => (
              <motion.div
                key={c}
                variants={fadeUp}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
                className="font-display font-bold text-xl"
                style={{ color: dark ? '#ffffff' : '#374151' }}
              >
                {c}
              </motion.div>
            )
          )}
        </div>
      </motion.section>

      {/* ================= FEATURES ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-24"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-display font-bold mb-6" style={{ color: dark ? '#ffffff' : '#111827' }}>
            Supercharge your git workflow
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg mb-20" style={{ color: dark ? '#9ca3af' : '#4b5563' }}>
            Forget screen sharing and merge conflicts. DevRooms brings your entire
            team into the same context.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["chat", "Real-time Collaboration"],
              ["bug_report", "AI Bug Detection"],
              ["smart_toy", "Context-Aware Assistant"],
            ].map(([icon, title]) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                className="p-8 rounded-2xl border"
                style={{
                  backgroundColor: dark ? '#15151A' : '#ffffff',
                  borderColor: dark ? 'rgba(255,255,255,0.05)' : '#e5e7eb',
                }}
              >
                <span className="material-symbols-outlined text-primary mb-4 block">
                  {icon}
                </span>
                <h3 className="font-bold mb-2" style={{ color: dark ? '#ffffff' : '#111827' }}>{title}</h3>
                <p style={{ color: dark ? '#9ca3af' : '#4b5563' }}>
                  Built for modern distributed teams.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= LAPTOP SECTION ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-24"
        style={{ backgroundColor: dark ? '#050507' : '#f3f4f6' }}
      >
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeUp}>
            <h2 className="text-4xl font-display font-bold mb-6" style={{ color: dark ? '#ffffff' : '#111827' }}>
              From Idea to Production in{" "}
              <span className="text-primary">Record Time</span>
            </h2>
            <p className="mb-8" style={{ color: dark ? '#9ca3af' : '#4b5563' }}>
              Connect GitHub, GitLab, or Bitbucket and start coding instantly.
            </p>
          </motion.div>

          <motion.img
            variants={fadeUp}
            whileHover={shouldReduceMotion ? undefined : { scale: 1.01 }}
            className="rounded-xl shadow-2xl border border-gray-200 dark:border-white/10"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBPbJn2HUs7xAJ1nKp6A_50PNrH96K4UuIV9CyCCTCk0WTCxHH2w4EatM8lwNorGJNrDp4V_KvNikt5yY4M3nU-vrpXJJmWDirQ_FlFNdFEP3_e4XqxmwlHtek1NLr8aiEXnbc0w7Ppx_4e9R7SUiuZ_4C89mOarglz3MbdEQ8haYmdDimAfTYzF6wA4Ed3zVXorZTYp9BSJRF5PjHHVbCA_o0nwoUVbwqbErTBZALnC2MykcQX_iSKJDBjYKjko6JR1DFmU29jMY"
            alt="Laptop"
          />
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-24 text-center"
      >
        <motion.h2 variants={fadeUp} className="text-5xl font-display font-bold mb-6" style={{ color: dark ? '#ffffff' : '#111827' }}>
          Start coding for free.
        </motion.h2>
        <motion.p variants={fadeUp} className="mb-10" style={{ color: dark ? '#9ca3af' : '#4b5563' }}>
          Join thousands of developers building with AI collaboration.
        </motion.p>
        <motion.a
          variants={fadeUp}
          whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          className="px-10 py-4 bg-primary text-black font-bold rounded-lg"
        >
          Get Started Now
        </motion.a>
      </motion.section>

      {/* ================= FOOTER ================= */}
      <motion.footer
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="border-t"
        style={{
          borderColor: dark ? 'rgba(255,255,255,0.1)' : '#e5e7eb',
          backgroundColor: dark ? '#15151A' : '#ffffff',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div variants={fadeUp} className="font-display font-bold text-lg" style={{ color: dark ? '#ffffff' : '#111827' }}>
            DevRooms<span className="text-primary">.ai</span>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-6 text-sm" style={{ color: dark ? '#9ca3af' : '#4b5563' }}>
            {["Privacy", "Terms", "Docs"].map((item) => (
              <a key={item} href="#" className="hover:text-primary transition-colors">
                {item}
              </a>
            ))}
          </motion.div>

          <motion.p variants={fadeUp} className="text-sm" style={{ color: dark ? '#6b7280' : '#6b7280' }}>
            © {new Date().getFullYear()} DevRooms AI. All rights reserved.
          </motion.p>
        </div>
      </motion.footer>
      </div>
    </div>
  );
}