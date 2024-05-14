import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";

// function Checkmark({ _id, completed }) {
//   <Pressable
//     style={[
//       styles.checkmark,
//       { backgroundColor: completed ? "#E0E0EF" : "#0EA5E9" },
//     ]}
//   ></Pressable>;
// }

function Checkmark({ _id, completed }) {
  return (
    <Pressable
      style={[
        styles.checkmark,
        { backgroundColor: completed ? "#E0E0EF" : "#0EA5E9" },
      ]}
    />
  );
}

export default function Task({ _id, title, completed, date, createdAt,deleteTask }) {
  const [isDeleteActive, setIsDeleteActive] = useState(false)

  async function deleteTask(){
    const response = await fetch(`http://10.2.20.113:2402/api/v1/tasks/${_id}`, {
      method: 'DELETE'
    })
    deleteTask(_id)
    console.log(response.status);
  }
  return (
    <TouchableOpacity
    onLongPress={() => setIsDeleteActive(true)}
    onPress={() => setIsDeleteActive(false)}
    activeOpacity={0.8}
    style={[styles.container]}
    >
      <View style={styles.containerTextCheckbox}>
        <Checkmark />
        <Text style={styles.text}>{title}</Text>
      </View>
      {isDeleteActive && (
        <Pressable onPress={deleteTask} style={styles.container}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>x</Text>
        </Pressable>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 14,
    borderRadius: 21,
    marginBottom: 10,
  },
  checkmark: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5, 
  },
  containerTextCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  checkedIcon: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#333",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  title: {
    fontWeight: "900",
    letterSpacing: 0.5,
    fontSize: 16,
  },
  subtitle: {
    color: "#101318",
    fontSize: 14,
    fontWeight: "bold",
  },
  description: {
    color: "#56636F",
    fontSize: 13,
    fontWeight: "normal",
    width: "100%",
  },
});
