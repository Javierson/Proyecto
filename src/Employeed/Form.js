

import React from 'react'
import { Button, Grid, FormControl, InputLabel } from '@material-ui/core'
import { PostAddSharp } from '@material-ui/icons'
import { ButtonGroup, GridContainer, GridTextField, IconButton, SelectField, SliderField } from '../App'


const Form = ({ state: { ID, Centro, ApellidoPaterno, ApellidoMaterno, Nombre, SegundoNombre }, setState: { setState, setIntegerState } }) => {
  /* const [state, setState] = useState({
    ID: undefined,
    Nombre: undefined,
    SegundoNombre: undefined,
    ApellidoPaterno: undefined,
    ApellidoMaterno: undefined,
    Modulo: undefined
  }); */

  // const setEmployeedState = async ({ target: { name, value } }) => await setState({ ...state, [name]: value })

  return <>
      <GridContainer>

        <GridTextField Elements = { [
          {
            Type: "number",
            Label: "ID",
            Name: "ID",
            OnChange: setIntegerState,
            Value: ID
          },
          {
            Type: "number",
            Label: "Centro",
            Name: "Centro",
            OnChange: setIntegerState,
            Value: Centro
          },
          {
            Label: "Apellido paterno",
            Name: "ApellidoPaterno",
            OnChange: setState,
            Value: ApellidoPaterno
          },
          {
            Label: "Apellido materno",
            Name: "ApellidoMaterno",
            OnChange: setState,
            Value: ApellidoMaterno
          },
          {
            Label: "Nombre",
            Name: "Nombre",
            OnChange: setState,
            Value: Nombre
          },
          {
            Label: "Segundo nombre",
            Name: "SegundoNombre",
            OnChange: setState,
            Value: SegundoNombre
          } ] }/>

      <SelectField Label = 'Lenguajes de programacion' Name = 'Lenguaje' /* Value  OnChange */ />

      { /* <RadioField Label = 'Nivel del conocimiento' Value = 'Nivel' Elements = { [{ Value: 'Bajo' }, { Value: 'Mediano' }, { Value: 'Alto' }] }/> */ }

      { /* <SelectField Label = 'Modulo' Name = 'Lenguaje'/> */ }

      <SelectField Label = 'Submodulo' /* Value  OnChange */ />

      <SliderField XS = { 3 }/>

      <IconButton Title = 'Agregar'><PostAddSharp/></IconButton>

      { /* <ButtonGroup Elements = { [ { Text: 'Lenguaje de programacion', Title: 'Agregar lenguaje de programacion' }, { Text: 'Submodulo', Title: 'Agregar submodulo' } ] }/> */ }

      </GridContainer>

    </>

}


export default Form

