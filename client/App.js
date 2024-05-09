import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {

  const [task, setTask] = useState()

  async function fetchData(){
    const response = await fetch('http://localhost:2402/api/v1/tasks')
    const data = await response.json()
    setTask(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(task)}</Text>
      <StatusBar style="auto" />
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
});
