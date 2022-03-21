import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import CommonAPIs from './../../controller/APIs/CommonAPIs'
import Constant from './../../controller/Constant'
import Header from './../choiceDistrict/Header'
import Loading from './../common/Loading'

const ChoiceDistrict = ({ route }) => {
    const district = route?.params?.district
    const type = route?.params?.type

    const navigation = useNavigation()
    const [listWards, setListWards] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        CommonAPIs.getWards(district?.code)
            .then((res) => {
                setListWards(res)
                setLoading(false)
            })
            .catch((err) => {
                setLoading(false)
            })
    }, [])

    const handleChoiceWards = (item) => {
        navigation.navigate(type, {
            district,
            wards: item
        })
    }
    return (
        <View style={styles.container}>
            <Header title={'Chọn Phường/Xã'} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.body}>
                    {loading ? (
                        <Loading />
                    ) : (
                        listWards.map((item) => (
                            <TouchableOpacity
                                style={styles.btnChoice}
                                key={item?.code}
                                onPress={() => handleChoiceWards(item)}
                            >
                                <Text style={styles.textDistrict}>{item?.name}</Text>
                            </TouchableOpacity>
                        ))
                    )}
                </View>
            </ScrollView>
        </View>
    )
}

export default ChoiceDistrict

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    body: {
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    btnChoice: {
        paddingHorizontal: 10,
        marginTop: 10,
        marginRight: 10,
        borderWidth: 0.4,
        borderColor: Constant.color.text,
        borderRadius: 10
    },
    textDistrict: {
        fontSize: 16,
        paddingRight: 10,
        paddingVertical: 10,
        color: Constant.color.text
    }
})
