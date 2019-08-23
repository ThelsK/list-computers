export const ADD_MODEL = 'ADD_MODEL'

export const addModel = model =>
  ({
    type: ADD_MODEL,
    payload: model
  })