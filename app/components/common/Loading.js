import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import Constant from './../../controller/Constant'

const Loading = () => {
    return (
        <View style={styles.loading}>
            <ActivityIndicator size='large' color={Constant.color.blue} />
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 500,
        backgroundColor: 'white'
    }
})
