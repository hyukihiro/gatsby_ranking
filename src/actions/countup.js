export const COUNT_UP = '@@countup/COUNT_UP'
export const COUNT_DOWN = '@@countup/COUNT_DOWN'

export const countup = () => (dispatch, getState) => {
  const prevCounter = getState().countup.counter
  dispatch({
    type: COUNT_UP,
    payload: {
      counter: prevCounter + 1,
    },
  })
}

export const countdown = () => (dispatch, getState) => {
  const prevCounter = getState().countup.counter
  dispatch({
    type: COUNT_DOWN,
    payload: {
      counter: prevCounter - 1,
    },
  })
}
