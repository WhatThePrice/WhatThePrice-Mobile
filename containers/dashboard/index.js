import React from "react";
import { View, Text, Alert } from "react-native";

import TextInputComponent from "components/textInput";
import InputButton from "components/inputButton";

import { connect } from "react-redux";
import Actions from "actions";

class Dashboard extends React.Component {
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
    render() {
        return(
            <View>
                <View style={styles.header}>
                    <Text style={styles.text}>Welcome, {this.state.todoList.name}!</Text>
                </View>
                <View style={styles.search}>
                    <TextInputComponent
                        textInput="Search Product"
                        inputPlaceHolder="product name"
                        inputKeyType="default"
                        inputSecure={false}
                    />
                    <InputButton
                        title="Search"
                        textColor="white"
                        screenColor="darkgreen"
                        navigate={ () => this.props.navigation.navigate("Result") }
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    header: {
        marginVertical: 20,
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
    search: {
        width: "100%",
        marginVertical: 20,
        paddingHorizontal: 20,
    },
}

const mapStateToProps = (store) => ({
    // getUserSession: Actions.getUserSession(store),
    getGetInfoData: Actions.getGetInfoData(store),
});

const mapDispatchToProps = {
    // onResetUserSession: Actions.resetUserSession,
    onGetInfo: Actions.getInfo,
};

export default connect(mapStateToProps, mapDispatchToProps) (Dashboard);