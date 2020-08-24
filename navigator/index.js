import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// import our container
import Auth from "containers/LogInRegister/auth";
import Dashboard from "containers/Home/dashboard";
import Profile from "containers/UserInfo/profile";
import UserType from "containers/UserInfo/userType";
import Result from "containers/Home/result";
import AddInfo from "containers/UserInfo/addInfo";

import ListView from "containers/Home/listView";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

class BottomTab extends React.Component {
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
                    name="Dashboard"
                    component={Dashboard}
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
                        name="ListView"
                        component={ListView}
                    />
                    <Stack.Screen
                        name="Auth"
                        component={Auth}
                    />
                    <Stack.Screen
                        name="BottomTab"
                        component={BottomTab}
                    />
                    <Stack.Screen
                        name="UserType"
                        component={UserType}
                    />
                    <Stack.Screen
                        name="Result"
                        component={Result}
                    />
                    <Stack.Screen
                        name="AddInfo"
                        component={AddInfo}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default Navigator;