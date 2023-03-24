import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeContainer from './containers/HomeContainer'
import Grid from '@mui/material/Grid'
import CustomersContainer from './containers/CustomersContainer'

function App2() {
  return (
    <div>App</div>
  )
}

export default class App extends Component {


  render() {
    return (
      <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
          sx={{
            border:'solid',
            backgroundColor:'red'
          }}
      >
        
      <Router>
        <Routes>
          <Route path='/' element= {<HomeContainer/>} />
          <Route path='/customers' element= {<CustomersContainer/>} />
          <Route path='/customers/:dni' element= {<App2/>} />
          <Route path='/customers/new' element= {<App2/>} />
        </Routes>
      </Router>
      </Grid>
    )
  }
}
