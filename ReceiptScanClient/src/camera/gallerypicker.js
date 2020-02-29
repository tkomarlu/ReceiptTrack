import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  ImageBackground,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { RNS3 } from 'react-native-aws3';



export default class App extends Component {

  state = {
    pickedImage: null
  }

  reset = () => {
    this.setState({
      pickedImage: null
    });
  }

  /**
 * The first arg is the options object for customization (it can also be null or omitted for default options),
 * The second arg is the callback which sends object: response (more info below in README)
 */

 pickImageHandler = () => {
     ImagePicker.showImagePicker({title: "Select an image", maxWidth: 800, maxHeight: 600}, res => {
       if (res.didCancel) {
         console.log("User cancelled!");
       } else if (res.error) {
         console.log("Error", res.error);
       } else {
         this.setState({
           pickedImage: { uri: res.uri }
         });
         console.log(res.uri)
               // Load the AWS SDK for Node.js
      var AWS = require('aws-sdk');
      var s3 = new AWS.S3({accessKeyId:'ACCESSKEY', secretAccessKey:'SECRETACCESSKEY', region:'us-west-1'});

      var params = {Bucket: 'receiptscanimagepipeline', Key: res.fileName, ContentType: 'image/jpeg'};
      s3.getSignedUrl('putObject', params, function (err, url) {
          console.log('Your generated pre-signed URL is', url);
          const USER = AsyncStorage.getItem('UserName', (err, res) => {
              console.log(res);
            });

          const xhr = new XMLHttpRequest()
              xhr.open('PUT', url)
              xhr.onreadystatechange = function() {
                  if (xhr.readyState === 4) {
                      if (xhr.status === 200) {
                      console.log('Image successfully uploaded to S3')
                  } else {
                      console.log('Error while sending the image to S3')
                  }
              }
          }
          xhr.setRequestHeader('Content-Type', 'image/jpeg')
          xhr.send({ uri: res.uri, type: 'image/jpeg', name: res.fileName});

           });

         Alert.alert(
  'Receipt uploaded!',
  'Your receipt has sucessfully been recorded.',
  [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  {cancelable: false},
);
this.reset();
 }
});
}

resetHandler = () =>{
    this.reset();
  }



  render() {
    return (
      <ImageBackground source={require('../data/blue2.jpg')} style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
      <Text style={styles.textStyle}>Pick Image </Text>
        <View style={styles.placeholder}>
          <Image source={this.state.pickedImage} style={styles.previewImage} />
        </View>
        <View style={styles.button}>

          <Button title="Select and Upload" onPress={this.pickImageHandler} />

        </View>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems:"center",
  },
  textStyle: {
    fontWeight:"bold",
    fontSize:30,
    textAlign:"center",
    color:"white",
    marginTop: 25
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "70%",
    height: 280,
    marginTop:50,
  },
  button: {
    width: "80%",
    marginTop:20,
    flexDirection:"row",
    justifyContent: "space-around"
  },
  previewImage: {
      width: "100%",
      height: "100%"
  }
});
