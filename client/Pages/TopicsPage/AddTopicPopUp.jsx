import React, {useState} from 'react'
import {Button, Typography, Stack, Box, TextField} from '@mui/material'
import './TopicsPage.scss'
import OutsideClickHandler from 'react-outside-click-handler';

function AddTopicPopUp({topics, setTopics, setAddTopic, userId }) {
    const [currentTitle, setCurrentTitle] = useState('')
    const [currentBlurb, setCurrentBlurb] = useState('')

    async function addTopic (title, blurb){
        try {
            if (currentTitle !== ''){
                const fetchParams = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ title, blurb, userId })
                }
                const response = await fetch(`api/topic/addTopic`, fetchParams);
                const result = await response.json();
                result.sort((a, b) => a.topic_pk - b.topic_pk)
                setTopics(result)
            } else {
                console.log("user needs to enter a string")
                // handle with small red popup in UI
            }
        } catch (err) {
            console.log("error in addTopic async method in addTopicPopUP")
            console.log(err)
        }
    }

    return (
        <>
            <div className="outerPopUp" >
                    <Box className="innerPopUp">
                    <OutsideClickHandler onOutsideClick={() => setAddTopic(false)}>
                        <Stack direction='column' alignItems='center'> 
                            <Typography variant='h4'> New Topic </Typography>
                            <br/>
                            <p>Topic Name:</p><TextField onChange = {({target: {value}}) => setCurrentTitle(value)} align='center' sx={{width:'80%', marginBottom: '15px'}} placeholder='Topic goes here...'></TextField>
                            <br/>
                            <p>Notes: </p><TextField onChange = {({target: {value}}) => setCurrentBlurb(value)} align='center' sx={{width:'80%', marginBottom: '15px'}} placeholder='Write your notes here... if you DARE'></TextField>
                            <Stack direction='row' spacing={1} sx={{border:1, width:'35%'}} justifyContent='space-around' >
                                <Button variant="contained" color='error' sx={{width:'50%'}} onClick={()=> {setAddTopic(false)}}> Cancel </Button>
                                <Button variant="contained" color='success' sx={{width:'50%'}} onClick={()=> {addTopic(currentTitle, currentBlurb); setAddTopic(false)}}> Add Topic </Button>
                            </Stack>
                        </Stack>
                    </OutsideClickHandler>   
                    </Box>
                </div>
        </>
    )
}

export default AddTopicPopUp    