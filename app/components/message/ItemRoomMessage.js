import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Modal,
    Alert,
    ToastAndroid,
    Pressable
} from 'react-native'
import { Avatar } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import dateformat from 'dateformat'
import Icon from 'react-native-vector-icons/Ionicons'
const ItemRoomMessage = ({
    item = {
        watched: true,
        lastMessage: {
            text: 'Dạo này có j mới không'
        }
    },
    text = 'âfasfasfasf'
}) => {
    const navigation = useNavigation()
    const [userReceiver, setUserReceiver] = useState({
        imageAvatar: 'https://images6.alphacoders.com/740/thumb-1920-740310.jpg',
        displayName: 'Nguyễn Văn Tèo'
    })
    const [modalVisible, setModalVisible] = useState(false)

    const handleOnOpenMessage = () => {
        navigation.navigate(Constant.screenName.MessageDetail)
    }
    return (
        <>
            <TouchableOpacity
                style={styles.itemMessage}
                onPress={() => {
                    handleOnOpenMessage()
                }}
                onLongPress={() => setModalVisible(true)}
            >
                <Avatar
                    source={{
                        uri: userReceiver?.imageAvatar
                    }}
                    size={65}
                    rounded
                />
                <View style={styles.content}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.nameFriendMessage} numberOfLines={1}>
                            {userReceiver?.displayName}
                        </Text>
                        <Text
                            style={{
                                ...styles.textTime,
                                fontWeight: !item?.watched ? 'bold' : 'normal'
                            }}
                        >
                            •{dateformat(item?.lastMessage?.createdAt, 'HH:MM')}
                        </Text>
                    </View>
                    <Text
                        style={{
                            ...styles.lastMessage,
                            fontWeight: !item?.watched ? 'bold' : 'normal'
                        }}
                        numberOfLines={1}
                    >
                        {/* {item?.user._id == auth().currentUser.uid && 'Bạn: '} */}
                        {item?.lastMessage?.text}
                        {item?.lastMessage?.image && 'đã gửi hình ảnh'}
                    </Text>
                </View>
            </TouchableOpacity>
            <Modal transparent={true} visible={modalVisible}>
                <Pressable
                    onPress={() => setModalVisible(false)}
                    style={{ flex: 1, backgroundColor: 'black', opacity: 0.2 }}
                ></Pressable>
                <View style={styles.morePostContent}>
                    <TouchableOpacity
                        style={styles.morePostItem}
                        // onPress={() => handleClickButtonDelete()}
                    >
                        <Icon name='trash-outline' size={24} color='black' />
                        <Text style={styles.textModalItem}>Xoá tin nhắn</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </>
    )
}

export default ItemRoomMessage

const styles = StyleSheet.create({
    itemMessage: {
        flexDirection: 'row',
        paddingVertical: 20,
        marginHorizontal: 10,
        alignItems: 'center',
        borderBottomWidth: 0.4,
        borderBottomColor: Constant.color.grayText
    },
    content: {
        flex: 1,
        paddingLeft: 10
    },
    nameFriendMessage: {
        flex: 1,
        fontSize: 19,
        color: '#000',
        fontWeight: 'bold'
    },
    lastMessage: {
        marginTop: 6,
        color: 'black',
        marginRight: 10
    },
    textTime: {
        color: '#000',
        paddingHorizontal: 10
    },
    textBold: {
        fontWeight: 'bold',
        color: 'black'
    },
    morePostContent: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        elevation: 5,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        padding: 10,
        paddingVertical: 20
    },
    morePostItem: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textModalItem: {
        fontSize: 16,
        marginLeft: 10,
        color: 'black'
    }
})
