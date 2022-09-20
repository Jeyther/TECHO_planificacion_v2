import React from 'react'
import Box from '@mui/material/Box';

function DataStudioTableTwo() {
  return (
    <Box sx={{ width: "100%", margin: "10px" }}>
      <select style={{ width: "90%", padding: "5px", borderRadius: "5px", borderColor: "#dfdfdf", }}>
        <option default >País</option>
        <option value="brasil">Brasil</option>
        <option value="argentina">Argentina</option>
        <option value="chile">Chile</option>
      </select>
    </Box>
  )
}

export default DataStudioTableTwo