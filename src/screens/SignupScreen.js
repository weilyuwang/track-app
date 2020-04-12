import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    // state format ===  { "errorMessage": "Something went wrong with sign up."/"", "token": jwttoken/null }

    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={({ email, password }) => signup({ email, password })}
            />
            <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
                <Spacer />
                <Text style={styles.link}>
                    Already have an account? Sign In instead.
                </Text>
            </TouchableOpacity>
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
    link: {
        color: "blue",
        marginHorizontal: 10,
    },
});

export default SignupScreen;
