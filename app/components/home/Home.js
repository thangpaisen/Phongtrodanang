import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    FlatList,
    TextInput,
    SafeAreaView
} from 'react-native'
import React, { useState } from 'react'
import NewPost from './newPost/NewPost'
import SharedRoom from './sharedRoom/SharedRoom'
import ManyViews from './manyViews/ManyViews'
import Header from './../common/Header'

const Home = () => {
    const [name, setName] = useState('')
    return (
        <SafeAreaView style={styles.container}>
            <Header title='Tìm phòng trọ' />
            <ScrollView showsVerticalScrollIndicator={false}>
                <NewPost />
                <ManyViews />
                <SharedRoom />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})
