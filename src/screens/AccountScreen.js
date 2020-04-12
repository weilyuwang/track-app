import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);

    return (
        <>
            <Text h1>Sign Out</Text>
            <Spacer>
                <Button title="Sign Out" onPress={signout} />
            </Spacer>
        </>
    );
};

const styles = StyleSheet.create({});

export default AccountScreen;
