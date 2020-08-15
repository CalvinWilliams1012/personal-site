import React from 'react'
import PropTypes from 'prop-types'


const Typer  = ({phrase}) => (
    <div>
        <h1 className='typer'>
            {phrase}
        </h1>
    </div>
)

Typer.propTypes = {
    typer: PropTypes.arrayOf(
      PropTypes.shape({
        phrase: PropTypes.string,
      })
    ),
}

export default Typer