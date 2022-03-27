import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import HeaderDetail from '../../common/HeaderDetail'
import ItemReview from './ItemReview'
import { Avatar, Rating } from 'react-native-elements'

const ListReview = () => {
    return (
        <View style={styles.container}>
            <HeaderDetail title='Danh sách đánh giá' />
            <View style={styles.info}>
                <View style={styles.avatar}>
                    <Avatar
                        size={70}
                        rounded
                        source={{ uri: 'https://images6.alphacoders.com/102/1029037.jpg' }}
                    />
                </View>
                <View style={styles.detail}>
                    <Text style={styles.name}>Lê Anh Tuấn</Text>
                    <View style={styles.rating}>
                        <Text style={styles.timeReview}>5.0</Text>
                        <Rating
                            type='star'
                            ratingCount={1}
                            startingValue={1}
                            readonly
                            ratingColor='yellow'
                            imageSize={24}
                        />
                    </View>
                    <Text style={styles.textCountRating}>2 đánh giá</Text>
                </View>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                renderItem={({ item }) => <ItemReview item={item} />}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default ListReview

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    info: {
        padding: 30,
        paddingVertical: 20,
        flexDirection: 'row',
        borderBottomWidth: 8,
        borderBottomColor: Constant.color.border
    },
    detail: {
        marginLeft: 20
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Constant.color.text
    },
    rating: {
        marginVertical: 6,
        flexDirection: 'row',
        alignItems: 'center'
    },
    timeReview: {
        marginRight: 5,
        fontSize: 20,
        color: Constant.color.text,
        fontWeight: 'bold'
    },
    textCountRating: {
        fontSize: 14,
        color: Constant.color.text
    }
})
