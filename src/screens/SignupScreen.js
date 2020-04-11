import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
            </Spacer>
            <Input label="Email" />
            <Spacer />
            <Input label="Password" />
            <Spacer>
                <Button title="Sign Up" />
            </Spacer>
        </View>
    );
};

// set headerShown option to false to indicates that we don't need a header for this screen

SignupScreen.navigationOptions = {
    headerShown: false,
};

/*
Note:

We can also attach the navigationOptions as a function instead of an object the the screen

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 300,
    },
});

export default SignupScreen;
