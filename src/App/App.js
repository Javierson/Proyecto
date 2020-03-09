

import React from "react"
import { Drawer } from "."
import { Container } from "@material-ui/core"
import { Route, Switch } from "react-router-dom"


const { Routes } = require("../AppModules"),
App = () => <Container>
      <Drawer>
        <Switch>
          { Routes?.map( ({ Path, Component }, _) => <Route key = { _ } exact path = { Path } component = { Component }/> ) }
        </Switch>
      </Drawer>
    </Container>


export default App

