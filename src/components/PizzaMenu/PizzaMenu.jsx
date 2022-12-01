import { useHistory } from "react-router-dom";
import PizzaList from "../PizzaList/PizzaList";

export default function PizzaMenu() {

  const history = useHistory();
  const continueOrder = () => {
    history.push('/customerinfo');
  }

  return (<div>
    <PizzaList />
    <button onClick={continueOrder}>Next</button>
  </div>)
}