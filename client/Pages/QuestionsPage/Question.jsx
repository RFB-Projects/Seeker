import React, {useState} from 'react'
import { Button, Typography, Stack, Box, Tooltip, IconButton, Chip } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditQuestionPopUp from './EditQuestionPopUp';
import DeleteQuestionPopUp from './DeleteQuestionPopUp';
import { pink, lightBlue } from '@mui/material/colors'
const secondaryColor = pink[600]
const tertiaryColor = lightBlue[400]


function Question({title, userId, blurb, setQuestions, complete}) {
  const [questionTrigger, setQuestionTrigger] = useState(false);
  const [deleteTrigger, setDeleteTrigger] = useState(false);
  let statusColor = [!complete ? 'contained' : 'outlined', complete ? 'contained' : 'outlined']

  async function switchStatus () {
    try {
      const fetchParams = {
        method:'PATCH',
        headers: {
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify({userId, title, complete: complete ? 0 : 1})
      }
      const fetchedResults = await fetch('/api/question/switchStatus', fetchParams)
      const results = await fetchedResults.json()
      results.sort((a, b) => a.question_pk - b.question_pk)
      console.log("getched results", results)
      setQuestions(results)
    } catch(err){
      console.log("error on clientside with switchStatus in question component")
      console.log(err)
    }
  }

  return (
    <Box color='primary'>
        <Stack direction='row' align='center' justifyContent='center' spacing={3} sx={{backgroundColor:tertiaryColor}}>
          <Button style={{height:'50px', width:1000}} variant='contained' sx={{backgroundColor:tertiaryColor}} onClick={() => setQuestionTrigger(prev=> !prev)}>
                <Typography variant='h5'>
                    {title}
                </Typography>
          </Button>
          <Chip label='Incomplete' variant={statusColor[0]} onClick={switchStatus} color='error' />
          <Chip label='Complete' variant={statusColor[1]} onClick={switchStatus} color='success' />
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