const getItem = () => {
    const getCart = localStorage.getItem('cart');
    if (getCart) {
        return JSON.parse(getCart);
    }
    return [];
}
const saveCart = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}
const addToLs = id => {
    const cart = getItem();
    cart.push(id);
    saveCart(cart);
}
export { addToLs, getItem }