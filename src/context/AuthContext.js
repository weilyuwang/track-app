import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// define actions
const signup = (dispatch) => {
    return async ({ email, password }) => {
        // make API request to sign up with email and password
        try {
            const response = await trackerApi.post("/signup", {
                email,
                password,
            });
            console.log(response.data);
        } catch (err) {
            console.log(err.message);
        }

        // if we sign up, modify our state, and say that we are authenticated
        // if signing up fails, we probably need to reflect an error message somewhere
    };
};

const signin = (dispatch) => {
    return ({ email, password }) => {
        // try to sign in
        // handle success by updating state
        // handle error by showing error message somehow
    };
};

const signout = (dispatch) => {
    return () => {
        // somehow sign out
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { isSignedIn: false }
);
