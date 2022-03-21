import { StyleSheet, Text, View, TouchableOpacity, Alert, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from './../common/Header'
import Constant from './../../controller/Constant'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import ItemPostSearch from './../common/ItemPostSearch'
import Loading from './../common/Loading'
import FormArrange from './../common/FormArrange'

const Search = ({ route }) => {
    const navigation = useNavigation()
    const district = route?.params?.district
    const wards = route?.params?.wards
    const [loading, setLoading] = useState(true)
    const [typeChoice, setTypeChoice] = useState(0)

    const handleChoiceWards = () => {
        if (!district) {
            Alert.alert('Thông báo', 'Vui lòng chọn Quận/Huyện')
        } else {
            navigation.navigate(Constant.screenName.ChoiceWards, {
                district: district,
                type: 'Search'
            })
        }
    }

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [wards])
    return (
        <View style={styles.container}>
            <Header title='Tìm kiếm' />
            <View style={styles.formChoiceAddress}>
                <TouchableOpacity
                    style={styles.choiceDistrict}
                    onPress={() =>
                        navigation.navigate(Constant.screenName.ChoiceDistrict, { type: 'Search' })
                    }
                >
                    <Text style={styles.choiceDistrictText} numberOfLines={1}>
                        {district?.name || 'Chọn Quận/Huyện'}
                    </Text>
                    <Icon name='caret-down-outline' size={20} color={Constant.color.grayText} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.choiceDistrict} onPress={() => handleChoiceWards()}>
                    <Text style={styles.choiceDistrictText} numberOfLines={1}>
                        {wards?.name || 'Chọn Phường/Xã'}
                    </Text>
                    <Icon name='caret-down-outline' size={20} color={Constant.color.grayText} />
                </TouchableOpacity>
            </View>
            {loading ? (
                <Loading />
            ) : wards ? (
                <View style={styles.dataSearch}>
                    <FormArrange typeChoice={typeChoice} setTypeChoice={setTypeChoice} />
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={[1, 2, 3, 4, 5, 6]}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => <ItemPostSearch />}
                    />
                </View>
            ) : null}
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    formChoiceAddress: {
        marginTop: 10,
        flexDirection: 'row',
        paddingVertical: 10
    },
    choiceDistrict: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingRight: 10,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: Constant.color.grayText,
        borderRadius: 10
    },
    choiceDistrictText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 14,
        paddingLeft: 4,
        color: Constant.color.text
    },
    dataSearch: {
        flex: 1
    }
})
