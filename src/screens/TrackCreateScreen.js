//import "../_mockLocation";
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";

// withNavigationFocus is a higher-order component, will pass a prop `isFocused` to its children
const TrackCreateScreen = ({ isFocused }) => {
    const { state, addLocation } = useContext(LocationContext);
    // console.log("OUTSIDE callback:", state.recording);
    // use custom hook to handle location-related aspects
    // pass isFocused var to useLocation hook - to decide if we should continue locating current user
    // and pass addLocation() callback function to the useLocation hook for it to use
    const [error] = useLocation(isFocused, (location) => {
        // console.log("INSIDE callback:", state.recording);
        addLocation(location, state.recording);
    });

    return (
        <SafeAreaView>
            <Text h2>Create a Track</Text>
            <Map />
            {/* <NavigationEvents onWillBlur={() => console.log("LEAVING")} /> */}
            {error ? <Text>Please enable location services</Text> : null}
            <TrackForm />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
