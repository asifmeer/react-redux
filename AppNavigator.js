// import { createStackNavigator } from 'react-navigation';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import  HomeScreen  from "./screens/Home";
import SettingsScreen  from './screens/Settings';
import ToDoListScreen  from './screens/ToDoList';



// const AppNavigator = createStackNavigator({
//   Home: { screen: Home },
//   Friends: { screen: Friends},
// });


// const AppNavigator = createBottomTabNavigator({
//   Home: HomeScreen,
//   Todos: ToDoListScreen, 
//   Settings: SettingsScreen,
// });



// export default AppNavigator;

const RootStack = createBottomTabNavigator({
  	Home: HomeScreen,
  	Todos: ToDoListScreen, 
  	Settings: SettingsScreen,
  });

const AppNavigator = createAppContainer(RootStack);

export default AppNavigator;