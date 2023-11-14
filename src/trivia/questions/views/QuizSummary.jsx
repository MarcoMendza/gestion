import { Card, CardContent, Typography, Button, Grid, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSavingAnswers } from "../../../store/questions/thunks.js";
import Swal from "sweetalert2";

export const QuizSummary = ({ answers = [], onBack }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);
    const { message } = useSelector(state => state.questions);

    let formattedData = {
        "questions": answers.map(item => ({
            "question": item.question,
            "userAnswer": item.userAnswer,
            "isCorrect": item.isCorrect
        })),
        "scoreTotal": answers.reduce((total, item) => item.isCorrect ? total + 1 : total, 0)
    };

    const handleSubmit = () => {
        setShowCorrectAnswers(true);
        dispatch(startSavingAnswers(formattedData));
    };

    useEffect(() => {
        if (message.length > 0) {
            Swal.fire('¡Perfecto!', message, "success");
        }
    }, [message]);

    return (
        <Grid container sx={{ bgcolor: 'primary.main', p: 3 }}>
            <Box sx={{ mt: 3, width: '100%', maxWidth: 600, mx: 'auto', borderRadius: 2 }}>
                <Grid container direction="column" alignItems="center" spacing={3} sx={{ bgcolor: 'background.paper', padding: 3, borderRadius: 2 }}>

                    {answers.map((answer, index) => (
                        <Grid item key={index} sx={{ width: '100%' }}>
                            <Card variant="outlined" sx={{ width: '100%', mb: 2 }}>
                                <CardContent>
                                    <Typography variant="h6" component="div" gutterBottom>
                                        {answer.question}
                                    </Typography>
                                    <Typography variant="body1">
                                        Tu respuesta: <strong>{answer.userAnswer}</strong>
                                    </Typography>
                                    {showCorrectAnswers && !answer.isCorrect && (
                                        <Typography color="error" variant="body1">
                                            Respuesta correcta: <strong>{answer.correctAnswer}</strong>
                                        </Typography>
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}

                    <Grid item sx={{ width: '100%', maxWidth: '600px' }}>
                        {!showCorrectAnswers && (
                            <Button variant="contained" color="primary" size="large" sx={{ mb: 2 }} fullWidth onClick={handleSubmit}>
                                Enviar
                            </Button>
                        )}
                        <Button variant="outlined" color="secondary" fullWidth onClick={() => navigate('/')}>
                            Regresar
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    );
};
