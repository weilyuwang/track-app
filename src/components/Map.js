import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import MapView from "react-native-maps";

const Map = () => {
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 43.779157850000004,
                longitude: -79.41439751673187,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
        />
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300,
    },
});

export default Map;
