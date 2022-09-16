import React, { useContext, useMemo } from "react";
import VideoItem from "./VideoItem";
import { VideoContext } from "../../../data/video/VideoProvider";

export default function VideoList(props) {
    const [videoState, videoDispatch] = useContext(VideoContext);
    const videoList = useMemo(() => {
        function onClick(video) {
            videoDispatch({
                type: "select",
                value: video,
            });
        }
        return videoState.videoList.map((video) => (
            <VideoItem key={video.id} video={video} onClick={onClick} />
        ));
    }, [videoState.videoList, videoDispatch]);

    return <ul className="list">{videoList}</ul>;
}
