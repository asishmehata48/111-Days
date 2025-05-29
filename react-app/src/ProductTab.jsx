import Product from './Product.jsx';

function ProductTab() {
    let Options= ["hi-tech", "durable", "efficient"];
    return (
    <>
        <Product title="Phone" price={30000} features={Options}/>
        {/* <Product title="Laptop" price={80000} />
        <Product title="Camera"  price={1} /> */}
    </>
    );
}
export default ProductTab;