import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";

class InputButton extends React.Component {
    render() {
        return(
            <TouchableOpacity
                style={[styles.button, { backgroundColor: this.props.screenColor, width: this.props.width }]}
                onPress={this.props.navigate}
                disabled={this.props.loading}
            >
                {this.props.loading ? (
                    <ActivityIndicator />
                ) : (
                    <Text style={{ color: this.props.textColor }}>{this.props.title}</Text>
                )}
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default InputButton;