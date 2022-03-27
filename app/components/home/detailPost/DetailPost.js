import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    Linking
} from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from './Header'
import Icon from 'react-native-vector-icons/Ionicons'
import Constant from '../../../controller/Constant'
import ItemPostSuggest from './../../common/ItemPostSuggest'
import InfoProfile from './InfoProfile'
import SliderImage from './SliderImage'
import Util from '../../../controller/Util'
import { useNavigation } from '@react-navigation/native'

const dataListImage = [
    'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg',
    'https://hinhgaixinh.com/wp-content/uploads/2021/11/tai-hinh-anh-gai-xinh-deo-mat-kinh.jpg',
    'https://1.bigdata-vn.com/wp-content/uploads/2021/12/Hinh-Nen-Girl-Xinh-Full-HD-Cho-Laptop-Va-May.jpg'
]

const DetailPost = () => {
    const navigation = useNavigation()

    const handleOpenSMS = () => {
        // Linking.openURL(`sms:${phone}${Util.getSMSDivider()}body=${body}`)
        Linking.openURL(`sms:0367624332${Util.getSMSDivider()}body=Phòng trọ còn phòng ko anh`)
    }
    const handleOpenChat = () => {
        navigation.navigate(Constant.screenName.MessageDetail)
    }
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <SliderImage listImage={dataListImage} />
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
            <View style={styles.footer}>
                <View style={styles.contact}>
                    <TouchableOpacity
                        style={{ ...styles.btnPhoneNumber, backgroundColor: Constant.color.blue }}
                        onPress={() => {
                            Linking.openURL(`tel:0367624332`)
                        }}
                    >
                        <Icon name='call-outline' size={20} color={'white'} />
                        <Text style={{ ...styles.textBtnText, color: 'white' }}>Gọi điện</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnPhoneNumber} onPress={handleOpenSMS}>
                        <Icon
                            name='chatbubble-ellipses-outline'
                            size={20}
                            color={Constant.color.blue}
                        />
                        <Text style={styles.textBtnText}>Gửi SMS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnPhoneNumber} onPress={handleOpenChat}>
                        <Icon
                            name='chatbox-ellipses-outline'
                            size={20}
                            color={Constant.color.blue}
                        />
                        <Text style={styles.textBtnText}>Chat</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        flexDirection: 'row'
    },
    btnPhoneNumber: {
        flex: 1,
        padding: 10,
        paddingVertical: 8,
        backgroundColor: Constant.color.border,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBtnText: {
        fontSize: 14,
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
        color: Constant.color.text
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
    },
    footer: {
        // paddingHorizontal: 10,
        elevation: 20,
        backgroundColor: 'white'
    }
})
