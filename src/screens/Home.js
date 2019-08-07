import React from 'react';
import { Text, View, ScrollView, Image, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { connect } from 'react-redux'
import axios from 'axios'

function mapStateToProps(state){
  return {
    state: state
  }
}

class Home extends React.Component 
{    
    static navigationOptions = {
        header: null
    }
    constructor(props) {
      super(props);
      this.state = {
      };
    }  
    render() {  
      return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <ScrollView contentContainerStyle={{flex:1, alignItems:"center", justifyContent:"center", backgroundColor:"ivory"}}> 
    
          </ScrollView>
        </KeyboardAvoidingView>
      );
    }
  }

export default connect(mapStateToProps)(Home)