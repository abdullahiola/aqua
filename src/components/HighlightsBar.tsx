const highlights = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-blue">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Reward",
    subtitle: "guarantee",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-blue">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 10h18" />
        <path d="M8 14h2M14 14h2" />
      </svg>
    ),
    title: "100%",
    subtitle: "profit split",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-blue">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Unlimited",
    subtitle: "trading period",
  },
];

export default function HighlightsBar() {
  return (
    <section className="pt-4 pb-12">
      <div className="container-main">
        {/* Mobile: 3-column grid, icon on top | Desktop: horizontal row */}
        <div className="grid grid-cols-3 md:flex md:items-center md:justify-center md:gap-20 gap-4">
          {highlights.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center gap-3 md:flex-row md:text-left md:gap-3">
              <div className="w-14 h-14 rounded-2xl bg-card-bg-light border border-card-border flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="font-extrabold text-text-primary text-base md:text-lg">{item.title}</p>
                <p className="text-xs md:text-sm font-medium text-text-muted">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
