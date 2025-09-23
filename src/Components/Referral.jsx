import React, { useState } from "react";

const referralImages = [
  {
    id: 1,
    src: "https://asset.cloudinary.com/de4ks8mkh/c0b6f56222bbe9c2a1bb1a0ebf532bc9",
    title: "Top 500 Companies Network",
    description: "Our extensive referral network spanning across leading tech companies"
  },
  // Add more images here when available
];

const networkStats = [
  {
    icon: "🏢",
    number: "500+",
    title: "Partner Companies",
    description: "Direct connections with top tech firms worldwide",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: "👥",
    number: "2000+",
    title: "Alumni Network",
    description: "Former students now working in FAANG & unicorns",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: "⚡",
    number: "3x Faster",
    title: "Hiring Process",
    description: "Skip initial screening rounds with referrals",
    color: "from-green-500 to-emerald-500"
  }
];

const topCompanies = [
  "Google", "Microsoft", "Amazon", "Apple", "Meta", "Netflix", "Tesla", "Uber",
  "LinkedIn", "Adobe", "Salesforce", "Oracle", "IBM", "Intel", "NVIDIA"
];

export default function ReferralSupport() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

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
            Your Gateway to Dream Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock exclusive access to top-tier companies through our powerful referral network.
            Your next career move is just one connection away! 🚀
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image Showcase */}
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Our Referral Network Map
              </h3>
              
              {/* Main Image Display */}
              <div className="relative">
                {referralImages.map((image, index) => (
                  <div key={image.id} className="mb-6 last:mb-0">
                    <div 
                      className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
                      onClick={() => openImageModal(image)}
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                        onLoad={() => setImageLoading(false)}
                        onLoadStart={() => setImageLoading(true)}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="absolute bottom-4 left-4 right-4">
                          <h4 className="text-white font-bold text-lg mb-1">{image.title}</h4>
                          <p className="text-white/90 text-sm">{image.description}</p>
                        </div>
                      </div>

                      {/* Zoom Icon */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a
                  href="https://collection.cloudinary.com/de4ks8mkh/a68b3f36cf98742dd7648d55f293176d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 rounded-2xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  <span>Access Full Gallery</span>
                </a>

                <a
                  href="https://asset.cloudinary.com/de4ks8mkh/c0b6f56222bbe9c2a1bb1a0ebf532bc9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-2xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>View Network Map</span>
                </a>
              </div>
            </div>
          </div>

          {/* Network Stats & Info */}
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="space-y-4">
              {networkStats.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r ${stat.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1`}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl bg-white/20 rounded-full p-3">{stat.icon}</div>
                    <div className="flex-1">
                      <div className="text-2xl font-bold mb-1">{stat.number}</div>
                      <div className="text-lg font-semibold mb-1">{stat.title}</div>
                      <div className="text-sm opacity-90">{stat.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Company Logos Cloud */}
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
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 shadow-lg text-white">
              <div className="text-center">
                <div className="text-3xl mb-3 bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto">🎯</div>
                <h4 className="font-bold text-lg mb-3">
                  Ready to Get Referred?
                </h4>
                <p className="text-blue-100 mb-4 leading-relaxed">
                  Join our program and get direct access to hiring managers and senior engineers 
                  at top companies. Skip the long application queues!
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                  Start Your Referral Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative max-w-6xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain"
            />

            {/* Image Info */}
            <div className="p-6 bg-gray-50">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{selectedImage.title}</h3>
              <p className="text-gray-600">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}