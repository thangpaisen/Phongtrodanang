import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    FlatList,
    ImageBackground
} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import Constant from '../../controller/Constant'

const ItemPostSearch = ({ item }) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity style={styles.item} onPress={() => navigation.push('DetailPost')}>
            <Image
                source={{ uri: 'https://images6.alphacoders.com/102/1029037.jpg' }}
                style={styles.image}
            />
            <View
                style={{
                    position: 'absolute',
                    top: 5
                }}
            >
                <View style={styles.price}>
                    <Text style={styles.textPrice}>2.1 triệu</Text>
                </View>
            </View>
            <View style={styles.contentItem}>
                <Text style={styles.titleItem} numberOfLines={2}>
                    Phòng tiện nghi 2.1tr ngay CV Phần Mềm Quang Trung, Q12
                </Text>
                <View style={styles.address}>
                    <Icon name='location-outline' size={20} color={Constant.color.blue} />
                    <Text style={styles.textAddress} numberOfLines={2}>
                        Quận Hải Châu Đà Nẵng
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 6 }}>
                    <Icon name='cube-outline' size={20} color={Constant.color.blue} />
                    <Text style={styles.acreage}>20m3</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.timePost}>
                        <Icon name='time-outline' size={20} color={Constant.color.blue} />
                        <Text style={styles.textTimePost}>1 giờ trước</Text>
                    </View>
                    <View style={{ ...styles.timePost, marginLeft: 10 }}>
                        <Icon name='eye-outline' size={20} color={Constant.color.blue} />
                        <Text style={styles.textTimePost}>100</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ItemPostSearch

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    image: {
        width: width / 3,
        height: width / 2.5,
        borderRadius: 5,
        marginTop: 5
    },
    item: {
        flexDirection: 'row',
        margin: 10,
        marginTop: 0
    },
    contentItem: {
        flex: 1,
        paddingHorizontal: 10
        // justifyContent: 'space-between',
    },
    titleItem: {
        fontSize: 16,
        color: Constant.color.blue
    },
    price: {
        backgroundColor: Constant.color.blue,
        padding: 10,
        paddingVertical: 4,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 5
    },
    textPrice: {
        color: 'white',
        fontWeight: 'bold'
    },
    acreage: {
        marginLeft: 4,
        fontSize: 14,
        color: 'gray'
    },
    address: {
        marginTop: 6,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textAddress: {
        paddingHorizontal: 4,
        fontSize: 14,
        color: 'gray'
    },
    contact: {
        flexDirection: 'row'
    },
    btnPhoneNumber: {
        padding: 10,
        paddingVertical: 8,
        borderRadius: 10,
        backgroundColor: 'blue'
    },
    textBtnText: {
        fontSize: 12,
        color: '#fff',
        fontWeight: 'bold'
    },
    btnSendZalo: {
        marginLeft: 10,
        padding: 10,
        paddingVertical: 8,
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'blue'
    },
    textBtnTextZalo: {
        fontSize: 12,
        color: 'blue',
        fontWeight: 'bold'
    },
    timePost: {
        marginTop: 6,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textTimePost: {
        marginLeft: 4,
        fontSize: 14,
        color: 'gray'
    }
})
