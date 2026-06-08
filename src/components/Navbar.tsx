"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Rewards", href: "#" },
  { label: "Affiliate", href: "#" },
  { label: "About", href: "#" },
];

const topTabs = ["Forex", "Crypto", "Futures", "TV"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Forex");

  return (
    <>
      {/* Top tabs bar */}
      <div className="w-full bg-white border-b border-[#E2E7F0]">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <div className="flex items-stretch h-[44px]">
            {topTabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`min-w-[100px] px-6 text-sm font-medium transition-all cursor-pointer relative flex items-center justify-center ${
                  activeTab === tab
                    ? "text-brand-blue bg-[#EEF3FF]"
                    : "text-text-secondary hover:text-text-primary hover:bg-gray-50"
                } ${i < topTabs.length - 1 ? "border-r border-[#E2E7F0]" : ""}`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-blue" />
                )}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors cursor-pointer">
            <span className="text-base">🇬🇧</span>
            <span>EN</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
          </button>
        </div>
      </div>

      {/* Main nav */}
      <nav className="sticky top-0 w-full bg-white border-b border-[#E2E7F0] z-50">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[56px]">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <span className="text-base font-extrabold tracking-wider uppercase">
              <span className="text-brand-blue">AQUA</span><span className="text-text-primary">FUNDED</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors px-3">FAQ</a>
            <a href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors px-3">Contact</a>
            <a href="#get-funded" className="btn-primary !py-2.5 !px-6 !text-sm">Get Funded</a>
            <a href="#" className="btn-outline !py-2 !px-5 !text-sm">Log In</a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-text-secondary p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-[#E2E7F0] bg-white animate-fade-in-up">
            <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
                  className="text-text-secondary hover:text-text-primary py-2 text-base">{link.label}</a>
              ))}
              <hr className="border-[#E2E7F0]" />
              <a href="#" className="text-text-secondary py-2">Log In</a>
              <a href="#get-funded" onClick={() => setMenuOpen(false)} className="btn-primary text-center !py-3">Get Funded</a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
