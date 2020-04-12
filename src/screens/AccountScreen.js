import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "react-navigation";

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Text h1 style={styles.textStyle}>
                Your Account
            </Text>
            <Spacer />
            <Spacer />
            <Spacer>
                <Button title="Sign Out" onPress={signout} />
            </Spacer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginHorizontal: 16,
        marginTop: 30,
    },
});

export default AccountScreen;
