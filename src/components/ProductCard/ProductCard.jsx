// src/components/ProductCard/ProductCard.jsx
import './ProductCard.css';
import PropTypes from 'prop-types';

export const ProductCard = ({image, title, description}) => {
	return (
		<div className='product-card'>
			<div className='product-card-inner'>
				<div className='product-card-front'>
					<img src={image} className='product-card-image' />
				</div>
				<div className='product-card-back'>
					<h3 className='product-card-title'>{title}</h3>
					<p className='product-card-description'>{description}</p>
					<button className='product-card-button'>Buy Now</button>
				</div>
			</div>
		</div>
	);
};
ProductCard.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
};
