

import React, { useState } from 'react'
import { Form } from '.'
import { GridContainer } from '../App'
import { Grid, Button } from '@material-ui/core'
import { PersonAddSharp } from '@material-ui/icons'


const FormCreate = () => {

    const [ state, setState ] = useState({ ID: undefined, Centro: undefined, ApellidoPaterno: undefined, ApellidoMaterno: undefined, Nombre: undefined, SegundoNombre: undefined, Lenguajes: undefined, Submodulo: undefined })
    // OnChange = async ({ target: { name, value } }) => await setState({ ...state, [name]: value })

    return <><Form state = { state } setState = { { setState: async ({ target: { name, value } }) => await setState({ ...state, [name]: value }), setIntegerState: async ({ target: { name, value } }) => await setState({ ...state, [name]: parseInt(value) })
     } }/><GridContainer>
     <Grid item xs = { 4 }><Button type = 'submit' variant = "outlined" color = "primary" startIcon = { <PersonAddSharp/> } fullWidth>Agregar elemento</Button></Grid>
  </GridContainer></>

}


export default FormCreate

