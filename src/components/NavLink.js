import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Spacer from "./Spacer";
// wrap the React component with withNavigation => the component then can get access to navigation prop
// and will be able to call navigate() function to navigate between different screens
import { withNavigation } from "react-navigation";

const NavLink = ({ navigation, text, routeName }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Spacer />
            <Text style={styles.link}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    link: {
        color: "blue",
        marginHorizontal: 10,
    },
});

export default withNavigation(NavLink);
