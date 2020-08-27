import React from "react";
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";

import InputButton from "components/inputButton";

import { connect } from "react-redux";
import Actions from "actions";

// Victory
import { 
    VictoryBar,
    VictoryChart,
    VictoryAxis,
    VictoryTheme,
    VictoryLabel,
    VictoryTooltip,
    LineSegment,
} from 'victory-native';

//Style
// import "./style.css"

//Components
import SearchBar from "components/searchBar";
import ProductCard from "components/cards/productCard";
import ProductList from "components/lists/productList";

// Data
// import dummyData from "assets/dummyData";

class ListView extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            // query
            queryText: "",
            queryCalled: false,
            
            // user
            userID: 1,
            
            // results
            results:[],
            countResults:0,
            selectedItem:0,
            viewType:"list", //listView by default
            sorted: true, //sort to cheap first by default

            loading: false,
        }
    }

    componentDidUpdate(prevProps){
        const { getResultData } = this.props;
        // console.log("DID UPDATE RESULT", getResultData.data)
        if (prevProps.getResultData.isLoading && !getResultData.isLoading){
            this.setState({ loading: false });
            console.log("DID UPDATE RESULT", getResultData.data)
            if (getResultData.data.status_code === 200) { 
                console.log("GET RESULT", getResultData);
                this.setState({
                    results:getResultData.data.data,
                    countResults:getResultData.data.analytics.result_count,
                    
                }, () => console.log(this.state.countResults, getResultData.data.analytics.result_count))
            }
        }
    }

    // when 'search' button is pressed, 
        // save query to state
        // set querycalled to true
    queryPressed() {
        const data = {
            // query:this.state.queryText,
            query:"PS4 Red Dead Redemption 2",
            userID:this.state.userID,
        }
        this.setState({ loading: true });
        this.props.onResult(data);
        this.setState({queryCalled:!this.state.queryCalled});
    }

    // when item selected, set selectedItem to product unique id
    onItemSelected(id) {
        this.setState({selectedItem:id})
    }

    // to change results view
    changeView(type) {
        this.setState({viewType:type})
    }

    // to sort results
    sortGraph() {
        this.setState({sorted:!this.state.sorted})
    }

    render() {
        return(
            <ScrollView style={styles.container}>
                {this.state.queryCalled === false ? (
                    // if not query called, show only search bar
                    <SearchBar 
                        title="Search"
                        textInput="Search Product:"
                        inputPlaceHolder="product..."
                        // loading={this.state.loading}
                        onChange={(queryText) => this.setState({queryText})}
                        // noQuery={!this.state.queryCalled}
                        onPress={() => this.queryPressed()}
                    />
                ) : (
                    // if query called, show search bar on top and display results in list by default
                        <View>
                            <View>
                                <SearchBar
                                    title="Back To Search"
                                    textInput="Searched Product:"
                                    inputPlaceHolder={this.state.queryText}
                                    loading={this.state.loading}
                                    onChange={(queryText) => this.setState({queryText})}
                                    // noQuery={!this.state.queryCalled}
                                    onPress={() => this.queryPressed()}
                                />
                            </View>
                            {/* show queryText and no of result */}
                            <View style={styles.queryresults}>
                                <Text style={styles.bold}>Query Text: {this.state.queryText}</Text>
                                <Text>Results: ({this.state.countResults} results)</Text>
                            </View>
                                

                                {/* show all results, listView by default */}
                                <View className="allResultsContainer">

                                    <View className="allResultsHeader">
                                        <View className="filterHolder">
                                            {/* to sort */}
                                            <Text>Sorting: {this.state.sorted ? "Lowest to Highest" : "Highest to Lowest"}</Text>
                                            <InputButton
                                                title={this.state.sorted ? "Change To Decrease" : "Change To Increase"}
                                                textColor="white"
                                                screenColor="darkgreen"
                                                navigate={() => this.sortGraph()}
                                            />

                                            {/* view type selector */}
                                            <View
                                                style={styles.selectorBtnHolder}
                                            >
                                                <InputButton
                                                    title="Graph"
                                                    textColor="white"
                                                    screenColor="darkgreen"
                                                    width = {100}
                                                    navigate={() => this.changeView("graph")}
                                                    style={{backgroundColor:this.state.viewType === "graph" && "darkgray"}}
                                                />
                                                <InputButton
                                                    title="List"
                                                    textColor="white"
                                                    screenColor="darkgreen"
                                                    width = {100}
                                                    navigate={() => this.changeView("list")}
                                                    style={{backgroundColor:this.state.viewType === "list" && "darkgray"}}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    {this.state.viewType === "list" && (
                                        <View
                                            style={styles.lists}
                                        >
                                            <Text style={styles.sorting}>Price: {this.state.sorted ? "Lowest to Highest" : "Highest to Lowest"}</Text>
                                            {this.state.results.length === 0 ? (<Text>no result found</Text>) : (
                                                this.state.results
                                                    .sort((a,b) => this.state.sorted ? a.price - b.price : b.price - a.price )
                                                    .map((item, index) => (
                                                        <ProductList
                                                            style={styles.listHolder}
                                                            key={item.id}
                                                            platform={item.platform}
                                                            name={item.name}
                                                            brand={item.brand}
                                                            image={item.image_url}
                                                            price={item.price}
                                                            product_id={item.product_id}
                                                            url={item.url}
                                                            company={item.platform}
                                                            onHover={() => this.onItemSelected(item.id)}
                                                        />
                                                    ))) 
                                            }
                                        </View>
                                    )}
                                    {this.state.viewType === "graph" && (
                                        <View
                                            style={styles.graphHolder}
                                        >
                                            <Text style={styles.sorting}>Price: {this.state.sorted ? "Lowest to Highest" : "Highest to Lowest"}</Text>
                                            <VictoryChart domainPadding={{x:[20,20]}} width={300} >
                                                <VictoryAxis
                                                    dependentAxis
                                                    label="Price"
                                                    axisComponent={<LineSegment style={{fontSize:"1"}}/>}
                                                    axisLabelComponent={<VictoryLabel style={{fontSize:"20"}} dy={-100} dx={25} angle={360}/>}
                                                    tickLabelComponent={<VictoryLabel style={{fontSize:"10"}}/>}
                                                    tickFormat={(y) => `RM${y}`}
                                                />
                                                <VictoryBar
                                                    data={this.state.results.sort((a,b) => this.state.sorted ? a.price - b.price : b.price - a.price )}
                                                    y={"price"}
                                                    style={{ data:{fill: "#219653"} }}
                                                    barRatio={0.8}
                                                    alignment="start"
                                                    animate={{duration: 2000, onLoad: { duration: 1000 }}}
                                                    labels={({datum}) => `RM${datum.price} from ${datum.platform}`}
                                                    labelComponent={
                                                    <VictoryTooltip
                                                        style={{fontSize:"10"}}
                                                        pointerLength={5} />
                                                    }
                                                    events={[{
                                                        target:"data",
                                                        eventHandlers:{
                                                            onMouseEnter:() => {
                                                                return[{
                                                                    target:"data",
                                                                    mutation:(props) => {
                                                                        const fill = props.style && props.style.fill;
                                                                        return fill === "#219653" ? null : {style: {fill:"#219653"}}
                                                                    }
                                                                }]
                                                            }
                                                        }
                                                    }]}
                                                />
                                            </VictoryChart>
                                        </View>
                                    )}
                                </View>
                        </View>
                )}
            </ScrollView>
        )
    }
}

const styles = {
    container: {
        flex:1,
        padding: 20,
        // backgroundColor: "yellow",
    },
    lists: {
        alignItems: "center",
    },
    sorting: {
        fontSize: 20,
    },
    listHolder: {
        width: "100%",
        backgroundColor: "lightgreen",
        marginVertical: 20,
        padding: 20,
        borderWidth: 2,
        borderColor: "darkgreen",
    },
    selectorBtnHolder: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        // backgroundColor: "brown",
        marginVertical: 20,
    },
    graphHolder: {
        alignItems: "center",
    },
    queryresults: {
        marginVertical: 20,
    },
    bold: {
        fontWeight: "bold",
    },
}

const mapStateToProps = (store) => ({
    getResultData: Actions.getResultData(store)
})
const mapDispatchToProps = {
    onResult:Actions.result
}

export default connect( mapStateToProps , mapDispatchToProps )(ListView)
// export default ListView;