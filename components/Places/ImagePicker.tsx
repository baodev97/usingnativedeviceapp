import { launchCameraAsync } from 'expo-image-picker';
import { Button, View } from "react-native";

function ImagePicker(){

    async function takImageHandler(){
      const image =  await launchCameraAsync({
        allowsEditing:true,
        aspect:[16,9],
        quality:0.5
      });
      console.log(image)
    }

    return (
        <View>
            <View>

            </View>
            <Button title="Take Image" onPress={takImageHandler}/>
        </View>
    )
}
export default ImagePicker;