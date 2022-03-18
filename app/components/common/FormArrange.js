import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const FormArrange = ({ typeChoice, setTypeChoice }) => {
    const handleOnSort = () => {
        if (typeChoice != 2) {
            setTypeChoice(2)
        } else {
            setTypeChoice(3)
        }
    }
    return (
        <View style={styles.arrange}>
            <TouchableOpacity style={styles.btnChoice} onPress={() => setTypeChoice(1)}>
                <Text
                    style={{
                        ...styles.textBtnChoice,
                        color: typeChoice === 1 ? Constant.color.blue : Constant.color.grayText
                    }}
                >
                    Mới nhất
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnChoice} onPress={() => setTypeChoice(4)}>
                <Text
                    style={{
                        ...styles.textBtnChoice,
                        color: typeChoice === 4 ? Constant.color.blue : Constant.color.grayText
                    }}
                >
                    Xem nhiều
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnChoice} onPress={handleOnSort}>
                <Text
                    style={[
                        styles.textBtnChoice,
                        (typeChoice == 2 || typeChoice == 3) && {
                            color: Constant.color.blue
                        }
                    ]}
                >
                    Giá
                </Text>
                <Icon
                    name={typeChoice == 3 ? 'caret-up-outline' : 'caret-down-outline'}
                    size={20}
                    color={
                        ((typeChoice == 2 || typeChoice == 3) && Constant.color.blue) ||
                        Constant.color.grayText
                    }
                />
            </TouchableOpacity>
        </View>
    )
}

export default FormArrange

const styles = StyleSheet.create({
    arrange: {
        paddingVertical: 6,
        marginHorizontal: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 0.4,
        borderBottomColor: Constant.color.grayText
    },
    btnChoice: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingVertical: 8,
        marginHorizontal: 20
    },
    textBtnChoice: {
        fontSize: 16,
        color: Constant.color.grayText,
        fontWeight: 'bold'
    }
})
