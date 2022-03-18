import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from './Header'
import Icon from 'react-native-vector-icons/Ionicons'
import Constant from '../../../controller/Constant'
import ItemPostSuggest from './../../common/ItemPostSuggest'
import InfoProfile from './InfoProfile'

const DetailPost = () => {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image
                    source={{ uri: 'https://images6.alphacoders.com/102/1029037.jpg' }}
                    style={styles.image}
                />
                <View style={styles.content}>
                    <Text style={styles.titleItem} numberOfLines={2}>
                        Phòng tiện nghi 2.1tr ngay CV Phần Mềm Quang Trung, Q12
                    </Text>
                    <View style={styles.timePost}>
                        <Icon name='cash-outline' size={20} color={Constant.color.blue} />
                        <Text style={styles.price}>2.1 triệu/tháng</Text>
                    </View>
                    <View style={styles.address}>
                        <Icon name='location-outline' size={20} color={Constant.color.blue} />
                        <Text style={styles.textAddress} numberOfLines={2}>
                            Quận Hải Châu Đà Nẵng Hải Châu Đà Nẵng
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.timePost}>
                            <Icon name='time-outline' size={20} color={Constant.color.blue} />
                            <Text style={styles.textTimePost}>1 giờ trước</Text>
                        </View>
                        <View style={styles.timePost}>
                            <Icon name='eye-outline' size={20} color={Constant.color.blue} />
                            <Text style={styles.textTimePost}>100</Text>
                        </View>
                    </View>
                    <View style={styles.contact}>
                        <TouchableOpacity style={styles.btnPhoneNumber}>
                            <Text style={styles.textBtnText}>Gọi 0367624332</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnSendZalo}>
                            <Text style={styles.textBtnTextZalo}>Nhắn Zalo</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <InfoProfile />
                <View style={styles.description}>
                    <Text style={styles.headerDescription}>Mô tả chi tiết</Text>
                    <Text style={styles.contentDescription}>
                        Mình còn phòng ở riêng cho thuê ở trong căn hộ đang trống, nội thất cơ bản ,
                        có khu bếp , tủ lạnh, khu máy giặt sử dụng khu chung. Chỉ việc vào ở , chìa
                        khoá phòng riêng, thẻ từ thang máy , thẻ từ xe đầy đủ.
                        {'\n'}
                        {'\n'}
                        Chung cư Era Town Đức Khải khu an ninh , dân trí cao, mặt tiền đường lớn ,
                        không ngập nuớc, thoáng mát , diện tích công viên rộng rãi, tiếp giáp 3 mặt
                        sông, hồ bơi -gym , spa giải tr í trên cao lầu 5. Bán kính 100m đi bộ gồm :
                        siêu thị mini- Vin Mart, chợ Phước Long, trường học cấp 1-2 Phú Mỹ, cửa hàng
                        tiện lợi GS25- Crie K, Công an Phuờng Phú Mỹ,... quán ăn , caffe đầy đủ duới
                        chung cư, có giao hàng tận phòng không phải đi đâu, an ninh bảo vệ trực
                        24/24 ,hầm xe thông suốt rộng rãi đậu thoải mái.
                        {'\n'}
                        {'\n'}
                        Mình chính chủ ,bạn nào có nhu cầu muốn xem phòng đuợc xem miễn phí. Chủ nhà
                        thân t hiện, dễ tính, thoải mái, tâm lý, thời gian giờ giấc tự do.
                        {'\n'}
                        {'\n'}
                        Cảm ơn mọi người đã xem bài.
                    </Text>
                </View>
                <View style={styles.suggest}>
                    <Text style={styles.textSuggest}>Tin đăng liên quan</Text>
                    {[1, 2, 3, 4].map((item, index) => (
                        <ItemPostSuggest key={item} />
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

export default DetailPost

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        width: width,
        height: 200
    },
    content: {
        padding: 10,
        marginTop: 10
    },
    titleItem: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Constant.color.blue
    },
    price: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green'
    },
    acreage: {
        marginLeft: 10,
        fontSize: 14,
        color: 'gray'
    },
    address: {
        marginTop: 10,
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textAddress: {
        paddingHorizontal: 4,
        fontSize: 16,
        color: 'gray'
    },
    contact: {
        marginTop: 10,
        flexDirection: 'row'
    },
    btnPhoneNumber: {
        padding: 10,
        paddingVertical: 8,
        borderRadius: 10,
        backgroundColor: Constant.color.blue
    },
    textBtnText: {
        fontSize: 12,
        color: '#fff',
        fontWeight: 'bold'
    },
    btnSendZalo: {
        marginLeft: 20,
        padding: 10,
        paddingVertical: 8,
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: Constant.color.blue
    },
    textBtnTextZalo: {
        fontSize: 12,
        color: Constant.color.blue,
        fontWeight: 'bold'
    },
    timePost: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textTimePost: {
        paddingHorizontal: 10,
        fontSize: 14,
        color: 'gray'
    },
    description: {
        padding: 10
    },
    headerDescription: {
        fontSize: 18,
        color: Constant.color.blue,
        fontWeight: 'bold'
    },
    contentDescription: {
        marginTop: 10,
        fontSize: 16,
        color: '#999'
    },
    suggest: {
        paddingVertical: 10,
        marginTop: 10,
        borderTopWidth: 0.4,
        borderTopColor: Constant.color.blue
    },
    textSuggest: {
        paddingHorizontal: 10,
        fontSize: 18,
        color: Constant.color.blue,
        fontWeight: 'bold'
    }
})
