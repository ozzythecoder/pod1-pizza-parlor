import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Header.css';


function Header({text, showCart}) {
    const history = useHistory();


    return (
        <header className='App-header'>
            <h1 className='App-title'>{text}</h1>
                {showCart && 
                <div 
                    id="cart"
                    onClick={() => history.push('/checkout')}>
                    <ShoppingCartIcon/>
                    <h3 id="total">Total: ${ useSelector(store => store.currentOrder.total).toFixed(2)}</h3>
                </div>}
        </header>

    )
}
export default Header;