import produce from 'immer';

import { COUNT_UP } from '../actions/countup';

const initialState = {
    counter: 0
};

export default (state = initialState, action) =>
    produce(state, draft => {
        switch(action.type) {
            case COUNT_UP:
                draft.counter = action.payload.counter;
                break;
        }
    });
    