import React, { Fragment } from 'react'

const Buttons = props => {
  return (
    <Fragment>
      <button
        type="button"
        onClick={event => {
          event.preventDefault()
          props.onCountUp()
        }}
      >
        up
      </button>

      <button
        type="button"
        onClick={event => {
          event.preventDefault()
          props.onCountDown()
        }}
      >
        down
      </button>
    </Fragment>
  )
}

export default Buttons
