import React from "react";
import { View, Text, Alert } from "react-native";

import { connect } from "react-redux";
import Actions from "actions";

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: [],
            refreshing: false,
        };
    }

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
                this.setState({ userInfo: getGetFullData.data.userProfile });
           };
        //    this.setState({ userInfo: getGetFullData.data.list });
       }
    }

    render() {
        return(
            <View>
                <Text>This is details</Text>
                <Text>Name: {this.state.userInfo.name}</Text>
                <Text>Gender: {this.state.userInfo.gender}</Text>
            </View>
        );
    }
}

// Get Full

const mapStateToProps = (store) => ({
    // getUserSession: Actions.getUserSession(store),
    getGetFullData: Actions.getGetFullData(store),
});

const mapDispatchToProps = {
    // onResetUserSession: Actions.resetUserSession,
    onGetFull: Actions.getFull,
};

export default connect(mapStateToProps, mapDispatchToProps) (Details);