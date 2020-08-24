import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

// import "./style.css";

// images
import shopee from "assets/images/logos/shopee_square.png";
import lazada from "assets/images/logos/lazada_square.png";

class ProductList extends React.Component{
    showPlatformLogo() {
        switch(this.props.platform){
            case "lazada": return lazada;
            case "shopee": return shopee;
            default : return shopee;
        }
    }

    render() {
        return(
            <TouchableOpacity
                className="listContainer"
                onMouseEnter={this.props.onHover}
                style={this.props.style}
            >
                <View className="platformColumn infoColumn" style={styles.listpic}>
                    <Image
                        // className="platformLogo"
                        // style={styles.platformLogo}
                        source={this.showPlatformLogo()}
                        alt={this.props.platform}
                    />
                </View>
                <View className="nameColumn infoColumn">
                    <Text>{
                        this.props.name.length === 80 ? this.props.name : this.props.name.substr(0,80) + "..."
                    }</Text>
                </View>
                <View className="priceColumn infoColumn"><Text>RM{this.props.price}</Text></View>
                <View className="linkColumn infoColumn"><Text href={`http://${this.props.url}`} target="_blank" rel="noopener noreferrer">BUY NOW</Text></View>
            </TouchableOpacity>
        )
    }
}

const styles = {
    platformLogo: {
        width: 120,
        height: 180,
    },
    // list: {
    //     backgroundColor: "orange",
    //     marginVertical: 20,
    // },
    listpic: {
        width: "100%",
        height: 300,
        backgroundColor: "purple",
        justifyContent: "center",
        alignItems: "center",
    },
}

export default ProductList;