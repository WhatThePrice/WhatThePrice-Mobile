import React from "react";
import { View, Text, Alert, FlatList, RefreshControl, ScrollView } from "react-native";
import InputButton from "components/inputButton";

import { connect } from "react-redux";
import Actions from "actions";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: [],
            refreshing: false,
        };
    }

    // // Get Info

    // componentDidMount() {
    //     this.props.onGetInfo();
    // }

    // componentDidUpdate(prevProps) {
    //     const { getGetInfoData } = this.props;

    //    console.log("DID UPDATE USER INFO yes" ,getGetInfoData)
    //    if(prevProps.getGetInfoData.isLoading && !getGetInfoData.isLoading) {
    //        this.setState({ refreshing: false });
    //        if(getGetInfoData.data.status === "success"){
    //             this.setState({ userInfo: getGetInfoData.data.user });
    //        };
    //     //    this.setState({ userInfo: getGetInfoData.data.list });
    //    }
    // }

    // Get Full

    componentDidMount() {
        this.props.onGetFull();
    }

    componentDidUpdate(prevProps) {
        const { getGetFullData } = this.props;

       console.log("DID UPDATE USER FULL yes" ,getGetFullData)
       if(prevProps.getGetFullData.isLoading && !getGetFullData.isLoading) {
           this.setState({ refreshing: false });
           if(getGetFullData.data.status === "success"){
                this.setState({ userInfo: getGetFullData.data.userProfile[0] });
           };
        //    this.setState({ todoList: getGetFullData.data.list });
       }

       // Premium Upgrade
       const { getPremiumUpgradeData } = this.props;

        // User Type
        if(prevProps.getPremiumUpgradeData.isLoading && !getPremiumUpgradeData.isLoading) {
            this.setState({ loading: false });
            console.log("Premium Upgrade Data", getPremiumUpgradeData);
            if(
                Object.keys(getPremiumUpgradeData.data).length != 0 &&
                getPremiumUpgradeData.data != null
            ) {
                console.log("TIME is ", getPremiumUpgradeData.data);
                Alert.alert("Success", "Premium Subscribed");
            } else if(getPremiumUpgradeData.error != null) {
              Alert.alert("Failed", "Premium upgrade failed");
            }
        }

        // Premium Downgrade
       const { getPremiumDowngradeData } = this.props;

       // User Type
       if(prevProps.getPremiumDowngradeData.isLoading && !getPremiumDowngradeData.isLoading) {
           this.setState({ loading: false });
           console.log("Premium Downgrade Data", getPremiumDowngradeData);
           if(
               Object.keys(getPremiumDowngradeData.data).length != 0 &&
               getPremiumDowngradeData.data != null
           ) {
               console.log("TIME is ", getPremiumDowngradeData.data);
               Alert.alert("Success", "Premium Cancelled");
           } else if(getPremiumDowngradeData.error != null) {
             Alert.alert("Failed", "Premium downgrade failed");
           }
       }
    }

    onRefresh() {
        this.setState({ refreshing: true });
        // setTimeout( () => {this.props.onGetFull()}, 2000 );
        this.props.onGetInfo();
    }

    _freePressed() {
        Alert.alert("Cancelled", "Congratulations");
    }

    _upgradePressed() {
        const data = {
            type: this.state.type,
        }
        this.setState({ loading: true });
        this.props.onPremiumUpgrade(data);
        console.log(data);
    }

    _downgradePressed() {
        const data = {
            type: this.state.type,
        }
        this.setState({ loading: true });
        this.props.onPremiumDowngrade(data);
        console.log(data);
    }

    _logoutPressed() {
        this.props.onResetUserSession();
        Alert.alert("Bye-bye", "Logout Successful", [
            {
                text: "Login Page",
                onPress: () => this.props.navigation.navigate("Authentication"),
            }
        ]);
    }

    render() {
        return(
            <ScrollView style={styles.profile}>
                {/* <Text>This is Profile Page</Text> */}
                <View style={styles.info}>
                    <Text style={[styles.title, styles.bold]}>Profile</Text>
                    <Text style={[styles.text, styles.bold]}>User ID: {this.state.userInfo.id}</Text>
                    <Text style={styles.text}>Name: {this.state.userInfo.name}</Text>
                    <Text style={styles.text}>Email: {this.state.userInfo.email}</Text>
                    <Text style={[styles.title, styles.bold, styles.space]}>Additional Details</Text>
                    <Text style={styles.text}>Birth date: {this.state.userInfo.birth_date}</Text>
                    <Text style={styles.text}>Gender: {this.state.userInfo.gender}</Text>
                    <Text style={styles.text}>Phone number: {this.state.userInfo.phone_number}</Text>
                    <Text style={styles.text}>Postcode: {this.state.userInfo.postcode}</Text>
                    <Text style={[styles.title, styles.bold, styles.space]}>Subscription</Text>
                    <Text style={[styles.text, styles.bold]}>User Type: {this.state.userInfo.user_type}</Text>
                </View>

                <View style={styles.detail}>
                    <InputButton
                        title="Edit Personal Details"
                        screenColor="darkgreen"
                        textColor="white"
                        navigate={ () => this.props.navigation.navigate("Information") }
                    />
                </View>

                {this.state.userInfo.user_type === "premium" ? (
                    <View style={styles.free}>
                    <InputButton
                        title="Cancel Premium"
                        screenColor="silver"
                        textColor="black"
                        navigate={ () => this._downgradePressed() }
                    />
                </View>
                ) : (
                    <View style={styles.premium}>
                        <InputButton
                            title="Upgrade To Premium"
                            screenColor="gold"
                            textColor="black"
                            navigate={ () => this._upgradePressed() }
                            // navigate={ () => [this._upgradePressed(), this.props.navigation.navigate("UserType")] }
                        />
                    </View>
                )}

                <View style={styles.logout}>
                    <InputButton
                        title="Logout"
                        screenColor="darkgreen"
                        textColor="white"
                        navigate={ () => this._logoutPressed() }
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = {
    profile: {
        height: "100%",
        width: "100%",
    },
    info: {
        width: "100%",
        marginVertical: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    bold: {
        fontWeight: "bold",
    },
    title: {
        fontSize: 20,
        textDecorationLine: "underline",
        marginBottom: 5,
    },
    text: {
        fontSize: 15,
        marginVertical: 5,
    },
    space: {
        marginTop: 10,
    },
    detail: {
        width: "100%",
        paddingHorizontal: 20,
        marginVertical: 20,
    },
    free: {
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 20,
        // backgroundColor: "darkblue",
    },
    premium: {
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 20,
        // backgroundColor: "skyblue",
    },
    logout: {
        width: "100%",
        paddingHorizontal: 20,
        marginVertical: 20,
    },
}

// // Get Info

// const mapStateToProps = (store) => ({
//     // getUserSession: Actions.getUserSession(store),
//     getGetInfoData: Actions.getGetInfoData(store),
// });

// const mapDispatchToProps = {
//     onResetUserSession: Actions.resetUserSession,
//     onGetInfo: Actions.getInfo,
// };

// Get Full

const mapStateToProps = (store) => ({
    // getUserSession: Actions.getUserSession(store),
    getGetFullData: Actions.getGetFullData(store),
    getPremiumUpgradeData: Actions.getPremiumUpgradeData(store),
    getPremiumDowngradeData: Actions.getPremiumDowngradeData(store),
});

const mapDispatchToProps = {
    onResetUserSession: Actions.resetUserSession,
    onGetFull: Actions.getFull,
    onPremiumUpgrade: Actions.premiumUpgrade,
    onPremiumDowngrade: Actions.premiumDowngrade,
};

export default connect(mapStateToProps, mapDispatchToProps) (Profile);