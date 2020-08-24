import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

// import "./productCard.css"

// images
import shopee from "assets/images/logos/shopee_banner.png";
import lazada from "assets/images/logos/lazada_banner.png";

class ProductCard extends React.Component{
    showPlatformLogo() {
        switch(this.props.platform){
            case "lazada": return lazada;
            case "shopee": return shopee;
            default : return shopee;
        }
    }

    render() {
        return(
            <View className="cardHolder">
                <View className="productImgHolder">
                    <Image className="productImg" src={`http://${this.props.image}`} alt="products"/>
                </View>
                <View className="productNameHolder">
                    <Text className="productName">{this.props.name}</Text>
                </View>
                <View className="productInfoHolder" >
                    <View className="productInfoList">
                        <Text className="productPrice">RM{this.props.price}</Text>
                        <Text className="productBrand">{this.props.brand}</Text>
                        <View className="productPlatform">
                            <Image 
                                className="platformLogo" 
                                src={this.showPlatformLogo()}
                                alt={this.props.platform}
                                height="30"
                                loading="lazy"
                            />
                        </View>
                        <View className="productLink"><Text href={this.props.url}>BUY NOW</Text></View>
                    </View>
                </View>
            </View>
        )
    }
}

export default ProductCard;