import React, { useState,useEffect } from 'react'
import { Box,Stack,Typography } from '@mui/material' 
import {Sidebar,Videos }from './' 

import { fetchFromApi } from '../utils/fetchFromApi'
import { useParams } from 'react-router-dom'



const SearchFeed = () => {

  
  const [fetchVideos, setFetchVideos] = useState([]) 
  const {searchTerm } = useParams()

  useEffect( () =>{

    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then(
      (data) => (setFetchVideos(data.items)) 
    )
  } ,[searchTerm] ) 

  return (
    

      <Box p={2} sx={{
        overflowY:'auto' ,
        height:'90vh', flex:'2' 
      }}>
        <Typography variant='h4' fontWeight='bold' mb={2} 
        sx={{
          color:'white'
        }}> Search Results For 
          <span style={{
            color:'#f31503'
          }}>  {searchTerm} </span>
        </Typography>

        <Videos  fetchVideos={fetchVideos}/>   
      </Box>
   
  )
}

export default SearchFeed