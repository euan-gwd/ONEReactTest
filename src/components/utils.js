export const calculateTotals = (shoppingCart) => {
  const lineItemTotals = shoppingCart.map((item) => {
    if (shoppingCart.length > 0) {
      return Number(item.price);
    }
    return [];
  });
  const calculateCartTotal = lineItemTotals.reduce((previous, current) => previous + current, 0);
  const cartTotal = calculateCartTotal.toFixed(2);
  return cartTotal;
};
