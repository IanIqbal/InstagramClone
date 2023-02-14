import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

export default function Add({ ref, navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(CameraType.back);
    const [camera, setCamera] = useState(null)
    const [image, setImage] = useState(null)
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const takePicture = async () => {

        if (camera) {
            const data = await camera.takePictureAsync(null)

            setImage(data.uri)

        }

    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        // console.log(result);
        console.log(result.assets[0].uri)
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    useEffect(() => {

    }, [ref])

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.cameraContainer}>
                <Camera ref={(ref) => setCamera(ref)} style={styles.cameraRatio} type={type} ratio={'1:1'}>

                </Camera>
            </View>
            <Button
                title="Flip Camera"

                onPress={() => {
                    setType(type === CameraType.back ? CameraType.front : CameraType.back);
                }}>
            </Button>

            <Button title='Take Picture' onPress={() => takePicture()} >
            </Button>

            <Button title='Upload Picture' onPress={() => pickImage()} >
            </Button>

            <Button title="Save Picture" onPress={() => {navigation.navigate("Save", {image}); setImage(null)} } >
            </Button>

            {image && <Image style={{ flex: 1 }} source={{ uri: image }} />}
        </View>
    );
}

const styles = StyleSheet.create({
    cameraContainer: {
        flex: 1,
        flexDirection: "row"
    },

    cameraRatio: {
        flex: 1,
        aspectRatio: 1
    }
})