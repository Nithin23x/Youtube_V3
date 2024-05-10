import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"

import { Videos, ChannelCard } from "./"
import { fetchFromApi } from "../utils/fetchFromApi"

const ChannelDetails = () => {
  const { lola } = useParams() 
  console.log(lola  )

  const [channelDetail, setChannelDetail] = useState(null)
  const [channelVideos, setChannelVideos] = useState([])



  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${lola}`).
      then(data => (setChannelDetail(data?.items[0])))

    fetchFromApi(`search?channelId=${lola }&part=snippet&order=date`). 
      then(data => (setChannelVideos(data?.items )) )

  }, [lola])


  return (
    <Box minHeight='95vh'>
      Nithin Karne  
      <Box>
        <div  style={{
          background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(162,117,21,1) 100%)", zIndex:10,
          height:'300px' 
        }}

        />
        <ChannelCard channelDetail={channelDetail}  marginTop='-90px'/>
      </Box>

      <Box display='flex' p='2' >
        <Box sx={{
          mr:{sm:'100px' }
        }} />
        <Videos fetchVideos={channelVideos } />
        
      </Box>
    </Box>
  )
}

export default ChannelDetails