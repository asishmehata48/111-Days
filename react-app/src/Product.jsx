import './Product.css';
import Price from './Price';

function Product({title, idx}) {
    let oldPrices = ["12,495", "11,900", "1,599", "599"];
    let newPrices = ["8,999", "9,999", "799", "399"];
    let description = [
        ["8,000 DPI","5 Programmable Button"],
        ["intuitive surface","designed for Ipad pro"],
        ["designed for Ipad pro", "intuitive surface"],
        ["wireless", "optical orientation"],
    ]
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p><li>{description[idx][0]}</li></p>
            <p><li>{description[idx] [1]}</li></p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Product;