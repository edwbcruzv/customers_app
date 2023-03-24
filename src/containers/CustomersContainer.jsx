import React from 'react'
// import PropTypes from 'prop-types'
import AppFrame from '../components/AppFrame'
import CustomersList from '../components/CustomersList'
import CustomerActions from '../components/CustomerActions'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'


function CustomersContainer() {

    const customers=[
        {
            "dni":1,
            "name":"nombre 1"
        },
        {
            "dni":2,
            "name":"nombre 2"
        },
        {
            "dni":3,
            "name":"nombre 3"
        },
        {
            "dni":4,
            "name":"nombre 4"
        }
    ]

    const navegate=useNavigate()

    function handleAddNew(){
        navegate('/customers/new')
    }


  return (
    <AppFrame header='Listado de clientes'>
        <CustomersList customers={customers} urlPath='customer/'></CustomersList>
        
        <CustomerActions>
            <Button variant="contained" color="primary"  onClick={handleAddNew}>
              Agregar cliente
            </Button>
        </CustomerActions>
    </AppFrame>
  )
}

CustomersContainer.propTypes = {}

export default CustomersContainer
