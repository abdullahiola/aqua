"use client";

import { useState } from "react";
import Link from "next/link";

const COUNTRIES = [
  "United States", "United Kingdom", "Canada", "Australia", "Germany",
  "France", "Spain", "Italy", "Netherlands", "Sweden", "Norway", "Denmark",
  "Switzerland", "Belgium", "Austria", "Portugal", "Poland", "Czech Republic",
  "Hungary", "Romania", "Bulgaria", "Croatia", "Slovakia", "Slovenia",
  "Estonia", "Latvia", "Lithuania", "Finland", "Ireland", "Luxembourg",
  "Malta", "Cyprus", "Greece", "Japan", "South Korea", "Singapore",
  "Hong Kong", "UAE", "Saudi Arabia", "South Africa", "Brazil", "Mexico",
  "Argentina", "Chile", "Colombia", "Peru", "New Zealand", "India",
  "Pakistan", "Bangladesh", "Nigeria", "Kenya", "Ghana", "Other",
];

export default function CheckoutPage() {
  const [selectedAddon, setSelectedAddon] = useState<string | null>(null);
  const [selectedQuantity, setSelectedQuantity] = useState<1 | 2 | 3>(1);
  const [paymentMethod, setPaymentMethod] = useState<"paytiko" | "alternative">("paytiko");
  const [coupon, setCoupon] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [copiedCoupon, setCopiedCoupon] = useState(false);

  const basePrice = 119;
  const originalPrice = 199;

  const addonPct = selectedAddon === "profit" ? 0.15 : selectedAddon === "payout" ? 0.15 : selectedAddon === "both" ? 0.25 : 0;
  const pricePerAccount = basePrice * (1 + addonPct);
  const discount = selectedQuantity === 2 ? 0.05 : selectedQuantity === 3 ? 0.10 : 0;
  const finalPerAccount = +(pricePerAccount * (1 - discount)).toFixed(2);
  const totalSavings = +((pricePerAccount - finalPerAccount) * selectedQuantity).toFixed(2);
  const finalTotal = +(finalPerAccount * selectedQuantity).toFixed(2);

  const handleCopyCoupon = () => {
    navigator.clipboard.writeText("AQUA");
    setCopiedCoupon(true);
    setTimeout(() => setCopiedCoupon(false), 2000);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#EEF0F5" }}>
      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-4 text-center relative">
        <Link href="/" className="inline-block">
          <span className="text-xl font-extrabold tracking-widest" style={{ color: "#1A6DFF", letterSpacing: "0.15em" }}>
            AQUA<span style={{ color: "#0F1A2E" }}>FUNDED</span>
          </span>
        </Link>
      </header>

      <div className="max-w-[620px] mx-auto px-4 py-10 pb-20">
        {/* Page Title Row */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-semibold text-[#0F1A2E]" style={{ letterSpacing: "-0.02em" }}>
            Details &amp; Payment
          </h1>
          <Link
            href="/"
            className="text-sm font-medium text-[#0F1A2E] border border-[#0F1A2E] rounded-full px-5 py-2 hover:bg-gray-50 transition-colors"
          >
            Back to Home
          </Link>
        </div>

        {/* Product Details */}
        <div className="bg-white rounded-2xl border border-[#E8ECF3] p-5 mb-3">
          <div className="flex items-center justify-between mb-4">
            <p className="font-semibold text-[#0F1A2E]">Product Details</p>
            <button className="bg-[#1A6DFF] text-white text-sm font-medium px-4 py-1.5 rounded-full hover:bg-[#1458CC] transition-colors">
              Edit
            </button>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#6B7280]">Challenge:</span>
              <span className="text-[#1A6DFF] font-medium">1 Step Pro</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6B7280]">Account Size:</span>
              <span className="text-[#1A6DFF] font-medium">$25,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6B7280]">Platform:</span>
              <span className="text-[#1A6DFF] font-medium">MetaTrader 5</span>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-white rounded-2xl border border-[#E8ECF3] p-5 mb-3">
          <p className="text-xs text-[#6B7280] mb-2">For $25,000 Account</p>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-sm text-[#6B7280]">Total</span>
            <span className="text-base text-[#9CA3AF] line-through">${originalPrice}</span>
            <span className="text-2xl font-bold text-[#0F1A2E]">${basePrice}</span>
          </div>
          <p className="text-xs text-[#6B7280]">One-time fee • 100% refundable</p>
        </div>

        {/* Add-Ons */}
        <div className="bg-white rounded-2xl border border-[#E8ECF3] p-5 mb-3">
          <p className="font-semibold text-[#0F1A2E] mb-4">Select Add-Ons</p>
          <div className="space-y-3">
            {[
              { id: "profit", label: "100% Profit Split (vs 90%)", pct: "+15%" },
              { id: "payout", label: "First Payout in 7 Days (vs 14 Days)", pct: "+15%" },
              { id: "demand", label: "First Payout on Demand (vs 14 Days)", pct: "+15%" },
              { id: "both", label: "Both (Save 5%)", pct: "+25%", popular: true },
            ].map((addon) => (
              <label
                key={addon.id}
                className="flex items-center justify-between cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="addon"
                    checked={selectedAddon === addon.id}
                    onChange={() => setSelectedAddon(selectedAddon === addon.id ? null : addon.id)}
                    className="w-4 h-4 accent-[#1A6DFF]"
                  />
                  <span className="text-sm text-[#0F1A2E]">{addon.label}</span>
                  {addon.popular && (
                    <span className="text-xs text-[#1A6DFF] font-semibold">Most Popular</span>
                  )}
                </div>
                <span className="text-sm font-medium text-[#0F1A2E]">{addon.pct}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Customer Information */}
        <div className="bg-white rounded-2xl border border-[#E8ECF3] p-5 mb-3">
          <p className="font-semibold text-[#0F1A2E] mb-4">1. Customer Information</p>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full border border-[#E8ECF3] rounded-xl px-4 py-3 text-sm text-[#0F1A2E] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1A6DFF] transition-colors"
          />
        </div>

        {/* Billing Details */}
        <div className="bg-white rounded-2xl border border-[#E8ECF3] p-5 mb-3">
          <p className="font-semibold text-[#0F1A2E] mb-4">2. Billing Details</p>
          <div className="grid grid-cols-2 gap-3">
            <input placeholder="First name" className="checkout-input" />
            <input placeholder="Last name" className="checkout-input" />
            <select className="checkout-input col-span-2 appearance-none">
              <option value="">Select a country / region...</option>
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <input placeholder="Street and House Number" className="checkout-input col-span-2" />
            <input placeholder="Town / City" className="checkout-input" />
            <input placeholder="State / County" className="checkout-input" />
            <input placeholder="Postcode / ZIP" className="checkout-input" />
            <input placeholder="Phone Number" className="checkout-input" />
          </div>
        </div>

        {/* Promo Code Banner */}
        <div className="bg-white rounded-2xl border border-[#E8ECF3] overflow-hidden mb-3">
          <div className="flex items-center gap-3 px-5 py-3 border-b border-[#E8ECF3] bg-[#F8FAFF]">
            <div className="w-0.5 h-5 bg-[#1A6DFF] rounded-full shrink-0" />
            <span className="text-sm font-semibold text-[#0F1A2E]">40% OFF + BOGO + 150% Refund</span>
            <span className="text-[#9CA3AF] text-sm mx-1">|</span>
            <span className="text-sm text-[#6B7280]">Limited Time</span>
            <span className="text-[#9CA3AF] text-sm mx-1">|</span>
            <button
              onClick={handleCopyCoupon}
              className="flex items-center gap-1.5 text-sm text-[#1A6DFF] font-semibold hover:opacity-80 transition-opacity ml-auto"
            >
              Code: AQUA
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
              </svg>
              {copiedCoupon && <span className="text-green-500 text-xs">Copied!</span>}
            </button>
          </div>
          <div className="flex items-center gap-3 p-4">
            <div className="flex items-center flex-1 border border-[#E8ECF3] rounded-xl px-3 py-2.5 gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" />
              </svg>
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Enter coupon code"
                className="flex-1 text-sm text-[#0F1A2E] placeholder:text-[#9CA3AF] bg-transparent focus:outline-none"
              />
            </div>
            <button className="bg-[#1A6DFF] text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-[#1458CC] transition-colors shrink-0">
              Apply
            </button>
          </div>
        </div>

        {/* Account Quantity Selection */}
        <div className="flex flex-col gap-3 mb-3">
          {/* 1 Account */}
          <label
            className={`bg-white rounded-2xl border-2 cursor-pointer transition-all p-5 ${selectedQuantity === 1 ? "border-[#0F1A2E]" : "border-[#E8ECF3] hover:border-[#1A6DFF]"}`}
            onClick={() => setSelectedQuantity(1)}
          >
            <div className="flex items-center gap-4">
              <input type="radio" checked={selectedQuantity === 1} onChange={() => setSelectedQuantity(1)} className="w-4 h-4 accent-[#0F1A2E] shrink-0" />
              <div className="flex items-center gap-2">
                <span className="w-9 h-9 rounded-full bg-[#F3F4F6] flex items-center justify-center text-xs font-bold text-[#0F1A2E]">⚡ $25K</span>
              </div>
              <span className="font-semibold text-[#0F1A2E] text-lg flex-1">1 Account</span>
              <span className="font-semibold text-[#0F1A2E]">${basePrice * (1 + addonPct) === 119 ? "119.00" : (basePrice * (1 + addonPct)).toFixed(2)}</span>
            </div>
          </label>

          {/* 2 Accounts */}
          <div className="relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
              <span className="bg-[#1A6DFF] text-white text-xs font-semibold px-4 py-1 rounded-full">Most Popular Discount</span>
            </div>
            <label
              className={`bg-white rounded-2xl border-2 cursor-pointer transition-all p-5 pt-6 block ${selectedQuantity === 2 ? "border-[#1A6DFF]" : "border-[#E8ECF3] hover:border-[#1A6DFF]"}`}
              onClick={() => setSelectedQuantity(2)}
            >
              <div className="flex items-center gap-4">
                <input type="radio" checked={selectedQuantity === 2} onChange={() => setSelectedQuantity(2)} className="w-4 h-4 accent-[#1A6DFF] shrink-0" />
                <div className="flex items-center">
                  <span className="w-9 h-9 rounded-full bg-[#F3F4F6] flex items-center justify-center text-xs font-bold text-[#0F1A2E] -mr-2">$25K</span>
                  <span className="w-9 h-9 rounded-full bg-[#F3F4F6] flex items-center justify-center text-xs font-bold text-[#0F1A2E]">$25K</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[#0F1A2E] text-lg">2 Accounts</p>
                  <p className="text-xs text-[#6B7280]">Increase reward chances by 2x</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-[#0F1A2E]">${(basePrice * (1 + addonPct) * 0.95).toFixed(2)} Each</p>
                  <p className="text-xs text-[#1A6DFF] font-semibold">SAVE ${(basePrice * (1 + addonPct) * 0.05 * 2).toFixed(2)}</p>
                </div>
              </div>
            </label>
          </div>

          {/* 3 Accounts */}
          <div className="relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
              <span className="bg-[#1A6DFF] text-white text-xs font-semibold px-4 py-1 rounded-full">Best Value Discount</span>
            </div>
            <label
              className={`bg-white rounded-2xl border-2 cursor-pointer transition-all p-5 pt-6 block ${selectedQuantity === 3 ? "border-[#1A6DFF]" : "border-[#E8ECF3] hover:border-[#1A6DFF]"}`}
              onClick={() => setSelectedQuantity(3)}
            >
              <div className="flex items-center gap-4">
                <input type="radio" checked={selectedQuantity === 3} onChange={() => setSelectedQuantity(3)} className="w-4 h-4 accent-[#1A6DFF] shrink-0" />
                <div className="flex items-center">
                  <span className="w-9 h-9 rounded-full bg-[#F3F4F6] flex items-center justify-center text-xs font-bold text-[#0F1A2E] -mr-2">$25K</span>
                  <span className="w-9 h-9 rounded-full bg-[#F3F4F6] flex items-center justify-center text-xs font-bold text-[#0F1A2E] -mr-2">$25K</span>
                  <span className="w-9 h-9 rounded-full bg-[#F3F4F6] flex items-center justify-center text-xs font-bold text-[#0F1A2E]">$25K</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[#0F1A2E] text-lg">3 Accounts</p>
                  <p className="text-xs text-[#6B7280]">Increase reward chances by 3x</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-[#0F1A2E]">${(basePrice * (1 + addonPct) * 0.90).toFixed(2)} Each</p>
                  <p className="text-xs text-[#1A6DFF] font-semibold">SAVE ${(basePrice * (1 + addonPct) * 0.10 * 3).toFixed(2)}</p>
                </div>
              </div>
            </label>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl border border-[#E8ECF3] p-5 mb-3">
          <p className="font-semibold text-[#0F1A2E] mb-4">Your Order</p>
          <div className="border-t border-[#E8ECF3]">
            <div className="flex justify-between py-3 text-sm border-b border-[#E8ECF3]">
              <span className="text-[#6B7280] font-medium">Product</span>
              <span className="text-[#6B7280] font-medium">Subtotal</span>
            </div>
            <div className="py-3 border-b border-[#E8ECF3]">
              <div className="flex justify-between text-sm">
                <span className="text-[#0F1A2E] font-medium">AquaFunded Challenge</span>
                <span className="text-[#0F1A2E]">${(originalPrice * selectedQuantity).toFixed(2)}</span>
              </div>
              <p className="text-xs text-[#6B7280] mt-0.5">1 Step Pro – $25,000 – MetaTrader 5</p>
            </div>
            {coupon && (
              <div className="flex justify-between py-3 border-b border-[#E8ECF3] text-sm">
                <span className="text-[#1A6DFF] font-medium">Coupon: {coupon.toUpperCase()}</span>
                <span className="text-[#1A6DFF]">-${totalSavings.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between py-3 text-sm font-bold">
              <span className="text-[#0F1A2E] text-base">Total</span>
              <span className="text-[#0F1A2E] text-xl">${finalTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-2xl border border-[#E8ECF3] p-5 mb-3">
          <p className="font-semibold text-[#0F1A2E] mb-4">Choose Payment Method</p>
          <div className="space-y-3">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "paytiko"}
                onChange={() => setPaymentMethod("paytiko")}
                className="mt-0.5 w-4 h-4 accent-[#1A6DFF]"
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-[#0F1A2E]">
                  💳 Debit/Credit Card &amp; Cryptocurrency <span className="text-[#1A6DFF]">(Recommended)</span>
                </p>
                {paymentMethod === "paytiko" && (
                  <div className="mt-2 bg-green-50 border border-green-100 rounded-lg px-3 py-2">
                    <p className="text-xs text-green-700">Pay securely using Paytiko.</p>
                  </div>
                )}
              </div>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "alternative"}
                onChange={() => setPaymentMethod("alternative")}
                className="w-4 h-4 accent-[#1A6DFF]"
              />
              <p className="text-sm font-medium text-[#0F1A2E]">Debit/Credit Card (Alternative)</p>
            </label>
          </div>
        </div>

        {/* Terms */}
        <div className="bg-white rounded-2xl border border-[#E8ECF3] p-5 mb-3">
          <p className="text-xs text-[#6B7280] mb-4 leading-relaxed">
            Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our{" "}
            <a href="#" className="text-[#1A6DFF] hover:underline">privacy policy</a>.
          </p>
          <label className="flex items-start gap-3 cursor-pointer mb-4">
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="mt-0.5 w-4 h-4 accent-[#1A6DFF]"
            />
            <span className="text-sm text-[#0F1A2E]">
              I have read and agree to the website{" "}
              <a href="#" className="text-[#1A6DFF] hover:underline">terms and conditions</a> *
            </span>
          </label>

          {/* Payment icons */}
          <div className="flex items-center gap-2 flex-wrap mb-5">
            <span className="px-2 py-1 rounded-md bg-white border border-[#E8ECF3] text-xs font-bold text-[#1A1F71]">VISA</span>
            <span className="px-2 py-1 rounded-md bg-white border border-[#E8ECF3]">
              <svg width="28" height="18" viewBox="0 0 32 20"><circle cx="11.5" cy="10" r="9.5" fill="#EB001B"/><circle cx="20.5" cy="10" r="9.5" fill="#F79E1B"/><path d="M16 2.8C17.8 4.2 19 6.5 19 9C19 11.5 17.8 13.8 16 15.2C14.2 13.8 13 11.5 13 9C13 6.5 14.2 4.2 16 2.8Z" fill="#FF5F00"/></svg>
            </span>
            <span className="px-2 py-1 rounded-md bg-white border border-[#E8ECF3]">
              <svg width="28" height="18" viewBox="0 0 32 20"><circle cx="11.5" cy="10" r="9.5" fill="#0099DF"/><circle cx="20.5" cy="10" r="9.5" fill="#CC0000"/><path d="M16 2.8C17.8 4.2 19 6.5 19 9C19 11.5 17.8 13.8 16 15.2C14.2 13.8 13 11.5 13 9C13 6.5 14.2 4.2 16 2.8Z" fill="#6C6BBD"/></svg>
            </span>
            <span className="px-2 py-1 rounded-md bg-[#016FD0] border border-[#016FD0] text-[10px] font-bold text-white">AMEX</span>
            <span className="px-2 py-1 rounded-md bg-white border border-[#E8ECF3] text-xs font-medium"> Pay</span>
            <span className="w-8 h-8 rounded-md bg-[#F7931A] flex items-center justify-center text-white font-bold text-sm">₿</span>
            <span className="w-8 h-8 rounded-md bg-[#627EEA] flex items-center justify-center">
              <svg width="12" height="20" viewBox="0 0 14 22" fill="none"><path d="M7 0L0 11.2L7 15.2L14 11.2L7 0Z" fill="white" fillOpacity="0.8"/><path d="M0 12.4L7 22L14 12.4L7 16.4L0 12.4Z" fill="white"/></svg>
            </span>
            <span className="text-xs font-semibold text-[#1A6DFF] px-2 py-1 rounded-md bg-white border border-[#E8ECF3]">Digital Currencies</span>
          </div>

          <button
            disabled={!agreedToTerms}
            className="w-full bg-[#1A6DFF] text-white font-semibold py-4 rounded-full text-base hover:bg-[#1458CC] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Place Order
          </button>
        </div>

        {/* Trust badges */}
        <div className="bg-white rounded-2xl border border-[#E8ECF3] p-5 mb-3 text-center">
          <div className="flex items-center justify-center gap-8 mb-3">
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A6DFF" strokeWidth="1.5"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>
              <span className="text-sm font-medium text-[#0F1A2E]">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A6DFF" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span className="text-sm font-medium text-[#0F1A2E]">Payout Guarantee</span>
            </div>
          </div>
          <p className="text-sm text-[#6B7280] mb-2">Rated 9.4/10 From 2.8k+ Verified Reviews</p>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A6DFF" strokeWidth="1.5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            ))}
          </div>
        </div>

        {/* Charity */}
        <div className="bg-white rounded-2xl border border-[#E8ECF3] p-5 text-sm text-[#6B7280]">
          Your purchase helps clean{" "}
          <a href="#" className="text-[#1A6DFF] hover:underline">our oceans &amp; provide clean</a>{" "}
          drinking water to those in need.
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0A0F1E] py-10 px-6">
        <div className="max-w-[620px] mx-auto">
          <p className="text-2xl font-extrabold text-white tracking-widest mb-6" style={{ letterSpacing: "0.15em" }}>
            AQUAFUNDED
          </p>
          <p className="text-xs text-[#4B5563] leading-relaxed mb-4">
            AquaFunded is not a broker-dealer, investment adviser, or any form of licensed financial institution. The simulated trading accounts provided through our platform are for educational and evaluation purposes only.
          </p>
          <p className="text-xs text-[#4B5563] leading-relaxed mb-6">
            All trading involves risk. Past performance is not indicative of future results. Participation in our challenges does not guarantee funded account status or profitability.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-[#4B5563] hover:text-[#1A6DFF] transition-colors">Refund Policy</a>
            <a href="#" className="text-xs text-[#4B5563] hover:text-[#1A6DFF] transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-[#4B5563] hover:text-[#1A6DFF] transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .checkout-input {
          width: 100%;
          border: 1px solid #E8ECF3;
          border-radius: 12px;
          padding: 12px 16px;
          font-size: 14px;
          color: #0F1A2E;
          background: white;
          outline: none;
          transition: border-color 0.15s;
          font-family: "Inter Tight", Arial, sans-serif;
        }
        .checkout-input::placeholder {
          color: #9CA3AF;
        }
        .checkout-input:focus {
          border-color: #1A6DFF;
        }
        .col-span-2 {
          grid-column: span 2;
        }
      `}</style>
    </div>
  );
}
