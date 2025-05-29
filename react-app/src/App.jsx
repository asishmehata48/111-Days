import './App.css';
import Title from './Title.jsx';
import Product from './Product.jsx';
import ProductTab from './ProductTab.jsx';
import MessageBox from './MessageBox.jsx';

function App() {
  return (
    <>
    <MessageBox userName="AsishMehata" textColor="Yellow"/>
    <MessageBox userName="AarohiMehata" textColor="Blue"/>
    <MessageBox userName="ArushiMehata" textColor="Orange"/>
    <ProductTab />
    </>
  );
}

export default App;

