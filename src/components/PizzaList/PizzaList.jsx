import axios from "axios";
import { useState, useEffect } from "react";

export default function PizzaList() {

  useEffect(() => { fetchPizzas() }, [])

  const fetchPizzas = () => {

    axios.get('/api/pizza')
      .then(res => {
        console.log('got pizzas');

      }).catch(err => console.log('fetchPizzas', err))

  }

  return (<div></div>)
}