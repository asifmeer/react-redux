import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const middleware = [
//   thunk,
//   createReactNavigationReduxMiddleware('root', state => state.state)
// ]

// const enhancer = composeEnhancers(applyMiddleware(...middleware))

// export default createStore(reducers, enhancer)

export default createStore(reducers, applyMiddleware(thunk));