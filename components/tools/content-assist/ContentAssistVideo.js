import VideoIframe from "./VideoIframe"
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
