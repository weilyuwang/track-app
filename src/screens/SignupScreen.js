import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
            </Spacer>
            <Spacer />
            <Input
                label="Email"
                value={email}
                onChangeText={(newEmail) => {
                    setEmail(newEmail);
                }}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />
            <Input
                secureTextEntry
                label="Password"
                value={password}
                onChangeText={(newPassword) => {
                    setPassword(newPassword);
                }}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />
            <Spacer>
                <Button
                    title="Sign Up"
                    onPress={() => signup({ email, password })}
                />
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
        marginHorizontal: 10,
    },
});

export default SignupScreen;
