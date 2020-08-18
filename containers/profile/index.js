import React from "react";
import { View, Text, Alert, FlatList } from "react-native";
import InputButton from "components/inputButton";

import { connect } from "react-redux";
import Actions from "actions";

class Profile extends React.Component {
    constructor() {
        super();
        this.state ={
            todoList: [],
        };
    }

    componentDidMount() {
        this.props.onGetUser();
    }

    componentDidUpdate(prevProps) {
        const { getGetUserData } = this.props;

       console.log("DID UPDATE" ,getGetUserData)
       if(prevProps.getGetUserData.isLoading && !getGetUserData.isLoading) {
        //    this.setState({ refreshing: false });
           if(getGetUserData.data.status === "success"){
                this.setState({ todoList: getGetUserData.data.list });
           };
        //    this.setState({ todoList: getGetAllData.data.list });
       }
    }

    _renderCardList(item) {
        return (
            <View>
                <Text style={styles.header}>User ID: {item.user.id}</Text>
                <Text style={styles.body}>Name: {item.name}</Text>
                <Text style={styles.body}>Email: {item.email}</Text>
                <Text style={styles.body}>Type: {item.user_type}</Text>
            </View>
        );
    }

    _upgradePressed() {
        Alert.alert("Upgraded", "Congratulations");
    }

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
            <View style={styles.profile}>
                <Text>This is Profile Page</Text>
                <FlatList
                    // style={styles.movieList}
                    // data={movieData.filter((list) => (list.type === this.state.selected))}
                    data={this.state.todoList.filter((item) => (item.status === this.state.selected))}
                    renderItem={({ item }) => this._renderCardList(item)}
                    // numColumns={2}
                    contentContainerStyle={{ alignItems: "center" }}
                    // refreshControl = {
                    //     <RefreshControl
                    //         refreshing = {this.state.refreshing}
                    //         onRefresh = {() => (this.onRefresh())}
                    //     />
                    // }
                />
                <View style={styles.premium}>
                    <InputButton
                        title="Upgrade To Premium"
                        screenColor="darkgreen"
                        textColor="white"
                        navigate={ () => this._upgradePressed() }
                    />
                </View>
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
    },
    premium: {
        width: "100%",
        paddingHorizontal: 20,
        marginVertical: 20,
    },
    logout: {
        width: "100%",
        paddingHorizontal: 20,
        marginVertical: 20,
    },
}

const mapStateToProps = (store) => ({
    // getUserSession: Actions.getUserSession(store),
    getGetUserData: Actions.getGetUserData(store),
});

const mapDispatchToProps = {
    onResetUserSession: Actions.resetUserSession,
    onGetUser: Actions.getUser,
};

export default connect(mapStateToProps, mapDispatchToProps) (Profile);