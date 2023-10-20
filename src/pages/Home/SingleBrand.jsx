import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleBrand = ({brand}) => {
    const {brand_img, brand_name} = brand;
    return (
        <Link to={`product/${brand_name}`} className="card w-48 bg-slate-400 shadow-xl mx-auto">
            <figure><img src={brand_img} alt="Shoes" className='w-96 h-40 p-10' /></figure>
            <div className="card-body">
                <h2 className="text-xl text-white text-center">{brand_name}</h2>
            </div>
        </Link>
    );
};

SingleBrand.propTypes = {
    brand: PropTypes.object.isRequired,
}
export default SingleBrand;