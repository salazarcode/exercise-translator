import React from 'react';
import { Text, View, TextInput, Button, Image, FlatList, Platform, Alert, ScrollView, KeyboardAvoidingView, SafeAreaView } from 'react-native';
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

  state = {
    busqueda: "Salchichas",
    resultados: []
  }

  _renderItem = ({item}) => (
    
    <View style={{
      flex:1,
      width: "90%",
      margin: 5,
      padding:20,
      backgroundColor:"white",
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: "center",
      flexDirection: 'row',
      alignSelf: 'center',
      elevation: 5
    }}>
      <View style={{
        width:"70%"
      }}>
        <Text style={{marginTop:5, color:"black"}}>
          Nombre: {item.food.label}
        </Text>
        <Text style={{marginTop:5, color:"black"}}>
          Marca: {item.food.brand}
        </Text>
        <Text style={{marginTop:5, color:"black"}}>
          Categoría: {item.food.category}
        </Text>
        <Text style={{marginTop:5, color:"black"}}>
          Calorías: {item.food.nutrients.ENERC_KCAL != undefined ? item.food.nutrients.ENERC_KCAL.toFixed(2) : 0}
        </Text>
        <Text style={{marginTop:5, color:"black"}}>
          Proteina: {item.food.nutrients.PROCNT != undefined ? item.food.nutrients.PROCNT.toFixed(2) : 0}
        </Text>
        <Text style={{marginTop:5, color:"black"}}>
          Grasa: {item.food.nutrients.FAT != undefined ? item.food.nutrients.FAT.toFixed(2) : 0}
        </Text>        
      </View>

      <Image
        style={{
          resizeMode: 'contain',         
          backgroundColor:"transparent",
          width:"30%",
          height: "100%"
        }}
        source={{uri: item.food.image}}
      />
    </View>
  );

  render() {
    let loading = false;
    return (
      <SafeAreaView style={{
        flex: 1, 
        marginTop: Platform.OS == "android" ? 25: 0,
        backgroundColor:"ivory"
      }}>        
        <Text>Busca tus ingredientes:</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({busqueda: text})}
          value={this.state.busqueda}
        />
        
        <Text style={{display:loading == false ? "none" : "block"}}>Buscando</Text>
        <Button
          onPress={async () => {     
            loading = true;  
            let datos =  await axios.get('https://api.edamam.com/api/food-database/parser', {
              params: {
                app_id: "ec35e706",
                app_key: "7e55552bb1a994d94f5c67f5d30af6a9",
                ingr: this.state.busqueda
              }
            })
            .then(r=>r.data.hints)
            .catch(e=>console.log(e));
            this.setState({resultados:datos});
          }}
          title="Llamar API"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

        <FlatList
          data={this.state.resultados}
          renderItem={this._renderItem}
          keyExtractor={(item) => item.food.foodId}
        />
      </SafeAreaView>
    );
  }
}

export default connect(mapStateToProps)(ComidasHome)