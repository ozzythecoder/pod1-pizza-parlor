import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function PizzaMenu() {

  const history = useHistory();

  const fetchPizzas = () => {

    axios.get('/api/pizza')
      .then(res => {
        console.log('got pizzas');

      }).catch(err => console.log('fetchPizzas', err))

  }

  const continueOrder = () => {
    history.push('/customerinfo');
  }

  useEffect(() => {
    fetchPizzas();
  }, [])

  return (<div>
    <button onClick={continueOrder}>Next</button>
  </div>)
}