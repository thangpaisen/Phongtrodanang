import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
    TextInput,
    Alert
} from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import Constant from '../../controller/Constant'
import Button from '../common/Button'
import ActionSheet from 'react-native-actionsheet'
import ImagePicker from 'react-native-image-crop-picker'
import HeaderDetail from './../common/HeaderDetail'
import { useNavigation } from '@react-navigation/native'

const ChangeProfile = ({ route }) => {
    const addressDetail = route?.params?.addressDetail
    const district = route?.params?.district
    const wards = route?.params?.wards
    const navigation = useNavigation()
    const [name, setName] = useState('Nguyễn Văn Tèo')
    const [imgAvatar, setImgAvatar] = useState('https://images6.alphacoders.com/102/1029037.jpg')
    const actionModal = useRef()

    const showActionSheet = () => {
        actionModal.current.show()
    }

    const openCamera = () => {
        ImagePicker.openCamera({
            mediaType: 'photo',
            cropping: true
        })
            .then((image) => {
                setImgAvatar(image.path)
            })
            .catch((err) => {})
    }

    const openLibrary = () => {
        ImagePicker.openPicker({
            mediaType: 'photo',
            cropping: true
        })
            .then((image) => {
                setImgAvatar(image.path)
            })
            .catch((err) => {})
    }

    const handlePickerImage = (index) => {
        if (index == 0) {
            openCamera()
        } else if (index == 1) {
            openLibrary()
        }
    }

    const handleChoiceAddress = () => {
        navigation.navigate(Constant.screenName.UpdateAddress, {
            addressDetail,
            district,
            wards
        })
    }

    const handleOnUpdateProfile = () => {
        if (!name) {
            Alert.alert('Thông báo', 'Vui lòng nhập họ tên')
        } else if (!district || !wards || !addressDetail) {
            Alert.alert('Thông báo', 'Vui lòng chọn địa chỉ')
        } else {
            Alert.alert('Thông báo', 'Cập nhật thành công', [
                {
                    text: 'OK',
                    onPress: () => {
                        navigation.navigate(Constant.screenName.Profile)
                    }
                }
            ])
        }
    }
    return (
        <>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <HeaderDetail title='Cập nhật thông tin' />
                <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                    <View style={styles.contentView}>
                        <View style={styles.avatar}>
                            <TouchableOpacity onPress={showActionSheet}>
                                <Image source={{ uri: imgAvatar }} style={styles.imgAvatar} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.body}>
                            <View style={styles.formInput}>
                                <Text style={styles.title}>Email</Text>
                                <TextInput
                                    style={{ ...styles.input, backgroundColor: '#E5E5E8' }}
                                    value={'cu@cai.nho'}
                                    editable={false}
                                />
                            </View>
                            <View style={styles.formInput}>
                                <Text style={styles.title}>Tên</Text>
                                <TextInput
                                    style={styles.input}
                                    value={name}
                                    onChangeText={setName}
                                />
                            </View>
                            <View style={styles.formInput}>
                                <Text style={styles.title}>Địa chỉ</Text>
                                <TouchableOpacity
                                    onPress={handleChoiceAddress}
                                    style={styles.input}
                                >
                                    <Text style={styles.textAddress}>
                                        {district
                                            ? `${addressDetail}, ${wards?.name}, ${district?.name}`
                                            : 'Chưa có địa chỉ'}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.btnSave}>
                                <Button title='Cập nhật' handleOnClick={handleOnUpdateProfile} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <ActionSheet
                ref={actionModal}
                title={'Select photo'}
                options={['Camera', 'Photo album', 'Cancel']}
                cancelButtonIndex={2}
                onPress={handlePickerImage}
            />
        </>
    )
}

export default ChangeProfile

const styles = StyleSheet.create({
    contentView: {
        margin: 20,
        backgroundColor: 'white',
        paddingVertical: 20,
        borderRadius: 10,
        elevation: 10
    },
    scrollView: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        marginHorizontal: 20,
        padding: 20,
        alignItems: 'center'
    },
    imgAvatar: {
        width: Constant.screen.width / 2,
        height: Constant.screen.width / 3.5,
        borderRadius: 10
    },
    formInput: {
        marginBottom: 18
    },
    title: {
        fontSize: 16,
        color: Constant.color.text,
        fontWeight: 'bold'
    },
    body: {
        marginHorizontal: 20
    },
    input: {
        flex: 1,
        alignItems: 'flex-start',
        marginTop: 10,
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 1,
        borderColor: '#CCCCE3',
        borderRadius: 10,
        fontSize: 16,
        color: '#868686'
    },
    textAddress: {
        fontSize: 16,
        color: '#868686'
    },
    btnSave: {
        marginTop: 80
    }
})
