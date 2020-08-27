import React from "react";
import { View, Text } from "react-native";

import SearchBar from "components/searchBar";

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
        }
    }
    queryPressed() {
        const data = {
            query: this.state.query,
        }
        console.log(data);
    }
    render() {
        return(
            <View>
                <Text>Yes</Text>
                <SearchBar
                    title="Search"
                    onChange={(query) => this.setState({query})}
                    onPress = {() => this.queryPressed()}
                />
            </View>
        );
    }
}

export default Test;