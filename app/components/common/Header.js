import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Constant from './../../controller/Constant'

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        padding: 10,
        paddingVertical: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: -5,
        paddingHorizontal: 15,
        elevation: 2
    },
    headerText: {
        fontSize: 20,
        color: Constant.color.blue,
        fontWeight: 'bold'
    }
})
