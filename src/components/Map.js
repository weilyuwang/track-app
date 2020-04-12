import React, { useContext } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Text } from "react-native-elements";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
    /* MOCK DATA */

    // let points = [];
    // for (let i = 0; i < 20; i++) {
    //     points.push({
    //         latitude: 43.779157850000004 + i * 0.001 * (Math.random() / 10),
    //         longitude: -79.41439751673187 + i * 0.001,
    //     });
    // }

    const {
        state: { currentLocation },
    } = useContext(LocationContext);

    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
    }

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
            region={{
                ...currentLocation.coords,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        >
            <Circle
                center={currentLocation.coords}
                radius={10}
                strokeColor="rgba(158,158, 255, 1.0)"
                fillColor="rgba(158,158,255,0.3)"
            />
            {/* <Polyline coordinates={points} /> */}
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300,
    },
});

export default Map;
