import React from 'react'
import { Button, Typography } from '@mui/material'

function Question({title, customOnClick}) {
  return (
    <>
        <Button style={{height:'50px'}} variant='contained' color='secondary' onClick={() => customOnClick()}>
            <Typography variant='h5'>
                {title}
            </Typography>
        </Button>
    </>
  )
}

export default Question