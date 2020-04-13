import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";

const TrackDetailScreen = ({ navigation }) => {
    const { state } = useContext(TrackContext);
    const _id = navigation.getParam("_id");
    const track = state.find((t) => t._id === _id);
    const initialCoords = track.locations[0].coords;

    return (
        <>
            <Text style={{ fontSize: 48 }}>{track.name}</Text>
            <MapView
                style={styles.map}
                initialRegion={{
                    longitudeDelta: 0.005,
                    latitudeDelta: 0.005,
                    ...initialCoords,
                }}
            >
                <Polyline
                    coordinates={track.locations.map(
                        (location) => location.coords
                    )}
                />
            </MapView>
        </>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300,
    },
});

export default TrackDetailScreen;
