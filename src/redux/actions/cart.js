export const setTotalPrice = (items) => ({
	type: 'SET_TOTAL_PRICE',
	payload: items,
});

export const setTotalCount = (items) => ({
	type: 'SET_TOTAL_COUNT',
	payload: items,
});

export const addPizzaToCart = (pizzaObj) => ({
	type: 'ADD_PIZZA_CART',
	payload: pizzaObj,
});
