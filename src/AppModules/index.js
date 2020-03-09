

import React from 'react'
import { Alert } from '../App'
import { FormCreate } from "../Employeed"

const Test = () => <h2>Test</h2>,

AlertMessage = () => <Alert Severity = 'info'>Ruta no definida</Alert>,

GridLayout = { Spacing: 3, Direction: "row", Justify: "space-evenly", AlignItems: 'center', XS: 4 },

Routes = [
  { Path: "/", Component: Test },
  { Path: "/Registrar empleado", Component: FormCreate },
  { Component: AlertMessage }
]


export { Routes, GridLayout }

