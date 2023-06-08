import { useState,useEffect } from 'react'
import {Box ,Typography} from "@mui/material"
import {Videos} from "./"
import { fetchFromApi } from '../utils/fetchFromApi'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {
  // const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])
  const {searchTerm}=useParams();

  useEffect(()=>{
     fetchFromApi(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>setVideos(data.items))
  },[searchTerm])
  return (
    <Box p={2} 
    sx={{overflowY:'auto',
    height:'90vh',flex:2
    }}
    >
<Typography variant='h4'
   mt={2}
  fontWeight="bold" 
  sx={{
    color:'white'
  }}
  >
  Search Results for:<span style={{
    color:'#f31503'
  }}>{searchTerm}</span>Videos
</Typography>
<Videos videos={videos}/>

</Box>
  )
}

export default SearchFeed