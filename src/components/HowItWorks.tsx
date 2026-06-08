export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-spacing">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="badge mb-4">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-blue">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
            Steps
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            How it works?
          </h2>
          <p className="text-text-secondary text-base md:text-lg">
            Your Skills with Our Risk.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {/* Step 1 */}
          <div className="card p-7 flex flex-col">
            <span className="inline-block self-start px-3.5 py-1.5 rounded-lg border border-card-border text-sm font-semibold text-brand-blue mb-8">
              Step 1
            </span>

            {/* Mock UI */}
            <div className="bg-card-bg-light rounded-xl p-4 mb-8 border border-[#EDF0F5]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1A3A5C] to-[#0A1628] flex items-center justify-center text-xl shrink-0">
                  🐋
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-text-muted">Whale Challenge</p>
                  <p className="text-lg font-bold text-text-primary">$560 <span className="text-xs font-normal text-text-muted">for 100k Acc...</span></p>
                </div>
              </div>
              <p className="text-[11px] text-text-muted mt-2">One-time fee • 100% Refundable</p>
            </div>

            <div className="mt-auto">
              <h3 className="text-xl font-bold mb-2 text-text-primary">Take a challenge</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Traders start by selecting any account size they want, for example a $100k account, and pay just $5 to get started.
              </p>
            </div>
          </div>

          {/* Step 2 - Blue */}
          <div
            className="rounded-2xl p-7 text-white flex flex-col"
            style={{ background: "linear-gradient(150deg, #4A8FFF 0%, #1A6DFF 50%, #1458CC 100%)" }}
          >
            <span className="inline-block self-start px-3.5 py-1.5 rounded-lg border border-white/25 text-sm font-semibold text-white mb-8">
              Step 2
            </span>

            {/* Mock funded UI */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-8 border border-white/10">
              <div className="text-center">
                <span className="inline-flex items-center gap-1 text-[11px] bg-white/15 px-2.5 py-1 rounded-full mb-2">
                  🔒 Funded
                </span>
                <div className="w-9 h-9 rounded-full bg-white/20 mx-auto mb-1 flex items-center justify-center text-sm">👤</div>
                <p className="text-xs text-white/60">John Smith</p>
                <p className="text-xl font-bold mt-0.5">$200,000</p>
              </div>
              <div className="flex items-center justify-center gap-2 mt-3 text-[10px] text-white/40">
                <span>Verification</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`w-1.5 h-1.5 rounded-full ${i < 3 ? "bg-white/80" : "bg-white/20"}`} />
                  ))}
                </div>
                <span>Details & Payment</span>
              </div>
            </div>

            <div className="mt-auto">
              <h3 className="text-xl font-bold mb-2">Get Instant Access</h3>
              <p className="text-sm text-white/65 leading-relaxed">
                After purchase, traders receive their login details by email, exactly like a normal account purchase.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="card p-7 flex flex-col">
            <span className="inline-block self-start px-3.5 py-1.5 rounded-lg border border-card-border text-sm font-semibold text-brand-blue mb-8">
              Step 3
            </span>

            {/* Mock chart UI */}
            <div className="bg-card-bg-light rounded-xl p-4 mb-8 border border-[#EDF0F5]">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-text-muted">📊 Initial balance</span>
                  <span className="font-semibold text-brand-blue">$200,000</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-text-muted">📈 Win rate</span>
                  <span className="font-semibold text-green-500">82%</span>
                </div>
              </div>
              <svg viewBox="0 0 200 50" className="w-full h-10 mt-2">
                <polyline
                  points="0,35 20,32 40,38 60,25 80,33 100,18 120,24 140,12 160,19 180,8 200,15"
                  fill="none" stroke="#1A6DFF" strokeWidth="2" strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="mt-auto">
              <h3 className="text-xl font-bold mb-2 text-text-primary">Complete the Challenge</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                This is a one-step model with a 3% profit target. To pass, traders must reach 3% profit without breaching the risk rules.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="#get-funded" className="btn-primary">
            Start and Pay After You Pass
          </a>
        </div>
      </div>
    </section>
  );
}
