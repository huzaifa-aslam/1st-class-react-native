import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet,View,Text,Image,TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing'; 
export default function App() {
let [image,setImege]=useState("https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png")
  
  const openImagePicker=async ()=>{
    let permission=await ImagePicker.requestCameraRollPermissionsAsync()
    console.log("permission",permission)
    if (permission === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    let pickerResult=await ImagePicker.launchImageLibraryAsync()
    console.log("pickerResult",pickerResult)

    if (pickerResult.cancelled === true) {
      return;
    }
    setImege({ localUri: pickerResult.uri });
  }
  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  }; 

  
  return (
    <View style={styles.container}>

    <Image  source={{uri: image.localUri}} style={styles.image}/>
    
    <TouchableOpacity style={styles.button} onPress={openImagePicker}>
    <Text> add photo</Text>
      
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={openShareDialogAsync}>
    <Text> Share photo</Text>
      
    </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: 200
  },
  text: {

    fontSize: 20,
    textAlign: 'center',

  },
  button: {
    backgroundColor: "red",
    color: "#fff",
    borderRadius: 5,
    marginTop: 10,
    padding: 10

  }
});
