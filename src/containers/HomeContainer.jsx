import { Button } from '@mui/material'
// import PropTypes from 'prop-types'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import AppFrame from '../components/AppFrame'
import CustomerActions from '../components/CustomerActions'



function HomeContainer(){
    const navegate=useNavigate()

    function handleOnCLick(){
        console.log("first")
        navegate('/customers')
    }

    return (
        <AppFrame header='Home'>
                Pantalla inicial
                <CustomerActions >
                <Button variant="outlined" color="primary" onClick={handleOnCLick}>
                  Listado de clientes
                </Button>
                </CustomerActions>
        </AppFrame>
    )

}

export default HomeContainer