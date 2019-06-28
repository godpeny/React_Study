import {handleActions, createAction} from 'redux-actions';
import axios from 'axios';
import {pender,applyPenders} from 'redux-pender';

function getPostAPI(postId) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  }

const GET_POST = 'GET_POST';

export const getPost = createAction(GET_POST,getPostAPI);

const initialState = {
    data:{
        text:'',
        body:''
    }
};

const reducer = handleActions({
    // empty
},initialState);

export default applyPenders(reducer,[
    {
        type: GET_POST,
        onSuccess: (state,action) => {
            const {title,body} = action.payload.data;
            return{
                data:{
                    title,
                    body
                }
            }
        },
        onCancel: (state,action) => {
            return{
                data:{
                    title:'취소됨',
                    body:'취소됨'
                }
            }
        }
    }
    // 다른 pender 액션
]);