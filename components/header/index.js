import React from "react";
import { View, Text, StyleSheet } from "react-native";

class Header extends React.Component {
    render() {
        return(
            <View style={styles.headerContainer}>
                <Text style={styles.text}>What The Price</Text>
                {/* <Text style={styles.text}>The</Text>
                <Text style={styles.text}>Price</Text> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 120,
        width: "100%",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-around',
        // justifyContent: "center",
        alignItems: "center",
        // paddingHorizontal: 80,
    },
    text: {
        fontWeight: "bold",
        fontSize: 50,
        // marginVertical: 5,
    },
})

export default Header;