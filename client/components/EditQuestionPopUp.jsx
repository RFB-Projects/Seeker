import React, {useState} from 'react'
import {Button, Typography, Stack, Box, TextField} from '@mui/material'
import './QuestionPage.scss'
import OutsideClickHandler from 'react-outside-click-handler';

const EditQuestionPopUp = ({title, blurb, userId, setQuestionTrigger, setQuestions}) => {
    console.log("question popup rendered...", blurb)
    const [editable, setEditable] = useState(false)
    const [currentBlurb, setCurrentBlurb] = useState(blurb);

    // async function to edit text in db

    async function saveEdits() {
        try{
            const fetchParams = {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({userId, title, currentBlurb})
            }
            const fetchResults = await fetch('/api/question/editQuestion', fetchParams)
            const results = await fetchResults.json()
            setQuestions(results)
            setEditable(prev=>!prev)
        } catch (err) {
            console.log('error in client-side of editText patch request')
        }
    }

    return (
        <>
            <div className="outerPopUp">
                <Box className="innerPopUp" sx={{backgroundColor:'primary.dark'}}>
                <OutsideClickHandler onOutsideClick={() => {console.log("outside click registered"); return setQuestionTrigger(false)}}>
                    <Stack direction='column' alignItems='center'>
                        <Typography variant='h4'> {title} </Typography>
                        {!editable && (
                        <Typography sx={{border:1, margin:'5px'}} variant="body1">
                            BLURB: ... 
                            {blurb}                        
                        </Typography>
                        )}
                        {editable && (
                            <TextField defaultValue={blurb} onChange={(e) => setCurrentBlurb(e.target.value)}></TextField>
                        )}
                        <br/><br/>

                        <Stack direction='row' spacing={1} justifyContent='space-around' sx={{border:1}} >
                            {!editable && (
                                <>
                                    <Button variant="contained" color='error' sx={{width:'20%'}} onClick={()=> setQuestionTrigger(false)}> Cancel </Button>
                                    <Button variant="contained" color='success' sx={{width:'20%'}} onClick={()=> setEditable(true)}> Edit </Button>
                                </>
                            )}
                            {editable && (
                                <>
                                    <Button variant="contained" color='error' sx={{width:'20%'}} onClick={()=> setEditable(false)}> Cancel Edits </Button>
                                    <Button variant="contained" color='success' sx={{width:'20%'}} onClick={saveEdits}> Save Edits </Button>
                                </>                            
                            )}
                        </Stack>
                    </Stack>
                    </OutsideClickHandler>   
                </Box>
            </div>
        </> 
    )

}

export default EditQuestionPopUp