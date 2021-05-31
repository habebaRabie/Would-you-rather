import { AddAnswer_Question, AssignQuestion_ToUser } from '../actions/questions';
import {RECEIVE_USERS} from '../actions/users'

export default function users (state={}, action){
    switch(action.type){
        case RECEIVE_USERS:
            return{
                ...state,
                ...action.users
            }

        case AssignQuestion_ToUser:
            const {question} = action;
            let questionId = question.id;
            let userId = question.author;
            return {
                ...state,
                [userId]: {
                    ...state[userId],
                    questions: state[userId].questions.concat([questionId])
                }
            }

        case AddAnswer_Question:
            const {authedUser , QID, answer} = action;
            let newState = {...state};
            newState[authedUser.user.id].answers[QID] = answer
            return newState;

        default:
            return state
    }
}