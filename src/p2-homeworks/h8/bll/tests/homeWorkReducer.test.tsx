import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'

let initialState: any[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sortUp', payload: 'up'})

    console.log(newState)
    expect(newState[2].age).toBe(44)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sortDown', payload: 'down'})
    expect(newState[3].age).toBe(44)

})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 18})
    expect(newState[3].age).not.toBe(17)
    expect(newState[2].age).not.toBe(17)
    expect(newState[1].age).not.toBe(17)

})
