import React from "react";
import { View, Text } from "react-native";

import TextInputComponent from "components/textInput";
import InputButton from "components/inputButton";

// Style
// import "./style.css";

class SearchBar extends React.Component{
    render() {
        return(
            <View 
                style={{
                    height: this.props.noQuery && 200,
                    marginTop: this.props.noQuery && 100,
                    backgroundColor: this.props.noQuery && "transparent",
                    alignItems: this.props.noQuery && "center",
                }}
            >
                {this.props.noQuery && 
                    <Text className="webTitle">WhatThePrice</Text>
                }
                <View
                    // style={styles.inputHolder}
                >
                    <TextInputComponent 
                        inputPlaceHolder={this.props.inputPlaceHolder}
                        // onChange={this.props.onChange}
                        style={styles.searchInput}
                        textInput={this.props.textInput}
                        inputKeyType="default"
                        inputSecure={false}
                        onChange={this.props.onChange}
                        clearButton={this.props.clearButton}
                        display={this.props.display}
                    />
                    <InputButton
                        loading={this.props.loading}
                        title={this.props.title}
                        textColor="white"
                        screenColor="darkgreen"
                        navigate={(this.props.onPress)}
                    />
                </View>
            </View>
        )
    }
}

const styles = {
    inputHolder: {
        width: "100%",
        paddingHorizontal: 20,
    },
    searchInput: {
        // margin: "0 auto",
    },
}

export default SearchBar;