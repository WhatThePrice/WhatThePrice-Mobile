import React from "react";
import { View, Text } from "react-native";

import Header from "components/header";

class Track extends React.Component {
    render() {
        return(
            <View style={{width: "100%", height: "100%"}}>
                <Header />
                <View style={styles.track}>
                    {/* <Text style={styles.message}>Tracking features is available in web</Text> */}
                    <Text style={styles.message}>Coming Soon To Mobile</Text>
                </View>
            </View>
        );
    }
}

const styles = {
    track: {
        width: "100%",
        height: 450,
        justifyContent: "center",
        alignItems: "center",
    },
    message: {
        fontSize: 20,
        fontWeight: "bold",
    },
}

export default Track