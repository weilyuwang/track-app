import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = () => {
    const { state, signup, clearErrorMessage, tryLocalSignin } = useContext(
        AuthContext
    );
    // state format ===  { "errorMessage": "Something went wrong with sign up." or "", "token": JWT or null}

    // use useEffect() to call tryLocalSignin() only once when the screen loads
    useEffect(() => {
        tryLocalSignin();
    }, []);

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={() => {
                    clearErrorMessage();
                }}
            />
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={({ email, password }) => signup({ email, password })}
            />
            <NavLink
                routeName="Signin"
                text="Already have an account? Sign in instead."
            />
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
