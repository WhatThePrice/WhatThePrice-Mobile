import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

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
import dummyData from "assets/dummyData";

class ListView extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            // query
            queryText: "",
            queryCalled: false,
            
            // user
            userID: "",
            
            // results
            results:[],
            countResults:0, 
            selectedItem:0,
            viewType:"list", //listView by default
            sorted: true //sort to cheap first by default
        }
    }

    // componentDidUpdate(prevProps){
    //     const { getResultData } = this.props;
    //     if (prevProps.getResultData.isLoading && !getResultData.isLoading){
    //         console.log(getResultData.data)
    //         if (getResultData.data.status_code === "200") { 
    //             this.setState({
    //                 results:getResultData.data.data,
    //                 countResults:getResultData.data.analytics[0].result_count,
                    
    //             }, () => console.log(this.state.countResults, getResultData.data.analytics[0].result_count))
    //         }
    //     }
    // }

    // when 'search' button is pressed, 
        // save query to state
        // set querycalled to true
    queryPressed() {
        const data = {
            query:this.state.queryText,
            userID:this.state.userID
        }
        // this.props.onResult(data)
        this.setState({queryCalled:!this.state.queryCalled})
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
                        onChange={(queryText) => this.setState({queryText:queryText.target.value})}
                        noQuery={!this.state.queryCalled}
                        onPress={() => this.queryPressed()}
                    />
                ) : (
                    // if query called, show search bar on top and display results in list by default
                    <View
                        style={styles.page}
                    >
                        <SearchBar 
                            onChange={(queryText) => this.setState({queryText:queryText.target.value})}
                            noQuery={!this.state.queryCalled}
                            onPress={() => this.queryPressed()}
                        />
                        <View
                            // className="container"
                            style={styles.container}
                        >
                            <View className="resultContainer">
                            
                                {/* show queryText and no of result */}
                                <View className="queryText">
                                    <Text>Query Text: {this.state.queryText}</Text>
                                    <Text className="querySum">Results: ({this.state.countResults} results)</Text>
                                </View>
                                
                                {/* card to show selectedItem */}
                                {/* <View className="cardHolder">
                                    <View>
                                        {dummyData.length === 0 ? (<ProductCard />) : (
                                            dummyData
                                            .filter((item) => item.id === this.state.selectedItem)
                                            .map((item) => (
                                                <ProductCard 
                                                    key={item.id}
                                                    platform={item.platform}
                                                    name={item.name}
                                                    brand={item.brand}
                                                    image={item.image_url}
                                                    price={item.price}
                                                    product_id={item.product_id}
                                                    url={item.url}
                                                />
                                            ))
                                        )}
                                    </View>
                                </View> */}

                                {/* show all results, listView by default */}
                                <View className="allResultsContainer">

                                    <View className="allResultsHeader">
                                        <Text>Results Header</Text>
                                        <View className="filterHolder">
                                            {/* to sort */}
                                            <Text>Sort by</Text>
                                            <InputButton
                                                // className="sortBtn"
                                                title={this.state.sorted ? "Sort: Decrease" : "Sort: Increase"}
                                                textColor="white"
                                                screenColor="darkgreen"
                                                navigate={() => this.sortGraph()}
                                            />

                                            {/* view type selector */}
                                            <View
                                                // className="selectorBtnHolder"
                                                style={styles.selectorBtnHolder}
                                            >
                                                <InputButton
                                                    // className="selectorBtn"
                                                    title="Graph"
                                                    textColor="white"
                                                    screenColor="darkgreen"
                                                    width = {100}
                                                    navigate={() => this.changeView("graph")}
                                                    style={{backgroundColor:this.state.viewType === "graph" && "darkgray"}}
                                                />
                                                <InputButton
                                                    // className="selectorBtn"
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
                                            // className="listHolder"
                                            style={styles.lists}
                                        >
                                            <Text style={styles.sorting}>Price: {this.state.sorted ? "Lowest to Highest" : "Highest to Lowest"}</Text>
                                            {dummyData.length === 0 ? (<Text>no result found</Text>) : (
                                                dummyData
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
                                                            onHover={() => this.onItemSelected(item.id)}
                                                        />
                                                    ))) 
                                            }
                                        </View>
                                    )}
                                    {this.state.viewType === "graph" && (
                                        <View
                                            // className="graphHolder"
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
                                                    data={dummyData.sort((a,b) => this.state.sorted ? a.price - b.price : b.price - a.price )}
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
                        </View>
                    </View>
                )}
            </ScrollView>
        )
    }
}

const styles = {
    container: {
        width: "100%",
        paddingHorizontal: 20,
        backgroundColor: "yellow",
    },
    page: {
        width: "100%",
        height: "100%",
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
        backgroundColor: "orange",
        marginVertical: 20,
    },
    selectorBtnHolder: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "brown",
        marginVertical: 20,
    },
    graphHolder: {
        alignItems: "center",
    },
}

// const mapStateToProps = (store) => ({
//     getResultData: Actions.getResultData(store)
// })
// const mapDispatchToProps = {
//     onResult:Actions.result
// }

// export default connect( mapStateToProps , mapDispatchToProps )(ListView)
export default ListView;