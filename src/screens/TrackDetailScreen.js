import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";
import Spacer from "../components/Spacer";
import moment from "moment";

const TrackDetailScreen = ({ navigation }) => {
    const { state } = useContext(TrackContext);
    const _id = navigation.getParam("_id");
    const track = state.find((t) => t._id === _id);
    const initialCoords = track.locations[0].coords;

    const end_timestamp = track.locations[track.locations.length - 1].timestamp;
    const start_timestamp = track.locations[0].timestamp;

    return (
        <>
            <Spacer>
                <Text h4>{track.name}</Text>
            </Spacer>

            <Spacer>
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
            </Spacer>

            <Spacer>
                <Text>Start timestamp: {start_timestamp}</Text>
            </Spacer>

            <Spacer>
                <Text>End timestamp: {end_timestamp}</Text>
            </Spacer>

            <Spacer>
                <Text>
                    Start time:{" "}
                    {moment.unix(start_timestamp).format("YYYY-MM-DD HH:mm")}
                </Text>
            </Spacer>
        </>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300,
    },
});

export default TrackDetailScreen;
