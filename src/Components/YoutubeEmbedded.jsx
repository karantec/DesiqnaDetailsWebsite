import React from "react";

const YouTubeEmbed = () => {
  return (
    <div className="flex justify-center items-center py-8 ">
      <div className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/q8UAJyGISmQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeEmbed;