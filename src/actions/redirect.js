export const SET_REDIRECT = 'SET_REDIRECT'
export const CLEAR_REDIRECT = 'CLEAR_REDIRECT'

export function setRedirection (to){
    return {
        type : SET_REDIRECT,
        to
    }
}

export function clearRedirect (){
    return {
        type : CLEAR_REDIRECT,
    }
}