import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Nodata = ({ title = 'Không có dữ liệu' }) => {
    return (
        <View style={styles.nodata}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Nodata

const styles = StyleSheet.create({
    nodata: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        padding: 20,
        fontSize: 16
    }
})
