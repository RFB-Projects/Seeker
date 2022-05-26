import React, {useState, useEffect} from 'react';
import { Typography, Card, Grid, Container, Button, StackProps, Stack } from '@mui/material';
import AddQuestionPopUp from './AddQuestionPopUp';
import Question from './Question'
import 'regenerator-runtime'
import { pink, indigo } from '@mui/material/colors'
const primaryColor = indigo[600]
const secondaryColor = pink[600]

//PAGE BUGS------------------------------------------------
// 1 --> Can't handle apostrophes in titles or blurbs
// 2 --> clicking inside editquestion window closes popup
// 3 --> order changes up after edit question (order changes in SQL)
// 4 --> size of editing text box doesn't grow
// 5 --> edit route doesn't work when you 'save edits'
// -------------------------------------------------------
const QuestionsPage = ({userId, setUserId}) => {
    const [questions, setQuestions] = useState([]);
    // const [currentSelection, setCurrentSelection] = useState({title:'Initial', blurb:'State'}); // redundant?
    const [addQuestionTrigger, setAddQuestionTrigger] = useState(false);

    useEffect(() => {
        async function getQuestions() {
            try{
                const response = await fetch(`/api/question/getQuestions/${userId}`)
                const result = await response.json()
                result.sort((a, b) => a.question_pk - b.question_pk)
                setQuestions(result)
            } catch (err) {
                console.log("whoops")
                console.log(err)
            }
        }
        getQuestions()
    }, [])
    
    // const renderedQuestions = questions.map((s, i) => <Question key={i} title={s.title} onClick={() => {setCurrentSelection({title:s.title, textBody:s.textBody}) ; setTrigger(true)}}/>);
    const renderedQuestions = questions.map((s, i) => <Question key={i} title={s.title} blurb={s.blurb} userId={userId} complete={s.complete} setQuestions={setQuestions}/>)

    return(
        <>
            <main>
                <Container maxwidth='m' align='center'>
                    <Grid container >
                        <Grid item xs={12}>
                            <Typography variant="h2" style={{marginTop: '50px', marginBottom: '30px'}}>Anyy quueestions?</Typography>
                        </Grid>
                        <Grid item xs={12}>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" sx={{backgroundColor:primaryColor}} align='center' size='large' onClick={() => setAddQuestionTrigger(true)}>
                                Add Question 
                            </Button>  
                        </Grid>
                    </Grid>  
                  
                    <Card/>
                </Container>
                <Container style={{marginTop:'50px'}}>
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
