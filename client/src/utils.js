// Cart Functionalities

const cartKey = 'cart'; // Key for local storage

const getCartProduct = (productIndex, cart) => {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === productIndex) {
            return i;
        }
    }
    return -1;
}

const addCartProduct = (product, cart) => {
    const index = getCartProduct(product.id, cart);
    if (index >= 0) {
        cart[index].quantity += product.quantity;
        return;
    }
    
    cart.push(product);
    localStorage.setItem(cartKey, JSON.stringify(cart));
}

const deleteCartProduct = (productIndex, cart) => {
    const index = getCartProduct(productIndex, cart);
    if (index == -1) return;

    cart.splice(index, 1);
    localStorage.setItem(cartKey, JSON.stringify(cart));
}

export {
    addCartProduct, cartKey, deleteCartProduct, getCartProduct
};

