import React, { useState } from "react";

const referralImages = [
  {
    id: 1,
    src: "https://res.cloudinary.com/de4ks8mkh/image/upload/v1758658445/google_c7ulyn.jpg",
    title: "Google Referral",
    description:
      "Our extensive referral network spanning across leading tech companies",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/de4ks8mkh/image/upload/v1758658017/google2_vyfdi1.jpg",
    title: "Qualcomm 28LPA Job Referral",
    description:
      "Our extensive referral network spanning across leading tech companies",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/de4ks8mkh/image/upload/v1758658089/micr_rckq2p.jpg",
    title: "Microsoft International Job Referral",
    description:
      "Our extensive referral network spanning across leading tech companies",
  },
];

const networkStats = [
  {
    icon: "🏢",
    number: "500+",
    title: "Partner Companies",
    description: "Direct connections with top tech firms worldwide",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "👥",
    number: "2000+",
    title: "Alumni Network",
    description: "Former students now working in FAANG & unicorns",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: "⚡",
    number: "3x Faster",
    title: "Hiring Process",
    description: "Skip initial screening rounds with referrals",
    color: "from-green-500 to-emerald-500",
  },
];

const topCompanies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Apple",
  "Meta",
  "Netflix",
  "Tesla",
  "Uber",
  "LinkedIn",
  "Adobe",
  "Salesforce",
  "Oracle",
  "IBM",
  "Intel",
  "NVIDIA",
  "Paypal",
  "Qualcomm",
  "and Many More",
];

export default function ReferralSupport() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (image) => setSelectedImage(image);
  const closeImageModal = () => setSelectedImage(null);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full transform -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full transform translate-x-48 translate-y-48"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-200 rounded-full transform -translate-x-32 -translate-y-32"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
            <div className="bg-white rounded-full p-2 shadow-sm">
              <span className="text-4xl">📌</span>
            </div>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Premium Job Referrals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock exclusive access to top-tier companies through our powerful
            referral network. Your next career move is just one connection away!
            🚀
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column: Images & Actions */}
          <div className="space-y-6">
            {/* Referral Images */}
            {referralImages.map((image) => (
              <div
                key={image.id}
                className="relative overflow-hidden rounded-2xl shadow-xl"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 rounded-b-2xl">
                  <h4 className="text-lg font-bold">{image.title}</h4>
                  <p className="text-sm">{image.description}</p>
                </div>
              </div>
            ))}

            {/* Action Buttons */}
          </div>

          {/* Right Column: Stats & Companies */}
          <div className="space-y-6">
            {/* Stats */}
            {networkStats.map((stat, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${stat.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl bg-white/20 rounded-full p-3">
                    {stat.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold mb-1">{stat.number}</div>
                    <div className="text-lg font-semibold mb-1">
                      {stat.title}
                    </div>
                    <div className="text-sm opacity-90">{stat.description}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Companies */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <h4 className="text-gray-800 font-bold text-lg mb-4 text-center">
                Companies in Our Network
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {topCompanies.map((company, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>

            {/* Success Message */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 shadow-lg text-white text-center">
              <div className="text-3xl mb-3 bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                🎯
              </div>
              <h4 className="font-bold text-lg mb-3">Ready to Get Referred?</h4>
              <p className="text-blue-100 mb-4 leading-relaxed">
                Join our program and get direct access to hiring managers and
                senior engineers at top companies. Skip the long application
                queues!
              </p>
              <a
                href="https://docs.google.com/forms/d/1t_Po_G3jdI6D1xfOGyPvSQeyE7fdmlW7MD-WLCr_n2Y/viewform?edit_requested=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-white text-blue-600 px-6 py-3 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                  Start Your Referral Journey
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative max-w-6xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              ✕
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="p-6 bg-gray-50">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-600">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
