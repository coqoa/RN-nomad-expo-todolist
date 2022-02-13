import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import {theme} from './color.js'

export default function App() {

const [working, setWorking] = useState(true);
const [text, setText] = useState("");
const [toDos, setToDos] = useState({});

const work = () => setWorking(true)
const travle = () => setWorking(false)
const onChangeText = (payload) => setText(payload)
const addToDo = () =>{
  if(text === ''){
    return
  }
  // save to do
  const newToDos = Object.assign({}, toDos, {
    [Date.now()]: {text, work: working}
  });
  setToDos(newToDos)
  setText("")
}
console.log(Date.now());
console.log(toDos)
// ----------------------------------------------return----------------------------------------------

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text 
          style={{...styles.btnText, color: working? "white" : theme.grey}}
          >Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travle}>
          <Text 
          style={{...styles.btnText, color: !working? "white" : theme.grey}}
          >
          travle
          </Text>
        </TouchableOpacity>
      </View>
      {/* <View> */}
        <TextInput 
        autoCorrect = {false}
        returnKeyType='done'
        onSubmitEditing = {addToDo}
        value = {text}
        onChangeText = {onChangeText} 
        placeholder = {working? "Add To Do" : "Where do you want to go?"}  
        style = {styles.input} />
      {/* </View> */}
    </View>
  );
}

// ----------------------------------------------StyleSheet----------------------------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal:20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop:100,
  },
  btnText: {
    fontSize:44,
    fontWeight: "500",
    color:"white"
  },
  input: {
    backgroundColor:"white",
    paddingVertical:10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginTop:20,
    fontSize: 18,
    borderRadius: 20
  },
});
