import ProductList from '../ProductList/ProductList.js';
import Cart from '../Cart/Cart.js';
import PropTypes from 'prop-types';
import {Routes, Route} from 'react-router-dom';

function getProduct(products, item) {
    return products.find(product => item === product.id)
}

function Main(props) {
    const cartItems = props.itemsInCart.map(product => getProduct(props.products, product));
    return (
        <main className="col-md-8">
            <Routes>
                <Route path='/' element= {
                    <ProductList
                    products={props.products} 
                    itemsInCart={props.itemsInCart} 
                    addToCart={props.addToCart}
                    removeFromCart={props.removeFromCart}
                    contentHost={props.contentHost}/>
                }/>
                <Route path='/cart' element={
                    <Cart cartItems={cartItems} submitCart={props.submitCart}/>
                }/>
            </Routes>
        </main>
    );
}
Main.defaultProps = {
    itemsInCart: [],
    products: []
}
Main.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    itemsInCart: PropTypes.arrayOf(PropTypes.string).isRequired,
    addToCart: PropTypes.func,
    removeFromCart: PropTypes.func,
    submitCart: PropTypes.func
}
export default Main;