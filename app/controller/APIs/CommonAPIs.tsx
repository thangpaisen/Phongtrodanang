import axios from 'axios'

import Constant from '../Constant'

export default class CommonAPIs {
    static baseURL = Constant.baseURL

    static endpoints = {
        getDistrict: CommonAPIs.baseURL + '/p/48?depth=2', // các quận/huyện
        getWards: CommonAPIs.baseURL + '/d' // các xã/phường
    }

    static headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }

    // lấy thông tin quận/huyện
    static async getDistrict() {
        try {
            let response = await axios.get(CommonAPIs.endpoints.getDistrict, {
                headers: CommonAPIs.headers
            })
            return Promise.resolve(response.data.districts)
        } catch (error) {
            return Promise.reject(error)
        }
    }

    // lấy thông tin xã/phường
    static async getWards(districtCode) {
        try {
            let response = await axios.get(
                `${CommonAPIs.endpoints.getWards}/${districtCode}?depth=2`,
                {
                    headers: CommonAPIs.headers
                }
            )
            return Promise.resolve(response.data.wards)
        } catch (error) {
            return Promise.reject(error)
        }
    }
}
