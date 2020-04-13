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

    const end_timestamp = track.locations[
        track.locations.length - 1
    ].timestamp.toString();

    const start_timestamp = track.locations[0].timestamp.toString();

    const moment_start = moment.unix(start_timestamp.substring(0, 10));
    const moment_end = moment.unix(end_timestamp.substring(0, 10));

    const moment_duration_seconds = moment
        .duration(moment_end.diff(moment_start))
        .asSeconds();

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
                <Text>
                    Start Time: {moment_start.format("YYYY-MM-DD HH:mm:ss")}
                </Text>
            </Spacer>
            <Spacer>
                <Text>
                    End Time: {moment_end.format("YYYY-MM-DD HH:mm:ss")}
                </Text>
            </Spacer>

            <Spacer>
                <Text>
                    Duration : {Math.floor(moment_duration_seconds / 60)}{" "}
                    minutes {moment_duration_seconds % 60} seconds
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
