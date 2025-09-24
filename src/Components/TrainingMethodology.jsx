// src/components/TrainingMethodology.jsx
import React from "react";

export default function TrainingMethod() {
  return (
    <div className="container mx-auto px-6 py-12">
      <section className="bg-gradient-to-r from-blue-50 to-white rounded-2xl shadow-xl p-10 border-l-8 border-blue-600">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          🚀 Training Methodology
        </h2>

        {/* Success Story */}
        <div className="bg-white border rounded-xl shadow-md p-6 mb-8">
          <p className="text-lg font-semibold text-gray-800 mb-3">
            🏆 Kumar K student achieves{" "}
            <span className="text-blue-600">World Rank 50 / 25,000</span> in
            LeetCode Weekly  DSA Contest after{" "} completing our{" "}
            <span className="text-green-600">851hr hard level DSA + OA + CP  Course</span>.
          </p>
          <a
            href="https://www.linkedin.com/posts/vinit-tekwani_leetcode-leetcodecontest-dsa-activity-7164664196817674240-FTHM/?utm_source=share&utm_medium=member_desktop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 bg-blue-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-blue-700 transition-all duration-300"
          >
            🔗 See LinkedIn Post
          </a>
        </div>

        {/* Unique Methodology */}
        <div className="space-y-5">
          <p className="text-gray-700 text-lg leading-relaxed">
            We train in a{" "}
            <span className="font-semibold text-blue-600">very different way</span>{" "}
            – focusing not just on easy popular interview questions, but also on{" "}
            <span className="font-semibold text-red-600">
              hard unseen OA problems of top tech companies
            </span>{" "}
            and{" "}
            <span className="font-semibold text-green-600">
              contest-level problems
            </span>
            .
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Our students develop{" "}
            <span className="font-semibold">deep problem-solving skills</span> and
            the ability to tackle{" "}
            <span className="italic text-blue-700">new unseen questions</span>{" "}
            confidently.
          </p>
        </div>

        {/* Highlights in Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
            <h3 className="text-xl font-semibold mb-2">👨‍🏫 Custom Batches</h3>
            <p className="text-gray-600">
              Separate training for <b>Beginners</b>, <b>Intermediate</b>, and{" "}
              <b>Advanced</b> levels.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold mb-2">🤝 Personal Attention</h3>
            <p className="text-gray-600">
              Every student is guided personally with{" "}
              <b>daily progress tracking</b> so no one goes off-track.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
            <h3 className="text-xl font-semibold mb-2">💬 24x7 Doubt Support</h3>
            <p className="text-gray-600">
              Get instant help for even the{" "}
              <b>hardest DSA problems inside & outside</b> the course.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
