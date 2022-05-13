import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import {Button, Typography, Stack, Box} from '@mui/material'
// import 'regenerator-runtime'

// child of the question components?
function DeleteQuestionPopUp({title, userId, setDeleteTrigger, setQuestions}) { // settrigger, current question index (for title)
    console.log("how many rendered...")

    async function deleteQuestion(){
        try {
            const url = `api/question/deleteQuestion/`+ encodeURIComponent(`${title}`) +'/'+ encodeURIComponent(`${userId}`);
            console.log("url", url)
            const response = await fetch(url, {method: 'DELETE'});
            const result = await response.json();
            console.log('title', title)
            console.log('userId', userId)
            console.log("result from delete", result)
            setQuestions(result)
            setDeleteTrigger(prev=>!prev)
        } catch (err) {
            console.log("error in deletequestion async method in addquestionpopup")
            console.log(err)
        }
    }

    return (
    <>
        <div className="outerPopUp">
            <OutsideClickHandler onOutsideClick={() => {setDeleteTrigger(prev=>!prev)}}>
            <Box className="innerPopUp">
                    <Stack direction='column' alignItems='center'>
                        <Typography variant='h5'> Are you sure you want to delete? </Typography>
                        <br/><br/><br/>
                        <Stack direction='row' spacing={1} justifyContent='space-around' sx={{border:1}} >
                            <Button variant="outline" color='secondary' sx={{width:'20%'}} onClick={()=> setDeleteTrigger(prev=>!prev)}> Cancel </Button>
                            <Button variant="contained" color='error' sx={{width:'20%'}} onClick={deleteQuestion}> Delete </Button>
                        </Stack>
                    </Stack>
            </Box>
            </OutsideClickHandler>   
        </div>
    </>
  )
}

export default DeleteQuestionPopUp