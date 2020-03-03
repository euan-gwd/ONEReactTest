export const getProducts = () => {
  return fetch('https://j-parre.myshopify.com/products.json').then((res) => res.json());
};
