"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { platforms, accountSizes } from "@/data/pricingData";

const creatureImages: Record<string, string> = {
  "Star Fish": "/creatures/starfish.avif",
  "Sea Horse": "/creatures/seahorse.avif",
  Fish: "/creatures/fish.avif",
  Ray: "/creatures/ray.avif",
  Dolphin: "/creatures/dolphin.avif",
  Shark: "/creatures/shark.avif",
  Octopus: "/creatures/octopus.avif",
  Whale: "/creatures/whale.webp",
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

        {/* Calculator Card - grey container */}
        <div className="bg-[#EEF1F8] rounded-3xl p-4 max-w-4xl mx-auto flex flex-col gap-3">
          {/* Forex Models */}
          <div className="bg-white rounded-2xl border border-[#E8ECF3] p-5">
            <p className="text-sm font-semibold text-text-primary mb-3">Forex Models</p>
            <button className="chip-active px-6 py-2.5 rounded-full text-sm font-medium cursor-default">
              Pay Later
            </button>
          </div>

          {/* Platform */}
          <div className="bg-white rounded-2xl border border-[#E8ECF3] p-5">
            <p className="text-sm font-semibold text-text-primary mb-3">Platform</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {platforms
                .filter((p) => p.visible)
                .map((platform) => (
                  <button
                    key={platform.id}
                    onClick={() => handlePlatformChange(platform.id)}
                    className={`py-4 px-4 rounded-full text-sm font-medium transition-all cursor-pointer border w-full ${
                      selectedPlatform === platform.id
                        ? "bg-brand-blue border-brand-blue text-white"
                        : "bg-white border-card-border text-text-secondary hover:border-brand-blue"
                    }`}
                  >
                    {platform.icon} {platform.name}
                  </button>
                ))}
            </div>
            <div className="hidden sm:grid grid-cols-3 gap-3 mt-1.5">
              <p className="text-xs text-text-muted text-center">Available 🇺🇸</p>
              <p className="text-xs text-text-muted text-center">Available 🇺🇸</p>
              <p className="text-xs text-text-muted text-center">Most Popular</p>
            </div>
          </div>

          {/* Account Size */}
          <div className="bg-white rounded-2xl border border-[#E8ECF3] p-5">
            <p className="text-sm font-semibold text-text-primary mb-3">Account Size</p>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2.5">
              {sizes.map((size, i) => (
                <button
                  key={size.size}
                  onClick={() => setSelectedSizeIndex(i)}
                  className={`size-btn relative cursor-pointer w-full sm:w-auto ${
                    selectedSizeIndex === i ? "active" : ""
                  }`}
                >
                  {size.label}
                  {size.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white border border-[#E8ECF3] shadow-sm flex items-center justify-center">
                      <svg width="12" height="14" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0C7 0 10 4 10 7C10 7 11.5 5.5 11.5 4C13.5 6 14 8.5 14 10C14 14.4 10.9 18 7 18C3.1 18 0 14.4 0 10C0 7 1.5 4.5 4 3C4 5 5 6.5 5 6.5C5 4 6 1.5 7 0Z" fill="#1A6DFF"/>
                      </svg>
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Result Card */}
          <div>
            <div key={`${selectedPlatform}-${selected.size}`} className="animate-scale-in bg-white rounded-2xl border border-[#E8ECF3] mb-3 overflow-hidden">

              {/* MOBILE layout */}
              <div className="block sm:hidden">
                {/* Full-width image */}
                <div className="relative w-full h-[200px] bg-gradient-to-br from-[#1A3A5C] to-[#0A1628]">
                  <Image
                    src={creatureImages[selected.creatureName] || "/creatures/shark.avif"}
                    alt={selected.creatureName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="font-bold text-text-primary text-lg mb-1">{selected.creatureName} Funding</p>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-extrabold text-text-primary">${selected.startPrice}</span>
                    <span className="text-base text-text-muted line-through">${selected.price}</span>
                    <span className="text-base font-medium text-text-secondary">{selected.label}</span>
                  </div>
                  <span className="inline-block text-xs text-text-muted mb-4 px-3 py-1.5 rounded-md bg-[#F5F7FA] border border-card-border">
                    One-time fee • 100% Refundable
                  </span>
                  <a href="/checkout" className="flex items-center justify-center w-full py-4 rounded-full font-semibold text-sm text-white" style={{ backgroundColor: "#0F1A2E" }}>
                    Start and Pay Later
                  </a>
                </div>
              </div>

              {/* DESKTOP layout */}
              <div className="hidden sm:flex items-center justify-between gap-4 p-6">
                <div className="flex items-center gap-5">
                  <div className="relative w-[160px] h-[120px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1A3A5C] to-[#0A1628] shrink-0">
                    <Image
                      src={creatureImages[selected.creatureName] || "/creatures/shark.avif"}
                      alt={selected.creatureName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-text-primary text-lg">{selected.creatureName} Funding</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold text-text-primary">${selected.startPrice}</span>
                      <span className="text-base text-text-muted line-through">${selected.price}</span>
                      <span className="text-base font-medium text-text-secondary">{selected.label}</span>
                    </div>
                    <span className="inline-block text-xs text-text-muted mt-1.5 px-3 py-1 rounded-md bg-white border border-card-border">
                      One-time fee • 100% Refundable
                    </span>
                  </div>
                </div>
                <a href="/checkout" className="btn-primary !rounded-full whitespace-nowrap shrink-0">
                  Start and Pay Later
                </a>
              </div>
            </div>

            {/* Payment Options */}
            <div className="bg-white rounded-2xl border border-[#E8ECF3] px-5 py-4 mb-3">
              <span className="text-sm font-medium text-text-secondary block mb-3">Payment Options:</span>
              {/* Mobile: 2-row grid. Desktop: single row flex */}
              <div className="grid grid-cols-5 sm:flex sm:flex-wrap gap-2 sm:gap-2.5 sm:items-center">
                {/* VISA */}
                <span className="px-2 py-2 rounded-lg bg-white border border-card-border flex items-center justify-center">
                  <svg width="36" height="12" viewBox="0 0 40 14" fill="none"><path d="M16.3 0.5L13.2 13.5H16.5L19.6 0.5H16.3ZM10.7 0.5L7.5 9.2L7.1 7.3L7.1 7.3L5.9 1.7C5.9 1.7 5.8 0.5 4.3 0.5H0.1L0 0.7C0 0.7 1.7 1.1 3.6 2.2L6.5 13.5H9.9L14.2 0.5H10.7ZM35.2 13.5H38.2L35.6 0.5H33C31.8 0.5 31.4 1.5 31.4 1.5L26.5 13.5H30L30.6 11.8H34.8L35.2 13.5ZM31.6 9.3L33.4 4.2L34.4 9.3H31.6ZM27.5 3.3L28 0.8C28 0.8 26.3 0.2 24.6 0.2C22.7 0.2 18.4 1 18.4 4.8C18.4 8.4 23.2 8.4 23.2 10.3C23.2 12.1 18.9 11.7 17.3 10.5L16.8 13.1C16.8 13.1 18.5 13.8 20.9 13.8C23.3 13.8 27.5 12.5 27.5 9C27.5 5.3 22.7 5.1 22.7 3.4C22.7 1.7 26.1 1.9 27.5 3.3Z" fill="#1A1F71"/></svg>
                </span>
                {/* Mastercard */}
                <span className="px-2 py-2 rounded-lg bg-white border border-card-border flex items-center justify-center">
                  <svg width="32" height="20" viewBox="0 0 32 20" fill="none"><circle cx="11.5" cy="10" r="9.5" fill="#EB001B"/><circle cx="20.5" cy="10" r="9.5" fill="#F79E1B"/><path d="M16 2.8C17.8 4.2 19 6.5 19 9C19 11.5 17.8 13.8 16 15.2C14.2 13.8 13 11.5 13 9C13 6.5 14.2 4.2 16 2.8Z" fill="#FF5F00"/></svg>
                </span>
                {/* Maestro */}
                <span className="px-2 py-2 rounded-lg bg-white border border-card-border flex items-center justify-center">
                  <svg width="32" height="20" viewBox="0 0 32 20" fill="none"><circle cx="11.5" cy="10" r="9.5" fill="#0099DF"/><circle cx="20.5" cy="10" r="9.5" fill="#CC0000"/><path d="M16 2.8C17.8 4.2 19 6.5 19 9C19 11.5 17.8 13.8 16 15.2C14.2 13.8 13 11.5 13 9C13 6.5 14.2 4.2 16 2.8Z" fill="#6C6BBD"/></svg>
                </span>
                {/* AMEX */}
                <span className="px-2 py-2 rounded-lg bg-[#016FD0] border border-[#016FD0] flex items-center justify-center">
                  <span className="text-[9px] font-bold text-white tracking-wider">AMEX</span>
                </span>
                {/* Apple Pay */}
                <span className="px-2 py-2 rounded-lg bg-white border border-card-border flex items-center justify-center">
                  <span className="text-xs font-medium text-text-primary"> Pay</span>
                </span>
                {/* Bitcoin */}
                <span className="w-9 h-9 rounded-lg bg-[#F7931A] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">₿</span>
                </span>
                {/* Ethereum */}
                <span className="w-9 h-9 rounded-lg bg-[#627EEA] flex items-center justify-center">
                  <svg width="14" height="22" viewBox="0 0 14 22" fill="none"><path d="M7 0L0 11.2L7 15.2L14 11.2L7 0Z" fill="white" fillOpacity="0.8"/><path d="M0 12.4L7 22L14 12.4L7 16.4L0 12.4Z" fill="white"/></svg>
                </span>
                {/* Digital Currencies */}
                <span className="col-span-3 sm:col-span-1 text-xs font-semibold text-brand-blue px-3 py-2 rounded-lg bg-white border border-card-border cursor-pointer hover:bg-blue-50 transition-colors text-center">
                  Digital Currencies
                </span>
              </div>
            </div>

            {/* Challenge Details Table */}
            <div className="mt-0 flex flex-col gap-2">
              {/* Header */}
              <div className="bg-white rounded-2xl border border-[#E8ECF3] grid grid-cols-[2fr_1fr_1fr] px-6 py-4">
                <div />
                <div className="text-center">
                  <p className="text-sm font-bold text-text-primary">Step 1</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-text-primary">Funded</p>
                  <p className="text-xs text-text-muted">Aqua Trader</p>
                </div>
              </div>
              {[
                { label: "Profit Target", step1: selected.challengeDetails.profitTarget, funded: "" },
                { label: "Maximum Daily Loss", step1: selected.challengeDetails.maxDailyLoss, funded: selected.fundedDetails.maxDailyLoss },
                { label: "Maximum Loss", step1: selected.challengeDetails.maxLoss, funded: selected.fundedDetails.maxLoss },
                { label: "Account Leverage", step1: selected.challengeDetails.leverage, funded: selected.fundedDetails.leverage },
                { label: "Rewards", step1: "", funded: selected.fundedDetails.rewards },
                { label: "Profit Split", step1: "", funded: selected.fundedDetails.profitSplit },
              ].map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[2fr_1fr_1fr] bg-white rounded-2xl border border-[#E8ECF3]"
                >
                  <div className="py-6 px-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0">
                        <path d="M2 13l4 4L14 9" stroke="#1A6DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 13l4 4L20 9" stroke="#1A6DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-sm font-medium text-text-primary">{row.label}</span>
                    </div>
                    <span className="w-5 h-5 rounded-full bg-[#E2E7F0] flex items-center justify-center shrink-0 cursor-help" title="More info">
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M8 7V11M8 5V5.01" stroke="#8B95A7" strokeWidth="2" strokeLinecap="round"/></svg>
                    </span>
                  </div>
                  <div className="py-6 px-5 text-sm text-center text-text-primary font-semibold flex items-center justify-center">
                    {row.step1 === "None" ? (
                      <span className="font-bold">None</span>
                    ) : (
                      row.step1
                    )}
                  </div>
                  <div className="py-6 px-5 text-sm text-center text-text-primary font-semibold flex items-center justify-center">
                    {row.funded === "None" ? (
                      <span className="font-bold">None</span>
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
