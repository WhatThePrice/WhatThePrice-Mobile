import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

class TextInputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewPass: true,
        }
    }
    render() {
        return(
            <View>
                <Text>{this.props.textInput}</Text>
                <TextInput
                    placeholder={this.props.inputPlaceHolder}
                    style={styles.formInput}
                    keyboardType={this.props.inputKeyType}
                    secureTextEntry={this.props.inputSecure && this.state.viewPass}
                    onChangeText={this.props.onChange}
                />
                {this.props.showHide && (
                    <TouchableOpacity
                        onPress = { () => this.setState({ viewPass: !this.state.viewPass }) }
                        style = {{ 
                            width: 50,
                            height: 30,
                            backgroundColor: "skyblue",
                            marginBottom: 20,
                            justifyContent: "center",
                            alignItems: "center",
                            borderWidth: 2,
                            borderColor: "black",
                        }}
                    >
                        <Text>{ this.state.viewPass ? "Show" : "Hide" }</Text>
                    </TouchableOpacity>
                )}
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