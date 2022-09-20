import React from 'react'
import { Typography, Button, Box } from '@mui/material';

function Tags({ tagProp, backgroundCol, x }) {

  let tag = tagProp

  return (
    <Box>
      {tag.map((tag, index) => (
        <Box sx={{ backgroundColor: backgroundCol, padding: '3px 5px ', borderRadius: '5px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: '5px', }} key={index}>
          <Box sx={{ color: '#000000', fontWeight: 'bold' }}  >{tag}</Box>
        </Box>
      ))}
    </Box>
  )
}

export default Tags
