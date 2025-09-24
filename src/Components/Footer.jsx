import React from "react";

const Footer = () => {
  const socialLinks = [
    { name: "LinkedIn", icon: "💼", href: "https://www.linkedin.com/in/kumark1/" },
    { name: "YouTube", icon: "📺", href: "https://www.youtube.com/@kumarkdsa" },
  
  ];

  const stats = [
    { number: "1500+", label: "Students Trained" },
    { number: "1158", label: "Success Stories" },
    { number: "95%", label: "Placement Rate" },
    { number: "50+", label: "Partner Companies" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full transform -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full transform translate-x-48 translate-y-48"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Top Section - Call to Action */}
          <div className="text-center mb-16">
            <div className="inline-block p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
              <div className="bg-white rounded-full p-2 shadow-sm">
                <span className="text-4xl">🚀</span>
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have successfully landed their dream jobs at top tech companies.
              Your FAANG journey starts here!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Start Your Journey Today
              </button>
              <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-gray-50">
                Book Free Consultation
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 mb-16 border border-white/50 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-white/50">
            <h3 className="text-lg font-bold mb-6 text-orange-600">Connect With Us</h3>

            {/* Contact Info */}
            <div className="mb-6 space-y-3">
              <div className="text-gray-600 flex items-center gap-2">
                <span className="text-lg">📧</span>
                <span className="text-sm">Any Query Support at +91 9798316854</span>
              </div>
              <div className="text-gray-600 flex items-center gap-2">
                <span className="text-lg">📱</span>
                <span className="text-sm">+91 9798316854</span>
              </div>
              <div className="text-gray-600 flex items-center gap-2">
                <span className="text-lg">🌐</span>
                <a
                  href="https://training.desiqna.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors text-sm"
                >
                  training.desiqna.in
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-gray-500 mb-3">Follow us on social media:</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-200"
                    title={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 mt-16 border border-white/50 shadow-lg">
            <div className="text-center">
              <div className="inline-block p-3 bg-white rounded-full shadow-sm mb-4">
                <span className="text-3xl">💬</span>
              </div>
              <blockquote className="text-xl font-medium text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed">
                "This program completely changed my life. From a confused college student to a confident software engineer at Google. 
                The mentorship and support system here is unmatched!"
              </blockquote>
              <div className="text-gray-500 text-sm">Software Engineer at Google • ₹60 LPA Package</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-500 text-center md:text-left">
              <p>&copy; 2024 Desiqna Training. All rights reserved.</p>
              <p className="text-sm mt-1">Empowering careers, one student at a time. 💪</p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#privacy" className="text-gray-500 hover:text-gray-700 transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-gray-500 hover:text-gray-700 transition-colors">Terms of Service</a>
              <a href="#refund" className="text-gray-500 hover:text-gray-700 transition-colors">Refund Policy</a>
              <a href="#support" className="text-gray-500 hover:text-gray-700 transition-colors">Support</a>
            </div>
          </div>

          {/* Final Message */}
          <div className="text-center mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-500">
              Made with <span className="text-red-500">❤️</span> for aspiring developers worldwide
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Your success is our mission. Let's code the future together! 🌟
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
