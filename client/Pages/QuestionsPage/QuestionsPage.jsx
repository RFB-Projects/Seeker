import React, {useState, useEffect} from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, Stack, Paper, TextField } from '@mui/material';
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
// 4 --> size of editing text box doesn't grow
// -------------------------------------------------------
const QuestionsPage = () => {
    const [questions, setQuestions] = useState([]);
    const [userId, setUserId] = useState(1); // CHANGE TO NULL
    // const [currentSelection, setCurrentSelection] = useState({title:'Initial', blurb:'State'}); // redundant?
    const [addQuestionTrigger, setAddQuestionTrigger] = useState(false);

    useEffect(() => {
        async function getQuestions() {
            try{
                const response = await fetch(`/api/question/getQuestions/${userId}`)
                const result = await response.json()
                setQuestions(result)
            } catch (err) {
                console.log("whoops")
                console.log(err)
            }
        }
        getQuestions()
    }, [])

    // const renderedQuestions = questions.map((s, i) => <Question key={i} title={s.title} onClick={() => {setCurrentSelection({title:s.title, textBody:s.textBody}) ; setTrigger(true)}}/>);
    const renderedQuestions = questions.map((s, i) => <Question key={i} title={s.title} blurb={s.blurb} userId={userId} setQuestions={setQuestions}/>)

    return(
        <>
            {/* <AppBar position="relative" color='secondary'>
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
            </AppBar> */}
            <main>
                <Container maxwidth='m' align='center'>
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
                    </Stack>
                </Container>
                {addQuestionTrigger && (
                    <AddQuestionPopUp questions={questions} userId={userId} setQuestions={setQuestions} setAddQuestionTrigger={setAddQuestionTrigger}/>
                )}
            </main>
        </> 
    )
}

export default QuestionsPage;
