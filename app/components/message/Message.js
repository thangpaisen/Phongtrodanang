import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Avatar, Badge } from 'react-native-elements'
import ItemRoomMessage from './ItemRoomMessage'
import Loading from './../common/Loading'
import Nodata from './../common/Nodata'
import Header from './../common/Header'
const Chat = () => {
    const [messagesThreads, setMessagesThreads] = useState([1, 2, 3, 4, 5])
    const [loading, setLoading] = useState(false)
    return (
        <View style={styles.container}>
            <Header title='Tin nhắn' />
            {loading ? (
                <Loading />
            ) : messagesThreads.length > 0 ? (
                <View style={styles.listMessage}>
                    <FlatList
                        data={messagesThreads}
                        renderItem={({ item }) => <ItemRoomMessage />}
                        keyExtractor={(item) => item}
                    />
                </View>
            ) : (
                <Nodata title='Không có tin nhắn nào, bạn có thể tìm kiếm người để bắt đầu cuộc trò chuyện của mình' />
            )}
        </View>
    )
}

export default Chat
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.3,
        borderBottomColor: '#e3e3e3'
    },
    textHeader: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    listFriendOnLine: {
        marginTop: 10,
        flexDirection: 'row'
    },
    listMessage: {
        flex: 1
    },
    itemMessage: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    nameFriendMessage: {
        fontSize: 16,
        color: '#000'
    },
    lastMessage: {
        marginTop: 4,
        color: 'gray'
    }
})
