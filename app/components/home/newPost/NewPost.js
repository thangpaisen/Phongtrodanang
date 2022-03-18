import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Constant from '../../../controller/Constant'
import ItemPost from './../../common/ItemPost'
import Header from './Header'

const NewPost = () => {
    return (
        <View style={styles.post}>
            <Header />
            <View style={styles.content}>
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                    <ItemPost key={index} />
                ))}
            </View>
        </View>
    )
}

export default NewPost

const styles = StyleSheet.create({
    post: {},
    content: {
        flexWrap: 'wrap',
        flexDirection: 'row'
    }
})
