interface ProductProps {
    addToCart: (idToAdd: string) => void;
    removeFromCart: (idToRemove: string) => void;
    id: string;
    title: string;
    author: string;
    published?: string;
    country?: string;
    lang?: string;
    pages?: string;
    image?: string;
    url?: string;
    price: string;
    buttonText?: string;
}

export default ProductProps;
