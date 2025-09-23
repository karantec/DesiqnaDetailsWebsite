import React, { useState } from "react";
import { Clock, Star, Zap, Trophy, CheckCircle, X } from "lucide-react";

const plans = {
  "8 Month - Intermediate to Advanced Cohort": {
    duration: "8 Months",
    level: "Intermediate → Advanced",
    icon: <Star className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
    content: `- Hashing(+ Arrays) - Concepts from Basics to Advanced
- FAANG Interview DSA + OA Hard Problem Solving
- Two Pointer + Sliding Window
- Binary Search
- Stack + Queues
- Greedy
- Priority Queue / Heap
- Linked List
- Binary Tree + BST
- Dynamic Programming
- Bit Manipulation
- DP with Bit Masking, SOS, Tiling, Optimizations
- Math 1 (Factors, Primes, LCM, GCD, Mobius, Greedy+Math)
- Math 2 (Probability, Expectations, Combinatorics, Matrix Expo)
- General Trees (DFS, BFS, LCA, HLD, Euler, Flattening, DP+Tree)
- Segment Tree + BIT
- Strings
- Recursion + Backtracking
- Matrix
- Graph
- Mo's Algorithm`,
    highlights: ["FAANG Ready", "Advanced Problem Solving", "Complete Roadmap"]
  },
  "8 Month - Beginner to Advanced Cohort": {
    duration: "8 Months",
    level: "Beginner → Advanced",
    icon: <Trophy className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
    content: `- Month 1: Basics of Programming (C++ / Java / Python)
- Core Problem Solving + Logical Skills
- Then follow Intermediate roadmap:
  - Hashing, Arrays, Two Pointers
  - Binary Search
  - Stack + Queue
  - Greedy
  - Heap
  - Linked List
  - Trees (Binary Tree, BST, General Trees, LCA, DP+Tree)
  - Dynamic Programming
  - Bit Manipulation
  - Advanced DP with Bitmasking, SOS
  - Math 1 + Math 2
  - Segment Tree + BIT
  - Strings
  - Recursion + Backtracking
  - Matrix
  - Graph
  - Mo's Algorithm`,
    highlights: ["Perfect for Beginners", "Step-by-Step Learning", "Zero to Hero Journey"]
  },
  "4 Month - Intermediate to Advanced Cohort": {
    duration: "4 Months",
    level: "Intermediate → Advanced",
    icon: <Zap className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
    content: `- Same roadmap as 8 Month Intermediate, but compressed into 4 months
- High Intensity DSA + FAANG style OA + Interview Prep
- Focus more on problem solving and advanced unseen problems`,
    highlights: ["High Intensity", "Fast Track", "Interview Focused"]
  }
};

export default function CohortPlans() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const openModal = (plan) => {
    setSelected(plan);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block p-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
            <div className="bg-white rounded-full px-4 py-2">
              <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                🚀 Transform Your Career
              </span>
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
            Choose Your Learning Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Embark on a transformative coding adventure designed to take you from where you are 
            to where you want to be. Every expert was once a beginner.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {Object.entries(plans).map(([planName, planData], idx) => (
            <div
              key={idx}
              className={`group ${planData.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-white/50`}
              onClick={() => openModal(planName)}
            >
              {/* Plan Header */}
              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${planData.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {planData.icon}
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-600">{planData.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{planData.level}</h3>
              </div>

              {/* Highlights */}
              <div className="space-y-3 mb-6">
                {planData.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full py-3 px-6 bg-gradient-to-r ${planData.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
                View Complete Roadmap
              </button>
            </div>
          ))}
        </div>

        {/* Success Stats */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1158+</div>
              <div className="text-gray-600">Students Placed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Partner Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Student Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          {/* Background Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl w-full relative z-10 overflow-y-auto max-h-[90vh] border border-white/20">
            {/* Modal Header */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r ${plans[selected]?.color} text-white mb-4`}>
                  {plans[selected]?.icon}
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{selected}</h2>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{plans[selected]?.duration}</span>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="prose max-w-none">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Complete Learning Path
                </h3>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line font-mono text-sm">
                  {plans[selected]?.content}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8">
                <button className={`flex-1 py-3 px-6 bg-gradient-to-r ${plans[selected]?.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}>
                  Enroll Now
                </button>
                <button
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-300"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}