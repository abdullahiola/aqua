"use client";

import { useState, useMemo } from "react";
import { platforms, accountSizes } from "@/data/pricingData";

const creatureEmojis: Record<string, string> = {
  "Star Fish": "⭐",
  "Sea Horse": "🐴",
  Fish: "🐟",
  Ray: "🦈",
  Dolphin: "🐬",
  Shark: "🦈",
  Octopus: "🐙",
  Whale: "🐋",
};

export default function PricingCalculator() {
  const [selectedPlatform, setSelectedPlatform] = useState("trade-locker");
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(4); // Default to $100k

  const sizes = useMemo(
    () => accountSizes[selectedPlatform] || [],
    [selectedPlatform]
  );

  const selected = sizes[selectedSizeIndex] || sizes[0];

  const handlePlatformChange = (platformId: string) => {
    setSelectedPlatform(platformId);
    const newSizes = accountSizes[platformId] || [];
    const popularIdx = newSizes.findIndex((s) => s.popular);
    setSelectedSizeIndex(popularIdx >= 0 ? popularIdx : Math.floor(newSizes.length / 2));
  };

  if (!selected) return null;

  return (
    <section id="get-funded" className="section-spacing">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            Pay After You Pass
          </h2>
          <p className="text-text-secondary text-lg max-w-md mx-auto">
            Complete your challenge then pay after you&apos;ve proven your trading skills.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="card p-6 md:p-8 max-w-4xl mx-auto">
          {/* Forex Models */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-text-primary mb-3">Forex Models</p>
            <button className="chip-active px-6 py-2.5 rounded-full text-sm font-medium cursor-default">
              Pay Later
            </button>
          </div>

          <hr className="border-[#EDF0F5] mb-6" />

          {/* Platform */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-text-primary mb-3">Platform</p>
            <div className="grid grid-cols-3 gap-3">
              {platforms
                .filter((p) => p.visible)
                .map((platform) => (
                  <button
                    key={platform.id}
                    onClick={() => handlePlatformChange(platform.id)}
                    className={`py-3 px-4 rounded-full text-sm font-medium transition-all cursor-pointer border ${
                      selectedPlatform === platform.id
                        ? "bg-brand-blue border-brand-blue text-white"
                        : "bg-white border-card-border text-text-secondary hover:border-brand-blue"
                    }`}
                  >
                    {platform.icon} {platform.name}
                  </button>
                ))}
            </div>
            <div className="grid grid-cols-3 gap-3 mt-1.5">
              <p className="text-xs text-text-muted text-center">Available 🇺🇸</p>
              <p className="text-xs text-text-muted text-center">Available 🇺🇸</p>
              <p className="text-xs text-text-muted text-center">Most Popular</p>
            </div>
          </div>

          <hr className="border-[#EDF0F5] mb-6" />

          {/* Account Size */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-text-primary mb-3">Account Size</p>
            <div className="flex flex-wrap gap-2.5">
              {sizes.map((size, i) => (
                <button
                  key={size.size}
                  onClick={() => setSelectedSizeIndex(i)}
                  className={`size-btn relative cursor-pointer ${
                    selectedSizeIndex === i ? "active" : ""
                  }`}
                >
                  {size.label}
                  {size.popular && (
                    <span className="absolute -top-3 -right-1 text-base">🔥</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <hr className="border-[#EDF0F5] mb-6" />

          {/* Result Card */}
          <div className="animate-scale-in" key={`${selectedPlatform}-${selected.size}`}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 bg-card-bg-light rounded-xl border border-[#EDF0F5] mb-6">
              <div className="flex items-center gap-4">
                {/* Creature image */}
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#1A3A5C] to-[#0A1628] flex items-center justify-center text-4xl shrink-0">
                  {creatureEmojis[selected.creatureName] || "🌊"}
                </div>
                <div>
                  <p className="font-bold text-text-primary text-lg">{selected.creatureName} Funding</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-text-primary">${selected.startPrice}</span>
                    <span className="text-base text-text-muted line-through">${selected.price}</span>
                    <span className="text-base font-medium text-text-secondary">
                      {selected.label}
                    </span>
                  </div>
                  <span className="inline-block text-xs text-text-muted mt-1 px-2 py-0.5 rounded bg-white border border-card-border">
                    One-time fee • 100% Refundable
                  </span>
                </div>
              </div>

              {/* CTA */}
              <a href="#" className="btn-primary !rounded-full whitespace-nowrap shrink-0">
                Start and Pay Later
              </a>
            </div>

            {/* Payment Options */}
            <div className="flex items-center gap-4 flex-wrap mb-8 p-4 bg-card-bg-light rounded-xl border border-[#EDF0F5]">
              <span className="text-sm font-medium text-text-secondary">Payment Options:</span>
              <div className="flex items-center gap-3 flex-wrap">
                {["VISA", "MC", "Maestro", "AMEX", "Apple Pay", "₿", "Ξ", "Digital Currencies"].map((m) => (
                  <span key={m} className="text-xs font-semibold text-text-muted px-2.5 py-1.5 rounded-lg bg-white border border-card-border">
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenge Details Table */}
            <div className="border border-card-border rounded-xl overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-3 bg-card-bg-light">
                <div className="p-4" />
                <div className="p-4 text-center">
                  <p className="text-sm font-bold text-text-primary">Step 1</p>
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm font-bold text-text-primary">Funded</p>
                  <p className="text-xs text-text-muted">Aqua Trader</p>
                </div>
              </div>
              {[
                { label: "Profit Target", step1: selected.challengeDetails.profitTarget, funded: selected.fundedDetails.profitTarget, icon: "✓" },
                { label: "Maximum Daily Loss", step1: selected.challengeDetails.maxDailyLoss, funded: selected.fundedDetails.maxDailyLoss, icon: "✓" },
                { label: "Maximum Loss", step1: selected.challengeDetails.maxLoss, funded: selected.fundedDetails.maxLoss, icon: "✓" },
                { label: "Account Leverage", step1: selected.challengeDetails.leverage, funded: selected.fundedDetails.leverage, icon: "✓" },
                { label: "Rewards", step1: selected.challengeDetails.rewards, funded: selected.fundedDetails.rewards, icon: "✓" },
                { label: "Profit Split", step1: selected.challengeDetails.profitSplit, funded: selected.fundedDetails.profitSplit, icon: "✓" },
              ].map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-3 border-t border-[#EDF0F5] ${i % 2 === 0 ? 'bg-white' : 'bg-card-bg-light/50'}`}
                >
                  <div className="p-4 flex items-center gap-2">
                    <span className="text-brand-blue text-xs">✓</span>
                    <span className="text-sm font-medium text-text-primary">{row.label}</span>
                    <span className="text-text-muted text-xs cursor-help" title="More info">ⓘ</span>
                  </div>
                  <div className="p-4 text-sm text-center text-text-primary font-medium">
                    {row.step1 === "None" ? (
                      <span className="text-text-primary font-semibold">None</span>
                    ) : (
                      row.step1
                    )}
                  </div>
                  <div className="p-4 text-sm text-center text-text-primary font-medium">
                    {row.funded === "None" ? (
                      <span className="text-text-primary font-semibold">None</span>
                    ) : (
                      row.funded
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
