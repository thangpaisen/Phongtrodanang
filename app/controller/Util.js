import Constant from './Constant'
import 'intl'
import 'intl/locale-data/jsonp/en'
import { Alert } from 'react-native'

export default class Util {
    static numberFormat = (value) => {
        const result = new Intl.NumberFormat('en', {}).format(value)
        return result === 'NaN' ? null : result
    }

    static convertStringToOnlyNumber = (text) => {
        return text.replace(/\D/g, '')
    }

    static isNumberOnly = (str) => {
        const pattern = /^\d+$/
        return pattern.test(str)
    }

    static isPasswordValidation = (str = '') => {
        let password = str?.trim()
        if (password.length < 6) {
            return false
        }

        return true
    }

    static isAndroid = () => {
        return Platform.OS === 'android'
    }

    static isIOS = () => {
        return Platform.OS === 'ios'
    }

    static showAlert = (message = '') => {
        if (message == undefined) {
            message = 'Thông báo'
        }
        Alert.alert('Thông báo', message)
    }

    static showErrorAlert = (error) => {
        Alert.alert(
            'Notification',
            error?.response?.data?.message ??
                error?.message ??
                'An error has occurred. Please try again!'
        )
    }

    static validateEmail = (email) => {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(email).toLowerCase())
    }

    static getSMSDivider = () => {
        return Platform.OS === 'ios' ? '&' : '?'
    }
}
