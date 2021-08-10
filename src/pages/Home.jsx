import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';

const categoryNames = ['Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
	{ name: 'популярности', type: 'rating' },
	{ name: 'цене', type: 'price' },
	{ name: 'алфавиту', type: 'name' },
];

const Home = () => {
	const dispatch = useDispatch();
	const items = useSelector(({ pizzas }) => pizzas.items);
	const cartItems = useSelector(({ cart }) => cart.items);
	const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
	const { category, sortBy } = useSelector(({ filters }) => filters);

	const onSelectCategory = React.useCallback((index) => {
		dispatch(setCategory(index)); // eslint-disable-next-line
	}, []);

	const onSelectSortBy = React.useCallback((type) => {
		dispatch(setSortBy(type)); // eslint-disable-next-line
	}, []);

	const handleAddPizza = (obj) => {
		dispatch(addPizzaToCart(obj));
	};

	React.useEffect(() => {
		dispatch(fetchPizzas(sortBy, category)); // eslint-disable-next-line
	}, [category, sortBy]);

	return (
		<div className="container">
			<div className="content__top">
				<Categories
					onClickCategory={onSelectCategory}
					activeCategory={category}
					items={categoryNames}
				/>

				<SortPopup
					onClickSortType={onSelectSortBy}
					activeSortType={sortBy}
					items={sortItems}
				/>
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{isLoaded
					? items.map((obj) => (
							<PizzaBlock
								onClickAddPizza={handleAddPizza}
								key={obj.id}
								addedCount={cartItems[obj.id] && cartItems[obj.id].length}
								{...obj}
							/>
					  ))
					: Array(12)
							.fill(0)
							.map((_, index) => <PizzaLoadingBlock key={index} />)}
			</div>
		</div>
	);
};

export default Home;
