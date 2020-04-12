import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case "add_error":
            return { ...state, errorMessage: action.payload };
        case "clear_error_message":
            return { ...state, errorMessage: "" };
        case "signin":
            // error out the error message and set the JWT
            return { errorMessage: "", token: action.payload };
        case "signout":
            return { errorMessage: "", token: null };
        default:
            return state;
    }
};

const tryLocalSignin = (dispatch) => async () => {
    // check if the user has a JWT stored locally
    const token = await AsyncStorage.getItem("token");
    if (token) {
        dispatch({ type: "signin", payload: token });
        navigate("TrackList");
    } else {
        navigate("Signin");
    }
};

const clearErrorMessage = (dispatch) => () => {
    dispatch({
        type: "clear_error_message",
    });
};

// define actions
const signup = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post("/signup", {
            email,
            password,
        });

        // store the JWT into local storage
        await AsyncStorage.setItem("token", response.data.token);

        dispatch({
            type: "signin",
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

const signin = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post("/signin", { email, password });
        await AsyncStorage.setItem("token", response.data.token);

        dispatch({
            type: "signin",
            payload: response.data.token,
        });

        navigate("TrackList");
    } catch (err) {
        dispatch({
            type: "add_error",
            payload: "Something went wrong with sign in.",
        });
    }
};

// clear off JWT
const signout = (dispatch) => async () => {
    await AsyncStorage.removeItem("token");
    dispatch({ type: "signout" });
    navigate("Signin");
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: "" }
);
