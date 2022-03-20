import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const ItemSettings = ({ item }) => {
    const navigation = useNavigation()
    const handleOnClick = () => {
        navigation.navigate(item.screenName)
    }
    return (
        <TouchableOpacity style={styles.settingItem} onPress={() => handleOnClick()}>
            <Icon style={styles.iconSetting} name={item.icon} size={24} color='black' />
            <Text style={styles.titleItemSetting}>{item.title}</Text>
        </TouchableOpacity>
    )
}

export default ItemSettings

const styles = StyleSheet.create({
    settingItem: {
        flexDirection: 'row',
        paddingVertical: 16,
        borderBottomWidth: 0.4,
        borderBottomColor: '#d1e6e2'
    },
    iconSetting: {},
    titleItemSetting: {
        marginLeft: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        color: Constant.color.text,
        fontWeight: 'bold'
    }
})
