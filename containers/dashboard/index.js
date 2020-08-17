import React from "react";
import { View, Text, Alert } from "react-native";
import InputButton from "components/inputButton";

class Dashboard extends React.Component {
    _upgradePressed() {
        Alert.alert("Upgraded", "Congratulations");
    }
    render() {
        return(
            <View>
                <Text>This is Dashboard</Text>
                <View style={styles.premium}>
                    <InputButton
                        title="Upgrade To Premium"
                        screenColor="darkgreen"
                        textColor="white"
                        navigate={ () => this._upgradePressed() }
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    premium: {
        width: "100%",
        paddingHorizontal: 20,
        marginVertical: 20,
    },
}

export default Dashboard;