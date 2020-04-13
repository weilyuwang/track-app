import { useState, useEffect } from "react";
import {
    Accuracy,
    requestPermissionsAsync,
    watchPositionAsync,
} from "expo-location";

//export our custom hook
// given a callback function e.g. addLocation action dispatcher from LocationContext
// and a boolean value shouldTrack to decide if we should continue recording user's current coordinates
export default (shouldTrack, callback) => {
    const [error, setError] = useState(null);

    useEffect(() => {
        let subscriber;
        const startWatching = async () => {
            try {
                await requestPermissionsAsync();
                // function to fetch user's current location data
                // watchPositionAsync() creates a daemon thread that keeps running in the background
                // until you call subscriber.remove() to unsubscribe/stop it
                subscriber = await watchPositionAsync(
                    {
                        accuracy: Accuracy.BestForNavigation,
                        timeInterval: 500, // once every 0.5 second
                        distanceInterval: 5, // once every 5 meters
                    },
                    callback // takes a location object: (location) => callback(location)
                );
            } catch (err) {
                // if user denies, the flow will fall to catch block
                setError(err);
            }
        };

        if (shouldTrack) {
            startWatching();
        } else {
            // stop watching
            if (subscriber) {
                subscriber.remove();
            }

            subscriber = null;
        }

        // clean up function
        return () => {
            if (subscriber) {
                subscriber.remove();
            }
        };
    }, [shouldTrack]); // run startWatching() whenever shouldTrack(isFocused) changes

    // return error if necessary - make it to return an array for now, we could possibly return more stuff in the array in the future
    return [error];
};
