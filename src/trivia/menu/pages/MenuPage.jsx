import { Button, Grid, Typography, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { NavBar } from "../components/NavBar.jsx";
import { startLoadingPairs } from "../../../store/memory/thunks.js";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentBlog} from "../../../store/blog/blogSlice.js";

export const MenuPage = () => {

    const dispatch = useDispatch();
    const {blogs} = useSelector((state) => state.blogs);

    const handleLearnClick = () => {
        const randomIndex = Math.floor(Math.random() * blogs.length);
        const randomBlog = blogs[randomIndex];
        dispatch(setCurrentBlog(randomBlog));
    };

    return (
        <>
            <NavBar />
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
                <Paper elevation={3} style={{ padding: '20px', borderRadius: '15px' }}>
                    <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', color: '#424242' }}>
                        ¡Elige una Actividad!
                    </Typography>
                    <Grid container spacing={2} direction="column" alignItems="center">
                        <Grid item>
                            <Button
                                variant="contained"
                                color="success"
                                component={RouterLink}
                                to="/blog"
                                style={{ margin: '10px' }}
                                onClick={handleLearnClick}
                            >
                                Aprende
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                component={RouterLink}
                                to="/questions/"
                                style={{ margin: '10px' }}
                            >
                                Preguntas de Trivia
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="success"
                                component={RouterLink}
                                to="/memory"
                                style={{ margin: '10px' }}
                                onClick={() => dispatch(startLoadingPairs())}
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
