import React from 'react';
import { Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import * as Font from 'expo-font'
import { Provider } from 'react-redux';

import store from './src/store/Store';
import AppContainer from './src/navigation/Router';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'NunitoBold': require('./src/assets/fonts/Nunito-Bold.ttf'),      
      'NunitoRegular': require('./src/assets/fonts/Nunito-Regular.ttf'),
    });

    this.setState({fontLoaded:true});
  }
  render() {
    if(this.state.fontLoaded)
    {
      return (
        <PaperProvider>
          <Provider store={store}>
            <AppContainer />
          </Provider> 
        </PaperProvider>
      );      
    }
    else{
      return (
        <View style={{
          flex:1,
          alignItems:"center",
          justifyContent:"center"
        }}>
          <Text>Traductor de ejercicios y comidas</Text>
          <Text>Cargando Recursos...</Text>
        </View>
      )
    }
      

  }
}