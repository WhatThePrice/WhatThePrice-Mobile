import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

import Header from "components/header";
import TextInputComponent from "components/textInput";
import InputButton from "components/inputButton";

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoginForm: true,
        }
    }
    render() {
        return(
            <ScrollView>
                <Header />
                <View>
                    <Text>Logo</Text>
                    <Text>This is Authentication Page Hooray</Text>
                    <View style={styles.buttonHolder}>
                        <TouchableOpacity
                            onPress={() => this.setState({ showLoginForm: true })}
                        >
                            <View style={ this.state.showLoginForm ? {borderBottomWidth: 2, borderBottomColor: "darkgreen"} : {opacity: 0.1} }>
                                <Text style={styles.buttonText}>Login</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.setState({ showLoginForm: false })}
                        >
                            <View style={ this.state.showLoginForm ? {opacity: 0.1} : {borderBottomWidth: 2, borderBottomColor: "darkgreen"} }>
                                <Text style={styles.buttonText}>Register</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {this.state.showLoginForm ? (
                    <View style={styles.authContainer}>
                        <TextInputComponent
                            textInput="Email"
                            inputPlaceHolder="email"
                            inputKeyType="default"
                            inputSecure={false}
                        />
                        <TextInputComponent
                            textInput="Password"
                            inputPlaceHolder="password"
                            inputKeyType="default"
                            inputSecure={true}
                        />
                        <InputButton
                            title="Login"
                            screenColor="darkgreen"
                            textColor="white"
                            navigate={ () => this.props.navigation.navigate("BottomTab") }
                        />
                    </View>
                ) : (
                    <View style={styles.authContainer}>
                        <TextInputComponent
                            textInput="First Name"
                            inputPlaceHolder="first name"
                            inputKeyType="default"
                            inputSecure={false}
                        />
                        <TextInputComponent
                            textInput="Last Name"
                            inputPlaceHolder="last name"
                            inputKeyType="default"
                            inputSecure={false}
                        />
                        <TextInputComponent
                            textInput="Email"
                            inputPlaceHolder="email"
                            inputKeyType="default"
                            inputSecure={false}
                        />
                        <TextInputComponent
                            textInput="Password"
                            inputPlaceHolder="password"
                            inputKeyType="default"
                            inputSecure={true}
                        />
                        <TextInputComponent
                            textInput="Password Confirmation"
                            inputPlaceHolder="password confirmation"
                            inputKeyType="default"
                            inputSecure={true}
                        />
                        <TextInputComponent
                            textInput="Phone number"
                            inputPlaceHolder="phone number"
                            inputKeyType="phone-pad"
                            inputSecure={false}
                        />
                        <InputButton
                            title="Register"
                            screenColor="darkgreen"
                            textColor="white"
                            // navigate={ () => this.props.navigation.navigate("BottomTab") }
                        />
                    </View>
                ) }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    authContainer: {
        marginVertical: 20,
        paddingHorizontal: 20,
    },
    buttonHolder: {
        flexDirection: "row",
        marginVertical: 20,
        width: "100%",
        paddingHorizontal: 20,    
    },
    buttonText: {
        marginHorizontal: 20,
    },
})

export default Auth;