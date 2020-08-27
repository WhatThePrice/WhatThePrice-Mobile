import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from "react-native";

import { connect } from "react-redux";
import Actions from "actions";

import Header from "components/header";
import TextInputComponent from "components/textInput";
import InputButton from "components/inputButton";

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoginForm: true,
            email: "",
            name: "",
            password: "",
            password_confirmation: "",
            loading: false,
        }
    }
    componentDidMount() {
        console.log("DID MOUNT", this.props.getUserSession);
        const { getUserSession } = this.props;
        if(Object.keys(getUserSession.data).length != 0) {
            this.props.navigation.navigate("What The Price");
        }
    }
    componentDidUpdate(prevProps) {
        const { getLoginData, getRegisterData } = this.props;

        // Login
        if(prevProps.getLoginData.isLoading && !getLoginData.isLoading) {
            this.setState({ loading: false });
            console.log("Login Data", getLoginData);
            if(
                Object.keys(getLoginData.data).length != 0 &&
                getLoginData.data != null
            ) {
                console.log("TIME is ", getLoginData.data);
                Alert.alert("Success", "Login successful", [
                    {
                        text: "To Dash",
                        onPress: () => this.props.navigation.navigate("What The Price"),
                    },
                ]);
            } else if(getLoginData.error != null) {
              Alert.alert("Failed", "Incorrect email or password");
            }
        }

        // Register
        if(prevProps.getRegisterData.isLoading && !getRegisterData.isLoading) {
            this.setState({ loading: false });
            console.log("Register Data", getRegisterData);
            if(
                Object.keys(getRegisterData.data).length != 0 &&
                getRegisterData.data != null
            ) {
                console.log("TIME is ", getRegisterData.data);
                Alert.alert("Success", "Register successful");
            } else if(getRegisterData.error != null) {
                Alert.alert("Failed", "Register failed");
            }
          }
    }
    _buttonPressed() {
        const data = {
            // email: this.state.email,
            // password: this.state.password,
            email: "jam@mail.com",
            password: "123456",
        }
        this.setState({ loading: true });
        this.props.onLogin(data);
        console.log(data);
    }
    _buttonPressed2() {
        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
        }
        this.setState({ loading: true });
        this.props.onRegister(data);
        console.log(data);
    }
    render() {
        return(
            <ScrollView>
                <Header />
                <View>
                    {/* <Text>Logo</Text>
                    <Text>This is Authentication Page Hooray</Text> */}
                    <View style={styles.buttonHolder}>
                        <TouchableOpacity
                            onPress={() => this.setState({ showLoginForm: true })}
                        >
                            <View
                                style={ this.state.showLoginForm ? {
                                    borderBottomWidth: 2, borderBottomColor: "darkgreen"
                                } : {
                                    opacity: 0.1
                                } }
                            >
                                <Text style={styles.buttonText}>Login</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.setState({ showLoginForm: false })}
                        >
                            <View
                                style={ this.state.showLoginForm ? {
                                    opacity: 0.1
                                } : {
                                    borderBottomWidth: 2, borderBottomColor: "darkgreen"
                                } }
                            >
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
                            onChange={ (email) => this.setState({email}) }
                        />
                        <TextInputComponent
                            textInput="Password"
                            inputPlaceHolder="password"
                            inputKeyType="default"
                            inputSecure={true}
                            showHide={true}
                            onChange={ (password) => this.setState({password}) }
                        />
                        <InputButton
                            loading={this.state.loading}
                            title="Login"
                            screenColor="darkgreen"
                            textColor="white"
                            // navigate={ () => this.props.navigation.navigate("What The Price") }
                            navigate = {() => this._buttonPressed()}
                        />
                    </View>
                ) : (
                    <View style={styles.authContainer}>
                        <TextInputComponent
                            textInput="Name"
                            inputPlaceHolder="name"
                            inputKeyType="default"
                            inputSecure={false}
                            onChange={ (name) => this.setState({name}) }
                        />
                        <TextInputComponent
                            textInput="Email"
                            inputPlaceHolder="email"
                            inputKeyType="default"
                            inputSecure={false}
                            onChange={ (email) => this.setState({email}) }
                        />
                        <TextInputComponent
                            textInput="Password"
                            inputPlaceHolder="password"
                            inputKeyType="default"
                            inputSecure={true}
                            showHide={true}
                            onChange={ (password) => this.setState({password}) }
                        />
                        <TextInputComponent
                            textInput="Password Confirmation"
                            inputPlaceHolder="password confirmation"
                            inputKeyType="default"
                            inputSecure={true}
                            showHide={true}
                            onChange={ (password_confirmation) => this.setState({password_confirmation}) }
                        />
                        {/* <TextInputComponent
                            textInput="Phone number"
                            inputPlaceHolder="phone number"
                            inputKeyType="phone-pad"
                            inputSecure={false}
                        /> */}
                        <InputButton
                            loading={this.state.loading}
                            title="Register"
                            screenColor="darkgreen"
                            textColor="white"
                            // navigate={ () => this.props.navigation.navigate("What The Price") }
                            navigate = {() => this._buttonPressed2()}
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

const mapStateToProps = (store) => ({
    getUserSession: Actions.getUserSession(store),
    getLoginData: Actions.getLoginData(store),
    getRegisterData: Actions.getRegisterData(store),
});
const mapDispatchToProps = {
    onLogin: Actions.login,
    onRegister: Actions.register,
};

export default connect(mapStateToProps, mapDispatchToProps) (Auth);
// export default Auth;