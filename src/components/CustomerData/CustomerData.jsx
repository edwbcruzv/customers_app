import React from 'react'
import PropTypes from 'prop-types'

function CustomerData({name,dni,age}) {
  return (
    <div>
        <div className="customer-data">
            <h2>Datos del Cliente</h2>
                <div><strong>Nombre</strong><i>{name}</i></div>
                <div><strong>DNI</strong><i>{dni}</i></div>
                <div><strong>Edad</strong><i>{age}</i></div>
        </div>
    </div>
  )
}

CustomerData.prototype={
    name:PropTypes.string.isRequired,
    dni:PropTypes.string.isRequired,
    age:PropTypes.number
}

export default CustomerData