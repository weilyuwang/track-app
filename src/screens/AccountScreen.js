import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "react-navigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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

AccountScreen.navigationOptions = {
    title: "Account",
    tabBarIcon: <MaterialCommunityIcons name="account-circle" size={25} />,
};

const styles = StyleSheet.create({
    textStyle: {
        marginHorizontal: 16,
        marginTop: 30,
    },
});

export default AccountScreen;
