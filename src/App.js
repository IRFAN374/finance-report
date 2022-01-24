import Posts from './component/Posts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getAlbumDetail, getPhotoDetail } from './store/actions/action'

// changes int he code

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
     dispatch(getAlbumDetail());
     dispatch(getPhotoDetail());
  },[dispatch])

  return (
    <div>
      
        <Posts/>
    </div>
  );
}

export default App;
