import { StatusBar } from 'expo-status-bar';
import React, { useState }  from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, FlatList} from 'react-native';



export default function App() {

  const [texta, setTexta] = useState('');
  const [textb, setTextb] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);
  var count=('');

  const calculate = (operator)=> {
    const [numbera, numberb]=[Number(texta), Number(textb)];
    switch (operator) {
      case '+':
        setResult(numbera + numberb);
       count=texta+' + '+textb+' = '+String(numbera+numberb);
      setHistory([...history, {key:count}]);
        break;
      case '-':
        setResult(numbera - numberb);
        count=texta+' - '+textb+' = '+String(numbera-numberb);
        setHistory([...history, {key:count}]);
        break;
    }
    setTexta('');
    setTextb('');
  //  setHistory([...history, {key:count}]);
  //  const buttonPressed= () => {setHistory([...history, {key:count}]);  }
  //  const buttonPressedSub= () => {setResult(texta - textb);}
  };
  return (
    <View style={styles.container}>
     <Text>Result: {result}</Text>

      <TextInput id="a"
        keyboardType="number-pad"
        style ={{width:150 , borderColor:'#333', borderWidth:1, marginBottom:-1}}
        onChangeText={texta =>  setTexta(texta)}
        value={texta}
        />

  <TextInput id="b"
        keyboardType="number-pad"
        style ={{width:150 , borderColor:'#333', borderWidth:1, marginBottom:10}}
        onChangeText={textb =>  setTextb(textb)}
        value={textb}
              />

    <View style={styles.buttonContainer}>
        <Button onPress={() => calculate('+')} title="+"/>
        <Button onPress={() => calculate('-')} title="-"/>
      </View>
      <View style={styles.historyContainer}>
      <FlatList data ={history} renderItem={({item}) =>
      <Text style={{marginBottom:5}}>{item.key}</Text >}/>
      </View>
 </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width:60,
  },
  historyContainer: {
    width:150,
    marginTop:5,
    alignItems:'center',
  },


});
