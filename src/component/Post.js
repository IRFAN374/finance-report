import React from 'react'
import { useSelector } from 'react-redux';
import SingleAlbum from './SingleAlbum';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        rowGap: '1rem',
        flexDirection: 'column',
        marginLeft: '50px',
        marginRight: '50px'
    },
 
  }));

const Post=({album,searchValue})=> {
    const classes = useStyles();
    const photoAlbum = useSelector(state => state.posts.photoDetail);
    const userPhotoDetail = photoAlbum.filter(single=> single.albumId === album.userId);
    const photoInfos = userPhotoDetail.slice(0,10);
    // console.log("Single User Detail: ", userPhotoDetail)
    console.log(searchValue)
    return (
        <div className={classes.root}>
            <Typography variant="h4">{album.title}</Typography>
            {
                 photoInfos.map((singlePhoto)=>{
                  return(
                     <SingleAlbum key={singlePhoto.id} singlePhoto={singlePhoto} />
                  )
                })
            }
            
        </div>
    )
}

export default Post
