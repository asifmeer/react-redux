import React, { Component } from 'react';
import { Text, View } from 'react-native';

class AddTodoScreen extends Component {

  static navigationOptions = {
    title: 'AddTodo'
   };
   
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Add Todo Screen!</Text>
      </View>
    );
  }
}

export default AddTodoScreen;