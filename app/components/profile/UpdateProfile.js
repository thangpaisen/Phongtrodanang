import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    Image,
    TextInput
} from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import Constant from '../../controller/Constant'
import Button from '../common/Button'
import ActionSheet from 'react-native-actionsheet'
import ImagePicker from 'react-native-image-crop-picker'
import HeaderDetail from './../common/HeaderDetail'

const ChangeProfile = () => {
    const [name, setName] = useState('Nguyễn Văn Tèo')
    const [address, setAddress] = useState('104/21 Trần Cao Vân')
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
                                <TextInput
                                    style={styles.input}
                                    value={address}
                                    onChangeText={setAddress}
                                />
                            </View>
                            <View style={styles.btnSave}>
                                <Button title='Cập nhật' />
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
        marginTop: 10,
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 16,
        color: '#868686',
        borderWidth: 1,
        borderColor: '#CCCCE3',
        borderRadius: 10
    },
    btnSave: {
        marginTop: 80
    }
})
