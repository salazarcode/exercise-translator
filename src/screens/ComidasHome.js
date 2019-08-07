import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Platform, Alert, ScrollView, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux'
import axios from 'axios'
import Actions from '../store/Actions'

function mapStateToProps(state){
  return {
    state: state
  }
}

class ComidasHome extends React.Component 
{        
  static navigationOptions = {
      header: null
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <ScrollView contentContainerStyle={{flex:1, alignItems:"center", justifyContent:"center", backgroundColor:"orange"}}> 
  
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default connect(mapStateToProps)(ComidasHome)