import {
  _getUsers,
  _getQuestions,
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export function _saveQuestion (info) {
  return _saveQuestion(info)
}