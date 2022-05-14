import React, {useState, useEffect} from 'react'
import TopicCard from './TopicCard'
import {Container, Grid, Typography, Button} from '@mui/material'

// FIXES -----------------------------------------------------------------------
// 1 --> make cards responsive (different proportions for screen sized)
// 2 --> institute max and min height of each card
// -----------------------------------------------------------------------------

function TopicsPage({userId}) {
    // STATE - 
    const [topics, setTopics] = useState([]);

    // USEEFFECT FOR FETCHING EXISTING TOPICS
    useEffect(() => {
        async function getTopics () {
            try{
                const fetchResult = await fetch(`/api/topic/getTopics/${userId}`);
                const result = await fetchResult.json();
                setTopics(result)
            }catch(err){
                console.log('issue with gettopics fetch on client side')
                console.log(err)
            }
        }
        getTopics()
    }, [])

    const renderedContent = topics.map((s, i) => <Grid item xs={12} sm={6} md={4} lg={3}><TopicCard key={i} title={s.title} blurb={s.blurb} userId={userId} status={s.status} setTopics={setTopics}/></Grid>)
    
    return (
        <>
            <Container sx={{border:2, width:'80%', marginTop:20}}>
                <Grid container>
                    {renderedContent}
                </Grid>
            </Container>
        </>
    )
}

export default TopicsPage


// const dummyTopics = [
//     {
//         title: 'dummy Topic 1',
//         blurb: 'this a fake topic, yahear? 1',
//         status:0,
//     }, 
//     {
//         title: 'dummy Topic 2',
//         blurb: 'this a fake topic, yahear? 2',
//         status:0,
//     }, 
//     {
//         title: 'dummy Topic 3',
//         blurb: 'this a fake topic, yahear? 3',
//         status:1,
//     }, 
//     {
//         title: 'dummy Topic 4',
//         blurb: 'this a fake topic, yahear 4 ?',
//         status:2,
//     }, 
// ]