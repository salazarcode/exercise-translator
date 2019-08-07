import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Platform, KeyboardAvoidingView } from 'react-native';
import {Button} from 'react-native-paper'
import { connect } from 'react-redux'
import axios from 'axios'

function mapStateToProps(state){
  return {
    state: state
  }
}

class EjerciciosHome extends React.Component 
{        
  static navigationOptions = {
      header: null
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <ScrollView contentContainerStyle={{flex:1, alignItems:"center", justifyContent:"center", backgroundColor:"navy"}}> 

        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
export default connect(mapStateToProps)(EjerciciosHome)