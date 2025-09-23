import React, { useState } from "react";

const programLinks = [
  {
    id: 1,
    title: "Complete Program Guide",
    description: "Detailed curriculum, learning outcomes, and roadmap",
    url: "https://docs.google.com/document/d/1Qa2oA2wN9VdoNHz94lnedHokAl0jC-wVs4EOINVuswc/edit?usp=drivesdk",
    icon: "📋",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50"
  },
  {
    id: 2,
    title: "Official Website",
    description: "Explore our platform and community",
    url: "https://training.desiqna.in",
    icon: "🌐",
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-gradient-to-br from-purple-50 to-violet-50"
  },
  {
    id: 3,
    title: "Complete Syllabus",
    description: "Topic-wise breakdown and learning objectives",
    url: "https://training.desiqna.in/Curriculum",
    icon: "📖",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50"
  }
];

const programs = [
  {
    id: 1,
    name: "8-Month Complete Journey",
    duration: "8 Months",
    originalPrice: "₹8,500",
    currentPrice: "₹3,280",
    discount: "61% OFF",
    isPopular: true,
    color: "from-green-500 to-emerald-500",
    features: [
      "Beginner to Advanced Track",
      "FAANG Interview Preparation",
      "800+ Hours Recorded Content",
      "Live Doubt Sessions",
      "Mock Interviews",
      "Placement Assistance"
    ],
    highlight: "Most Popular Choice"
  },
  {
    id: 2,
    name: "4-Month Fast Track",
    duration: "4 Months",
    currentPrice: "₹3,000",
    color: "from-blue-500 to-cyan-500",
    features: [
      "Intermediate to Advanced",
      "High-Intensity Training",
      "Contest-Level Problems",
      "Weekly Assessments",
      "Priority Support",
      "Interview Bootcamp"
    ],
    highlight: "Quick Results"
  }
];

export default function ProgramPricing() {
  const [selectedProgram, setSelectedProgram] = useState(1);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Program Details & Investment
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about transforming your coding career
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Program Details */}
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50">
              <div className="text-center mb-8">
                <div className="inline-block p-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-4">
                  <div className="bg-white rounded-full p-2">
                    <span className="text-3xl">📚</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Explore Our Programs</h3>
                <p className="text-gray-600">Get detailed information about our curriculum and approach</p>
              </div>

              <div className="space-y-4">
                {programLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group block ${link.bgColor} rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/50`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-r ${link.color} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                        {link.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                          {link.title}
                        </h4>
                        <p className="text-sm text-gray-600">{link.description}</p>
                      </div>
                      <div className="text-2xl text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300">
                        →
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50">
              <div className="text-center mb-8">
                <div className="inline-block p-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-4">
                  <div className="bg-white rounded-full p-2">
                    <span className="text-3xl">💰</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Investment Plans</h3>
                <p className="text-gray-600">Choose the perfect program for your learning journey</p>
              </div>

              <div className="space-y-4">
                {programs.map((program) => (
                  <div
                    key={program.id}
                    className={`relative bg-gradient-to-r ${program.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                      program.isPopular ? 'ring-4 ring-yellow-300' : ''
                    }`}
                  >
                    {/* Popular Badge */}
                    {program.isPopular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold">
                          {program.highlight}
                        </div>
                      </div>
                    )}

                    {/* Program Header */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold">{program.name}</h4>
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                          {program.duration}
                        </span>
                      </div>

                      {/* Pricing */}
                      <div className="flex items-center gap-3">
                        {program.originalPrice && (
                          <>
                            <span className="text-lg line-through opacity-75">
                              {program.originalPrice}
                            </span>
                            <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                              {program.discount}
                            </span>
                          </>
                        )}
                        <span className="text-3xl font-bold">{program.currentPrice}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {program.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button
                      className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm py-3 px-6 rounded-xl font-semibold transition-all duration-300"
                      onClick={() => setSelectedProgram(program.id)}
                    >
                      Choose This Program
                    </button>
                  </div>
                ))}
              </div>

              {/* Special Offer Box */}
              <div className="mt-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-dashed border-yellow-300">
                <div className="text-center">
                  <div className="text-2xl mb-2">🎁</div>
                  <h4 className="font-bold text-gray-800 mb-1">Bonus Included</h4>
                  <p className="text-gray-700">
                    <span className="text-xl font-bold text-purple-600">800-Hour</span> 
                    <span className="ml-1">Recorded Course Library</span>
                  </p>
                  <div className="text-sm text-gray-600 mt-2">
                    Access to premium recorded content worth ₹15,000 - Absolutely FREE!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Why This Investment Changes Everything</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <div className="text-2xl mb-2">⚡</div>
                <div className="font-semibold">10x ROI Guarantee</div>
                <div className="text-indigo-100 text-sm">Average salary increase of ₹10+ LPA</div>
              </div>
              <div>
                <div className="text-2xl mb-2">🎯</div>
                <div className="font-semibold">Lifetime Access</div>
                <div className="text-indigo-100 text-sm">Course updates and community forever</div>
              </div>
              <div>
                <div className="text-2xl mb-2">💪</div>
                <div className="font-semibold">Success Guarantee</div>
                <div className="text-indigo-100 text-sm">We don't stop until you succeed</div>
              </div>
            </div>
            <div className="flex gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Start Your Journey
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}