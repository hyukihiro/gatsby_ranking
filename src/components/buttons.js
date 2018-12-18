import React from 'react'

const Buttons = props => {
  return (
    <>
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
    </>
  )
}

export default Buttons
