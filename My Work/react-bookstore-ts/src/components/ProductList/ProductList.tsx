import Product from '../Product/Product';
import styles from './ProductList.module.css'
import ProductListProps from '../ProductList/ProductListProps';
import { Key } from 'react';

function ProductList(props: any) {
    return (
        <div className="bg-dark text-white">
            <h2>Products</h2>
            <ul className={styles.productList}>
                {props.products.map((product: { buttonText: string; id: Key | null | undefined; addToCart: any; removeFromCart: any; }) => (
                    product.buttonText = props.itemsInCart.includes(product.id) ? "Remove from Cart" : "Add to Cart",
                    product.addToCart = props.addToCart != undefined ? props.addToCart : (idToAdd: string) => {},
                    product.removeFromCart = props.removeFromCart != undefined ? props.removeFromCart : (idToAdd: string) => {},
                    <li key={product.id}
                        className={styles.productListItem}>
                        <Product {...product} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
