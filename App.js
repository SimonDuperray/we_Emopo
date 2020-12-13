import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date().getDate()+"-"+(new Date().getMonth()+1)+"-"+new Date().getFullYear(),
      tristesse: '',
      colere: '',
      joie: ''
    }
  }
  submit = () => {
    console.log(this.state);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>EmoPo Daily Form</Text>
        <TextInput 
          multiline={true}
          numberOfLines={9}
          placeholder="Tristesse" 
          onChangeText={(text)=>{this.setState({tristesse:text})}}
          style={{ borderWidth:2, borderColor:'skyblue', margin:20 }}
        />
        <TextInput 
          multiline={true}
          numberOfLines={9}
          placeholder="Colère" 
          onChangeText={(text)=>{this.setState({colere:text})}}
          style={{ borderWidth:2, borderColor:'skyblue', margin:20 }}
        />
        <TextInput 
          multiline={true}
          numberOfLines={9}
          placeholder="Joie" 
          onChangeText={(text)=>{this.setState({joie:text})}}
          style={{ borderWidth:2, borderColor:'skyblue', margin:20 }}
        />
        <Button title="Valider" onPress={()=>{this.submit()}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  title: {
    textAlign: 'center',
    fontWeight: "bold",
    letterSpacing: 2,
  }
});

export default App;