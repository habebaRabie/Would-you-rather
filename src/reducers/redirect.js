import {SET_REDIRECT, CLEAR_REDIRECT} from '../actions/redirect'

const InitialValues = {
    to: '/'
};

export default function redirect (state= InitialValues, action){
    switch(action.type){
        case SET_REDIRECT:
            return {
                ...state,
                ...action.to
            }

        case CLEAR_REDIRECT:
            return {
                ...InitialValues
            }
        default:
            return state
    }
}