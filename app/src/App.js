import React from "react";
import "./App.css";
import VideoList from "./ui/components/data-display/VideoList";
import NewVideoForm from "./ui/components/inputs/NewVideoForm";

function App() {
    return (
        <div className="App">
            <VideoList />
            <NewVideoForm />
        </div>
    );
}

export default App;
