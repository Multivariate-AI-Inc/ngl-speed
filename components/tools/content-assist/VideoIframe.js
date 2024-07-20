import React, { useState, useEffect, useCallback, useRef } from "react";

const VideoIframe = ({ videoId, autoPlay, title }) => {
  const videoURL = `https://www.youtube.com/embed/${videoId}${autoPlay ? "?autoplay=1" : ""}`;
  const iframeRef = useRef(null);
  const defaultHeight = 495;
  const [videoHeight, setVideoHeight] = useState(defaultHeight);
  const [isIntersecting, setIsIntersecting] = useState(false);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observer.disconnect(); // Stop observing once intersected
          }
        });
      },
      {
        rootMargin: '0px 0px 200px 0px', // Adjust the margin as needed
        threshold: 0.5 // Trigger when 50% of the element is visible
      }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      if (iframeRef.current) {
        observer.unobserve(iframeRef.current);
      }
    };
  }, []);

  return (
    <div ref={iframeRef} style={{ width: '100%', position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
      {isIntersecting && (
        <iframe
          title={title}
          width="100%"
          height={`${videoHeight}px`}
          src={videoURL}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      )}
    </div>
  );
};

export default VideoIframe;
