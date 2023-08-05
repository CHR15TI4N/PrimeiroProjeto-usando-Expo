import { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Button } from 'react-native';
import MyButton from './src/components/MyButton';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#42c8f5'
  },
  text: {
    fontSize: 32,
    color: '#a3a',
    fontWeight: 'bold'
  }
})

export default function App() {

  const [contador, setContador] = useState(0);

  useEffect (() => {
    console.log('Montagem')
  }, [])

  useEffect(() => {
    console.log('Atualizado contador')
  }, [contador])

  const onPressButton = () => {
    setContador(contador + 2)
  }

  const onPressButtonSubtract = () => {
      setContador(contador - 3)
  }

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.text}>{contador}</Text>
      <MyButton title='CONTADOR +2' onPressButton={onPressButton}/>
      <MyButton title='CONTADOR -3' onPressButton={onPressButtonSubtract}/>
    </SafeAreaView>
  );
}