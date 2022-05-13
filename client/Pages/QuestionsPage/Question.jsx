import React, {useState} from 'react'
import { Button, Typography, Stack, Box, Tooltip, IconButton, Chip } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditQuestionPopUp from './EditQuestionPopUp';
import DeleteQuestionPopUp from './DeleteQuestionPopUp';

function Question({title, userId, blurb, setQuestions}) {
  const [questionTrigger, setQuestionTrigger] = useState(false);
  const [deleteTrigger, setDeleteTrigger] = useState(false);
  console.log('questiontrigger', questionTrigger)
  return (
    <Box sx={{border:1, backgroundColor:'primary.light'}}>
        <Stack direction='row' align='center' spacing={3}>
          <Button style={{height:'50px'}} variant='contained' color='secondary' onClick={() => setQuestionTrigger(prev=> !prev)}>
                <Typography variant='h5'>
                    {title}
                </Typography>
          </Button>
          <Chip label='Complete' variant='outlined' color='success' />
          <Chip label='Incomplete' variant='outlined' color='error' />
          <Tooltip title='Delete'>
              <IconButton onClick={() => setDeleteTrigger(prev=> !prev)}>
                <DeleteOutlineIcon sx={{border:1}} align='right' />
              </IconButton>
          </Tooltip>
        </Stack>
        {questionTrigger && (
              <EditQuestionPopUp setQuestionTrigger={setQuestionTrigger} title={title} blurb={blurb} userId={userId} setQuestions={setQuestions}></EditQuestionPopUp>
        )}
        {deleteTrigger && (
              <DeleteQuestionPopUp title={title} userId={userId} setDeleteTrigger={setDeleteTrigger} setQuestions={setQuestions}/>
        )}
    </Box>
  )
}

export default Question