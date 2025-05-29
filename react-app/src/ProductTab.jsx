import Product from './Product.jsx';

function ProductTab() {
    let options=["hi-tech", "durable", "efficient"];
    let options2 = {a: "hi-tech", b: "durable", c: "efficient"}
    return (
    <>
        <Product title="Phone" price={30000} features={options} features2={["hi-tech", "durable", "efficient"]}/>
        {/* <Product title="Laptop" price={80000} />
        <Product title="Camera"  price={1} /> */}
    </>
    );
}
export default ProductTab;