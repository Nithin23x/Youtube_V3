import React from 'react'
import { Stack,Box } from '@mui/material'
import {VideoCard,ChannelCard} from './'

const Videos = (props) => {
    const{fetchVideos,direction } = props 
    console.log(fetchVideos)

  return (
    <Stack direction={ direction ||'row'} flexWrap='wrap' justifyContent='start' gap={2}>
        {
            fetchVideos.map(
                (eachVideo,id4 ) => (
                    <Box key={id4}>
                        { eachVideo.id.videoId && <VideoCard  video={eachVideo}/> }
                        {eachVideo.id.channelId && <ChannelCard  channelDetail={eachVideo}/> } 
                    </Box>
                )
            )
        }
    </Stack>
  )
}

export default Videos