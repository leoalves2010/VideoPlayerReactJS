import { StorageService } from "../services/StorageService";

export const videoInitialState = {
    selectedVideo: {},
    videoList: StorageService.get("videoList", []),
};

export function videoReducer(state, action) {
    switch (action.type) {
        case "add":
            const newVideoList = [...state.videoList, action.value];
            StorageService.set("videoList", newVideoList);
            return { ...state, videoList: newVideoList };
        case "select":
            return { ...state, selectedVideo: action.value };
        default:
            return state;
    }
}
