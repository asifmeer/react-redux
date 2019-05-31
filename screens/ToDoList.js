import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import { MyListItem } from '../MyListItem';
import OfflineNotice from '../OfflineNotice';
import AddTodoScreen from './AddTodo';
import { getTodos } from '../redux/actions/gettodos'


class ToDoListScreen extends Component {
  static navigationOptions = {
    title: 'ToDoList'
  };


  componentDidMount() {
    this.props.getTodos()
  }


  render() {
    return (
      <View style={styles.container}>
        <OfflineNotice />
        <Text>Data Fetching</Text>
        <FlatList
          data={this.props && this.props.data}
          renderItem={({ item }) => <MyListItem source={item} />}
        />

      </View>
    );
  }
}

const mapStateToProps = (todosData) => {
  const { data, error, loading } = todosData.todos.todosData;
  return { data, error, loading }
};


export default connect(mapStateToProps, {
  getTodos
})(ToDoListScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    // paddingTop: 10,

  },
  item: {
    paddingTop: 40,
    width: 400,
    // padding: 100,
    // fontSize: 18,
    // height: 44,
    // width: 300,
  },
  paginationCounter: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: 'yellow',
  }
})