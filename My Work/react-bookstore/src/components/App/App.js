import {useState, useEffect} from 'react';
import * as actionCreators from '../../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import './App.css';

export function App(props) {
  //const [itemsInCart, setItemsInCart] = useState([]);
  //const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //const addToCart = (idToAdd) => setItemsInCart([...itemsInCart, idToAdd]);
  //const removeFromCart = (idToRemove) =>
  //  setItemsInCart(itemsInCart.filter(id => id !== idToRemove));;

  useEffect (() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch('http://localhost:3000/data/products.json');
        const json = await response.json();
        let array = json;
        for (let i = json.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          let temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        props.loadProducts(json);
        props.readCart();
        setIsLoading(false);
      } catch (error) {
        console.error(error)
      }
    };
    fetchData();
  }, [props.loadProducts])

  /*useEffect (() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch('http://localhost:3000/data/products.json');
        const json = await response.json();
        for (let i = json.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          let temp = json[i];
          json[i] = json[j];
          json[j] = temp;
        }
        setProducts(json);
        setIsLoading(false);
      } catch (error) {
        console.error(error)
      }
    };
    fetchData();
  }, [setProducts])*/

  return (
    <div className="container bg-dark text-white mh-100 mw-100">
      <Header />
      {isLoading ? "Loading..." : ""}
      <Main products={props.products}
        itemsInCart={props.itemsInCart}
        submitCart = {props.submitCart}
        addToCart={props.addToCart}
        removeFromCart={props.removeFromCart}/>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    itemsInCart: state.cart.items,
    products: state.products.products
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps) (App);
