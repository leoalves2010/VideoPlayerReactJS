import React, { useContext } from "react";
import VideoItem from "./VideoItem";
import { VideoContext } from "../../../data/video/VideoProvider";

export default function VideoList(props) {
    const [videoState, videoDispatch] = useContext(VideoContext);
    function onClick(video) {
        videoDispatch({
            type: 'select',
            value: video
        })
    }

    return (
        <ul className="list">
            {videoState.videoList.map((video) => (
                <VideoItem key={video.id} video={video} onClick={onClick} />
            ))}
        </ul>
    );
}
