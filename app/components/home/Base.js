import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from './Header';

const Base = () => {
    return (
        <View style={styles.body}>
            <Text>Base</Text>
            <Header />
        </View>
    )
}

export default Base

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    body: {
        flex: 1,
        alignItems: 'center'
    }
})