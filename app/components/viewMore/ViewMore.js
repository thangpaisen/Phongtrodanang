import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from './Header'
import ItemPostSearch from './../common/ItemPostSearch'
import FormArrange from './../common/FormArrange'

const ViewMore = ({ route }) => {
    const { type, title } = route.params
    const [typeChoice, setTypeChoice] = useState(0)

    return (
        <View style={styles.container}>
            <Header title={title} />
            <FormArrange typeChoice={typeChoice} setTypeChoice={setTypeChoice} />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={[1, 2, 3, 4, 5, 6]}
                keyExtractor={(item) => item}
                renderItem={({ item }) => <ItemPostSearch />}
            />
        </View>
    )
}

export default ViewMore

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})
