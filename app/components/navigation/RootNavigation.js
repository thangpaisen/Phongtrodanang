import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './../home/Home'
import DetailPost from './../home/detailPost/DetailPost'
import TabBarNavigation from './TabBarNavigation'
import Constant from './../../controller/Constant'
import ViewMore from './../viewMore/ViewMore'
import ChoiceDistrict from './../choiceDistrict/ChoiceDistrict'
import ChoiceWards from './../choiceWards/ChoiceWards'
import Login from './../authentication/Login'

const Stack = createNativeStackNavigator()

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={Constant.screenName.TabBarNavigation}
            >
                <Stack.Screen
                    name={Constant.screenName.TabBarNavigation}
                    component={TabBarNavigation}
                />
                <Stack.Screen name={Constant.screenName.DetailPost} component={DetailPost} />
                <Stack.Screen name={Constant.screenName.ViewMore} component={ViewMore} />
                <Stack.Screen
                    name={Constant.screenName.ChoiceDistrict}
                    component={ChoiceDistrict}
                />
                <Stack.Screen name={Constant.screenName.ChoiceWards} component={ChoiceWards} />
                <Stack.Screen name={Constant.screenName.Login} component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation

const styles = StyleSheet.create({})
