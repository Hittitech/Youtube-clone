import React from 'react'
import { useState,useEffect } from 'react'
import {Box,Stack,Typography} from "@mui/material"
import {Sidebar,Videos} from "./"
import { fetchFromApi } from '../utils/fetchFromApi'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(()=>{
     fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>setVideos(data.items))
  },[selectedCategory])
  return (
    <Stack sx={{flexDirection:{
      sx:"column",md:'row'
    }}}>
    
    <Box sx={{height:{
      sx:'auto',md:"92vh"}
      ,borderRight:'1px solid #3d3d3d',px:{
        sx:0,md:2}}}>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography  className='copyright' 
        variant='body2' sx={{mt:1.5,color:'#fff'}}>
          Copyrhight Md Adnan Sami &copy; 2023 
        </Typography>
    </Box>
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
      {selectedCategory}<span style={{
        color:'#f31503'
      }}>videos</span>
    </Typography>
    <Videos videos={videos}/>

    </Box>

    </Stack>
  )
}

export default Feed