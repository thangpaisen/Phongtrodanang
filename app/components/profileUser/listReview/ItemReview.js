import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Rating } from 'react-native-elements'
import Constant from './../../../controller/Constant'

const ItemReview = ({ item }) => {
    return (
        <View style={styles.itemReview}>
            <View style={styles.avatar}>
                <Avatar
                    size={45}
                    rounded
                    source={{ uri: 'https://images6.alphacoders.com/102/1029037.jpg' }}
                />
            </View>
            <View style={styles.detail}>
                <Text style={styles.name}>Thắng Paisen</Text>
                <Text style={styles.textReview}>
                    Quá OK, phòng rộng sạch sẽ mà giá lại rẻ Quá OK, phòng rộng sạch sẽ mà giá lại
                    rẻ
                </Text>
                <View style={styles.rating}>
                    <Rating
                        type='star'
                        startingValue={4}
                        readonly
                        ratingColor='yellow'
                        imageSize={14}
                    />
                    <Text style={styles.timeReview}>1 ngày trước</Text>
                </View>
            </View>
        </View>
    )
}

export default ItemReview

const styles = StyleSheet.create({
    itemReview: {
        flexDirection: 'row',
        padding: 10,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: Constant.color.border
    },
    detail: {
        flex: 1,
        marginLeft: 10
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Constant.color.text
    },
    textReview: {
        marginTop: 4,
        fontSize: 14,
        color: Constant.color.text
    },
    rating: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        alignSelf: 'flex-start'
    },
    timeReview: {
        borderLeftColor: Constant.color.grayText,
        borderLeftWidth: 2,
        lineHeight: 16,
        marginLeft: 10,
        paddingLeft: 10,
        fontSize: 14,
        color: Constant.color.grayText
    }
})
