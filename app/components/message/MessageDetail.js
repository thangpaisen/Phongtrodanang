import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import HeaderDetail from './../common/HeaderDetail'

const MessageDetail = () => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Dạo này có gì mới không',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'Tèo',
                    avatar: 'https://images6.alphacoders.com/740/thumb-1920-740310.jpg'
                }
            }
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
    }, [])
    return (
        <View style={styles.container}>
            <HeaderDetail title='Nguyễn Văn Tèo' />
            <GiftedChat
                messages={messages}
                onSend={(messages) => onSend(messages)}
                user={{
                    _id: 1
                }}
            />
        </View>
    )
}

export default MessageDetail

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
