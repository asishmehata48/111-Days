import './Product.css';

function Product({title, price, features, features2}) {
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h5>Price : {price}</h5>
            <p>{features}</p>
            <p>{features2}</p>
        </div>
    );
}

export default Product;