import { useHistory } from "react-router-dom";

export default function PizzaMenu() {

  const history = useHistory();
 const continueOrder = () => {
    history.push('/customerinfo');
  }

  return (<div>
    <button onClick={continueOrder}>Next</button>
  </div>)
}