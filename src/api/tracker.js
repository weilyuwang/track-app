import axios from "axios";

import { AsyncStorage } from "react-native";

const instance = axios.create({
    // the baseURL below points to Ngrok url, which redirects to express server.
    // note that the ngrok will change every 8 hours (session expired), we need to restart ngrok
    // and update the baseURL value every 8 hours
    baseURL: "http://99454017.ngrok.io",
});

// first function is called whenever we make a request,
// second function is called whenever there is an error calling the request
instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;
