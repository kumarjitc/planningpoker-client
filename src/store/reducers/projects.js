import { createStore } from 'redux';
import { PROJECT_SELECT } from '../actionTypes';

const projectReducer = (state = {}, action) => {
    switch (action.type) {
        case PROJECT_SELECT:
            state = {
                ...state,
                project: { ...action.payload }
            }
            return state;
    }
}

export default createStore(projectReducer);