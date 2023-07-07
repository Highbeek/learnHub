import React, { useEffect, useState } from "react";
import axios from "axios";

const Videos = ({ subject }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=YOUR_API_KEY&q=${encodeURIComponent(
            subject
          )}&type=video&maxResults=5`
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, [subject]);

  return (
    <div>
      <h2>Videos related to {subject}</h2>
      {videos.map((video) => (
        <div key={video.id.videoId}>
          <h3>{video.snippet.title}</h3>
          <p>{video.snippet.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Videos;
