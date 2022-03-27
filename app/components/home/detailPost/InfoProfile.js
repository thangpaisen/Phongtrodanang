import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar, Rating } from 'react-native-elements'
import Constant from './../../../controller/Constant'
import { useNavigation } from '@react-navigation/native'
const InfoProfile = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.infoContainer}>
            <View style={styles.avatar}>
                <Avatar
                    size={64}
                    rounded
                    source={{ uri: 'https://randomuser.me/api/portraits/women/57.jpg' }}
                />
            </View>
            <View style={styles.detail}>
                <Text style={styles.name}>Lê Anh Tuấn</Text>
                <Rating
                    type='star'
                    startingValue={3.6}
                    readonly
                    ratingColor='yellow'
                    imageSize={16}
                    style={{
                        paddingVertical: 10,
                        paddingHorizontal: 0
                    }}
                />
            </View>
            <TouchableOpacity
                style={styles.btnViewMore}
                onPress={() => {
                    navigation.navigate(Constant.screenName.ProfileUser)
                }}
            >
                <Text style={styles.textBtn}>Xem trang</Text>
            </TouchableOpacity>
        </View>
    )
}

export default InfoProfile

const styles = StyleSheet.create({
    infoContainer: {
        padding: 10,
        paddingVertical: 10,
        marginVertical: 10,
        flexDirection: 'row',
        borderTopWidth: 0.4,
        borderTopColor: Constant.color.blue,
        borderBottomWidth: 0.4,
        borderBottomColor: Constant.color.blue
    },
    detail: {
        flex: 1,
        alignItems: 'flex-start',
        paddingHorizontal: 20
    },
    name: {
        fontSize: 18,
        color: Constant.color.text,
        fontWeight: 'bold'
    },
    btnViewMore: {
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: Constant.color.blue,
        borderRadius: 20
    },
    textBtn: {
        color: Constant.color.blue,
        fontWeight: 'bold'
    }
})
