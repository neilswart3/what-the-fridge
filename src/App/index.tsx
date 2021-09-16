import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home, Inventory, Meals, Shopping } from 'src/components'
import { GeneralLayout } from 'src/layouts'

function App() {
  return (
    <BrowserRouter>
      <GeneralLayout>
        <Switch>
          <Route path="/meals">
            <Meals />
          </Route>
          <Route path="/inventory">
            <Inventory />
          </Route>
          <Route path="/shopping">
            <Shopping />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </GeneralLayout>
    </BrowserRouter>
  )
}

export default App
