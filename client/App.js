import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log('user effect')
    fetch('http://10.2.20.113:2402/api/v1/tasks')
    .then(res => res.json())
    .then(res => setTasks(res))
    .catch(console.error)
  }, []);

  async function fetchData(){
    const response = await fetch('http://10.2.20.113:2402/api/v1/tasks');
    const data = await response.json();
    setTasks(data);
    return data
  }

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(tasks, null, 2)}</Text>
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
