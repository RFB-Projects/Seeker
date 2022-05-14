import React, {useState, useEffect} from 'react'
import TopicCard from './TopicCard'
import {Container, Grid, Typography, Button, Toolbar, IconButton, Tooltip} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import AddTopicPopUp from '../TopicsPage/AddTopicPopUp'

// FIXES -----------------------------------------------------------------------
// 1 --> make cards responsive (different proportions for screen sized)
// 2 --> institute max and min height of each card
// -----------------------------------------------------------------------------

function TopicsPage({userId}) {
    // STATE - 
    const [topics, setTopics] = useState([]);
    const [addTopic, setAddTopic] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState(0)

    // USEEFFECT FOR FETCHING EXISTING TOPICS
    useEffect(() => {
        async function getTopics () {
            try{
                const fetchResult = await fetch(`/api/topic/getTopics/${userId}`);
                const result = await fetchResult.json();
                result.sort((a, b) => a.topic_pk - b.topic_pk)
                setTopics(result)
            }catch(err){
                console.log('issue with gettopics fetch on client side')
                console.log(err)
            }
        }
        getTopics()
    }, [])

    const filterColoration = ["", "", "", ""].map((s, i) => i === selectedFilter ? 'lightgrey' : '');

    const renderedContent = topics.map((s, i) => {
        if (selectedFilter === 0 || selectedFilter - 1 === s.status){
            return <Grid item xs={12} sm={6} md={4} lg={3}><TopicCard key={i} title={s.title} blurb={s.blurb} userId={userId} status={s.status} setTopics={setTopics}/></Grid>
        }
    })
    
    return (
        <>
            <Container sx={{border:2, width:'100%', marginTop:10}}>
                <Toolbar sx={{height:50, backgroundColor:'pink'}}>
                    <Grid container>
                        <Grid item xs={1}>
                            <Tooltip title="Add Topic">
                                <IconButton onClick={()=> setAddTopic(prev=>!prev)}>
                                    <AddIcon sx={{color:"grey"}}></AddIcon>
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item xs={7}>
                            <IconButton sx={{backgroundColor:filterColoration[0], marginRight:4}} onClick={()=> setSelectedFilter(0)}><Typography variant='caption'></Typography>Show All</IconButton>
                            <IconButton sx={{backgroundColor:filterColoration[1], marginRight:4}} onClick={()=> setSelectedFilter(1)}>Not Started</IconButton>
                            <IconButton sx={{backgroundColor:filterColoration[2], marginRight:4}} onClick={()=> setSelectedFilter(2)}>In Progress</IconButton>
                            <IconButton sx={{backgroundColor:filterColoration[3], marginRight:4}} onClick={()=> setSelectedFilter(3)}>Complete</IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
                <Grid container>
                    {renderedContent}
                </Grid>
            </Container>
            {addTopic && (
                <AddTopicPopUp topics={topics} setTopics={setTopics} setAddTopic={setAddTopic} userId={userId}></AddTopicPopUp>
            )}
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