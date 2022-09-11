import React from "react";
import "./App.css";
import VideoList from "./ui/components/data-display/VideoList";
import NewVideoForm from "./ui/components/inputs/NewVideoForm";
import VideoPlayer from "./ui/components/data-display/VideoPlayer";

function App() {
    return (
        <div className="App">
            <VideoList />
            <VideoPlayer />
            <NewVideoForm />
        </div>
    );
}

export default App;
