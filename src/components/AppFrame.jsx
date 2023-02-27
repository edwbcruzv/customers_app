import React from 'react'
import PropTypes from 'prop-types'

function AppFrame({header,body}) {
  return (
    <div>
        <div className="app-frame">
            <AppHeader title={props.header}></AppHeader>
            <div>{body}</div>
            <div>Aplicacion simple de ejemplo</div>
        </div>
    </div>
  )
}

AppFrame.propTypes = {
    header:PropTypes.string.isRequired,
    body:PropTypes.element.isRequired
}

export default AppFrame
