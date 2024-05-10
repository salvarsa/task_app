import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Task from './components/Task.jsx';

export default function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log('user effect')
    fetch('http://192.168.1.52:2402/api/v1/tasks')
    .then(res => res.json())
    .then(res => setTasks(res))
    .catch(console.error)
  }, []);

  async function fetchData(){
    const response = await fetch('http://186.121.44.227:2402/api/v1/tasks');
    const data = await response.json();
    setTasks(data);
    return data
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList 
        data={tasks} 
        keyExtractor={(task) => task._id}
        renderItem={({ item }) => <Task {...item}/>}
        ListHeaderComponent={() => <Text style={styles.title}>Para Hoy</Text>}
        contentContainerStyle={styles.contentContainerStyle}
        />
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E9EF',
  },
  contentContainerStyle: {
    padding: 15
  },
  title: {
    fontWeight: "800",
    fontSize: 28,
    marginBottom: 15,
    marginTop: 15
  }
});
