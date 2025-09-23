import React, { useState } from "react";

const methodologies = [
  
  
  {
    id: 3,
    title: "Personalized Growth",
    description: " Personlized 1-1 mentoring and Daily monitoring   + feedback",
    fullDescription: "Your success is our mission. Daily progress tracking and personalized feedback ensure you're always moving forward on your coding journey.",
    icon: "📈",
    color: "from-green-500 to-teal-500",
    bgColor: "bg-gradient-to-br from-green-50 to-teal-50",
    benefits: ["Individual attention", "Progress tracking", "Continuous improvement"]
  },
  
  {
    id: 5,
    title: "Always-On Support",
    description: "24×7 Doubt support ",
    fullDescription: "Learning doesn't stop at 5 PM. Our round-the-clock support system ensures help is always available when inspiration strikes or challenges arise.",
    icon: "🚀",
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
    benefits: ["Instant help", "Community support", "Mentor availability"]
  }
];

export default function TrainingMethodology() {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-6">
            <div className="bg-white rounded-full p-3">
              <span className="text-3xl">🛠️</span>
            </div>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Our Success Formula
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the proven methodology that has transformed thousands of students 
            into confident, job-ready developers. Every technique is designed with your success in mind.
          </p>
        </div>

        {/* Methodology Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {methodologies.map((method) => (
            <div
              key={method.id}
              className={`group ${method.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-white/50 ${
                expandedCard === method.id ? 'ring-4 ring-purple-300 scale-105' : ''
              }`}
              onClick={() => handleCardClick(method.id)}
            >
              {/* Card Header */}
              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${method.color} text-white text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>
                <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r ${method.color} text-white text-sm font-bold mb-3`}>
                  {method.id}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{method.title}</h3>
              </div>

              {/* Basic Description */}
              <p className="text-gray-700 font-medium text-center mb-4">
                {method.description}
              </p>

              {/* Expandable Content */}
              <div className={`transition-all duration-500 overflow-hidden ${
                expandedCard === method.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="pt-4 border-t border-white/50">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {method.fullDescription}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Key Benefits:</h4>
                    {method.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interaction Hint */}
              <div className="text-center mt-4">
                <span className="text-xs text-gray-500">
                  {expandedCard === method.id ? 'Click to collapse' : 'Click to learn more'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Why Our Methodology Works
          </h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-2xl font-bold text-blue-600 mb-1">3x Faster</div>
              <div className="text-gray-600 text-sm">Learning Speed</div>
            </div>
            <div>
              <div className="text-3xl mb-2">🎯</div>
              <div className="text-2xl font-bold text-green-600 mb-1">95%</div>
              <div className="text-gray-600 text-sm">Problem Accuracy</div>
            </div>
            <div>
              <div className="text-3xl mb-2">💪</div>
              <div className="text-2xl font-bold text-purple-600 mb-1">100%</div>
              <div className="text-gray-600 text-sm">Confidence Boost</div>
            </div>
            <div>
              <div className="text-3xl mb-2">🏆</div>
              <div className="text-2xl font-bold text-orange-600 mb-1">500+</div>
              <div className="text-gray-600 text-sm">Success Stories</div>
            </div>
          </div>
        </div>

        {/* Student Testimonial */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-white text-center">
          <div className="text-4xl mb-4">💬</div>
          <blockquote className="text-xl font-medium mb-4 max-w-3xl mx-auto">
            "The methodology here isn't just about learning to code – it's about learning to think like a problem solver. 
            Every challenge made me stronger, and the support system never let me give up."
          </blockquote>
          <div className="font-semibold">— Vinita, Now at Microsoft</div>
          <div className="text-purple-200 text-sm">From complete beginner to ₹50 LPA in 8 months</div>
        </div>

        {/* Call to Action */}
       
      </div>
    </section>
  );
}