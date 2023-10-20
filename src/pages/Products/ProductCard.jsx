import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="card card-compact w-2/3 bg-base-100 shadow-xl mx-auto">
            <figure><img src={product.photo} alt="product" className='h-32' /></figure>
            <div className="card-body">
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p>Brand Name: {product.brandName}</p>
                <p>Type: {product.type}</p>
                <p>Price: {product.price}</p>
                <p>Rating: {product.rating}</p>
                <div className="card-actions justify-end">
                    <button className="btn">Update</button>
                    <Link to={`/product-details/${product._id}`} className='btn'>Details</Link>
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
}

export default ProductCard;