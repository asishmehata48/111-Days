import Product from './Product.jsx';

function ProductTab() {
    return (
    <>
        <Product title="Phone" price={30000} />
        <Product title="Laptop" price={80000}/>
        <Product title="Camera"  />
    </>
    );
}
export default ProductTab;