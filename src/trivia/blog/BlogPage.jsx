import React from 'react';
import { Box, Typography, Paper, Grid, Button } from '@mui/material';
import ReactPlayer from 'react-player/youtube';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';

export const BlogPage = ({ title, content, videoUrl }) => {
    const navigate = useNavigate();
    const theme = useTheme();

    const handleBack = () => {
        navigate('/');
    };

    return (
        <Grid container direction="column" alignItems="center" justifyContent="center"
            spacing={0}
            sx={{
                minHeight: '100vh',
                backgroundColor: 'primary.main',
                padding: theme.spacing(2),
                [theme.breakpoints.down('md')]: {
                    padding: theme.spacing(1),
                },
            }}
        >
            <Paper elevation={3}
                   sx={{ 
                    width: 'auto',
                    maxWidth: '540px',
                    flexGrow: 0,
                    p: 3, 
                    mx: 'auto', 
                    my: 2,
                    bgcolor: 'background.default',
                    [theme.breakpoints.down('md')]: {
                        mx: 2,
                        my: 1,
                        p: 2, 
                    },
                }}
            >
                <Typography variant="h4" component="h2" gutterBottom>
                    Cultura Olmeca:
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Ubicación: Región del Golfo de México, en los estados de Veracruz y Tabasco, México.

                    Período: Aproximadamente 1400 a.C. - 400 a.C.

                    Características:

                    Cabezas Colosales: Esculpidas en basalto, representan rostros gigantes con rasgos distintivos.
                    Agricultura Avanzada: Expertos en el cultivo de maíz, frijoles y calabazas, con sistemas de drenaje eficientes.
                    Arte y Escultura: Crearon figuras de animales reflejando su conexión con la naturaleza.
                    Centros Ceremoniales: Construyeron complejos para rituales religiosos con pirámides y plazas.
                    Aportaciones:

                    Influencia Cultural: Su arte y arquitectura influyeron en civilizaciones posteriores.
                    Desarrollo de Escritura y Calendario: Contribuyeron al desarrollo de sistemas de escritura y calendario mesoamericanos.
                    Avances en Agricultura: Conocimientos avanzados en agricultura y sistemas de drenaje.
                </Typography>
                <Box my={2}
                    sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        paddingTop: '56.25%',
                        height: 0,
                        '& .react-player': {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100% !important',
                            height: '100% !important',
                        }
                    }}
                >
                    <ReactPlayer
                        className='react-player'
                        controls={true}
                        url={"https://www.youtube.com/watch?v=mzZ3Gp0MB-o"} />
                </Box>
                <Button variant="contained" onClick={handleBack}>
                    Regresar
                </Button>
            </Paper>
        </Grid>
    );
};