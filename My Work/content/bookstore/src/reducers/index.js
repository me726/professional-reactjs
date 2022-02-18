export function cart(state = {}, action = {}) {
    let newCart = [];
    switch(action.type) {
        case 'CART_ADD':
            newCart = [...state.items, action.payload.productId];
            localStorage.setItem("cart", JSON.stringify(newCart));
            return {
                ...state,
                items: newCart
            };
        case 'CART_REMOVE':
            newCart = state.items.filter(id => id !== action.payload.productId);
            localStorage.setItem("cart", JSON.stringify(newCart));
            return {
                ...state,
                items: newCart
            };
        case 'CHECKOUT':
            localStorage.setItem("cart", JSON.stringify([]));
            return {
                ...state,
                items: []
            };
        case 'READ_CART':
            return {
                ...state,
                items: JSON.parse(localStorage.getItem("cart")) || []
            };
        default:
            return state;
    }
};

export function products(state = {}, action = {}) {
    switch (action.type) {
        case 'LOAD_PRODUCTS':
            return {
                ...state,
                products: action.products
            };
        default:
            return state;
    }
};
