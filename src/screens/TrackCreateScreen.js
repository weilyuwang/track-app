//import "../_mockLocation";
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";

// withNavigationFocus is a higher-order component, will pass a prop `isFocused` to its children
const TrackCreateScreen = ({ isFocused }) => {
    const { addLocation } = useContext(LocationContext);

    // use custom hook to handle location-related aspects
    // pass isFocused var to useLocation hook - to decide if we should continue locating current user
    const [error] = useLocation(isFocused, addLocation);

    return (
        <SafeAreaView>
            <Text h2>Create a Track</Text>
            <Map />
            {/* <NavigationEvents onWillBlur={() => console.log("LEAVING")} /> */}
            {error ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
