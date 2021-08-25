import React ,{useState} from 'react'
import Post from './Post'
import { useSelector} from 'react-redux' 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        rowGap: '1rem',
        marginBottom: '20px',
       justifyContent: 'center'
    },
    input:{
        width: '60%',
       
    }
    ,
    button:{
      width: '10%',
      fontSize: '20px',
      marginLeft: '10px'
    }
 
  }));

const Posts=()=> {
    const albums = useSelector(state => state.posts.albumDetail)
    const [searchValue, setSearchValue] = useState("")
    const classes = useStyles();
    // console.log("Albums are :", albums)
    const albumInfo = albums.slice(0,5)
    return (
        <div>
              <form className={classes.root}  noValidate autoComplete="off">
                <TextField  
                    className={classes.input}
                    label="Enter Search" 
                    name={searchValue} 
                    onChange={(event)=> setSearchValue(event.target.value)}
                    variant="outlined" />
                <Button className={classes.button} variant="contained" color="primary">
                    Search
                </Button>
              </form>
            {
                albumInfo.map((album)=>{
                    return (
                        <Post key={album.id} album={album} searchValue={searchValue} />
                    )
                })
            }
        </div>
    )
}

export default Posts
