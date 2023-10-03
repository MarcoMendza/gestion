import { useState, useEffect } from 'react';
import {
    Button,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Paper,
    Typography,
    Box
} from '@mui/material';
import { FirebaseDB } from "../../firebase/config.js";
import { collection, getDocs, addDoc } from 'firebase/firestore/lite';
import {purpleTheme} from "../../theme/index.js";

function Trivia() {

    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [finished, setFinished] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        async function fetchTriviaQuestions() {
            const triviaCollection = collection(FirebaseDB, 'trivia');
            const triviaSnapshot = await getDocs(triviaCollection);
            const questionsData = triviaSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setQuestions(questionsData);
            setCurrentQuestion(questionsData[0]);
        }

        fetchTriviaQuestions();
    }, []);

    const handleNext = async () => {
        if (selectedAnswer === currentQuestion.respuesta) {
            setCorrectAnswers(correctAnswers + 1);
        }

        if (index < questions.length - 1) {
            setIndex(index + 1);
            setCurrentQuestion(questions[index + 1]);
            setSelectedAnswer('');
        } else {
            await saveResults();
            setFinished(true);
        }
    };

    const saveResults = async () => {
        const resultsCollection = collection(FirebaseDB, 'results');
        await addDoc(resultsCollection, {
            correctAnswers: correctAnswers,
            totalQuestions: questions.length,
            timestamp: new Date(),
        });
    };

    if (finished) {
        return (
            <Paper style={{ padding: '20px', maxWidth: '600px', margin: '40px auto' }}>
                <Typography variant="h5" gutterBottom>
                    ¡Trivia completada!
                </Typography>
                <Typography variant="body1">
                    Respuestas correctas: {correctAnswers} de {questions.length}
                </Typography>
            </Paper>
        );
    }

    return (
        <Box
            sx={{
                background: "#262254",
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Paper style={{ padding: '55px', maxWidth: '600px', margin: '40px auto' }}>
                {currentQuestion && (
                    <div>
                        <Typography variant="h5" gutterBottom>
                            {currentQuestion.pregunta}
                        </Typography>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Selecciona una respuesta</FormLabel>
                            <RadioGroup
                                value={selectedAnswer}
                                onChange={(e) => setSelectedAnswer(e.target.value)}
                            >
                                {currentQuestion.opciones.map((option, idx) => (
                                    <FormControlLabel key={idx} value={option} control={<Radio />} label={option} />
                                ))}
                            </RadioGroup>
                        </FormControl>
                        <Box>
                            <Button variant="contained" color="primary" onClick={handleNext} style={{ marginTop: '20px' }}>
                                Siguiente
                            </Button>
                        </Box>
                    </div>
                )}
            </Paper>
        </Box>
    );
}

export default Trivia;
