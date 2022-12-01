import { useHistory } from "react-router-dom";
import PizzaList from "../PizzaList/PizzaList";

import './PizzaMenu.css'

export default function PizzaMenu() {

  const history = useHistory();
  const continueOrder = () => {
    history.push('/customerinfo');
  }

  return (<div id="menu-container">
    <h2>Menu</h2>
    <PizzaList />
    <button onClick={continueOrder}>Next</button>
  </div>)
}