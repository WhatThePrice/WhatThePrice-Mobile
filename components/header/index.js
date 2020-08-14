import React from "react";
import { View, Text, StyleSheet } from "react-native";

class Header extends React.Component {
    render() {
        return(
            <View style={styles.headerContainer}>
                <Text>What The Price</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 50,
        width: "100%",
        backgroundColor: "springgreen",
        justifyContent: "center",
        alignItems: "center",
    },
})

export default Header;