import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Constant from '../../../controller/Constant'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.header}>
            <View
                style={{
                    flexDirection: 'row'
                }}
            >
                <Icon name={'megaphone-outline'} size={24} color={Constant.color.blue} />
                <Text style={styles.textHeader}>Phòng mới đăng</Text>
            </View>
            <TouchableOpacity
                style={styles.btnMore}
                onPress={() =>
                    navigation.navigate(Constant.screenName.ViewMore, {
                        type: 'NewPost',
                        title: 'Phòng mới đăng'
                    })
                }
            >
                <Text style={styles.textBtnMore}>Xem thêm</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginVertical: 10,
        paddingBottom: 0
    },
    textHeader: {
        marginLeft: 6,
        fontSize: 20,
        color: Constant.color.blue,
        fontWeight: 'bold'
    },
    textBtnMore: {
        fontSize: 14,
        color: Constant.color.blue
    }
})
