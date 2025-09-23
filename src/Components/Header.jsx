// src/components/HeroHeader.jsx
import React from "react";

export default function HeroHeader() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-snug sm:leading-tight">
            🚀 We Train Students, Freshers & Experienced Professionals
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent px-2">
            for Top Product Based FAANGM Companies that pay very high 💰🔥🥳
          </p>
        </div>
      </div>
    </header>
  );
}
