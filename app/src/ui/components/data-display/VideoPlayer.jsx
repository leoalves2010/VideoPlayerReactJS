import React, { useRef, useEffect, useState } from "react";
import { TimeService } from "../../../data/services/TimeService";

const _selectedVideo = {
    id: 1,
    title: "Cars",
    duration: 8,
    cover: "https://images.freeimages.com/images/large-previews/b53/old-car-1450730.jpg",
    url: "https://joy.videvo.net/videvo_files/video/free/2018-07/large_watermarked/180607_A_101_preview.mp4",
};

export default function VideoPlayer(props) {
    const video = _selectedVideo;
    const videoRef = useRef(null);
    const progressTimer = useRef(null);
    const [isPlaying, setPlay] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const videoElement = videoRef.current;

        videoElement.addEventListener("play", play);
        videoElement.addEventListener("pause", pause);
        videoElement.addEventListener("seeked", onProgress);

        setTime(0);
        pause();

        return () => {
            videoElement.removeEventListener("play", play);
            videoElement.removeEventListener("pause", pause);
            videoElement.removeEventListener("seeked", onProgress);
        };
    }, [video]);

    useEffect(() => {
        clearInterval(progressTimer);
        if (isPlaying) {
            progressTimer.current = setInterval(onProgress, 1000);
        }
    }, [isPlaying]);

    function play() {
        videoRef.current.play();
        setPlay(true);
    }

    function pause() {
        videoRef.current.pause();
        setPlay(false);
    }

    function onProgress() {
        setProgress(videoRef.current.currentTime);
    }

    function onChangeProgress(event) {
        setTime(event.target.value);
    }

    function setTime(time) {
        videoRef.current.currentTime = time;
        onProgress();
    }

    return (
        <div className={"video-player"}>
            <video src={video.url} ref={videoRef} />
            {video.url && (
                <>
                    <div className={"controls"}>
                        <button onClick={isPlaying ? pause : play}>
                            {isPlaying ? "||" : "|>"}
                        </button>
                        <span>
                            {TimeService.timeFormatter(Math.round(progress))} /{" "}
                            {TimeService.timeFormatter(video.duration)}
                        </span>
                        <input
                            type="range"
                            value={progress}
                            onChange={onChangeProgress}
                            min={0}
                            max={video.duration}
                            step={0.1}
                        />
                    </div>
                    <h2>{video.title}</h2>
                </>
            )}
        </div>
    );
}
