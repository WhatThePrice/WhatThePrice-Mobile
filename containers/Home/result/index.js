import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import TextInputComponent from "components/textInput";
import InputButton from "components/inputButton";

class Result extends React.Component {
    render() {
        return(
            <ScrollView>
                {/* <Text>This is Result Page</Text> */}
                <View style={styles.search}>
                    <TextInputComponent
                        textInput="Search Product"
                        inputPlaceHolder="product name"
                        inputKeyType="default"
                        inputSecure={false}
                        clearButton="always"
                    />
                    <InputButton
                        title="Search"
                        textColor="white"
                        screenColor="darkgreen"
                        navigate={ () => this.props.navigation.navigate("Result") }
                    />
                </View>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.card}>
                        <Text>Yes</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.card}>
                        <Text>Yes</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.card}>
                        <Text>Yes</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.card}>
                        <Text>Yes</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.card}>
                        <Text>Yes</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.card}>
                        <Text>Yes</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.card}>
                        <Text>Yes</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.card}>
                        <Text>Yes</Text>
                    </TouchableOpacity>
                </View>
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
    search: {
        width: "100%",
        marginVertical: 20,
        paddingHorizontal: 20,
    },
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