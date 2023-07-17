import React, { useContext, useEffect, useState } from "react";
import { SubjectContext } from "../Hooks/SubjectContext";

const VideoList = () => {
  const { selectedSubject } = useContext(SubjectContext);
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const apiKey = "AIzaSyDW3-WMRMZccxQnM6vzTmXxC2gfq88Z0vw";

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        if (!selectedSubject) {
          setVideos([]);
          return;
        }

        const videoData = await Promise.all(
          ["Featured", "Recent", "Recommended"].map(async (category) => {
            const response = await fetch(
              `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${selectedSubject.title} ${category}&key=${apiKey}`
            );
            const data = await response.json();
            return data.items || [];
          })
        );

        const videosResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoData
            .flat()
            .map((item) => item.id.videoId)
            .join(",")}&key=${apiKey}`
        );
        const videosData = await videosResponse.json();

        setVideos(videosData.items || []);
      } catch (error) {
        setError("Error fetching videos.");
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, [selectedSubject]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {selectedSubject && (
        <>
          <CategoryVideos videos={videos} category="Featured" />
          <CategoryVideos videos={videos} category="Recent" />
          <CategoryVideos videos={videos} category="Recommended" />
        </>
      )}
    </div>
  );
};

const CategoryVideos = ({ videos, category }) => {
  const filteredVideos = videos.filter((video) =>
    video.snippet.title.toLowerCase().includes(category.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-bold">{category}</h2>
      <div className="grid grid-cols-4 gap-4">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video) => (
            <div className="bg-white p-4 rounded-lg" key={video.id}>
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  className="w-full"
                />
                <div className="text-center mt-2">
                  <p className="text-xl font-bold">{video.snippet.title}</p>
                  <p className="text-gray-600">{video.snippet.channelTitle}</p>
                </div>
              </a>
            </div>
          ))
        ) : (
          <p>No videos found.</p>
        )}
      </div>
    </div>
  );
};

export default VideoList;
