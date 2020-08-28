import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
                    style={[styles.formInput, {display:this.props.display}]}
                    keyboardType={this.props.inputKeyType}
                    secureTextEntry={this.props.inputSecure && this.state.viewPass}
                    onChangeText={this.props.onChange}
                    clearButtonMode={this.props.clearButton}
                />
                {this.props.showHide && (
                    <TouchableOpacity
                        onPress = { () => this.setState({ viewPass: !this.state.viewPass }) }
                        style = {{ 
                            width: 30,
                            height: 30,
                            backgroundColor: "#219653",
                            marginBottom: 20,
                            justifyContent: "center",
                            alignItems: "center",
                            borderWidth: 2,
                            borderColor: "black",
                            borderRadius: 5,
                        }}
                    >
                        {/* <Text>{ this.state.viewPass ? "Show" : "Hide" }</Text> */}
                        <MaterialCommunityIcons
                            name = { this.state.viewPass ? "eye-off-outline" : "eye-outline" }
                            size="20"
                        />
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