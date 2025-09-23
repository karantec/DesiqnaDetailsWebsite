// src/components/MentorInfo.jsx
import React from "react";

export default function MentorInfo() {
  return (
    <section className="mb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-8xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="text-4xl mr-3">👨‍🏫</span>
            Mentor Info
          </h2>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Kumar K (SDE @ Amazon)
            </h3>

            <div className="space-y-2">
              {/* Specializations */}
              <p className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Specializes in hard unseen DSA questions (OA + CP + Interviews)
              </p>
              <p className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Focused on improving thinking skills of student
              </p>
              <p className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Daily personal progress tracking + Best (1-1) mentoring in the country.
              </p>

              {/* Achievements Section */}
              <p className="flex items-center text-gray-700 font-semibold mt-4">
                Achievements:
              </p>
              <p className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                2100+ rated on Leetcode (Top 1% in world)
              </p>
              <p className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                International Rank 368 in Google KickStart
              </p>
              <p className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                All India Rank 12 in Google CodeJam
              </p>
              <p className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                All India Rank 15 out of 200000 in Hackerearth
              </p>
              <p className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                All India Rank 26 in LeetCode Weekly Contest
              </p>
              <p className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                1-1 Mentored 1500+ Students in 5 years
              </p>
              <p className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <b>
                  1158 students of Kumar K sir have cracked OFF Campus 20+LPA SDE
                  Offers from Top Tech Companies
                </b>
              </p>
              <p className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                From Tier-4 college → knows the struggle to OFF Campus Placement
              </p>
              <p className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                YouTube & LinkedIn (1 Lakh+ followers)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
