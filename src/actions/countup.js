export const COUNT_UP = '@@countup/COUNT_UP';

export const countup = () => (dispatch, getState) => {
    const prevCounter = getState().countup.counter;
    dispatch({
        type: COUNT_UP,
        payload: {
            counter: prevCounter + 1
        }
    });
};
