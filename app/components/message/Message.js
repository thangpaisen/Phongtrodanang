import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './../common/Header'

const Message = () => {
    return (
        <View style={styles.container}>
            <Header title='Tin nhắn' />
        </View>
    )
}

export default Message

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})
