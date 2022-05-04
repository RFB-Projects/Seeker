import React, {useState, useEffect} from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, Stack, Paper, TextField } from '@mui/material';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import AddQuestionPopUp from './AddQuestionPopUp';
import QuestionPopUp from './QuestionPopUp'
import Question from './Question'
import questionDummyState from './dummyState/questionDummyState';


const QuestionsPage = () => {
    const [questions, setQuestions] = useState([]);
    const [currentSelection, setCurrentSelection] = useState({title:'starting', bodyText:'out'});
    const [trigger, setTrigger] = useState(false);
    const [addQuestionTrigger, setAddQuestionTrigger] = useState(false);
    console.log("parent questions page re-render")
    // load dummy state on component render - mimicing future call to DB
    useEffect(() => setQuestions(questionDummyState), [])
    
    // const renderedQuestions = questions.map((s, i) => <Question key={i} title={s.title} onClick={() => {setCurrentSelection({title:s.title, textBody:s.textBody}) ; setTrigger(true)}}/>);
    const renderedQuestions = questions.map((s, i) => <Question key={i} title={s.title} customOnClick={() => {setCurrentSelection({title:s.title, bodyText:s.bodyText}) ; setTrigger(true)}}/>)

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
                        <Grid item xs={4}><Button variant="contained" size='large' sx={{width:'100%'}}>Questions</Button></Grid>
                        <Grid item xs={4}><Button variant="contained" size='large'sx={{width:'100%'}}>Topics</Button></Grid>
                        <Grid item xs={4}><Button variant="contained" size='large'sx={{width:'100%'}}>Companies</Button></Grid>
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
                    <AddQuestionPopUp questions={questions} setQuestions={setQuestions} setAddQuestionTrigger={setAddQuestionTrigger}/>
                )}
                {trigger && (
                    <QuestionPopUp setTrigger={setTrigger} title={currentSelection.title} bodyText={currentSelection.bodyText}></QuestionPopUp>
                )}
            </main>
        </> 
    )
}

export default QuestionsPage;
