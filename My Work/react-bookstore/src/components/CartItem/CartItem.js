import styles from './CartItem.module.css';
import PropTypes from 'prop-types';

function CartItem(props) {
    return (
        <div className={styles.cartItem}>
            <p>{props.title} by {props.author} ${props.price}</p>
        </div>
    );
}
CartItem.defaultProps = {
    cartItems: []
}
CartItem.propTypes = {
    cartItems: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default CartItem;
