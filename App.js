import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';

export default function App() {
  const [name,setname]=useState("huzaifa")
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome {name}!</Text>
      <Image source={{uri:"https://static.toiimg.com/thumb/msid-58475411,width-748,height-499,resizemode=4,imgsize-142947/.jpg"}} style={styles.logo}/>
      <StatusBar style="auto" />
      <TouchableOpacity
        onPress={()=>alert("hello world!!!")}
        
      >
        <Text style={styles.button}>Pick a photo</Text>
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
  logo:{
    height:200,
    width:200
  },
  text:{
    
    fontSize: 25,
  
  },
  button:{
    backgroundColor:"blue",
    color:"white",
    borderRadius:5,
    marginTop:10,
    padding:10

  }
});
