import React, { createContext, useReducer } from "react";
import { videoReducer, videoInitialState } from "./VideoReducer";

export const VideoContext = createContext(videoInitialState);

export default function VideoProvider(props) {
    const [state, dispatch] = useReducer(videoReducer, videoInitialState);

    return (
        <VideoContext.Provider value={[state, dispatch]}>
            {props.children}
        </VideoContext.Provider>
    );
}
