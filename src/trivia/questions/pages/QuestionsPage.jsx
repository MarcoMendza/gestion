import {useState} from 'react';
import {useSelector} from 'react-redux';
import {Box, Button, Grid} from '@mui/material';
import {CardQuestion} from "../components/cardQuestion.jsx";
import {QuizSummary} from "../views/QuizSummary.jsx";
import {useNavigate} from "react-router-dom";

export const QuestionsPage = () => {
    const navigate = useNavigate();
    const {questions} = useSelector(state => state.questions);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showSummary, setShowSummary] = useState(false);
    const initialAnswers = questions.map(() => ({
        question: '',
        userAnswer: '',
        isCorrect: false
    }));
    const [answers, setAnswers] = useState(initialAnswers);
    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    const handleBack = () => {
        navigate('/');
    };

    const submitAnswers = () => {
        setShowSummary(true);
    };

    if (showSummary) {
        return <QuizSummary answers={[...answers]} onSubmit={submitAnswers} onBack={handleBack}/>;
    }

    const handleRadioChange = (value) => {
        const question = questions[currentQuestionIndex];
        const newAnswer = {
            question: question.pregunta,
            userAnswer: value,
            isCorrect: question.respuesta === value,
            correctAnswer: question.respuesta
        };
        let updatedAnswers = [...answers];
        updatedAnswers[currentQuestionIndex] = newAnswer;
        setAnswers(updatedAnswers);
    };


    const goToNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const goToPreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    return (
        <Grid container direction="column" alignItems="center" justifyContent="center"
              spacing={0}
              sx={{
                  minHeight: '100vh',
                  backgroundColor: 'primary.main'
              }}
        >
            <Box alignItems="center" justifyContent="center" bgcolor='white'
                 borderRadius={3} p={3}
                 sx={{ maxWidth: 600, width: '100%' }}
            >
                <CardQuestion
                    pregunta={questions[currentQuestionIndex].pregunta}
                    opciones={questions[currentQuestionIndex].opciones}
                    selectedValue={answers[currentQuestionIndex]?.userAnswer}
                    onRadioChange={(event) => handleRadioChange(event.target.value)}
                />
                <Grid container justifyContent="space-between" marginTop={2}>
                    <Grid item>
                        <Button variant="contained" disabled={currentQuestionIndex === 0} onClick={goToPreviousQuestion}>
                            Anterior
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" onClick={isLastQuestion ? submitAnswers : goToNextQuestion}>
                            {isLastQuestion ? 'Finalizar' : 'Siguiente'}
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    );
};
