import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import Constant from './../../controller/Constant'

const HeaderDetail = ({ title }) => {
    const navigation = useNavigation()

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name='arrow-back-outline' size={24} color={Constant.color.blue} />
            </TouchableOpacity>
            <Text style={styles.headerText}>{title}</Text>
            <Icon name='search' size={24} color={'transparent'} />
        </View>
    )
}

export default HeaderDetail

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
