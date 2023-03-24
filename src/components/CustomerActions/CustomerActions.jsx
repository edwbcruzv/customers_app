import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@mui/material'

function CustomerActions({children}) {
  return (
    <Grid item spacing={1}>
      {children}
    </Grid>
  )
}

CustomerActions.propTypes = {
    children:PropTypes.node.isRequired
}

export default CustomerActions
