import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

class Result extends React.Component {
    render() {
        return(
            <ScrollView>
                <Text>This is Result Page</Text>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.card}>
                        <Text>Yes</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = {
    container: {
        marginVertical: 20,
        paddingHorizontal: 20,
    },
    card: {
        width: "100%",
        height: 80,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
    },
}

export default Result;