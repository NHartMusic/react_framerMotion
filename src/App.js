import React, { useState } from 'react'
import { Route, Switch } from "react-router-dom"
import Header from './components/Header'
import Home from './components/Home'
import Species from './components/Species'
import Toppings from './components/Toppings'
import Order from './components/Order'

function App() {
  const [pizza, setPizza] = useState({ species: "", toppings: [] })

  const addSpecies = (species) => {
    setPizza({ ...pizza, species })
  }

  const addTopping = (topping) => {
    let newToppings
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping]
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping)
    }
    setPizza({ ...pizza, toppings: newToppings })
  }

  return (
    <>
      <Header />
      <Switch>
        <Route path="/species">
          <Species addSpecies={addSpecies} pizza={pizza} />
        </Route>
        <Route path="/toppings">
          <Toppings addTopping={addTopping} pizza={pizza} />
        </Route>
        <Route path="/order">
          <Order pizza={pizza} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  )
}

export default App