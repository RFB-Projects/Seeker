import React, {useState} from 'react'
import {Button, Typography, Stack, Box, TextField} from '@mui/material'
import './QuestionPage.scss'
import OutsideClickHandler from 'react-outside-click-handler';


const QuestionPopUp = ({setTrigger, title, blurb}) => {
    console.log("question popup rendered...", blurb)
    const [editable, setEditable] = useState(false)

    return (
        <>
            <div className="outerPopUp">
                <Box className="innerPopUp">
                <OutsideClickHandler onOutsideClick={() => setTrigger(false)}>
                    <Stack direction='column' alignItems='center'>
                        <Typography variant='h4'> {title} </Typography>
                        {!editable && (
                        <Typography sx={{border:1, margin:'5px'}} variant="body1">
                            Also... 
                            {blurb}                        
                        </Typography>
                        )}
                        {editable && (
                            <TextField defaultValue='weeeee'></TextField>
                        )}
                        <br/><br/>

                        <Stack direction='row' spacing={1} justifyContent='space-around' sx={{border:1}} >
                            {!editable && (
                                <>
                                    <Button variant="contained" color='error' sx={{width:'20%'}} onClick={()=> setTrigger(false)}> Cancel </Button>
                                    <Button variant="contained" color='success' sx={{width:'20%'}} onClick={()=> setEditable(true)}> Edit </Button>
                                </>
                            )}
                            {editable && (
                                <>
                                    <Button variant="contained" color='error' sx={{width:'20%'}} onClick={()=> setEditable(false)}> Cancel Edits </Button>
                                    <Button variant="contained" color='success' sx={{width:'20%'}} onClick={()=> setEditable(false)}> Save Edits </Button>
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

export default QuestionPopUp