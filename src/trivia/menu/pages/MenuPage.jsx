import {Button, Grid, Typography, Paper} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';
import {NavBar} from "../components/NavBar.jsx";

export const MenuPage = () => {

    return (
        <>
            <NavBar/>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{
                    minHeight: '100vh',
                    backgroundColor: 'primary.main',
                    padding: 4
                }}
            >
                <Paper elevation={3} style={{padding: '20px', borderRadius: '15px'}}>
                    <Typography variant="h4" gutterBottom style={{fontWeight: 'bold', color: '#424242'}}>
                        ¡Elige una Actividad!
                    </Typography>
                    <Grid container spacing={2} direction="column" alignItems="center">
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                component={RouterLink}
                                to="/questions/"
                                style={{margin: '10px'}}
                            >
                                Preguntas de Trivia
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="secondary"
                                component={RouterLink}
                                to="/questions/"
                                style={{margin: '10px'}}
                            >
                                Sopa de Letras
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="success"
                                component={RouterLink}
                                to="/memory"
                                style={{margin: '10px'}}
                            >
                                Memorama
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </>
    );
};
