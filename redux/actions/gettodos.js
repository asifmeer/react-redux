import {
  GET_TODOS_LIST
} from '../constants';

// export const getTodosList = () => {
//   return {
//     type: GET_TODOS_LIST
//   }
// }

export const getTodosListSuccess = data => {
  console.log("action sucess ",data)

  return {
    type: GET_TODOS_LIST,
    payload: data
  }
}

export const getTodos = () => {
  data = [{"name" : "asif"},{"name" : "waif"}];  
      // console.log("action calling")
   
      dispatch(getTodosListSuccess(data));
  // console.log("inside get todos code");
  //  fetch('http://localhost:3000/api/todos', {
  //        method: 'GET'
  //     })
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //        console.log(responseJson.data);
  //        // this.setState({
  //        //    todosData: responseJson.data
  //        // })
  //         getTodosListSuccess(responseJson.data);
  //     })
  //     .catch((error) => {
  //        console.error(error);
  //     });
}
