import * as Location from "expo-location";

const tenMetersWithDegrees = 0.001;

const getLocation = (increment) => {
    return {
        timestamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: -79.41439751673187 + increment * tenMetersWithDegrees,
            latitude: 43.779157850000004 + increment * tenMetersWithDegrees,
        },
    };
};

// once every 1 second, emit an event to Location lib - mock user's location changes
let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit("Expo.locationChanged", {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter),
    });
    counter++;
}, 1000);
