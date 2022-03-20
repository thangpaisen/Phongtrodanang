import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from './Header'
import { useNavigation } from '@react-navigation/native'
import CommonAPIs from './../../controller/APIs/CommonAPIs'
import Constant from './../../controller/Constant'
import Loading from './../common/Loading'

const ChoiceDistrict = () => {
    const navigation = useNavigation()
    const [listDistrict, setListDistrict] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        CommonAPIs.getDistrict()
            .then((res) => {
                setListDistrict(res)
                setLoading(false)
            })
            .catch((err) => {
                setLoading(false)
            })
    }, [])
    return (
        <View style={styles.container}>
            <Header title={'Chọn Quận/Huyện'} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.body}>
                    {loading ? (
                        <Loading />
                    ) : (
                        listDistrict.map((item) => (
                            <TouchableOpacity
                                key={item?.code}
                                style={styles.btnChoice}
                                onPress={() =>
                                    navigation.navigate(Constant.screenName.Search, {
                                        district: item
                                    })
                                }
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
