import Book from '../Book/Book';

interface ProductListProps {
    products: Array<Book>;
    itemsInCart: Array<string>;
    addToCart: (idToAdd: string) => void;
    removeFromCart: (idToRemove: string) => void;
}

export default ProductListProps;
