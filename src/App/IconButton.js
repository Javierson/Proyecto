

import React from 'react'
import { Grid, IconButton, Tooltip } from '@material-ui/core'


const GridIconButton = ({ Title, children }) => <Grid item xs><Tooltip disableFocusListener title = { Title }><IconButton>{ children }</IconButton></Tooltip></Grid>


export default GridIconButton

