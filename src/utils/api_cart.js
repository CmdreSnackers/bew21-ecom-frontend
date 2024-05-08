export const addToCart = (product) => {
  // add product into cart. If product already exists inside the cart data, just update the quantity
  let cart = JSON.parse(localStorage.getItem("cart"));
  // if the cart is empty, assign default value of empty array
  if (!cart) cart = [];
  // find product if exists or not
  const cartItemIndex = cart.findIndex((i) => i._id === product._id);
  // if no product found, index will be -1
  if (cartItemIndex === -1) {
    cart.push({ ...product, quantity: 1 });
  } else {
    cart[cartItemIndex].quantity++; // plus one
  }
  // update the cart with the latest data
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const getCart = () => {
  // get cart items from local storage
  return JSON.parse(localStorage.getItem("cart")) || [];
};

export const removeProductFromCart = (_id) => {
  // remove the item from cart based on id provided
  // let existingCart = JSON.parse(localStorage.getItem("cart")) || [];
  // existingCart = existingCart.filter((item) => item.id !== id);
  // localStorage.setItem("cart", JSON.stringify(existingCart));
  const cart = JSON.parse(localStorage.getItem("cart"));
  const updatedCart = cart.filter((p) => p._id !== _id);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};
