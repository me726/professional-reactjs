import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {cart, products} from './reducers';
import ReduxThunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css'

const rootReducer = combineReducers({
  cart: cart,
  products: products
});

const initialState = {
  cart: {items: []},
  products: {products: []}
};

const {
  REACT_APP_CONTENT_HOST: contentHost,
} = process.env;

const createStoreWithMiddleware = compose(applyMiddleware(ReduxThunk)) (createStore);

let store = createStoreWithMiddleware(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.renderBookstore = (containerId, history) => {
  ReactDOM.render(
    <Router>
      <Provider store={store}>
        <App contentHost={contentHost}/>
      </Provider>
    </Router>,
    document.getElementById(containerId)
  );
}

window.unmountBookstore = containerId => {
  ReactDOM.unmountComponentAtNode(
    document.getElementById(containerId)
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
