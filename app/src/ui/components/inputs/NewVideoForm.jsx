import React, { useState } from "react";

export default function NewVideoForm(props) {
    const [title, setTitle] = useState("");
    const [duration, setDuration] = useState("");
    const [cover, setCover] = useState("");
    const [url, setUrl] = useState("");

    function save() {
        const newVideo = {
            title,
            duration,
            cover,
            url,
        };
        //save
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
