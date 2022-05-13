import React, {useState} from 'react'
import {Button, Typography, Stack, Box, TextField} from '@mui/material'
import './QuestionPage.scss'
import OutsideClickHandler from 'react-outside-click-handler';


function AddQuestionPopUp({questions, setQuestions, setAddQuestionTrigger }) {
    console.log("got made")
    console.log(questions)
    const [currentTitle, setCurrentTitle] = useState('')
    const [currentBlurb, setCurrentBlurb] = useState('')

    async function addQuestion(title, blurb, user_id = 1){
        try {
            if (currentTitle !== ''){
                const reqBody = { title, blurb, user_id }
                const fetchParams = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(reqBody)
                }
                const response = await fetch(`api/question/addQuestion${user_id}`, fetchParams);
                const result = await response.json();
                setQuestions(result)
            } else {
                console.log("user needs to enter a string")
                // handle with small red popup in UI
            }
        } catch (err) {
            console.log("error in addQuestion asyn method in addquestionpopup")
            console.log(err)
        }
    }

    return (
        <>
            <div className="outerPopUp" >
                    <Box className="innerPopUp">
                    <OutsideClickHandler onOutsideClick={() => setAddQuestionTrigger(false)}>
                        <Stack direction='column' alignItems='center'>
                            <Typography variant='h4'> New Question </Typography>
                            <br/>
                            <p>Title:</p><TextField onChange = {({target: {value}}) => setCurrentTitle(value)} align='center' sx={{width:'80%', marginBottom: '15px'}} placeholder='Title goes here...'></TextField>
                            <br/>
                            <p>Answer: </p><TextField onChange = {({target: {value}}) => setCurrentBlurb(value)} align='center' sx={{width:'80%', marginBottom: '15px'}} placeholder='Write your answer here... if you DARE'></TextField>
                            <Stack direction='row' spacing={1} sx={{border:1, width:'35%'}} justifyContent='space-around' >
                                <Button variant="contained" color='error' sx={{width:'50%'}} onClick={()=> {setAddQuestionTrigger(false)}}> Cancel </Button>
                                <Button variant="contained" color='success' sx={{width:'50%'}} onClick={()=> {addQuestion(currentTitle, currentBlurb); setAddQuestionTrigger(false)}}> Add Question </Button>
                            </Stack>
                        </Stack>
                    </OutsideClickHandler>   
                    </Box>
                </div>
        </>
    )
    }

export default AddQuestionPopUp    