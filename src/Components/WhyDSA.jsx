// src/components/WhyDSASection.jsx
import React from "react";

export default function WhyDSASection() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Why DSA + OA Section */}
      <section className="mb-20">
        <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 border-l-8 border-blue-600">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 flex items-center flex-wrap">
            <span className="text-3xl sm:text-4xl md:text-5xl mr-3 sm:mr-4">❓</span>
            Why is{" "}
            <span className="text-blue-600 ml-2">
              DSA (OA + Interview) Prep is Needed 
            </span>{" "} {"  "}
            
          </h2>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
            Top companies{" "}
            <span className="font-semibold text-blue-600">LIVE and BREATHE DSA</span>{" "}
            in every coding round and interview — being "average" is no longer enough.
          </p>

          <div className="space-y-4">
            <p className="text-gray-800 text-sm sm:text-base md:text-lg">
              <span className="font-semibold">💡 2025 Hiring Trend:</span> Companies are asking{" "}
              <span className="font-medium">hard, unseen, story-based DSA problems</span> in Online Assessments. 
              Interviewers follow up with{" "}
              <span className="font-medium">medium-to-hard new problems</span> to test real depth of understanding.
            </p>

            <p className="text-gray-800 text-sm sm:text-base md:text-lg">
              If you're only solving{" "}
              <span className="italic">easy–medium Standard influencer DSA sheet problems</span>, 
              you're preparing at the surface level — and that won't cut it anymore. 🚀
            </p>
          </div>

          {/* Key points */}
          <div className="mt-8">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
              To crack FAANGM + top product-based companies, you must:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base md:text-lg">
              <li>
                ✅ Build <span className="font-semibold">intuition</span> for hard, unseen problems
              </li>
              <li>
                ✅ Sharpen <span className="font-semibold">logic & analytical thinking</span>
              </li>
              <li>
                ✅ Train for <span className="font-semibold">real OA & interview difficulty</span>
              </li>
            </ul>
          </div>

          {/* Callout */}
          <div className="mt-10 p-4 sm:p-6 bg-blue-50 rounded-xl border border-blue-200">
            <p className="text-gray-900 text-base sm:text-lg leading-relaxed">
              👉 That's exactly what{" "}
              <span className="font-bold text-blue-600">our program</span> does — it takes your{" "}
              <span className="font-semibold">DSA + OA + CP prep</span> to the{" "}
              <span className="font-bold">MAX level</span> so you can stand out and land your dream offer 🚀
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
