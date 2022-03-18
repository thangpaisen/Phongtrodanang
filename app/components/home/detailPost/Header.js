import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import Constant from '../../../controller/Constant'

const Header = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name='arrow-back-outline' size={24} color={Constant.color.blue} />
            </TouchableOpacity>
            <Text style={styles.headerText}>2.1 triệu/tháng</Text>
            <Icon name='bookmark-outline' size={24} color={Constant.color.blue} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        padding: 10,
        paddingVertical: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerText: {
        fontSize: 18,
        color: Constant.color.blue,
        fontWeight: 'bold'
    }
})
