import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case "add_error":
            return { ...state, errorMessage: action.payload };
        case "signup":
            // error out the error message and set the JWT
            return { errorMessage: "", token: action.payload };
        default:
            return state;
    }
};

// define actions
const signup = (dispatch) => async ({ email, password }) => {
    // make API request to sign up with email and password
    try {
        const response = await trackerApi.post("/signup", {
            email,
            password,
        });

        // store the JWT into local storage
        await AsyncStorage.setItem("token", response.data.token);

        dispatch({
            type: "signup",
            payload: response.data.token,
        });

        // navigate to main flow screens whenever user has successfully signed up / signed in
        navigate("TrackList");
    } catch (err) {
        dispatch({
            type: "add_error",
            payload: "Something went wrong with sign up.",
        });
    }
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
    { token: null, errorMessage: "" }
);
