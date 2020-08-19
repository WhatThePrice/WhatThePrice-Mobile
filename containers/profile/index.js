import React from "react";
import { View, Text, Alert, FlatList, RefreshControl } from "react-native";
import InputButton from "components/inputButton";

import { connect } from "react-redux";
import Actions from "actions";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
            refreshing: false,
        };
    }

    componentDidMount() {
        this.props.onGetInfo();
    }

    componentDidUpdate(prevProps) {
        const { getGetInfoData } = this.props;

       console.log("DID UPDATE USER INFO" ,getGetInfoData)
       if(prevProps.getGetInfoData.isLoading && !getGetInfoData.isLoading) {
           this.setState({ refreshing: false });
           if(getGetInfoData.data.status === "success"){
                this.setState({ todoList: getGetInfoData.data.user });
           };
        //    this.setState({ todoList: getGetInfoData.data.list });
       }
    }

    onRefresh() {
        this.setState({ refreshing: true });
        // setTimeout( () => {this.props.onGetInfo()}, 2000 );
        this.props.onGetInfo();
    }

    _freePressed() {
        Alert.alert("Cancelled", "Congratulations");
    }

    _upgradePressed() {
        Alert.alert("Upgraded", "Congratulations");
    }

    _logoutPressed() {
        this.props.onResetUserSession();
        Alert.alert("Bye-bye", "Logout Successful", [
            {
                text: "Login Page",
                onPress: () => this.props.navigation.navigate("Auth"),
            }
        ]);
    }

    render() {
        return(
            <View style={styles.profile}>
                <Text>This is Profile Page</Text>
                <View style={styles.info}>
                    <Text style={[styles.text, styles.bold]}>User ID: {this.state.todoList.id}</Text>
                    <Text style={styles.text}>Name: {this.state.todoList.name}</Text>
                    <Text style={styles.text}>Email: {this.state.todoList.email}</Text>
                    <Text style={[styles.text, styles.bold]}>User Type: {this.state.todoList.user_type}</Text>
                </View>
                {/* <FlatList
                    style={styles.profileList}
                    // data={movieData.filter((list) => (list.type === this.state.selected))}
                    // data={this.state.todoList.filter((item) => (item.status === this.state.selected))}
                    renderItem={({ item }) => this._renderCardList(item)}
                    // numColumns={2}
                    contentContainerStyle={{ alignItems: "center" }}
                    refreshControl = {
                        <RefreshControl
                            refreshing = {this.state.refreshing}
                            onRefresh = {() => (this.onRefresh())}
                        />
                    }
                    // Ask why FlatList is not displaying data. Why data is empty when calling for API
                /> */}

                {this.state.todoList.user_type === "premium" ? (
                    <View style={styles.free}>
                    <InputButton
                        title="Cancel Premium"
                        screenColor="silver"
                        textColor="black"
                        navigate={ () => this.props.navigation.navigate("UserType") }
                    />
                </View>
                ) : (
                    <View style={styles.premium}>
                        <InputButton
                            title="Upgrade To Premium"
                            screenColor="gold"
                            textColor="black"
                            navigate={ () => this.props.navigation.navigate("UserType") }
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
            </View>
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
    text: {
        fontSize: 20,
        marginVertical: 20,
    },
    free: {
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: "darkblue",
    },
    premium: {
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: "skyblue",
    },
    logout: {
        width: "100%",
        paddingHorizontal: 20,
        marginVertical: 20,
    },
}

const mapStateToProps = (store) => ({
    // getUserSession: Actions.getUserSession(store),
    getGetInfoData: Actions.getGetInfoData(store),
});

const mapDispatchToProps = {
    onResetUserSession: Actions.resetUserSession,
    onGetInfo: Actions.getInfo,
};

export default connect(mapStateToProps, mapDispatchToProps) (Profile);