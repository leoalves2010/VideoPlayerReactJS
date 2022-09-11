import React, { useContext } from "react";
import VideoItem from "./VideoItem";
import { VideoContext } from "../../../data/providers/VideoProvider";

export default function VideoList(props) {
    const [_state] = useContext(VideoContext);
    function onClick(video) {
        console.log(video);
    }

    return (
        <ul className="list">
            {_state.videoList.map((video) => (
                <VideoItem key={video.id} video={video} onClick={onClick} />
            ))}
        </ul>
    );
}
