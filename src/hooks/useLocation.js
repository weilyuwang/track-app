import { useState, useEffect } from "react";
import {
    Accuracy,
    requestPermissionsAsync,
    watchPositionAsync,
} from "expo-location";

//export our custom hook, given a callback function e.g. addLocation action dispatcher from LocationContext
export default (callback) => {
    const [error, setError] = useState(null);

    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
            // function to fetch user's current location data
            // watchPositionAsync() creates a daemon thread that keeps running in the background
            // until you call subscriber.remove() to unsubscribe/stop it
            const subscriber = await watchPositionAsync(
                {
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000, // once every 1 second
                    distanceInterval: 10, // once every 10 meters
                },
                callback
            );
        } catch (err) {
            // if user denies, the flow will fall to catch block
            setError(err);
        }
    };

    useEffect(() => {
        startWatching();
    }, []); //[] means we only want to run startWatching() only once when the screen loads

    // return error if necessary - make it to return an array for now, we could possibly return more stuff in the array in the future
    return [error];
};
