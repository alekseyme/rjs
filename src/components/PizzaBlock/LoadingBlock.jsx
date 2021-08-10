import React from 'react';
import ContentLoader from 'react-content-loader';

const LoadingBlock = () => {
	return (
		<ContentLoader
			className="pizza-block"
			speed={2}
			width={280}
			height={460}
			viewBox="0 0 280 460"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb">
			<circle cx="133" cy="119" r="104" />
			<rect x="0" y="248" rx="6" ry="6" width="280" height="26" />
			<rect x="0" y="288" rx="6" ry="6" width="280" height="84" />
			<rect x="0" y="397" rx="6" ry="6" width="93" height="23" />
			<rect x="131" y="386" rx="20" ry="20" width="149" height="44" />
		</ContentLoader>
	);
};

export default LoadingBlock;
