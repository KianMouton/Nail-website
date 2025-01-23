import React from 'react';
import { useLocation } from 'react-router-dom';
import Dime1 from '../images/dime method 1.jpg';
import Dime2 from '../images/dime method 2.jpg';
import instructions from '../images/Instructions.jpg';

const Product = () => {
    const location = useLocation(); // Get the location object
    const { product } = location.state || {}; // Destructure product from state

    // Handle case where no product is passed
    if (!product) {
        return <h1>No product selected</h1>;
    }

    return (
        <div className="product">
            <div className='product-container'>
                <div className="img-div">
                <img className='product-image' src={product.image} alt={product.name} />
                </div>
                <div className="details-div">
                    <h1 className='product-name'>{product.name}</h1>
                    <p>R{product.price}</p>
                    <p>{product.description}</p>
                    <p>Each order includes a prep pack with: an acrylic cuticle pusher, alcohol pad, nail file</p>
                    <p>Sizes: small - Xtra long</p>
                    <p>Shapes: Almond, Squire, Round, Coffin, Stilleto</p>
                    <p>Custom designs could be priced between R150 - R200 depending on the order.Message me for more details.</p>
                </div>
            </div>
            <div className='ins-div'>
            <p>Dime Method Sizing</p>
            <div className='dime-method'>
            <img  src={Dime1} alt='Dime method' />
            <img  src={Dime2} alt='Dime method' />
            </div>
            <img className='instructions' src={instructions} alt='instructions' />
            </div>
        </div>
    );
};

export default Product;
