// Action 객체 만드는 Action 생성 함수 선언

import * as types from './ActionTypes.js';

export const increment = (index) => ({       // functun() => {return{}} 와 같은 뜻
    type: types.INCREMENT,
    index
});


export const decrement = (index) => ({
    type: types.DECREMENT,
    index
});

export const setColor = (index,color) => ({
    type: types.SET_COLOR,
    color,
    index
});

export const create = (color) => ({
    type: types.CREATE,
    color
})

export const remove = () => ({
    type: types.REMOVE
})