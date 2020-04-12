import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
    let points = [];
    for (let i = 0; i < 20; i++) {
        points.push({
            latitude: 43.779157850000004 + i * 0.001 * (Math.random() / 10),
            longitude: -79.41439751673187 + i * 0.001,
        });
    }

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 43.779157850000004,
                longitude: -79.41439751673187,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
        >
            <Polyline coordinates={points} />
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300,
    },
});

export default Map;
