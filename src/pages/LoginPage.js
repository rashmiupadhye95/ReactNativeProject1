import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';
import LoginComponent from '../components/LoginComponent';
import SignUpComponent from '../components/SignUpComponent';


export default class LoginPage extends Component{

	render() {
		return(
      
			<View style={styles.container}>
				<LoginComponent navigation={this.props.navigation}/>
                <SignUpComponent navigation={this.props.navigation}/>
            </View>	
			)
	}
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#36485F',
      paddingLeft: 60,
      paddingRight: 60
    },
  });