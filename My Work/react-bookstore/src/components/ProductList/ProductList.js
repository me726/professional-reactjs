import Product from '../Product/Product.js';
import styles from './ProductList.module.css'
import PropTypes from 'prop-types';

function ProductList(props) {
    return (
        <div className="bg-dark text-white">
            <h2>Products</h2>
            <ul className={styles.productList}>
                {props.products.map(product => (
                    product.buttonText = props.itemsInCart.includes(product.id) ? "Remove from Cart" : "Add to Cart",
                    product.addToCart = props.addToCart,
                    product.removeFromCart = props.removeFromCart,
                    <li key={product.id}
                        className={styles.productListItem}>
                        <Product {...product} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
ProductList.defaultProps = {
    products: [],
    itemsInCart: []
}
ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    itemsInCart: PropTypes.arrayOf(PropTypes.string).isRequired,
    addToCart: PropTypes.func,
    removeFromCart: PropTypes.func
}
export default ProductList;