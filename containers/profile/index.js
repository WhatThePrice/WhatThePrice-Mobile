import React from "react";
import { View, Text, Alert } from "react-native";
import InputButton from "components/inputButton";

import { connect } from "react-redux";
import Actions from "actions";

class Profile extends React.Component {
    _logoutPressed() {
        this.props.onResetUserSession();
        Alert.alert("Bye-bye", "Logout Successful", [
            {
                text: "Okay",
                onPress: () => this.props.navigation.navigate("Auth"),
            }
        ]);
    }
    render() {
        return(
            <View>
                <Text>This is Profile Page</Text>
                <View style={styles.logout}>
                    <InputButton
                        title="Logout"
                        screenColor="darkgreen"
                        textColor="white"
                        navigate={ () => this._logoutPressed() }
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    logout: {
        width: "100%",
        paddingHorizontal: 20,
        marginVertical: 20,
    },
}

const mapStateToProps = (store) => ({
    // getUserSession: Actions.getUserSession(store),
});

const mapDispatchToProps = {
    onResetUserSession: Actions.resetUserSession,
};

export default connect(mapStateToProps, mapDispatchToProps) (Profile);