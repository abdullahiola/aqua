import Link from "next/link";

const footerColumns = {
  Trade: [
    { label: "Forex", href: "#" },
    { label: "Futures", href: "#" },
    { label: "TV", href: "#" },
  ],
  Product: [
    { label: "Home", href: "#" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Rewards", href: "#" },
    { label: "Affiliate", href: "#" },
    { label: "Forex Funding", href: "#" },
  ],
  About: [
    { label: "About", href: "#" },
    { label: "Blogs", href: "#" },
    { label: "Guides", href: "#" },
  ],
  Support: [
    { label: "FAQ", href: "#" },
    { label: "Contact", href: "#" },
  ],
};

const socials = [
  { label: "Discord", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/></svg> },
  { label: "Instagram", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg> },
  { label: "X", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { label: "YouTube", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
  { label: "Telegram", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.96 6.504-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg> },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white">
      <div className="container-main py-16">
        {/* Top: Logo + Links */}
        <div className="flex flex-col lg:flex-row gap-12 mb-12">
          {/* Left: Logo + Socials */}
          <div className="lg:w-1/3">
            <Link href="/" className="block mb-3">
              <span className="text-3xl font-extrabold tracking-tight uppercase">
                AQUA<span className="font-extrabold">FUNDED</span>
              </span>
            </Link>
            <p className="text-sm text-white/40 mb-5">Our socials</p>
            <div className="flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Link columns */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerColumns).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-sm font-semibold text-white/50 mb-4">
                  {category}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-white/40 hover:text-white/80 transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Owned by AquaFunds + Payment logos */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-10">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 max-w-xs">
            <p className="text-sm text-white/80 mb-1">
              Owned by <span className="font-extrabold tracking-wide">AQUAFUNDS</span>
            </p>
            <p className="text-xs text-white/40 mb-4">
              Learn more about B2B collaboration & career opportunities
            </p>
            <a href="#" className="inline-block text-sm font-medium text-white border border-white/20 rounded-full px-5 py-2 hover:bg-white/10 transition-all">
              Visit AquaFunds
            </a>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            {["VISA", "MC", "Maestro", "AMEX", "Apple Pay", "₿", "Ξ", "Digital Currencies"].map((m) => (
              <span key={m} className="text-xs font-medium text-white/30 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10">
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/8 pt-8">
          <p className="text-[11px] text-white/20 leading-relaxed">
            All content published and distributed by Aqua Funded FZCO t/a AquaFunded(&quot;AquaFunded&quot;) located at IFZA Business Park, DDP, Premises No.- 35882 - 001 Dubai Silicon Oasis Dubai, United Arab Emirates and its affiliates (collectively the &quot;Company&quot;) is to be treated as general and for information purposes only. Information provided by the Company or contained herein throughout the www.aquafunded.com website is not intended as (a) investment advice; (b) as an offer or solicitation of an offer to buy or sell; and (c) as a recommendation, endorsement or sponsorship of any security company or investment fund. Testimonials appearing may not be representative of other traders and is not a guarantee of future trading performance or success. Company is not a financial broker, financial advisor, or financial representative, and does not accept client deposits. The Company does not carryout any regulated activities; the Company&apos;s exclusive activity is simulated trading as defined in the Terms of Use. The foreign exchange market and currency trading is highly speculative in nature and as such, currency prices may become extremely volatile. You may sustain a total loss of your funds.
          </p>
        </div>
      </div>
    </footer>
  );
}
