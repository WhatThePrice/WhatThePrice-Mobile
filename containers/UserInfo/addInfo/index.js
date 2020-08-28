import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";

import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import TextInputComponent from "components/textInput";
import InputButton from "components/inputButton";

import { connect } from "react-redux";
import Actions from "actions";

class Information extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            birth_date: moment().format("YYYY-MM-DD"),
            gender: "",
            postcode: "",
            phone_number: "",
            date: new Date(),
            mode: "date",
            show: false,
            // taskDeadline: moment().format("D MMMM YYYY"),
            loading: false,
        };
    }
    componentDidMount() {
        // console.log("DID MOUNT", this.props.getUserSession);
        // const { getUserSession } = this.props;
        // if(Object.keys(getUserSession.data).length != 0) {
        //     this.props.navigation.navigate("What The Price");
        // }
    }
    componentDidUpdate(prevProps) {
        const { getEditAllData } = this.props;

        // Edit Info
        if(prevProps.getEditAllData.isLoading && !getEditAllData.isLoading) {
            this.setState({ loading: false });
            console.log("DID UPDATE EDIT ALL yes", getEditAllData);
            if(
                Object.keys(getEditAllData.data).length != 0 &&
                getEditAllData.data != null
            ) {
                console.log("TIME is ", getEditAllData.data);
                Alert.alert("Success", "Information changed", [
                    {
                        text: "To Profile",
                        onPress: () => this.props.navigation.navigate("What The Price"),
                    },
                ]);
            } else if(getEditAllData.error != null) {
              Alert.alert("Failed", "Edit Info failed");
            }
        }
    }
    _editPressed() {
        const data = {
            birth_date: this.state.birth_date,
            gender: this.state.gender,
            postcode: this.state.postcode,
            phone_number: this.state.phone_number,
        }
        this.setState({ loading: true });
        this.props.onEditAll(data);
        console.log(data);
    }
    render() {
        return(
            <View>
                {/* <Text>This is Edit info</Text> */}
                <View style={styles.section}>
                    <View>
                        <Text>Birth Date</Text>
                        <TouchableOpacity
                            style={{
                                backgroundColor: "white",
                                borderWidth: 1,
                                borderColor: "black",
                                borderRadius: 3,
                                height: 30,
                                marginVertical: 10,
                                justifyContent: "center",
                                paddingHorizontal: 20,
                            }}
                            onPress={ () => this.setState({ show: true }) }
                        >
                            <Text>{(this.state.birth_date)}</Text>
                        </TouchableOpacity>
                    </View>
                    {this.state.show && (
                        <DateTimePicker
                            value={this.state.date}
                            mode={this.state.mode}
                            onChange={ (event, selectedDate) => {
                                // console.log(selectedDate);
                                this.setState({ birth_date: moment(selectedDate).format("YYYY-MM-DD"), show: false });
                            } }
                        />
                    )}
                    <TextInputComponent
                        textInput="Gender"
                        inputPlaceHolder="gender"
                        inputKeyType="default"
                        inputSecure={false}
                        onChange={ (gender) => this.setState({gender}) }
                        // clearButton="always"
                    />
                    <TextInputComponent
                        textInput="Postcode"
                        inputPlaceHolder="postcode"
                        inputKeyType="number-pad"
                        inputSecure={false}
                        onChange={ (postcode) => this.setState({postcode}) }
                        // clearButton="always"
                    />
                    <TextInputComponent
                        textInput="Phone number"
                        inputPlaceHolder="phone number"
                        inputKeyType="phone-pad"
                        inputSecure={false}
                        onChange={ (phone_number) => this.setState({phone_number}) }
                        // clearButton="always"
                    />
                    <InputButton
                        loading={this.state.loading}
                        title="Submit"
                        textColor="white"
                        screenColor="#219653"
                        navigate={ () => this._editPressed() }
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    section: {
        marginVertical: 40,
        paddingHorizontal: 20,
    },
}

const mapStateToProps = (store) => ({
    getEditAllData: Actions.getEditAllData(store),
});

const mapDispatchToProps = {
    onEditAll: Actions.editAll,
};

export default connect(mapStateToProps, mapDispatchToProps) (Information);