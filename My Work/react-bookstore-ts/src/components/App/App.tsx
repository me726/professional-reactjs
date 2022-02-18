import {useState, useEffect} from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Book from '../Book/Book';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  const [itemsInCart, setItemsInCart] = useState<Array<string>>([]);
  const [products, setProducts] = useState<Array<Book>>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const addToCart = (idToAdd: string) => setItemsInCart([...itemsInCart, idToAdd]);
  const removeFromCart = (idToRemove: string) =>
    setItemsInCart(itemsInCart.filter(id => id !== idToRemove));;

  useEffect (() => {
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
  }, [setProducts])

  return (
    <div className="container bg-dark text-white mh-100 mw-100">
      <Header />
      {isLoading ? "Loading..." : ""}
      <Main products={products}
        itemsInCart={itemsInCart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}/>
      <Footer />
    </div>
  );
}

export default App;
