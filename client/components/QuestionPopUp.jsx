import React from 'react'
import {Button, Typography, Stack, Box} from '@mui/material'
import './QuestionPage.scss'
import OutsideClickHandler from 'react-outside-click-handler';


const QuestionPopUp = ({setTrigger, title, bodyText}) => {
    console.log("question pop", title)
    return (
        <>
            <div className="outerPopUp" onClick={() => console.log('outer div')}>
                <Box className="innerPopUp">
                <OutsideClickHandler onOutsideClick={() => setTrigger(false)}>
                    <Stack direction='column' alignItems='center'>
                        <Typography variant='h4'> {title} </Typography>
                        <Typography sx={{border:1, margin:'5px'}} variant="body1">
                            The meaning of life, or the answer to the question: "What is the meaning of life?", pertains to the significance of living or existence in general. Many other related questions include: "Why are we here?", "What is life all about?", or "What is the purpose of existence?" There have been many proposed answers to these questions from many different cultural and ideological backgrounds. The search for life's meaning has produced much philosophical, scientific, theological, and metaphysical speculation throughout history. Different people and cultures believe different things for the answer to this question.
                        </Typography>
                        <br/><br/>
                        <Typography sx={{border:1, margin:'5px'}} variant="body1">
                            Also... 
                            {bodyText}
                        </Typography>
                        <div>

                        </div>
                        <Button variant="contained" color='success' sx={{width:'10%'}} onClick={()=> setTrigger(false)}> Edit </Button>
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

export default QuestionPopUp