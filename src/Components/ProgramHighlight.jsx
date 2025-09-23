// src/components/ProgramHighlights.jsx
import React from "react";

export default function ProgramHighlights() {
  return (
    <section className="mb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-8xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center justify-center">
            <span className="text-4xl mr-3">📅</span>
            Program Highlights
          </h2>

          {/* Highlights grid */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700 font-medium">
                Daily Live Classes (Mon–Fri)
              </span>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700 font-medium">Sat–Sun: 1-1 Mentoring</span>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700 font-medium">24×7 Doubt Support</span>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-orange-50 rounded-lg">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700 font-medium">
                800–850 Hr Structured Course
              </span>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700 font-medium">
                FAANGM Job Referral Support (Top 500 Companies)
              </span>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-indigo-50 rounded-lg">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700 font-medium">
                Separate Training Batches for Non-IT Professionals
              </span>
            </div>
          </div>

          {/* Callout */}
          <div className="mt-6 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
            <p className="font-semibold">
              Apart from Daily Live Training Our Structured Recorded Course includes:
            </p>
            <p className="text-sm mt-1">
              DSA + OA + CP + LLD + HLD + Full Stack Development + CS Fundamentals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
