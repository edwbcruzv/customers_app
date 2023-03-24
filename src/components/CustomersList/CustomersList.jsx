import React from 'react'
import PropTypes from 'prop-types'
import CustomerListItem from '../CustomerListItem'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

function CustomersList({customers, urlPath}) {
  return (
      <TableContainer >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Nombre</TableCell>
              <TableCell align="center">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              customers.map(c=> <CustomerListItem 
                key={c.dni}
                dni={c.dni}
                name={c.name}
                editAction={'Editar'}
                delAction={'Eliminar'}
                urlPath={urlPath}  /> )
              }
          </TableBody>
        </Table>
     </TableContainer>
        
  )
}

CustomersList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath:PropTypes.string.isRequired
}

export default CustomersList
