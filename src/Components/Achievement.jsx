import React, { useState } from "react";

const stories = [
  {
    company: "Nutanix",
    package: "₹2 Cr Package",
    color: "from-yellow-400 to-orange-500",
    video: "https://www.youtube.com/embed/Lb6p-xqWBAY",
    studentName: "Yash Singhania",
    role: " Software Engineer",
    experience: "Kumar K student Cracks 2 Crore package from Nutanix USA in May despite being a DSA coding beginner 8 month back 😎🥳.",   
    experience2:"He secured the highest package till now because he did our 850 hour DSA + OA + CP + LLD + HLD course and 1-1 Mentorship.",
    tags: ["Cloud Computing", "System Design", "DSA"],
  },
   {
    company: "Microsoft",
    package: "₹50 LPA",
    color: "from-green-500 to-teal-500",
    video: "https://www.youtube.com/embed/8w0dh34hJNM",
    studentName: "Vinita",
    role: "Software Engineer ",
    experience: "Kumar K Sir student biggest  Off Campus selection of 50 Lakh salary SDE Job offer from Microsoft!",
    tags: ["Cloud", "Azure", "Enterprise" ,"DSA","System Design"],
  },
  
  {
    company: "Amazon",
    package: "₹51 LPA",
    color: "from-orange-500 to-red-500",
    video: "https://www.youtube.com/embed/IM8eEgGE5DQ",
    studentName: "Sukriti Sinha",
    role: "SDE-1",
    experience: "Special Podcast video of Kumar K Sir with his student who cracked OffCampus 50 LPA SDE offer from Amazon 🥳🥳",
    tags: ["E-commerce", "Distributed Systems", "AWS" ,"DSA","System Design"],
  },
  {
    company: "Google",
    package: "₹60 LPA",
    color: "from-red-500 to-pink-500",
    video: "https://www.youtube.com/embed/j1SOLU_UVkI",
    studentName: "Achyut Gupta",
    role: "Software Engineer",
    experience: " Kumar K Sir with his Student who cracked 60LPA SDE offer from Google 🥳🥳!",
    tags: ["Search", "ML", "Algorithms","DSA" ,"System Design"],
  },
  {
    company: "PhonePe",
    package: "₹35 LPA",
    color: "from-purple-500 to-pink-500",
    video: "https://www.youtube.com/embed/TPflr5lu4F4",
    studentName: "MD ISTAKHAR ANSARIMD",
    role: "Full Stack Developer",
     experience: "Kumar K Student - working professional with 2 years experience in Service Based company- cracked 35LPA OffCampus SDE Offer from PhonePe.",   
    experience2:"",
    tags: ["Backend", "Payments", "Microservices"],
  },
  {
    company: "BCG(X)",
    package: "₹38 LPA",
    color: "from-blue-500 to-cyan-500",
    video: "https://www.youtube.com/embed/U9GGuv2xbV4",
    studentName: "Anind Jha.",
    role: "𝐒𝐃𝐄-2",
    experience: "Kumar K student who was a waiter 4 years back now join BCG(X) - Australia based MNC - 38 LPA as SDE2 because  of our high level DSA + OA + CP + System design Training and Referral Support",
    tags: ["Consulting", "Problem Solving", "Analytics"],
  },
  {
    company: "LinkedIn",
    package: "₹40 LPA",
    color: "from-indigo-500 to-blue-600",
    video: "https://www.youtube.com/embed/iCIa-hY3Ov4",
    studentName: "Pranav Kulkarni",
    role: "Software Engineer",
    experience: "Kumar K student from tier-4 college cracks Offcampus 40 Lakh Software Engineer Offer from LinkedIn! 🤩🥳",
    tags: ["Social Platform", "Scalability", "Full Stack"],
  },
 

  {
    company: "Amazon",
    package: "₹51 LPA",
    color: "from-indigo-500 to-blue-600",
    video: "https://www.youtube.com/embed/6pkkepj5XlQ",
    studentName: "Dev madan",
    role: "Software Engineer",
    experience: "Kumar K Mentoring Student cracked Off-Campus Full-Time SDE Offer from Amazon after 8 months of advanced DSA(OA + CP+System Design) training.",
    tags: ["Social Platform", "Scalability", "Full Stack"],
  },
];

export default function SuccessStories() {
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-gradient-to-r from-green-100 to-blue-100 rounded-full mb-6">
            <div className="bg-white rounded-full p-3">
              <span className="text-3xl">🏆</span>
            </div>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Dreams Realized, Lives Transformed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Meet our incredible students who turned their coding dreams into
            reality. Your success story will  be next!
          </p>

          {/* Stats Banner */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">
                  ₹2Cr+
                </div>
                <div className="text-sm text-gray-600">Highest Package</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  1100+
                </div>
                <div className="text-sm text-gray-600">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">
                  95%
                </div>
                <div className="text-sm text-gray-600">Placement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-1">
                  FAANG
                </div>
                <div className="text-sm text-gray-600">Companies</div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {stories.map((story, index) => {
            const videoId = story.video.split("/embed/")[1];
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${story.color} p-6 rounded-2xl text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer overflow-hidden`}
                onClick={() => setSelectedStory(story)}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-12 translate-y-12"></div>
                </div>

                <div className="relative z-10">
                  {/* Company Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{story.company}</h3>
                    <span className="text-2xl">🎉</span>
                  </div>

                  {/* Package */}
                  <div className="mb-4">
                    <div className="text-3xl font-bold mb-1">
                      {story.package}
                    </div>
                    <div className="text-sm opacity-90">{story.role}</div>
                  </div>

                  {/* Student Info */}
                  <div className="mb-4">
                    <div className="font-semibold text-lg">
                      {story.studentName}
                    </div>
                    <div className="text-sm opacity-90 leading-relaxed">
                      {story.experience}
                    </div>
                     <div className="text-sm opacity-90 leading-relaxed">
                      {story.experience2}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {story.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-white/20 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Video Thumbnail */}
                  <div className="rounded-lg overflow-hidden aspect-video relative">
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                      alt={`${story.company} Success Story`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                        <span className="text-3xl text-black">▶</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-white/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of students who transformed their careers with us.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Start Your Journey
              </button>
              <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-300">
                View All Stories
              </button>
            </div>
          </div>
        </div> */}
      </div>

      {/* Modal for Video */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {selectedStory.studentName}
                </h3>
                <p className="text-gray-600">
                  {selectedStory.company} • {selectedStory.package}
                </p>
              </div>
              <button
                onClick={() => setSelectedStory(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={`${selectedStory.video}?autoplay=1`}
                title={`${selectedStory.company} Success Story`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>

            <div className="mt-4">
              <p className="text-gray-700 mb-4">
                {selectedStory.experience}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedStory.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
