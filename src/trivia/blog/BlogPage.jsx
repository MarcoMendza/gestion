import {Box, Typography, Paper, Grid, Button, List, ListItem, ListItemText} from '@mui/material';
import ReactPlayer from 'react-player/youtube';
import {useNavigate} from 'react-router-dom';
import {useTheme} from '@emotion/react';
import {useSelector} from "react-redux";

export const BlogPage = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const currentBlog = useSelector((state) => state.blogs.currentBlog);
    const {tittle, paragraph, paragraph1, image, featuresTittle, featuresParagraph, features, video} = currentBlog;


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
                    {tittle}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {paragraph}
                </Typography>
                {image && <img src={image} alt={tittle} style={{maxWidth: '100%', height: 'auto'}}/>}
                {paragraph1 && <Typography variant="body1" gutterBottom>{paragraph1}</Typography>}


                {featuresTittle && (
                    <>
                        <Typography variant="h6" gutterBottom>
                            {featuresTittle}
                        </Typography>
                        <List sx={{listStyleType: 'disc', marginLeft: '20px'}}>
                            {features.map((feature, index) => (
                                <ListItem key={index} sx={{display: 'list-item'}}>
                                    <ListItemText primary={feature}/>
                                </ListItem>
                            ))}
                        </List>
                        <Typography variant="body1" gutterBottom>
                            {featuresParagraph}
                        </Typography>
                    </>
                )}
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
                        url={video}/>
                </Box>
                <Button variant="contained" onClick={handleBack}>
                    Regresar
                </Button>
            </Paper>
        </Grid>
    );
};