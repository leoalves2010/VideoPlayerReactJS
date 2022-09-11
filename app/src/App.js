import React from "react";
import "./App.css";
import VideoList from "./ui/components/data-display/VideoList";
import NewVideoForm from "./ui/components/inputs/NewVideoForm";
import VideoPlayer from "./ui/components/data-display/VideoPlayer";
import VideoProvider from "./data/providers/VideoProvider";

function App() {
    return (
        <div className="App">
            <VideoProvider>
                <VideoList />
                <VideoPlayer />
                <NewVideoForm />
            </VideoProvider>
        </div>
    );
}

export default App;
