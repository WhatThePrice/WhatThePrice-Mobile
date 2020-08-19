import React from "react";
import { View, Text, Alert } from "react-native";

import TextInputComponent from "components/textInput";
import InputButton from "components/inputButton";

import { connect } from "react-redux";
import Actions from "actions";

class UserType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // showLoginForm: true,
            type: "",
            loading: false,
        }
    }
    componentDidMount() {
        // console.log("DID MOUNT", this.props.getUserSession);
        // const { getUserSession } = this.props;
        // if(Object.keys(getUserSession.data).length != 0) {
        //     this.props.navigation.navigate("BottomTab");
        // }
    }
    componentDidUpdate(prevProps) {
        const { getPremiumUpgradeData } = this.props;

        // Login
        if(prevProps.getPremiumUpgradeData.isLoading && !getPremiumUpgradeData.isLoading) {
            this.setState({ loading: false });
            console.log("Premium Upgrade Data", getPremiumUpgradeData);
            if(
                Object.keys(getPremiumUpgradeData.data).length != 0 &&
                getPremiumUpgradeData.data != null
            ) {
                console.log("TIME is ", getPremiumUpgradeData.data);
                Alert.alert("Success", "User Type changed", [
                    {
                        text: "To Profile",
                        onPress: () => this.props.navigation.navigate("BottomTab"),
                    },
                ]);
            } else if(getPremiumUpgradeData.error != null) {
              Alert.alert("Failed", "Premium upgrade failed");
            }
        }
    }
    _upgradePressed() {
        const data = {
            type: this.state.type,
        }
        this.setState({ loading: true });
        this.props.onPremiumUpgrade(data);
        console.log(data);
    }
    render() {
        return(
            <View style={styles.container}>
                {/* <Text>This is User Type</Text> */}
                <TextInputComponent
                    textInput="Account Type"
                    inputPlaceHolder="premium/free"
                    inputKeyType="default"
                    inputSecure={false}
                    onChange={ (type) => this.setState({type}) }
                />
                <InputButton
                    loading={this.state.loading}
                    title="Change type"
                    screenColor="darkgreen"
                    textColor="white"
                    navigate={ () => this._upgradePressed() }
                />
            </View>
        );
    }
}

const styles = {
    container: {
        marginVertical: 40,
        paddingHorizontal: 20,
    },
}

const mapStateToProps = (store) => ({
    getPremiumUpgradeData: Actions.getPremiumUpgradeData(store),
});

const mapDispatchToProps = {
    onPremiumUpgrade: Actions.premiumUpgrade,
};

export default connect(mapStateToProps, mapDispatchToProps) (UserType);