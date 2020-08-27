import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";

import AntDesign from 'react-native-vector-icons/AntDesign';

// import "./style.css";

// images
import shopee from "assets/images/logos/shopee_square.png";
import lazada from "assets/images/logos/lazada_square.png";

import InputButton from "components/inputButton";

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
            <View
                className="listContainer"
                onMouseEnter={this.props.onHover}
                style={[this.props.style, styles.adjust]}
            >
                <View className="platformColumn infoColumn" style={styles.listpic}>
                    <Image
                        style={styles.platformLogo}
                        source={{uri: `http://${this.props.image}`}}
                        alt={this.props.platform}
                    />
                </View>

                <View style={styles.details}>
                    <Text style={{marginTop: 5}}>
                        Name: {
                            this.props.name.length === 80 ? this.props.name : this.props.name.substr(0,80) + "..."
                        }
                    </Text>
                    <View className="priceColumn infoColumn" style={[styles.footer, styles.midsection]}>
                        <Text style={{fontWeight: "bold", marginVertical: 5}}>Price: RM{this.props.price}</Text>
                        <TouchableOpacity>
                            <AntDesign
                                // Tracking function
                                // name = {focused ? ("heart"): ("hearto")}
                                name={this.props.platform === "lazada" ? ("hearto"): ("heart")}
                                size = "25"
                                // color = {color}
                                color = "black"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footer}>
                        {/* <Text>Platform: {this.props.company}</Text> */}
                        <View style={styles.listpic2}>
                            <Image
                                // className="platformLogo"
                                style={styles.platformLogo2}
                                source={this.showPlatformLogo()}
                                // source={{uri: `http://${this.props.image}`}}
                                alt={this.props.platform}
                            />
                        </View>
                        <TouchableOpacity
                            className="linkColumn infoColumn"
                            onPress={() => { Linking.openURL(`http://${this.props.url}`)}}
                            style={styles.buynow}
                        >
                            <Text href={`http://${this.props.url}`} target="_blank" rel="noopener noreferrer">BUY NOW</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = {
    adjust: {
        width: "100%",
        height: 200,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 10,
    },
    platformLogo: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    listpic: {
        width: 90,
        height: 90,
        marginTop: 30,
        // backgroundColor: "purple",
        // justifyContent: "center",
        // alignItems: "center",
    },
    details: {
        width: 225,
        // backgroundColor: "skyblue",
        justifyContent: "center",
    },
    platformLogo2: {
        height: 40,
        width: 40,
        resizeMode: "contain",
    },
    listpic2: {
        width: 40,
        height: 40,
    },
    buynow: {
        width: 80,
        backgroundColor: "green",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "black",
        padding: 5,
        justifyContent: "center",
        borderRadius: 5,
    },
    midsection: {
        marginVertical: 15,
    },
    footer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor: "brown",
    },
}

export default ProductList;