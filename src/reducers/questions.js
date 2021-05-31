import {RECEIVE_QUESTIONS, ADD_QUESTIONS, AddAnswer_Question} from '../actions/questions'

export default function questions(state={}, action){
    switch (action.type){
        case RECEIVE_QUESTIONS:
            return{
                ...state,
                ...action.questions
            }

        case ADD_QUESTIONS:
            
            return{
                ...state,
                [action.question.id]: action.question,
            }

        case AddAnswer_Question:
            const {authedUser , QID, answer} = action;
            let newState = {...state};
            newState[QID][answer].votes.push(authedUser.user.id)
            return newState;

        default:
            return state
    }
}