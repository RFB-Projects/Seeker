import React, {useState, useEffect} from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, Stack, Paper, TextField } from '@mui/material';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import AddQuestionPopUp from './AddQuestionPopUp';
// import QuestionPopUp from './EditQuestionPopUp'
import Question from './Question'
import 'regenerator-runtime'
// import ConfirmDeletePopUp from './ConfirmDeletePopUp'
// import questionDummyState from './dummyState/questionDummyState';

//PAGE BUGS------------------------------------------------
// 1 --> Can't handle apostrophes in titles or blurbs
// 2 --> clicking inside editquestion window closes popup
// 3 --> order changes up after edit question (order changes in SQL)
// -------------------------------------------------------
const QuestionsPage = () => {
    const [questions, setQuestions] = useState([]);
    const [userId, setUserId] = useState(1); // CHANGE TO NULL
    const [currentSelection, setCurrentSelection] = useState({title:'Initial', blurb:'State'}); // redundant?
    // const [trigger, setTrigger] = useState(false);
    const [addQuestionTrigger, setAddQuestionTrigger] = useState(false);
    // const [renderConfirmDelete, setRenderConfirmDelete] = useState(false);
    const [titleToDelete, setTitleToDelete] = useState('')
    const [tempBool, setTempBool] = useState(false); // temporary

    console.log("addQuestionTrigger",addQuestionTrigger)
    console.log('questions', questions)


    useEffect(() => {
        async function getQuestions() {
            try{
                const user_id = 1 // CHANGE HERE
                // const reqBody = { user_id: 1 } // hard coded for now (change)
                // const fetchParams = {
                //     method: "POST",
                //     headers: {
                //         "Content-Type": "application/json"
                //     },
                //     body: JSON.stringify(reqBody)
                // }
                const response = await fetch(`/api/question/getQuestions/${userId}`)//, fetchParams)
                const result = await response.json()
                // console.log(result) // adjust user_id
                console.log('result', result)
                setQuestions(result)
            } catch (err) {
                console.log("whoops")
                console.log(err)
            }
        }
        if (tempBool) getQuestions()
    }, [tempBool])

    // const renderedQuestions = questions.map((s, i) => <Question key={i} title={s.title} onClick={() => {setCurrentSelection({title:s.title, textBody:s.textBody}) ; setTrigger(true)}}/>);
    const renderedQuestions = questions.map((s, i) => <Question key={i} title={s.title} blurb={s.blurb} userId={userId} setQuestions={setQuestions}/>)

    return(
        <>
            <CssBaseline />
            <AppBar position="relative" color='secondary'>
                <Toolbar >
                    <DirectionsRunIcon sx={{marginRight:'15px'}}></DirectionsRunIcon>
                    <Typography variant="h6">
                        Seeker
                    </Typography>
                    <Grid container spacing={2} sx={{width:'400px', position:'absolute', right:'0px', marginRight:'20px'}}>
                        <Grid item xs={4}><Button variant="contained" size='large' sx={{width:'100%'}} onClick={() => setTempBool((prev)=>!prev)}>Questions</Button></Grid>
                        <Grid item xs={4}><Button variant="contained" size='large'sx={{width:'100%'}}>Topics</Button></Grid>
                        <Grid item xs={4}><Button variant="contained" size='large'sx={{width:'100%'}} >Companies</Button></Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <main>
                <Container maxwidth='m' align='center' sx={{border:1}}>
                    <Grid container >
                        <Grid item xs={12}>
                            <Typography variant="h2" style={{marginTop: '50px', marginBottom: '30px'}}>Anyy quueestions?</Typography>
                        </Grid>
                        <Grid item xs={12}>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="secondary" align='center' size='large' onClick={() => setAddQuestionTrigger(true)}>
                                Add Question 
                            </Button>  
                        </Grid>
                    </Grid>  
                  
                    <Card/>
                </Container>
                <Container style={{marginTop:'50px'}} sx={{border:1}} >
                    <Stack spacing={3} align='center'>
                        {renderedQuestions}
                        {/* <Button style={{height:'50px'}} color='success'><Typography variant='h5' onClick={() => setTrigger(true)}>Tell me about yourself</Typography></Button>
                        <Paper style={{height:'50px'}}><Typography variant='h5'>Tell me about yourself</Typography></Paper> */}

                    </Stack>
                </Container>
                {addQuestionTrigger && (
                    <AddQuestionPopUp questions={questions} userId={userId} setQuestions={setQuestions} setAddQuestionTrigger={setAddQuestionTrigger}/>
                )}
                {/* {trigger && (
                    <QuestionPopUp setTrigger={setTrigger} title={currentSelection.title} blurb={currentSelection.blurb}></QuestionPopUp>
                )} */}
                {/* {renderConfirmDelete && (
                    <ConfirmDeletePopUp titleToDelete={titleToDelete} setTitleToDelete={setTitleToDelete} setRenderConfirmDelete={setRenderConfirmDelete} />
                )} */}
            </main>
        </> 
    )
}

export default QuestionsPage;
