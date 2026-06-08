"use client";

import { useState } from "react";

export default function CommunityCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <section className="section-spacing">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
          {/* Left: Aqua Community (cream/beige card) */}
          <div className="rounded-2xl p-8 md:p-10 relative overflow-hidden" style={{ background: "#F0EDE4" }}>
            {/* Mock floating UI elements */}
            <div className="absolute top-6 right-6 flex items-start gap-3 opacity-80">
              {/* Chart card */}
              <div className="bg-white rounded-xl p-3 shadow-sm border border-[#E8E4D8] w-48 hidden md:block">
                <p className="text-[10px] text-text-muted mb-1">Account Performance</p>
                <svg viewBox="0 0 160 40" className="w-full h-8">
                  <polyline points="0,30 20,28 40,32 60,20 80,25 100,15 120,20 140,10 160,18" fill="none" stroke="#1A6DFF" strokeWidth="1.5" />
                </svg>
              </div>
              {/* Reward badge */}
              <div className="bg-white rounded-xl p-3 shadow-sm border border-[#E8E4D8] hidden md:block">
                <p className="text-[10px] text-text-muted">⭐ Highest Reward</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-6 h-6 rounded-full bg-orange-200 text-xs flex items-center justify-center">👤</div>
                  <div>
                    <p className="text-xs font-semibold">Sarah Galler</p>
                    <p className="text-[10px] text-text-muted">$40,000</p>
                  </div>
                </div>
                <p className="text-[10px] text-green-500 font-semibold mt-1">$140,364.4 (140.38%)</p>
              </div>
            </div>

            <div className="relative z-10 max-w-md">
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
                Dive into the <span className="font-extrabold">Aqua Community</span>
              </h3>
              <p className="text-sm text-text-secondary mb-1">
                Sign up now to enter into our <strong>yearly $1.2 Million Giveaway!</strong>
              </p>
              <p className="text-sm text-text-secondary mb-6">
                And more exclusive giveaways, discounts & promotions.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-full bg-white border border-[#D4D0C4] text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/20 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="w-full btn-primary !rounded-full !py-3"
                >
                  {submitted ? "✓ Entered!" : "Join now & Enter $1.2 Million Giveaway"}
                </button>
              </form>

              {submitted && (
                <p className="text-green-600 text-xs mt-2 animate-fade-in-up">
                  You&apos;re in! Check your email for confirmation.
                </p>
              )}
            </div>
          </div>

          {/* Right: Discord (blue card) */}
          <div className="rounded-2xl p-8 md:p-10 relative overflow-hidden text-white flex flex-col justify-between"
            style={{ background: "linear-gradient(135deg, #4A8FFF 0%, #1A6DFF 50%, #1458CC 100%)" }}
          >
            {/* Discord icon watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
              <svg width="180" height="180" viewBox="0 0 24 24" fill="white">
                <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
              </svg>
            </div>

            <div className="relative z-10">
              <p className="text-sm text-white/70 mb-2">Your journey starts here</p>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Make waves in trading
              </h3>
            </div>

            <a
              href="#"
              className="relative z-10 inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur text-white font-semibold py-3.5 px-6 rounded-full transition-all text-sm border border-white/20"
            >
              Join our discord community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
