import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Home from './app/components/home/Home'
import RootNavigation from './app/components/navigation/RootNavigation'
import SplashScreen from 'react-native-splash-screen'
import { LogBox } from 'react-native'

LogBox.ignoreLogs([
    'EventEmitter.removeListener',
    'Animated: `useNativeDriver`',
    'componentWillReceiveProps'
])
const App = () => {
    useEffect(() => {
        SplashScreen.hide()
    }, [])
    return <RootNavigation />
}

export default App

const styles = StyleSheet.create({})
