import Product from './Product.jsx';

function ProductTab() {
    
    return (
    <>
        <Product title="Phone" price={30000} />
        <Product title="Laptop" price={40000} />
        <Product title="Camera"  price={1} />
    </>
    );
}
export default ProductTab;