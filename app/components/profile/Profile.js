import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import { Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import Constant from './../../controller/Constant'
import Button from './../common/Button'

const ItemSettings = ({ item }) => (
    <TouchableOpacity style={styles.settingItem}>
        <Icon style={styles.iconSetting} name={item.icon} size={24} color='black' />
        <Text style={styles.titleItemSetting}>{item.title}</Text>
    </TouchableOpacity>
)

const Profile = () => {
    const navigation = useNavigation()
    const LisData = [
        { icon: 'person-outline', title: 'Xem trang cá nhân' },
        { icon: 'receipt-outline', title: 'Cập nhật thông tin' },
        { icon: 'bookmark-outline', title: 'Bài đăng đã lưu' },
        { icon: 'book-outline', title: 'Bài đăng của tôi' }
    ]

    const handleOnLogout = () => {
        navigation.navigate(Constant.screenName.Login)
    }
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Avatar
                    size={65}
                    rounded
                    source={{
                        uri: 'https://images6.alphacoders.com/102/1029037.jpg'
                    }}
                    containerStyle={styles.imageAvatar}
                />
                <View style={styles.profileTitle}>
                    <Text style={styles.fullName} numberOfLines={1} ellipsizeMode='tail'>
                        ❤ {'Lê Anh Tuấn (Admin)' || 'Không tên'}
                    </Text>
                    <Text style={styles.email}> Email: Cu@cai.nho</Text>
                </View>
            </View>
            <View style={styles.optionSettings}>
                <FlatList
                    data={LisData}
                    renderItem={({ item }) => <ItemSettings item={item} />}
                    keyExtractor={(item, index) => index}
                />
            </View>
            <View style={styles.btnLogout}>
                <Button title='Đăng xuất' handleOnClick={handleOnLogout} />
            </View>
        </View>
    )
}
export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 50,
        paddingVertical: 20,
        marginHorizontal: 10,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: 'white'
    },
    imageAvatar: {
        marginLeft: 20,
        elevation: 5
    },
    profileTitle: {
        padding: 10
        // backgroundColor: 'red'
    },
    fullName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Constant.color.text
    },
    email: {
        fontSize: 16,
        marginTop: 4,
        color: Constant.color.grayText
    },
    optionSettings: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: 'white'
    },
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
    },
    btnLogout: {
        margin: 10,
        marginTop: 60
    }
})
