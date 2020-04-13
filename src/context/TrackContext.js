import createDataContext from "./createDataContext";

const trackReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const fetchTracks = (dispatch) => () => {};
const createTracks = (dispatch) => () => {};

// reducer - action dispatchers - initial state
export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTracks, createTracks },
    []
);
