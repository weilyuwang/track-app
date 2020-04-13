import React from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";

import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";
import { setNavigator } from "./src/navigationRef";

import { FontAwesome } from "@expo/vector-icons";

const trackListFlow = createStackNavigator({
    TrackList: TrackListScreen,
    TrackDetail: TrackDetailScreen,
});

trackListFlow.navigationOptions = {
    title: "Track List",
    tabBarIcon: <FontAwesome name="list-ol" size={25} />,
};

// will be loaded in the order they are placed in the navigator
// i.e. ResolveAuthScreen will be shown first
const switchNavigator = createSwitchNavigator({
    ResolveAuth: ResolveAuthScreen,
    loginFlow: createStackNavigator({
        Signin: SigninScreen,
        Signup: SignupScreen,
    }),
    mainFlow: createBottomTabNavigator({
        trackListFlow: trackListFlow,
        TrackCreate: TrackCreateScreen,
        Account: AccountScreen,
    }),
});

const App = createAppContainer(switchNavigator);

export default () => {
    return (
        <TrackProvider>
            <LocationProvider>
                <AuthProvider>
                    <App
                        ref={(navigator) => {
                            setNavigator(navigator);
                        }}
                    />
                </AuthProvider>
            </LocationProvider>
        </TrackProvider>
    );
};
