// src/components/VideoExamples.jsx
import React from "react";

export default function VideoExamples() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-10">
      {/* Easy Example Section */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-600 mb-6 text-center sm:text-left">
          ✅ Easy Example (DSA Explanation)
        </h2>
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
          <div className="relative w-full pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/videoseries?list=PLIp-xrYmLruLLnpM3GqJpq1PjqXW6ptO4"
              title="Easy Example Playlist"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="mt-4 text-gray-700 font-medium text-center sm:text-left">
            A simple exam-style video series for easier practice.
          </p>
        </div>
      </section>

      {/* Hard Example Section */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-red-600 mb-6 text-center sm:text-left">
          🔥 High Quality Example (Uber OA / Atlassian Interview Level)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hard Example 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
            <div className="relative w-full pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/qaroxuOSgHM"
                title="Hard Example 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="mt-4 text-gray-700 font-medium text-center sm:text-left">
              Hard Example 1 – 4-Dimensional Dynamic Programming (Uber OA style) by Kumar K Sir
            </p>
          </div>

          {/* Hard Example 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
            <div className="relative w-full pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/7n9Pp4Fpnus"
                title="Hard Example 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="mt-4 text-gray-700 font-medium text-center sm:text-left">
              Hard Example 2 – 70 LPA Atlassian SDE Interview Graph Problem by Kumar K Sir
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
