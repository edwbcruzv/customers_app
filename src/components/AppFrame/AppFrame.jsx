import React from 'react'
import PropTypes from 'prop-types'
import AppHeader from '../AppHeader'
import Grid from '@mui/material/Grid'
import { Paper } from '@mui/material'


function AppFrame({header,children}) {
  return (
        <Grid 
          container
          spacing={0}
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            backgroundColor:'blue'
          }}
        >
          <Grid item
          sx={{
            border:'solid'
          }}>
            <AppHeader title={header}></AppHeader>
          </Grid>
          <Grid
            container
            spacing={0}
            direction="column"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            wrap="wrap"
            sx={{
            border:'solid'
          }}
          >
            <Paper>
            {children}
            </Paper>
          </Grid>
        </Grid>
  )
}

AppFrame.propTypes = {
    header:PropTypes.string.isRequired
}

export default AppFrame
