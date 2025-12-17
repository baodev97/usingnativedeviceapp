import { Colors } from "@/constants/colors";
import {
    launchCameraAsync,
    PermissionStatus,
    useCameraPermissions,
} from "expo-image-picker";
import { useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import OutlineButton from "../UI/OutlineButton";

type ImagePickerProps = {
    onImageTake:(imageUri:string)=>void
}

function ImagePicker({onImageTake}:ImagePickerProps) {
  const [cameraPermissionInformation, requestPermission] = useCameraPermissions();
  const [pickedImage, setPickedImage] = useState<undefined | string>();
  async function verifyPermissions() {
    if (cameraPermissionInformation?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (cameraPermissionInformation?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions",
        "you need to grant camera permissions to use this app"
      );
      return false;
    }
    return true;
  }
  async function takImageHandler() {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) return;
    const result = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    if (result.canceled) {
      return;
    }
    const imageUri = result.assets?.[0]?.uri;

    if (imageUri) {
      setPickedImage(imageUri);
      onImageTake(imageUri)
    }
  }
  let imagePreview = <Text>No Image taken yet.</Text>;
  if(pickedImage){
    imagePreview = <Image style={styles.image} source={{uri:pickedImage}}/>
  }
  return (
    <View>
      <View style={styles.imagePreview}>
        {imagePreview}
      </View>
      <OutlineButton name="camera" color={Colors.primary500} onPress={takImageHandler} >Take Image</OutlineButton>
    </View>
  );
}
export default ImagePicker;

const styles = StyleSheet.create({
    imagePreview:{
        width:'100%',
        height:200,
        marginVertical:8,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.primary100,
        borderRadius:8
    },
    image:{
        width:'100%',
        height:'100%',
        borderRadius:8
    }
})