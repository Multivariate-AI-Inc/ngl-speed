import React, { useState, useEffect, useCallback, useRef } from "react";

const VideoIframe = ({ videoId, autoPlay, title }) => {
  const videoURL = `https://www.youtube.com/embed/${videoId}${autoPlay ? "?autoplay=1" : ""}`;
  const iframeRef = useRef(null);
  const defaultHeight = 495;
  const [videoHeight, setVideoHeight] = useState(defaultHeight);
  const [showIframe, setShowIframe] = useState(false);

  const handleChangeVideoWidth = useCallback(() => {
    const ratio = window.innerWidth > 990 ? 1.0 : window.innerWidth > 522 ? 1.2 : window.innerWidth > 400 ? 1.45 : 1.85;
    const height = iframeRef.current ? iframeRef.current.offsetWidth * 0.5625 : defaultHeight;
    setVideoHeight(Math.floor(height * ratio));
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleChangeVideoWidth);
    handleChangeVideoWidth(); // Initial calculation
    return () => {
      window.removeEventListener("resize", handleChangeVideoWidth);
    };
  }, [handleChangeVideoWidth]);

  return (
    <div onClick={() => setShowIframe(true)} style={{ cursor: "pointer", position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
      {showIframe ? (
        <iframe
          ref={iframeRef}
          title={title}
          width="100%"
          height="100%"
          src={videoURL}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      ) : (
        <img
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt={title}
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        />
      )}
    </div>
  );
};

export default VideoIframe;
