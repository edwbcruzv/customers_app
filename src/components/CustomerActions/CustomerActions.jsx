import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@mui/material'

function CustomerActions({children}) {
  return (
    <Grid item>
      {children}
    </Grid>
  )
}

CustomerActions.propTypes = {
    children:PropTypes.node.isRequired
}

export default CustomerActions
