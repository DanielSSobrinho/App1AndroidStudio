import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Jogos de Tiro</Text>
      <StatusBar style="auto" />
      <Text style={estilo.jogo}>Eleitos os melhores:</Text>
      <ScrollView>
      <Text style={estilo.jogo}>RAINBOW SIX</Text>
      <Image style={estilo.img} source={require("./assets/jogo1.jpg")}/>
      <Text style={estilo.jogo}>VALORANT</Text>
      <Image style={estilo.img} source={require("./assets/jogo2.jpg")}/> 
      <Text style={estilo.jogo}>CS:GO</Text>
      <Image style={estilo.img} source={require("./assets/jogo3.jpg")}/> 
      <Text style={estilo.jogo}>BATTLEFIELD</Text>
      <Image style={estilo.img} source={require("./assets/jogo4.jpg")}/> 
      </ScrollView> 
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ecae6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 50,
    marginTop: 40,
  },
  img: {
    width: 350,
    height:300,
    marginBottom: 20,
    borderRadius: 30
  },
  jogo: {
    marginTop: 40,
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center'
  }
});
