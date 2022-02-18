import CartItem from '../CartItem/CartItem.js';
import styles from './Cart.module.css';
import PropTypes from 'prop-types';

function Cart(props) {
    return (
        <div className={styles.cart}>
            <h4>Cart</h4>
            <ul>
                {props.cartItems.map(cartItem => (
                    <li key={cartItem.id}>
                        <CartItem title={cartItem.title} author={cartItem.author} price={cartItem.price} />
                    </li>
                ))}
            </ul>
            <h5>Total: ${props.cartItems.reduce((sum, cartItem) => sum + parseInt(cartItem.price), 0)}</h5>
            <button onClick={() => props.submitCart(props.cartItems)}>Checkout</button> 
        </div>
    );
}
Cart.defaultProps = {
    cartItems: []
}
Cart.propTypes = {
    cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    submitCart: PropTypes.func
}
export default Cart;