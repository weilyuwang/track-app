import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const trackReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const fetchTracks = (dispatch) => () => {};
const createTrack = (dispatch) => async (name, locations) => {
    // make a request to our api
    await trackerApi.post("/tracks", { name, locations });
};

// reducer - action dispatchers - initial state
export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    []
);
