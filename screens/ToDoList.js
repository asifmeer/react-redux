import React, { Component } from 'react';
import {  FlatList, StyleSheet, Text, View, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import {MyListItem} from '../MyListItem';
import OfflineNotice from '../OfflineNotice';
import AddTodoScreen from './AddTodo';
import  {getTodos, getTodosListSuccess}  from '../redux/actions/gettodos'
// import getTodosListAction from '../redux/actions/get-todos'
import PropTypes from 'prop-types';

class ToDoListScreen extends Component {
  static navigationOptions = {
    title: 'ToDoList'
   };


  componentDidMount(){
    this.props.getTodos()
  }



  render() {

    // console.log(this.props.todosData);

    return (
      <View style={styles.container}>
        <OfflineNotice /> 
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>instructions</Text>

        <FlatList
         data={this.props.todosData}
         renderItem={({item}) => <MyListItem source={item} />}
        />

      </View>
    );
  }
}
const mapStateToProps = state => ({
  todosData: state.payload,
});

export default connect(mapStateToProps,{
  getTodos
})(ToDoListScreen);


ToDoListScreen.propTypes = {
  appState: PropTypes.object,
  ToDoListScreen: PropTypes.func,
  dispatch: PropTypes.func,
  todosData : PropTypes.array
};

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