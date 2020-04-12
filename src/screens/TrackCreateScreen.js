//import "../_mockLocation";
import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import { SafeAreaView } from "react-navigation";
import {
    requestPermissionsAsync,
    watchPositionAsync,
    Accuracy,
} from "expo-location";
import * as Permissions from "expo-permissions";

const TrackCreateScreen = () => {
    const [error, setError] = useState(null);

    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
            // the following requests will be handled by OS automatically based on the user's first action
        } catch (err) {
            // if user denies, the flow will fall to catch block
            setError(err);
        }
        // const location = await Permissions.askAsync(Permissions.LOCATION);
        // if (location.status !== "granted") {
        //     setError("error");
        // }
        await watchPositionAsync(
            {
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000, // once every 1 second
                distanceInterval: 10, // once every 10 meters
            },
            (location) => {
                console.log(location);
            }
        );
    };

    useEffect(() => {
        startWatching();
    }, []); //[] means we only want to run startWatching() only once when the screen loads

    return (
        <SafeAreaView>
            <Text h2>Create a Track</Text>
            <Map />
            {error ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
