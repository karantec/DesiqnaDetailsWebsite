// src/components/VideoExamples.jsx
import React from "react";

export default function VideoExamples() {
  return (
    <div className="container mx-auto px-6 py-10">
      {/* Easy Example Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-green-600 mb-6">
          ✅ Easy Example (Exam Level)
        </h2>
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-80 rounded-xl"
              src="https://www.youtube.com/embed/videoseries?list=PLIp-xrYmLruLLnpM3GqJpq1PjqXW6ptO4"
              title="Easy Example Playlist"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="mt-4 text-gray-700 font-medium">
            A simple exam-style video series for easier practice.
          </p>
        </div>
      </section>

      {/* Hard Example Section */}
      <section>
        <h2 className="text-3xl font-bold text-red-600 mb-6">
          🔥 Hard Examples (Uber / Atlassian Level)
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Hard Example 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-64 rounded-xl"
                src="https://www.youtube.com/embed/qaroxuOSgHM"
                title="Hard Example 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="mt-4 text-gray-700 font-medium">
              Hard Example 1 – Graph Problem (Uber/Atlassian style).
            </p>
          </div>

          {/* Hard Example 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-64 rounded-xl"
                src="https://www.youtube.com/embed/7n9Pp4Fpnus"
                title="Hard Example 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="mt-4 text-gray-700 font-medium">
              Hard Example 2 – 70 LPA Atlassian SDE Interview Graph Problem by Kumar K Sir.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
