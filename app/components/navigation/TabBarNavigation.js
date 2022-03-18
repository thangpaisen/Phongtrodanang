import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './../home/Home'
import Profile from './../profile/Profile'
import Search from './../search/Search'
import Message from './../message/Message'
import Icon from 'react-native-vector-icons/Ionicons'
import Constant from './../../controller/Constant'
import CreatPost from './../creatPost/CreatPost'

const Tab = createBottomTabNavigator()

const TabBarCustomButton = ({ children, onPress }) => {
    return (
        <View
            style={{
                alignItems: 'center',
                width: 66,
                height: 66,
                borderRadius: 33,
                bottom: 45,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white'
            }}
        >
            <TouchableOpacity
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 56,
                    width: 56,
                    borderRadius: 28,
                    position: 'absolute',
                    backgroundColor: Constant.color.blue
                }}
                onPress={onPress}
                accessibilityRole='button'
            >
                {children}
            </TouchableOpacity>
        </View>
    )
}

const TabBarNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarLabel: ({ focused, color, position }) => {
                    let focusedColor = focused ? Constant.color.blue : '#CCCCE3'
                    return (
                        <Text
                            style={{
                                paddingTop: 10,
                                color: focusedColor,
                                fontSize: 14,
                                fontFamily: Constant.fonts.poppinsMedium
                            }}
                        >
                            {route.name}
                        </Text>
                    )
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName
                    let focusedColor = focused ? Constant.color.blue : '#CCCCE3'
                    if (route.name === Constant.screenName.Home) {
                        iconName = Constant.icons.tabBarHome
                    } else if (route.name === Constant.screenName.Message) {
                        iconName = Constant.icons.tabBarMessage
                    } else if (route.name === Constant.screenName.CreatPost) {
                        iconName = Constant.icons.tabBarPost
                    } else if (route.name === Constant.screenName.Search) {
                        iconName = Constant.icons.tabBarSearch
                    } else if (route.name === Constant.screenName.Profile) {
                        iconName = Constant.icons.tabBarProfile
                    }
                    return (
                        <Image
                            source={iconName}
                            style={{ tintColor: focusedColor, width: 20, height: 20 }}
                            resizeMode='contain'
                        />
                    )
                },
                tabBarStyle: {
                    backgroundColor: 'white',
                    borderTopWidth: 0,
                    paddingVertical: 12
                },
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0
                },
                headerTitleStyle: {
                    fontFamily: Constant.fonts.poppinsSemiBold,
                    fontSize: 16
                },
                tabBarShowLabel: true
            })}
        >
            <Tab.Screen name={Constant.screenName.Home} component={Home} />
            <Tab.Screen name={Constant.screenName.Search} component={Search} />
            <Tab.Screen
                name={Constant.screenName.CreatPost}
                component={CreatPost}
                options={{
                    tabBarButton: (props) => <TabBarCustomButton {...props} />,
                    headerShown: false,
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                ...styles.labelStyle,
                                color: focused ? '#00CEFF' : '#CCCCE3'
                            }}
                        >
                            Post
                        </Text>
                    )
                }}
            />
            <Tab.Screen name={Constant.screenName.Message} component={Message} />
            <Tab.Screen name={Constant.screenName.Profile} component={Profile} />
        </Tab.Navigator>
    )
}

export default TabBarNavigation

const styles = StyleSheet.create({
    labelStyle: {
        fontSize: 14,
        fontWeight: '500',
        position: 'absolute',
        bottom: -20,
        fontSize: 14,
        fontFamily: Constant.fonts.poppinsMedium
    }
})
