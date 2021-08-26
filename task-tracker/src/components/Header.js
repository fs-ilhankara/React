import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

function Header({title}) {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="purple" text="Show Create a Task Bar"/>
            
        </header>
    )
}

// Header.defaultProps = {
//     title: 'Tasks Tracker as default'
// }


Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
