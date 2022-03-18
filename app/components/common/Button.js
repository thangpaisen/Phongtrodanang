import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Constant from '../../controller/Constant'

const Button = ({
    title = 'Sign in',
    backgroundColor = '#00CEFF',
    textColor = '#fff',
    handleOnClick
}) => {
    return (
        <TouchableOpacity
            onPress={handleOnClick}
            style={{ ...styles.button, backgroundColor: backgroundColor }}
        >
            <Text style={{ ...styles.buttonText, color: textColor }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingVertical: 10,
        borderRadius: 23,
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})
