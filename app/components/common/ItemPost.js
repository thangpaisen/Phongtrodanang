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
const ItemPost = () => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('DetailPost')}>
            <Image
                source={{ uri: 'https://images6.alphacoders.com/102/1029037.jpg' }}
                style={styles.image}
            />
            <View
                style={{
                    position: 'absolute'
                }}
            >
                <View style={styles.price}>
                    <Text style={styles.textPrice}>2.1 triệu</Text>
                </View>
            </View>
            <View style={styles.contentItem}>
                <View style={styles.address}>
                    <Icon name='location-outline' size={20} color={Constant.color.blue} />
                    <Text style={styles.textAddress} numberOfLines={2}>
                        Quận Hải Châu Đà Nẵng Hải Châu Đà Nẵng
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name='cube-outline' size={20} color={Constant.color.blue} />
                        <Text style={styles.acreage}>20m2</Text>
                    </View>
                    <View style={styles.timePost}>
                        <Icon name='time-outline' size={20} color={Constant.color.blue} />
                        <Text style={styles.textTimePost}>1 giờ</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ItemPost

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    image: {
        width: (width - 30) / 2,
        height: width / 3.5,
        borderRadius: 5
    },
    item: {
        marginLeft: 10,
        marginTop: 10
    },
    contentItem: {
        width: (width - 30) / 2
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
        marginTop: 4,
        paddingRight: 10,
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
        flexDirection: 'row',
        alignItems: 'center'
    },
    textTimePost: {
        marginLeft: 4,
        fontSize: 14,
        color: 'gray'
    }
})
