import React from 'react'
import {Button, Typography, Stack, Box, TextField} from '@mui/material'
import './QuestionPage.scss'
import OutsideClickHandler from 'react-outside-click-handler';


function AddQuestionPopUp({questions, setQuestions, setAddQuestionTrigger }) {
    console.log("got made")
    console.log(questions)
  return (
    <>
        <div className="outerPopUp" onClick={() => console.log('outer div')}>
                <Box className="innerPopUp">
                <OutsideClickHandler onOutsideClick={() => setAddQuestionTrigger(false)}>
                    <Stack direction='column' alignItems='center'>
                        <Typography variant='h4'> {questions.length} </Typography>
                        <Typography sx={{border:1, margin:'5px'}} variant="body1">
                            ID even K man...                       
                        </Typography>
                        <br/><br/>
                        <Typography sx={{border:1, margin:'5px'}} variant="body1">
                            Also... 
                            {questions[0].bodyText}
                        </Typography>
                        <div>

                        </div>
                        <Button variant="contained" color='success' sx={{width:'10%'}} onClick={()=> {setAddQuestionTrigger(false); setQuestions([...questions, {title:`Anotha' One ${questions.length}`, bodyText:'blankety blank blank'}]) }}> Add Question </Button>
                        {/* <Stack direction='row' spacing={2}>
                            <Button variant="outlined" color='secondary'> Cancel </Button>
                            <Button variant="outlined" color='primary'> Save </Button>
                        </Stack> */}
                    </Stack>
                </OutsideClickHandler>   
                </Box>
            </div>
    </>
  )
}

export default AddQuestionPopUp    