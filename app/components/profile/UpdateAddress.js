import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import Constant from '../../controller/Constant'
import Button from '../common/Button'
import HeaderDetail from './../common/HeaderDetail'
import { useNavigation } from '@react-navigation/native'

const UpdateAddress = ({ route }) => {
    const navigation = useNavigation()
    const [addressDetail, setAddressDetail] = useState(route?.params?.addressDetail || '')
    const district = route?.params?.district
    const wards = route?.params?.wards

    const handleChoiceDistrict = () => {
        navigation.navigate(Constant.screenName.ChoiceDistrict, { type: 'UpdateAddress' })
    }

    const handleChoiceWards = () => {
        if (!district) {
            Alert.alert('Thông báo', 'Vui lòng chọn Quận/Huyện')
        } else {
            navigation.navigate(Constant.screenName.ChoiceWards, {
                district: district,
                type: 'UpdateAddress'
            })
        }
    }

    const handleOnSave = () => {
        if (!district) {
            Alert.alert('Thông báo', 'Vui lòng chọn Quận/Huyện')
        } else if (!wards) {
            Alert.alert('Thông báo', 'Vui lòng chọn Phường/Xã')
        } else if (!addressDetail) {
            Alert.alert('Thông báo', 'Vui lòng nhập địa chỉ')
        } else {
            navigation.navigate(Constant.screenName.UpdateProfile, {
                addressDetail,
                district,
                wards
            })
        }
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <HeaderDetail title='Chọn địa chỉ' />
            <View style={styles.container}>
                <View style={styles.contentView}>
                    <View style={styles.body}>
                        <View style={styles.formInput}>
                            <Text style={styles.title}>Quận/Huyện</Text>
                            <TouchableOpacity onPress={handleChoiceDistrict}>
                                <TextInput
                                    style={styles.input}
                                    value={district?.name}
                                    editable={false}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.formInput}>
                            <Text style={styles.title}>Phường/Xã</Text>
                            <TouchableOpacity onPress={handleChoiceWards}>
                                <TextInput
                                    style={styles.input}
                                    value={wards?.name}
                                    editable={false}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.formInput}>
                            <Text style={styles.title}>Địa chỉ chi tiết</Text>
                            <TextInput
                                style={styles.input}
                                value={addressDetail}
                                onChangeText={setAddressDetail}
                            />
                        </View>
                        <TouchableOpacity style={styles.btnSave}>
                            <Button title='Cập nhật' handleOnClick={handleOnSave} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default UpdateAddress

const styles = StyleSheet.create({
    contentView: {
        margin: 20,
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingTop: 40,
        borderRadius: 10,
        elevation: 10
    },
    container: {
        flex: 1,
        justifyContent: 'center'
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
