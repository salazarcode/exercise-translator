import React from 'react';
import { 
  StyleSheet, 
  Text, 
  Platform,
  View, 
  Button, 
  FlatList,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'
import Wrapper from './Wrapper'
import axios from "axios";
import moment from 'moment-with-locales-es6'

function mapStateToProps(state){
  return {
    state: state
  }
}


class Entrenamiento extends React.Component 
{   
  state = {
    contactos: [],
    chats: []
  }
  static navigationOptions = {
    header: null
  }
  chat(item)
  {
    return(
      <TouchableOpacity
        onPress={async ()=>{
          this.props.navigation.navigate("Mensajes", {chat_id: item.id});
        }}
      >
        <View style={{height:"auto", width:"100%", backgroundColor:"navy", borderRadius:10, marginTop:5, padding:4}}>
          <Text style={{fontFamily:"NunitoBold", color:"white"}}>
            Última actualizacion: {moment(item.updated_at, "YYYY-MM-DD hh:mm:ss").locale("es").fromNow()}
          </Text>
          <Text style={{fontFamily:"NunitoBold", color:"white"}}>Participantes: </Text>
          {item.users.map((item)=>{
            return <Text key={item.id.toString()} style={{fontFamily:"NunitoRegular", color:"white", marginLeft: 20}}>{item.email}</Text>
          })}
        </View>         
      </TouchableOpacity>
  
    )
  }

  contacto(item)
  {
    return(
      <View style={{height:50, width:"100%", backgroundColor:"navy", borderRadius:10, marginTop:5, padding:4}}>
        <Text style={{fontFamily:"NunitoRegular", color:"white"}}>
          {item.email}
        </Text>
      </View>    
    )
  }

  async componentDidMount(){
    axios.defaults.headers.common['token'] = 'de23b0432024fb85fc6d948a9d656c2f7805629b6415ff8c';
    let contactos = await axios.get('https://www.ivorystack.com/mainbk/api/chats/contacts');
    let chats = await axios.get('https://www.ivorystack.com/mainbk/api/chats');

    await this.setState({
      contactos: contactos.data.data.contacts,
      chats: chats.data.data.chats,      
    })
  }
  render() {
    return (
      <Wrapper>
        <ScrollView 
        style={{
          flex:1
        }} 
        contentContainerStyle={{
          alignItems: 'center',
        }}>
          <View style={{height: 300, width: "80%", backgroundColor:"#dfe1e6", borderRadius: 20, marginTop:20}}>
            <Text>Contactos</Text>
            <FlatList
              nestedScrollEnabled={true}
              style={{flex:1}}
              data={this.state.contactos}
              renderItem={({item}) => this.contacto(item)}
              ListEmptyComponent={()=> <Text>Cargando...</Text>}
              keyExtractor={(item, index) => item.id.toString()}
            />
          </View>
          <View style={{height: 300, width: "80%", backgroundColor:"#dfe1e6", borderRadius: 20, marginTop:20}}>
            <Text>Chats</Text>
            <FlatList
              nestedScrollEnabled={true}
              style={{flex:1}}
              data={this.state.chats}
              renderItem={({item}) => this.chat(item)}
              ListEmptyComponent={()=> <Text>Cargando...</Text>}
              keyExtractor={(item, index) => item.id.toString()}
            />
          </View>
        </ScrollView>
      </Wrapper>    
    );
  }
}

export default connect(mapStateToProps)(Entrenamiento)