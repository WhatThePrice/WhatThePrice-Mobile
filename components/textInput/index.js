import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

class TextInputComponent extends React.Component {
    render() {
        return(
            <View>
                <Text>{this.props.textInput}</Text>
                <TextInput
                    placeholder={this.props.inputPlaceHolder}
                    style={styles.formInput}
                    keyboardType={this.props.inputKeyType}
                    secureTextEntry={this.props.inputSecure}
                    // onChangeText={this.props.onChange}
                />
            </View>
        );
    }
}

const styles= StyleSheet.create({
    formInput: {
        borderRadius: 3,
        borderColor: "black",
        borderWidth: 1,
        height: 30,
        paddingHorizontal: 20,
        marginVertical: 10,
        backgroundColor: "white",
    },
})

export default TextInputComponent;