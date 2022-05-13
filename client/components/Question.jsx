import React from 'react'
import { Button, Typography, Stack, Box, Tooltip, IconButton, Chip } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function Question({title, customOnClick, setRenderConfirmDelete, setTitleToDelete}) {
  return (
    <Box sx={{border:1, backgroundColor:'primary.light'}}>
        <Stack direction='row' align='center' spacing={3}>
          <Button style={{height:'50px'}} variant='contained' color='secondary' onClick={() => customOnClick()}>
                <Typography variant='h5'>
                    {title}
                </Typography>
          </Button>
          <Chip label='Complete' variant='outlined' color='success' />
          <Chip label='Incomplete' variant='outlined' color='error' />
          <Tooltip title='Delete'>
              <IconButton onClick={() => setRenderConfirmDelete(true)}>
                <DeleteOutlineIcon sx={{border:1}} align='right' />
              </IconButton>
          </Tooltip>
        </Stack>

    </Box>
  )
}

export default Question