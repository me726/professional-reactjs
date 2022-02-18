import styles from './CartItem.module.css';
import BookProps from '../Book/Book';

function CartItem(props: any) {
    return (
        <div className={styles.cartItem}>
            <p>{props.title} by {props.author} ${props.price}</p>
        </div>
    );
}

export default CartItem;
