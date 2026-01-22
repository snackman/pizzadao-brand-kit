"use client";

import Image from "next/image";
import { useState } from "react";

const BASE_PATH = "/pizzadao-brand-kit";

const NAV_ITEMS = [
  { id: "logos", label: "Logos" },
  { id: "colors", label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "molto-benny", label: "Molto Benny" },
  { id: "gifs", label: "GIFs" },
  { id: "influences", label: "Influences" },
  { id: "partnership", label: "Partnership" },
  { id: "party-flyers", label: "Party Flyers" },
];

const COLORS = [
  { name: "Pizza Yellow", hex: "#FFE135", textDark: true },
  { name: "Pizza Red", hex: "#E85D5D", textDark: false },
  { name: "Earth Blue", hex: "#7DD3E8", textDark: true },
  { name: "Black", hex: "#000000", textDark: false },
  { name: "White", hex: "#FFFFFF", textDark: true, border: true },
];

export default function BrandKit() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-black text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={`${BASE_PATH}/pizzadao-logos/pizzadao-logo-white.svg`}
            alt="PizzaDAO"
            width={120}
            height={32}
          />
          <span className="text-sm text-[#FFE135] font-medium">Brand Kit</span>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          )}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black text-white pt-16">
          <nav className="p-6">
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-lg font-medium hover:text-[#FFE135] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-8">Pizza the Planet</p>
          </nav>
        </div>
      )}

      {/* Desktop Sidebar */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-screen w-64 bg-black text-white flex-col p-6">
        <div className="mb-12">
          <Image
            src={`${BASE_PATH}/pizzadao-logos/pizzadao-logo-white.svg`}
            alt="PizzaDAO"
            width={150}
            height={40}
            className="mb-2"
          />
          <p className="text-sm text-[#FFE135] font-medium">Brand Kit</p>
        </div>

        <ul className="space-y-2 flex-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block py-2 px-3 rounded hover:bg-white/10 transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs text-gray-500">Pizza the Planet</p>
      </nav>

      {/* Main Content */}
      <main className="lg:ml-64 pt-14 lg:pt-0">
        {/* Logos */}
        <section id="logos" className="py-12 lg:py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-black mb-8 lg:mb-12">Logos</h2>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12">
              {/* Dark logo on light bg */}
              <div className="border border-gray-200 rounded-lg p-6 lg:p-8">
                <div className="bg-gray-100 rounded-lg p-8 lg:p-12 flex items-center justify-center mb-6">
                  <Image
                    src={`${BASE_PATH}/pizzadao-logos/pizzadao-logo-black.svg`}
                    alt="PizzaDAO Logo Black"
                    width={250}
                    height={70}
                    className="max-w-full h-auto"
                  />
                </div>
                <p className="font-medium mb-4">Dark Logo (for light backgrounds)</p>
                <div className="flex gap-2">
                  <a href={`${BASE_PATH}/pizzadao-logos/pizzadao-logo-black.svg`} download className="px-4 py-2 bg-black text-white rounded text-sm font-medium hover:bg-gray-800">SVG</a>
                  <a href={`${BASE_PATH}/pizzadao-logos/pizzadao-logo-black.png`} download className="px-4 py-2 bg-black text-white rounded text-sm font-medium hover:bg-gray-800">PNG</a>
                </div>
              </div>

              {/* Light logo on dark bg */}
              <div className="border border-gray-200 rounded-lg p-6 lg:p-8">
                <div className="bg-black rounded-lg p-8 lg:p-12 flex items-center justify-center mb-6">
                  <Image
                    src={`${BASE_PATH}/pizzadao-logos/pizzadao-logo-white.svg`}
                    alt="PizzaDAO Logo White"
                    width={250}
                    height={70}
                    className="max-w-full h-auto"
                  />
                </div>
                <p className="font-medium mb-4">Light Logo (for dark backgrounds)</p>
                <div className="flex gap-2">
                  <a href={`${BASE_PATH}/pizzadao-logos/pizzadao-logo-white.svg`} download className="px-4 py-2 bg-black text-white rounded text-sm font-medium hover:bg-gray-800">SVG</a>
                  <a href={`${BASE_PATH}/pizzadao-logos/pizzadao-logo-white.png`} download className="px-4 py-2 bg-black text-white rounded text-sm font-medium hover:bg-gray-800">PNG</a>
                </div>
              </div>
            </div>

            {/* Icon */}
            <h3 className="text-xl font-bold mb-6">Icon / Favicon</h3>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <div className="border border-gray-200 rounded-lg p-6 lg:p-8">
                <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center mb-6">
                  <Image
                    src={`${BASE_PATH}/pizzadao-logos/pizzadao-icon-black.svg`}
                    alt="PizzaDAO Icon"
                    width={80}
                    height={80}
                  />
                </div>
                <p className="font-medium mb-4">Icon</p>
                <div className="flex gap-2">
                  <a href={`${BASE_PATH}/pizzadao-logos/pizzadao-icon-black.svg`} download className="px-4 py-2 bg-black text-white rounded text-sm font-medium hover:bg-gray-800">SVG</a>
                  <a href={`${BASE_PATH}/pizzadao-logos/pizzadao-icon-black.png`} download className="px-4 py-2 bg-black text-white rounded text-sm font-medium hover:bg-gray-800">PNG</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Colors */}
        <section id="colors" className="py-12 lg:py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-black mb-4">Color Palette</h2>
            <p className="text-gray-600 mb-8 lg:mb-12">Tap to copy hex code.</p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {COLORS.map((color) => (
                <div key={color.hex} className="group">
                  <div
                    className={`aspect-square rounded-lg mb-3 flex items-end p-4 cursor-pointer transition-transform hover:scale-105 ${color.border ? 'border border-gray-200' : ''}`}
                    style={{ backgroundColor: color.hex }}
                    onClick={() => navigator.clipboard.writeText(color.hex)}
                  >
                    <span className={`text-sm font-mono font-bold ${color.textDark ? 'text-black' : 'text-white'}`}>
                      {color.hex}
                    </span>
                  </div>
                  <p className="font-medium text-sm">{color.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Typography */}
        <section id="typography" className="py-12 lg:py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-black mb-4">Typography</h2>
            <p className="text-gray-600 mb-8 lg:mb-12">Our brand fonts.</p>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h3 className="text-xl font-bold mb-4">Primary: Naiche</h3>
                <p className="text-gray-600 mb-6">Used for headlines and display text. A bold, distinctive typeface.</p>
                <div className="bg-gray-100 rounded-lg p-6 lg:p-8 mb-4 h-[120px] lg:h-[140px] flex items-center">
                  <p className="text-3xl lg:text-5xl font-black">PIZZA THE PLANET</p>
                </div>
                <a
                  href="https://drive.google.com/file/d/1TuA4PzRCU-DElFgzPZWMW6gZsRViEzXZ/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-black text-white rounded text-sm font-medium hover:bg-gray-800"
                >
                  Download Naiche
                </a>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Secondary: Rubik Extra Black</h3>
                <p className="text-gray-600 mb-6">Used for body text and UI elements. Available on Google Fonts.</p>
                <div className="bg-gray-100 rounded-lg p-6 lg:p-8 mb-4 h-[120px] lg:h-[140px] flex items-center">
                  <p className="text-2xl lg:text-4xl font-black" style={{ fontFamily: 'var(--font-rubik)' }}>The world&apos;s largest pizza co-op</p>
                </div>
                <a
                  href="https://fonts.google.com/specimen/Rubik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-black text-white rounded text-sm font-medium hover:bg-gray-800"
                >
                  Get on Google Fonts
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Molto Benny */}
        <section id="molto-benny" className="py-12 lg:py-20 bg-[#7DD3E8]">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-black mb-4">Molto Benny</h2>
            <p className="text-gray-800 mb-8 lg:mb-12">Our three-eyed pizza slice mascot.</p>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-8">
              <a href={`${BASE_PATH}/molto-benny/molto-benny-color-pizzadao.png`} download className="bg-white rounded-lg p-6 lg:p-8 text-center hover:shadow-lg transition-shadow cursor-pointer block" data-testid="molto-benny-pizzadao">
                <div className="h-[200px] lg:h-[250px] flex items-center justify-center mb-4">
                  <Image
                    src={`${BASE_PATH}/molto-benny/molto-benny-color-pizzadao.png`}
                    alt="Molto Benny PizzaDAO"
                    width={280}
                    height={280}
                    className="object-contain w-[220px] h-[220px] lg:w-[280px] lg:h-[280px]"
                    data-testid="molto-benny-pizzadao-img"
                  />
                </div>
                <p className="font-medium">Molto Benny (PizzaDAO)</p>
                <p className="text-sm text-gray-500">PNG</p>
              </a>

              <a href={`${BASE_PATH}/molto-benny/molto-benny-color-btc.svg`} download className="bg-white rounded-lg p-6 lg:p-8 text-center hover:shadow-lg transition-shadow cursor-pointer block" data-testid="molto-benny-btc">
                <div className="h-[200px] lg:h-[250px] flex items-center justify-center mb-4">
                  <Image
                    src={`${BASE_PATH}/molto-benny/molto-benny-color-btc.svg`}
                    alt="Molto Benny BTC"
                    width={200}
                    height={200}
                    className="object-contain w-[160px] h-[160px] lg:w-[200px] lg:h-[200px]"
                    data-testid="molto-benny-btc-img"
                  />
                </div>
                <p className="font-medium">Molto Benny (BTC)</p>
                <p className="text-sm text-gray-500">SVG</p>
              </a>
            </div>

            {/* Source Files */}
            <h3 className="text-xl font-bold mb-4 text-gray-800">Source Files</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <a href={`${BASE_PATH}/molto-benny/molto-benny-eth.ai`} download className="bg-black rounded-lg p-4 lg:p-6 flex items-center justify-between hover:bg-gray-900 transition-colors cursor-pointer">
                <div>
                  <p className="text-white font-medium">Molto Benny (ETH)</p>
                  <p className="text-gray-400 text-sm">Adobe Illustrator</p>
                </div>
                <span className="text-[#FFE135] font-medium text-sm">.ai</span>
              </a>

              <a href={`${BASE_PATH}/stickers/molto-benny-pizzadao.ai`} download className="bg-black rounded-lg p-4 lg:p-6 flex items-center justify-between hover:bg-gray-900 transition-colors cursor-pointer">
                <div>
                  <p className="text-white font-medium">Molto Benny Sticker</p>
                  <p className="text-gray-400 text-sm">Adobe Illustrator</p>
                </div>
                <span className="text-[#FFE135] font-medium text-sm">.ai</span>
              </a>
            </div>
          </div>
        </section>

        {/* GIFs */}
        <section id="gifs" className="py-12 lg:py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-black mb-4">GIFs</h2>
            <p className="text-gray-600 mb-8 lg:mb-12">Animated brand assets for social media and communications.</p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-start">
              {[1, 2, 3, 4, 5].map((num) => (
                <a key={num} href={`${BASE_PATH}/gifs/gif${num}.gif`} download className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src={`${BASE_PATH}/gifs/gif${num}.gif`}
                    alt={`PizzaDAO GIF ${num}`}
                    width={200}
                    height={300}
                    className="w-full h-auto object-contain"
                    unoptimized
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Influences */}
        <section id="influences" className="py-12 lg:py-20 bg-black text-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-black mb-4">Influences</h2>
            <p className="text-gray-400 mb-8 lg:mb-12">Our personality is inspired by three key influences:</p>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              <div className="border border-gray-700 rounded-lg p-6 lg:p-8">
                <p className="text-4xl lg:text-5xl mb-4">🐢</p>
                <h3 className="text-xl font-bold text-[#FFE135] mb-2">Ninja Turtles</h3>
                <p className="text-gray-400">Fun, youthful, pizza-obsessed. We don&apos;t take ourselves too seriously.</p>
              </div>

              <div className="border border-gray-700 rounded-lg p-6 lg:p-8">
                <p className="text-4xl lg:text-5xl mb-4">🏴‍☠️</p>
                <h3 className="text-xl font-bold text-[#FFE135] mb-2">Pirates</h3>
                <p className="text-gray-400">Adventurous, independent, community-driven. We sail together.</p>
              </div>

              <div className="border border-gray-700 rounded-lg p-6 lg:p-8">
                <p className="text-4xl lg:text-5xl mb-4">🎬</p>
                <h3 className="text-xl font-bold text-[#FFE135] mb-2">Mafia Movies</h3>
                <p className="text-gray-400">Family, loyalty, respect. An offer you can&apos;t refuse.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership */}
        <section id="partnership" className="py-12 lg:py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-black mb-4">Partnership Guidelines</h2>
            <p className="text-gray-600 mb-8 lg:mb-12">Rules for using our logo in co-branded materials.</p>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <div className="border-2 border-[#FFE135] rounded-lg p-6 lg:p-8">
                <h3 className="text-xl font-bold mb-4 text-green-600">Do</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Include our logo if there&apos;s pizza</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Use dark logo on light backgrounds</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Use light logo on dark backgrounds</span>
                  </li>
                </ul>
              </div>

              <div className="border-2 border-gray-200 rounded-lg p-6 lg:p-8">
                <h3 className="text-xl font-bold mb-4 text-red-600">Don&apos;t</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>Use our logo when there&apos;s no pizza</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>Use dark logo on dark backgrounds</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>Use light logo on light backgrounds</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Party Flyers */}
        <section id="party-flyers" className="py-12 lg:py-20 bg-[#E85D5D] text-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-black mb-4">Party Flyer Guidelines</h2>
            <p className="text-white/80 mb-8 lg:mb-12">How to create event artwork for PizzaDAO pizza parties.</p>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <div>
                <h3 className="text-xl font-bold mb-6">Process</h3>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-white text-[#E85D5D] rounded-full flex items-center justify-center font-bold text-sm">1</span>
                    <span>Hire a local illustrator to create custom artwork</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-white text-[#E85D5D] rounded-full flex items-center justify-center font-bold text-sm">2</span>
                    <span>Request an interpretation of Molto Benny in a party-appropriate setting</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-white text-[#E85D5D] rounded-full flex items-center justify-center font-bold text-sm">3</span>
                    <span>Submit drafts to <a href="https://t.me/+uF9BfD-pQz9kNTRh" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/80">PizzaDAO&apos;s Graphic Review Chat</a> for feedback</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-white text-[#E85D5D] rounded-full flex items-center justify-center font-bold text-sm">4</span>
                    <span>Deliver final editable files</span>
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">Specifications</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="font-bold">Format</p>
                    <p className="text-white/80">Square primary image + poster and banner versions</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="font-bold">Budget</p>
                    <p className="text-white/80">Up to $150 for art + up to $100 for design</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="font-bold">File Formats</p>
                    <p className="text-white/80">Figma preferred, or .ai / .psd files</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
