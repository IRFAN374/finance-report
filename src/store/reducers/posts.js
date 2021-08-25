import {FETCH_POSTS, FETCH_SINGLE} from '../constants/constants'

const initialState = {
    albumDetail:[],
    photoDetail:[]
}

const reducer = (posts=initialState, action)=>{
   switch (action.type) {
       case FETCH_POSTS:
           return {
               ...posts,
               albumDetail: action.payload
           }
          
       case FETCH_SINGLE:
        return {
            ...posts,
            photoDetail: action.payload
        }
   
       default:
           return posts
   }
}

export default reducer;