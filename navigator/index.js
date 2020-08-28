import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

// import our container
import Auth from "containers/LogInRegister/auth";
import Dashboard from "containers/Home/dashboard";
import Profile from "containers/UserInfo/profile";
import UserType from "containers/UserInfo/userType";
import Result from "containers/Home/result";
import Information from "containers/UserInfo/addInfo";

import ListView from "containers/Home/listView";
import Test from "containers/Home/test";
import Track from "containers/Tracking/track";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

class WhatThePrice extends React.Component {
    render() {
        return(
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: "darkslategrey",
                    inactiveTintColor: "slategrey",
                    activeBackgroundColor: "springgreen",
                    inactiveBackgroundColor: "white",
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={ListView}
                    options={{
                        tabBarIcon: ({focused, color}) => (
                            <MaterialCommunityIcons
                                name = {focused ? ("home"): ("home-outline")}
                                size = "20"
                                color = {color}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="Track"
                    component={Track}
                    options={{
                        tabBarIcon: ({focused, color}) => (
                            <AntDesign
                                name = {focused ? ("clockcircle"): ("clockcircleo")}
                                size = "20"
                                color = {color}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarIcon: ({focused, color}) => (
                            <FontAwesome
                                name = {focused ? ("user"): ("user-o")}
                                size = "20"
                                color = {color}
                            />
                        )
                    }}
                />
            </Tab.Navigator>
        );
    }
}

class Navigator extends React.Component {
    render() {
        return(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Authentication"
                        component={Auth}
                        options={{
                            headerStyle: {
                                backgroundColor: '#219653',
                            },
                            headerTintColor: '#fff',
                        }}
                    />
                    <Stack.Screen
                        name="What The Price"
                        component={WhatThePrice}
                        options={{
                            headerLeft: null,
                            headerStyle: {
                                backgroundColor: '#219653',
                            },
                            headerTintColor: '#fff',
                        }}
                    />
                    <Stack.Screen
                        name="UserType"
                        component={UserType}
                        options={{
                            headerStyle: {
                                backgroundColor: '#219653',
                            },
                            headerTintColor: '#fff',
                        }}
                    />
                    <Stack.Screen
                        name="Result"
                        component={Result}
                        options={{
                            headerStyle: {
                                backgroundColor: '#219653',
                            },
                            headerTintColor: '#fff',
                        }}
                    />
                    <Stack.Screen
                        name="Information"
                        component={Information}
                        options={{
                            headerStyle: {
                                backgroundColor: '#219653',
                            },
                            headerTintColor: '#fff',
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default Navigator;