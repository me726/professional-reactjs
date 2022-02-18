import ProductList from '../ProductList/ProductList';
import Cart from '../Cart/Cart';
import Book from '../Book/Book';
import MainProps from '../Main/MainProps';

function getProduct(products: Array<Book>, item: string) {
    return products.find(product => item === product.id)
}

function Main(props: any) {
    const cartItems = props.itemsInCart.map((product: string) => getProduct(props.products, product));
    return (
        <main className="row">
            <div className="col-md-8"><ProductList
                products={props.products} 
                itemsInCart={props.itemsInCart} 
                addToCart={props.addToCart}
                removeFromCart={props.removeFromCart}/>
            </div>
            <div className="col-md-4"><Cart cartItems={cartItems}/></div>
        </main>
    );
}

export default Main;
