import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        columnGap: '1rem',
        alignItems: 'center',
        flexWrap: 'nowrap',
        justifyContent: 'space-between'
    },
  paper : {
    display: 'flex',
    rowGap: '0.5rem',
    flexDirection: 'column',
  
  },
  paper2:{
    flexGrow: '1',
    
  },
    image:{
        width: '4rem',
        height: '4rem'
    }
  }));

const SingleAlbum=({singlePhoto})=> {
    const classes = useStyles();
    return (
        <Grid container spacing={1} className={classes.root}>
            <img className={classes.image} src={singlePhoto.thumbnailUrl} alt="abcd"/> 
            <Grid className={`${classes.paper} ${classes.paper2}`} >
               <Typography variant="h5">{singlePhoto.title}</Typography>
               <a href={singlePhoto.url}>{singlePhoto.url}</a>
            </Grid>
            <Grid className={classes.paper} >
                <Typography variant="h4">$ 100</Typography>
                <Typography variant="body2">10:00 AM</Typography>
            </Grid>
        </Grid>
    )
}

export default SingleAlbum
