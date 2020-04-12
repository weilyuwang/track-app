import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = () => {
    // const { state, signin } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign In to Your Account"
                errorMessage=""
                submitButtonText="Sign In"
                onSubmit={({ email, password }) => {}}
            />
            <NavLink
                routeName="Signup"
                text="Don't have an account? Sign up instead."
            />
        </View>
    );
};

SigninScreen.navigationOptions = {
    headerShown: false,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 300,
        marginHorizontal: 10,
    },
});

export default SigninScreen;
