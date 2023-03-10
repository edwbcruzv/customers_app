import React from 'react'
import PropTypes from 'prop-types'

function CustomerActions({children}) {
  return (
    <div>
        <div className="customers-action">
            <div>{children}</div>
        </div>
    </div>
  )
}

CustomerActions.propTypes = {
    children:PropTypes.node.isRequired
}

export default CustomerActions
