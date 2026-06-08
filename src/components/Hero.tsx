export default function Hero() {
  return (
    <section className="relative">
      {/* Full blue gradient area */}
      <div
        className="relative w-full text-center text-white overflow-hidden pb-24 md:pb-28"
        style={{
          background: "linear-gradient(160deg, #5A9CFF 0%, #1A6DFF 35%, #1458CC 65%, #4A8FFF 100%)",
        }}
      >
        {/* Decorative wave lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute w-full h-full" viewBox="0 0 1440 700" preserveAspectRatio="none">
            <path d="M-100,200 Q200,100 500,250 T1100,200 T1600,300" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="2" />
            <path d="M-100,350 Q300,250 600,400 T1200,350 T1600,450" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
            <path d="M-100,500 Q250,400 550,520 T1150,480 T1600,580" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10 pt-16 md:pt-24 lg:pt-28">
          {/* Heading */}
          <h1
            style={{
              fontFamily: '"Inter Tight", Arial, sans-serif',
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "76px",
              lineHeight: "68px",
              color: "rgb(255, 255, 255)",
              letterSpacing: "-0.02em",
            }}
            className="mb-5"
          >
            Pass First
            <br />
            Pay Later
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-white/75 max-w-[420px] mx-auto mb-8 leading-relaxed">
            Take a prop firm challenge but only pay after you pass.
          </p>

          {/* CTA Button - white pill */}
          <div className="mb-4">
            <a
              href="#get-funded"
              className="inline-flex items-center bg-white text-[#0F1A2E] font-semibold py-3 px-7 rounded-full text-sm hover:bg-white/90 transition-all hover:shadow-lg"
            >
              Start Your Challenge Now
            </a>
          </div>

          {/* Subtext */}
          <p className="text-sm text-white/50 mb-20 md:mb-24">
            $5 to Start and Pay the rest After You Pass the Challenge
          </p>

          {/* Featured In — inside the blue gradient */}
          <div className="mb-8">
            <p className="text-xs text-white/35 uppercase tracking-[0.2em] mb-5 font-medium">
              Featured In
            </p>
            <div className="flex items-center justify-center gap-8 md:gap-14 flex-wrap">
              <span className="text-lg md:text-xl font-black tracking-wider text-white/60 uppercase">BENZINGA</span>
              <span className="text-lg md:text-xl font-semibold italic text-white/60">MarketWatch</span>
              <span className="text-lg md:text-xl font-bold text-white/60 flex items-center gap-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20L8 6l4.5 9 3.5-5.5L22 20H3z"/></svg>
                Nasdaq
              </span>
              <span className="text-base md:text-lg font-bold text-white/60">
                yahoo!<span className="font-normal">finance</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom curve — smooth transition to body bg */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 md:h-16 block">
            <path d="M0,60 L0,30 Q360,0 720,25 Q1080,50 1440,10 L1440,60 Z" fill="#E9EEF6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
