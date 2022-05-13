import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import {Button, Typography, Stack, Box} from '@mui/material'
// import 'regenerator-runtime'

// child of the question components?
function ConfirmDeletePopUp({setRenderConfirmDelete, titleToDelete, setTitleToDelete}) { // settrigger, current question index (for title)
    console.log("how many rendered...")
    async function deleteQuestion(questionTitle){
        try {
            const reqBody = { questionTitle }
            const fetchParams = {
                method: "POST", // change method? Different setup?
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(reqBody)
            }
            const response = await fetch('api/question/addQuestion', fetchParams);
            const result = await response.json();
            setQuestions(result)
            console.log("user needs to enter a string")
            // handle with small red popup in UI
        } catch (err) {
            console.log("error in addQuestion asyn method in addquestionpopup")
            console.log(err)
        }
    }

    return (
    <>
        <div className="outerPopUp">
            <Box className="innerPopUp">
                <OutsideClickHandler onOutsideClick={() => {setRenderConfirmDelete(false); setTitleToDelete('')}}>
                    <Stack direction='column' alignItems='center'>
                        <Typography variant='h5'> Are you sure you want to delete? </Typography>
                        <br/><br/><br/>
                        <Stack direction='row' spacing={1} justifyContent='space-around' sx={{border:1}} >
                            <Button variant="outline" color='secondary' sx={{width:'20%'}} onClick={()=> setRenderConfirmDelete(false)}> Cancel </Button>
                            <Button variant="contained" color='error' sx={{width:'20%'}} onClick={()=> {deleteQuestion(titleToDelete); setRenderConfirmDelete(false)}}> Delete </Button>
                        </Stack>
                    </Stack>
                </OutsideClickHandler>   
            </Box>
        </div>
    </>
  )
}

export default ConfirmDeletePopUp