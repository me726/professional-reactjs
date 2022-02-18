import styles from './Product.module.css';
import PropTypes from 'prop-types';

function Product(props) {
    const {id, title, author, published, country, lang,
        pages, image, url, price, buttonText, addToCart,
        removeFromCart, contentHost} = props;

    function handleClick() {
        if (buttonText === "Remove from Cart") {
            removeFromCart(id);
        } else {
            addToCart(id);
        }
    }

    return (
        <div className={styles.product}>
            <img className={styles.thumbnail} src={image ? contentHost+"/images/" + image:
                contentHost+"/images/default.jpg"} alt={title}/>
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

Product.defaultProps = {
    id: "-1",
    title: "Unknown",
    author: "Unknown",
    published: "Unknown",
    country: "Unknown",
    lang: "Unknown",
    pages: "Unknown",
    image: "Unknown",
    url: "Unknown",
    price: "Unknown",
    buttonText: "Unknown"
}
Product.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    author:  PropTypes.string,
    published: PropTypes.string,
    lang: PropTypes.string,
    pages: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
    price: PropTypes.string,
    buttonText: PropTypes.string
}
export default Product;
