import React from "react";
import VideoItem from "./VideoItem";

const _list = [
    {
        id: 1,
        title: "Cars",
        duration: 8,
        cover: "https://images.freeimages.com/images/large-previews/b53/old-car-1450730.jpg",
        url: "https://joy.videvo.net/videvo_files/video/free/2018-07/large_watermarked/180607_A_101_preview.mp4",
    },
    {
        id: 2,
        title: "Football",
        duration: 23,
        cover: "https://images.freeimages.com/images/large-previews/c67/football-kids-1550840.jpg",
        url: "https://joy.videvo.net/videvo_files/video/free/2017-09/large_watermarked/170804_C_Lombok_061_preview.mp4",
    },
    {
        id: 3,
        title: "Music",
        duration: 12,
        cover: "https://images.freeimages.com/images/large-previews/7a0/guitar-1418659.jpg",
        url: "https://joy.videvo.net/videvo_files/video/free/2015-09/large_watermarked/guitar_on_fingers_stock_preview.mp4",
    },
];

export default function VideoList(props) {
    function onClick(video) {
        console.log(video);
    }

    return (
        <ul className="list">
            {_list.map((video) => (
                <VideoItem key={video.id} video={video} onClick={onClick} />
            ))}
        </ul>
    );
}
