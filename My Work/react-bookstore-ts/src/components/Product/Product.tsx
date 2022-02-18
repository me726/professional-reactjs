import styles from './Product.module.css';
import ProductProps from './ProductProps';

function Product(props: any) {
    const {id, title, author, published, country, lang,
        pages, image, url, price, buttonText, addToCart,
        removeFromCart} = props;

    function handleClick() {
        if (buttonText === "Remove from Cart") {
            removeFromCart(id);
        } else {
            addToCart(id);
        }
    }

    return (
        <div className={styles.product}>
            <img className={styles.thumbnail} src={image ? "images/" + image:"images/default.jpg"} alt={title}/>
            <h3>{title}</h3>
            <p>
                Author: {author}<br />
                Price: ${price}<br />
                Language: {lang}<br />
                Published: {published}<br />
                Pages: {pages}<br />
                Country: {country}<br />
                URL: <a href={url}>Link</a><br />
            </p>
            <button onClick={handleClick}>
                {buttonText}
            </button>
        </div>
    );
}

export default Product;
