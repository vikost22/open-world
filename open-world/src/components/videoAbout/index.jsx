import { useRef } from "react";

export default function VideoAbout(props) {
  const { background, videoLink } = props;
  const videoRef = useRef();

  function pausedPlay() {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }
  return (
    <section
      className="video-about"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="video-about__content">
        <div className="container video-about__container">
          <div className="video-about__text text">
            <p className="text__first">Travel</p>
            <p className="text__second">and enjoy</p>
            <p className="text__third">your life</p>
            <button className="video-about__show-video" onClick={pausedPlay}>
              See video
            </button>
          </div>
          <video
            src={videoLink}
            width="591"
            height="328"
            ref={videoRef}
            className="video-about__video"
          ></video>
        </div>
      </div>
    </section>
  );
}
