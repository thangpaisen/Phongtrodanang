import { StyleSheet, Text, View, Image, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useRef } from 'react'
import ViewShot from 'react-native-view-shot'
import CameraRoll from '@react-native-community/cameraroll'

const CreatPost = () => {
    const viewShotRef = useRef()
    const onSaveQRCompleted = () => {
        ToastAndroid.show('Saved to gallery', ToastAndroid.SHORT)
        // RNProgressHud.showSuccessWithStatus('Successfully saved QRCode')
        // setTimeout(() => {
        //     RNProgressHud.dismiss()
        // }, 1000)
    }

    const onSaveFailed = (error) => {
        ToastAndroid.show('Failed to save', ToastAndroid.SHORT)
        console.log('error', error)
        // RNProgressHud.showErrorWithStatus(Constant.errorMsg.common)
        // setTimeout(() => {
        //     RNProgressHud.dismiss()
        // }, 1000)
    }

    const saveQRCode = async () => {
        // if (!(await Util.hasLibraryPermission())) {
        //     return
        // }
        viewShotRef?.current
            ?.capture()
            .then((uri) => {
                CameraRoll.save(uri, { type: 'photo' }).then(onSaveQRCompleted).catch(onSaveFailed)
            })
            .catch((error) => {
                alert(error?.message)
            })
    }
    return (
        <View style={styles.container}>
            <ViewShot
                ref={viewShotRef}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    alignSelf: 'center'
                }}
            >
                <Text style={styles.text}>Hello World!</Text>
                <Image
                    source={{ uri: 'https://images6.alphacoders.com/102/1029037.jpg' }}
                    style={{ width: 100, height: 100 }}
                />
            </ViewShot>
            <TouchableOpacity style={styles.btnDownLoad} onPress={() => saveQRCode()}>
                <Text style={styles.textBtn}>Download</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CreatPost

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue'
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    btnDownLoad: {
        padding: 20,
        backgroundColor: 'red',
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 10
    },
    textBtn: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
})
