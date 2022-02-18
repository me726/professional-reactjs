import { Key } from 'react';
import CartItem from '../CartItem/CartItem';
import styles from './Cart.module.css';
import CartProps from './CartProps';

function Cart(props: any) {
    return (
        <div className={styles.cart}>
            <h4>Cart</h4>
            <ul>
                {props.cartItems.map((cartItem: { id: Key | null | undefined; title: any; author: any; price: any; }) => (
                    <li key={cartItem.id}>
                        <CartItem id={cartItem.id} title={cartItem.title} author={cartItem.author} price={cartItem.price} />
                    </li>
                ))}
            </ul>
            <h5>Total: ${props.cartItems.reduce((sum: number, cartItem: { price: string; }) => sum + parseInt(cartItem.price), 0)}</h5>
        </div>
    );
}

export default Cart;
