import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import HeaderDetail from './../common/HeaderDetail'
import { Avatar, Rating } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import ItemPostSuggest from '../common/ItemPostSuggest'

const ProfileUser = () => {
    return (
        <View style={styles.container}>
            <HeaderDetail title='Lê Anh Tuấn' />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.info}>
                    <View style={styles.avatar}>
                        <Avatar
                            size={80}
                            rounded
                            source={{ uri: 'https://images6.alphacoders.com/102/1029037.jpg' }}
                        />
                    </View>
                    <View style={styles.detail}>
                        <Text style={styles.name}>Lê Anh Tuấn</Text>
                    </View>
                </View>
                <View style={styles.description}>
                    <View style={styles.desItem}>
                        <Icon name='star-outline' size={24} color={Constant.color.grayText} />
                        <Text style={styles.desTitle}>Đánh giá: </Text>
                        <View style={styles.contentDescription}>
                            <Text style={styles.desText}>4.5</Text>
                            <Rating
                                type='star'
                                startingValue={3.6}
                                readonly
                                ratingColor='yellow'
                                imageSize={16}
                                style={{}}
                            />
                            <TouchableOpacity>
                                <Text style={{ ...styles.desText, color: Constant.color.blue }}>
                                    2 Đánh giá
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.desItem}>
                        <Icon name='calendar-outline' size={24} color={Constant.color.grayText} />
                        <Text style={styles.desTitle}>Ngày tham gia: </Text>
                        <View style={styles.contentDescription}>
                            <Text style={styles.desText}>26/03/2022</Text>
                        </View>
                    </View>
                    <View style={styles.desItem}>
                        <Icon name='location-outline' size={24} color={Constant.color.grayText} />
                        <Text style={styles.desTitle}>Địa chỉ: </Text>
                        <View style={styles.contentDescription}>
                            <Text style={styles.desText} numberOfLines={1}>
                                102/21 Trần Cao Vân, Thanh Khê, Đà Nẵng
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.divider} />
                <View style={styles.body}>
                    <View style={styles.headerBody}>
                        <Text style={styles.textHeaderBody}>Tin đang đăng ~ </Text>
                        <Text style={{ ...styles.textHeaderBody, fontWeight: 'normal' }}>
                            2 tin
                        </Text>
                    </View>
                    <View style={styles.contentBody}>
                        {[1, 2].map((item, index) => (
                            <ItemPostSuggest key={item} />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default ProfileUser

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    info: {
        padding: 10,
        paddingVertical: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.4,
        borderBottomColor: Constant.color.blue
    },
    detail: {
        marginVertical: 10,
        paddingHorizontal: 10
    },
    name: {
        fontSize: 20,
        color: Constant.color.text,
        fontWeight: 'bold'
    },
    description: {
        padding: 20,
        paddingHorizontal: 10,
        paddingBottom: 10,
        paddingTop: 0
    },
    desItem: {
        marginTop: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    desTitle: {
        fontSize: 16,
        paddingLeft: 8,
        color: Constant.color.grayText
    },
    contentDescription: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    desText: {
        fontSize: 14,
        paddingHorizontal: 4,
        color: Constant.color.text
    },
    divider: {
        height: 10,
        backgroundColor: '#c7c7c7'
    },
    body: {
        paddingVertical: 10
    },
    headerBody: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textHeaderBody: {
        fontSize: 15,
        color: Constant.color.text,
        fontWeight: 'bold'
    },
    contentBody: {
        marginVertical: 10,
        paddingBottom: 20,
        borderTopWidth: 0.4,
        borderTopColor: Constant.color.grayText
    }
})
