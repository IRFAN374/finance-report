import { FETCH_POSTS, FETCH_SINGLE}  from '../constants/constants';
import axios from 'axios'

const album_url = "https://jsonplaceholder.typicode.com/albums";
const photo_url = "https://jsonplaceholder.typicode.com/photos";


export const getAlbumDetail = ()=> async(dispatch)=>{
    try {
        const { data } = await axios.get(album_url);
        // console.log("data received in album :", data);
        dispatch({
            type: FETCH_POSTS,
            payload: data
        })
    } catch (error) {
        console.log("Error in Album Detail: ",error.meesage);
    }
}


export const getPhotoDetail = (userID)=> async (dispatch)=>{
    try {
        const {data}= await axios.get(photo_url);
        // console.log("data received in photo :", data);
        // const userPhoto = data.filter(info=> info.albumId === userID)
        dispatch({
            type: FETCH_SINGLE,
            payload: data
        })
    } catch (error) {
        console.log("Error in Photo Detail", error.message)
    }
}