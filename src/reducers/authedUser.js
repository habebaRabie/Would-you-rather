import {SET_AUTHED_USER} from '../actions/authedUser'

const InitialValues = {
    isLoggedIn: false,
    user: {
        id: '',
        name: '',
        avatarURL: '',
        answers: {},
        questions: []
    }
}

export default function authedUser(state= InitialValues, action){
    switch(action.type){
        case SET_AUTHED_USER:
            return{
                ...state,
                ...action,
            }
        default:
            return state
    }
}

