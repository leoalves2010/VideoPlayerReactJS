import React, { useState, useContext } from "react";
import { VideoContext } from "../../../data/video/VideoProvider";

export default function NewVideoForm(props) {
    const [, videoDispatch] = useContext(VideoContext);
    const [title, setTitle] = useState("");
    const [duration, setDuration] = useState("");
    const [cover, setCover] = useState("");
    const [url, setUrl] = useState("");

    function save() {
        const newVideo = {
            id: Math.floor(Date.now() + Math.random() * 1000),
            title,
            duration,
            cover,
            url,
        };
        videoDispatch({
            type: "add",
            value: newVideo,
        });
        reset();
    }

    function reset() {
        setTitle("");
        setDuration("");
        setCover("");
        setUrl("");
    }

    return (
        <div className="form">
            <label>Title:</label>
            <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />

            <label>Duration:</label>
            <input
                type="text"
                value={duration}
                onChange={(event) => setDuration(event.target.value)}
            />

            <label>Cover:</label>
            <input
                type="text"
                value={cover}
                onChange={(event) => setCover(event.target.value)}
            />

            <label>URL:</label>
            <input
                type="text"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
            />

            <button onClick={save}>Save</button>
        </div>
    );
}
