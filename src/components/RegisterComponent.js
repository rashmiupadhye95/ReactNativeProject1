import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';


export default class RegisterComponent extends Component {
    constructor(props){
        super(props);
    }

  render() {
    return (
         <View>     
         <Text style={styles.header}>Register Now!</Text> 
           <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Username"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              
              />
              <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"             
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"              
              />              
           <TouchableOpacity style={styles.button}
            >
             <Text style={styles.buttonText}>
            Sign Up</Text>
           </TouchableOpacity>

           {/* <Text style={styles.loginText}>Already have an account?</Text>
                <TouchableOpacity >
                    <Text style={styles.buttonText}  
                    onPress={() => this.props.navigation.navigate('Login')}>Login</Text>
                </TouchableOpacity> */}
           </View>
           
    );
  }
}
const styles = StyleSheet.create({
    
    header:{
        fontSize:24,
        color: '#fff',
        paddingBottom:10,
        marginBottom: 40,
        borderBottomColor: '#188187',
        borderBottomWidth: 1,
    },
  
    inputBox: {
      width:'auto',
      backgroundColor:'rgba(255, 255,255,0.2)',
      borderRadius: 25,
      paddingHorizontal:16,
      fontSize:16,
      color:'#ffffff',
      marginVertical: 10
    },
    button: {
      width:'auto',
      backgroundColor:'#1c313a',
       borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    },
    loginText: {
        color:'rgba(255,255,255,0.6)',
        fontSize:16,
    },
    
  });

