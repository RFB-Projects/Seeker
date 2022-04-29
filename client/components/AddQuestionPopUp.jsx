import React, {useState} from 'react'
import {Button, Typography, Stack, Box, TextField} from '@mui/material'
import './QuestionPage.scss'
import OutsideClickHandler from 'react-outside-click-handler';


function AddQuestionPopUp({questions, setQuestions, setAddQuestionTrigger }) {
    console.log("got made")
    console.log(questions)
    const [currentTitle, setCurrentTitle] = useState('')
    const [currentBodyText, setCurrentBodyText] = useState('')
    return (
        <>
            <div className="outerPopUp" >
                    <Box className="innerPopUp">
                    <OutsideClickHandler onOutsideClick={() => setAddQuestionTrigger(false)}>
                        <Stack direction='column' alignItems='center'>
                            <Typography variant='h4'> New Question </Typography>
                            <br/>
                            <p>Title:</p><TextField align='center' sx={{width:'80%', marginBottom: '15px'}} placeholder='Title goes here...'></TextField>
                            <br/>
                            <p>Answer: </p><TextField align='center' sx={{width:'80%', marginBottom: '15px'}} placeholder='Write your answer here... if you DARE'></TextField>
                            <Stack direction='row' spacing={1} sx={{border:1, width:'35%'}} justifyContent='space-around' >
                                <Button variant="contained" color='error' sx={{width:'50%'}} onClick={()=> {setAddQuestionTrigger(false)}}> Cancel </Button>
                                <Button variant="contained" color='success' sx={{width:'50%'}} onClick={()=> {setAddQuestionTrigger(false); setQuestions([...questions, {title:`Anotha' One ${questions.length}`, bodyText:'blankety blank blank'}]) }}> Add Question </Button>
                            </Stack>
                        </Stack>
                    </OutsideClickHandler>   
                    </Box>
                </div>
        </>
    )
    }

export default AddQuestionPopUp    