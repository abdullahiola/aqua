import Image from "next/image";

const comparisonRows = [
  { feature: "Profit split", aqua: "100%", ftmo: "80%", industry: "80%", aquaIsCheck: false },
  { feature: "Reward guarantee", aqua: true, ftmo: false, industry: false, aquaIsCheck: true },
  { feature: "100% refunds", aqua: true, ftmo: false, industry: false, aquaIsCheck: true },
  { feature: "Charity", aqua: true, ftmo: false, industry: false, aquaIsCheck: true },
  { feature: "Free Gift Box", aqua: true, ftmo: false, industry: false, aquaIsCheck: true },
  { feature: "Free Trading Livestreams", aqua: true, ftmo: false, industry: false, aquaIsCheck: true },
  { feature: "Free Trading Academy", aqua: true, ftmo: false, industry: false, aquaIsCheck: true },
  { feature: "Forex, Crypto and Futures", aqua: true, ftmo: false, industry: false, aquaIsCheck: true },
  { feature: "Loyalty Rewarded with Aqua Points", aqua: true, ftmo: false, industry: false, aquaIsCheck: true },
  { feature: "Best Affiliate program", aqua: true, ftmo: false, industry: false, aquaIsCheck: true },
];

const featureIcons: Record<string, React.ReactNode> = {
  "Profit split": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M2 9h20"/></svg>
  ),
  "Reward guarantee": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18"/><path d="M8 14h2M14 14h2"/></svg>
  ),
  "100% refunds": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 17l6-6 4 4 8-8"/><path d="M17 7h4v4"/></svg>
  ),
  "Charity": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
  ),
  "Free Gift Box": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="8" width="18" height="13" rx="1"/><path d="M12 8v13"/><path d="M3 12h18"/><path d="M12 8c-2-4-6-4-6 0h6c2-4 6-4 6 0h-6z"/></svg>
  ),
  "Free Trading Livestreams": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M10 8l6 4-6 4V8z"/></svg>
  ),
  "Free Trading Academy": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/></svg>
  ),
  "Forex, Crypto and Futures": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v12M8 10h8M8 14h8"/></svg>
  ),
  "Loyalty Rewarded with Aqua Points": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
  ),
  "Best Affiliate program": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l2 2"/></svg>
  ),
};

function DoubleCheck() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="inline-block">
      <path d="M2 13l4 4L14 9" stroke="#1A6DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 13l4 4L20 9" stroke="#1A6DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="inline-block">
      <circle cx="12" cy="12" r="9" stroke="#C5CBD6" strokeWidth="1.5" />
      <path d="M15 9l-6 6M9 9l6 6" stroke="#C5CBD6" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function ComparisonTable() {
  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Floating bubbles */}
      <div className="absolute top-28 left-12 w-16 h-16 rounded-full bg-[#C8D2E4] opacity-30 animate-float" />
      <div className="absolute top-36 left-28 w-8 h-8 rounded-full bg-[#D4DCE8] opacity-25 animate-float" style={{ animationDelay: "1s" }} />

      <div className="container-main relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="relative w-20 h-20 rounded-2xl bg-white border border-card-border mx-auto mb-4 shadow-sm overflow-hidden">
            <Image src="/af.webp" alt="AquaFunded" fill sizes="80px" className="object-cover" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            Why AquaFunded?
          </h2>
          <p className="text-text-secondary text-base">
            What we do differently.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="card overflow-hidden max-w-[700px] mx-auto min-w-[520px] sm:min-w-0">
          <table className="w-full" style={{ borderCollapse: "separate", borderSpacing: 0 }}>
            <thead>
              <tr>
                <th className="text-left p-4 text-text-muted text-xs font-medium" />
                <th className="p-4 relative">
                  {/* Blue bordered column header */}
                  <div className="inline-block border-2 border-brand-blue rounded-lg px-3 py-1">
                    <span className="text-brand-blue font-extrabold text-xs tracking-wide uppercase">
                      AQUAFUNDED
                    </span>
                  </div>
                </th>
                <th className="p-4 text-text-primary text-xs font-semibold">FTMO</th>
                <th className="p-4 text-text-primary text-xs font-semibold">Industry standard</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 1 ? "bg-[#F8FAFD]" : "bg-white"}>
                  <td className="p-4 text-left">
                    <span className="flex items-center gap-2.5" style={{ fontFamily: '"Inter Tight", Arial, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '24px', color: 'rgb(0,0,0)' }}>
                      <span className="text-text-muted">{featureIcons[row.feature]}</span>
                      {row.feature}
                    </span>
                  </td>
                  <td className="p-4 text-center border-l border-r border-[#E0EAFF] bg-[#F5F8FF]">
                    {row.aquaIsCheck ? (
                      <DoubleCheck />
                    ) : (
                      <span className="text-brand-blue font-semibold" style={{ fontFamily: '"Inter Tight", Arial, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '24px' }}>{row.aqua as string}</span>
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {typeof row.ftmo === "boolean" ? (
                      row.ftmo ? <DoubleCheck /> : <CrossMark />
                    ) : (
                      <span style={{ fontFamily: '"Inter Tight", Arial, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '24px', color: 'rgb(0,0,0)' }}>{row.ftmo}</span>
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {typeof row.industry === "boolean" ? (
                      row.industry ? <DoubleCheck /> : <CrossMark />
                    ) : (
                      <span style={{ fontFamily: '"Inter Tight", Arial, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '24px', color: 'rgb(0,0,0)' }}>{row.industry}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a href="#get-funded" className="btn-primary">
            Start and Pay After You Pass
          </a>
        </div>
      </div>
    </section>
  );
}
