import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { TableCell, TableRow } from '@mui/material'

function CustomerListItem({name,editAction,delAction,urlPath,dni}) {
  return (
    <TableRow >
            <TableCell align="center">
                <Link to={`${urlPath}${dni}`}>{name}</Link>
            </TableCell>
            <TableCell align="center">
                <Link to={`${urlPath}${dni}/edit`}>{editAction}</Link>
                <Link to={`${urlPath}${dni}/del`}>{delAction}</Link>
            </TableCell>
    </TableRow>
  )
}

CustomerListItem.propTypes = {
    name:PropTypes.string.isRequired,
    editAction:PropTypes.string.isRequired,
    delAction:PropTypes.string.isRequired,
    urlPath:PropTypes.string.isRequired,
    dni:PropTypes.number.isRequired
}

export default CustomerListItem
