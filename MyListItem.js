import React, { Component } from 'react';
import {  FlatList, StyleSheet, Text, View, Image } from 'react-native';


export const MyListItem = ({source}) => (
	   
			<View style={styles.container} >
				<Text>{source.name}</Text>
				<Text>{source.description}</Text>
			</View>
	)


const styles = StyleSheet.create({
  container: {
   flex: 1,
   padding: 10,
   // paddingTop: 10,

  },
  avatar: {


  	flex: 1,
  	flexDirection: 'column',
    alignSelf: 'stretch',
  	width: 350,
  	height: 100,
  	margin: 30


  }
})