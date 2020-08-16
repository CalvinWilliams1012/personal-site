import React from 'react'
import PropTypes from 'prop-types'


const Typer  = ({phrase}) => (
    <div className='typewriter'>
        <div className='typer'>
            {phrase}
        </div>
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