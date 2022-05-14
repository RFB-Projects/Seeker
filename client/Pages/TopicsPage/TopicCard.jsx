import React, {useState} from 'react'
import {Card, CardActions, CardActionArea, CardContent, Typography, Button} from '@mui/material'
// IMPORT POPUP (QUESTION POPUP?)

function TopicCard({title, blurb, status, setTopics, userId}) {
    const [cardOpen, setCardOpen] = useState(false);
    // console.log(title + 'component rendered with status' + status + typeof status)
    let coloration = "";
    if (status === 0) coloration = "grey"
    if (status === 1) coloration = "orange"
    if (status === 2) coloration = "green"
    // console.log("topic card coloration", coloration)

    async function changeStatus() {
        function newStatusHelper(n) {
            if (n >= 2) return 0
            if (n < 2) return n + 1
        }
        try{
            const fetchBody = {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({userId, title, status: newStatusHelper(status)})
            }
            const fetchedResult = await fetch('/api/topic/updateStatus/', fetchBody)
            const result = await fetchedResult.json()
            result.sort((a, b) => a.topic_pk - b.topic_pk)
            console.log(result)
            setTopics(result)
        }catch(err){
            console.log("error in clientside changeStatus - topic - request")
            console.log(err)
        }
    }

    return (
        <div >
            <Card sx={{backgroundColor:coloration, margin:2}}>
                <CardActionArea onClick={changeStatus}>
                    <CardContent sx={{height:'150px'}}>
                        <Typography variant="h4">{title}</Typography>
                        <Typography variant="h6">{blurb}</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button>Edit Topic</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default TopicCard