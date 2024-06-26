import React, { useState,useEffect } from 'react'
import { Box,Stack,Typography } from '@mui/material' 
import {Sidebar,Videos }from './' 

import { fetchFromApi } from '../utils/fetchFromApi'



const Feed = () => {

  const [selectedCategory,setSelectedCategory ] = useState('New') 
  const [fetchVideos, setFetchVideos] = useState([]) 

  useEffect( () =>{

    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then(
      (data) => (setFetchVideos(data.items)) 
    )
  } ,[selectedCategory] ) 

  return (
    <Stack
      sx={{
        flexDirection:{sx:'column' , md:"row" }
      }}
    > 
      <Box sx={{
        height:{ sx:'auto' , md:'92vh'},
        borderRight : '1px solid lightblue',
        px:{sx:0 , md:2 } 
      }}>
        <Sidebar 
          selectedCategory={selectedCategory} 
          setSelectedCategory = {setSelectedCategory}
        /> 

        <Typography className='copyright' variant='body2'
        sx={{
          mt:1.5 , color:"lighblue" 
        }} >
          Copyright 2022 NS LOLO 
        </Typography>
        
      </Box>

      <Box p={2} sx={{
        overflowY:'auto' ,
        height:'90vh', flex:'2' 
      }}>
        <Typography variant='h4' fontWeight='bold' mb={2} 
        sx={{
          color:'white'
        }}> {selectedCategory}
          <span style={{
            color:'#f31503'
          }}> Videos </span>
        </Typography>

        <Videos  fetchVideos={fetchVideos}/>   
      </Box>
    </Stack>
  )
}

export default Feed