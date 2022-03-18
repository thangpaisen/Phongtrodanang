import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import ItemPost from './../../common/ItemPost'

const ManyViews = () => {
    return (
        <View style={styles.sharedRoom}>
            <Header />

            <View style={styles.content}>
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                    <ItemPost key={index} />
                ))}
            </View>
        </View>
    )
}

export default ManyViews

const styles = StyleSheet.create({
    sharedRoom: {},
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})
