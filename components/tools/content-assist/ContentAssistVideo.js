import React, { useState, useEffect, useCallback, useRef } from "react"
const VideoIframe = ({ videoId, autoPlay, title }) => {
  const videoURL = `https://www.youtube.com/embed/${videoId}${
    autoPlay ? "?autoplay=1" : ""
  }`
  const iframeRef = useRef(null)
  const defaultHeight = 495
  const [videoHeight, setVideoHeight] = useState(
    iframeRef.current ? iframeRef.current.offsetWidth * 0.5625 : defaultHeight,
  )

  const handleChangeVideoWidth = useCallback(() => {
    const ratio =
      window.innerWidth > 990
        ? 1.0
        : window.innerWidth > 522
        ? 1.2
        : window.innerWidth > 400
        ? 1.45
        : 1.85
    const height = iframeRef.current
      ? iframeRef.current.offsetWidth * 0.5625
      : defaultHeight
    setVideoHeight(Math.floor(height * ratio))
  }, [])

  useEffect(() => {
    window.addEventListener("resize", handleChangeVideoWidth)
    const ratio =
      window.innerWidth > 990
        ? 1.0
        : window.innerWidth > 522
        ? 1.2
        : window.innerWidth > 400
        ? 1.45
        : 1.85
    const height = iframeRef.current
      ? iframeRef.current.offsetWidth * 0.5625
      : defaultHeight
    setVideoHeight(Math.floor(height * ratio))
    return () => {
      window.removeEventListener("resize", handleChangeVideoWidth)
    }
  }, [handleChangeVideoWidth])

  return (
    <iframe
      ref={iframeRef}
      title={title}
      width="100%"
      height={`${videoHeight}px`}
      src={videoURL}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}

const ContentAssistVideo = () => {
  const videoId = "dzUFRokCFmg"
  return (
    <>
      <div className="container mt-80">
        <VideoIframe
          videoId={videoId}
          title={"Content assist tool"}
        />
      </div>
    </>
  )
}

export default ContentAssistVideo