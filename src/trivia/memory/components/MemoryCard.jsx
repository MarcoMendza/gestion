import {Card, CardActionArea, CardMedia, Typography, Box} from '@mui/material';

export const MemoryCard = ({card, onCardClick, flipped, matched}) => {
    return (
        <Card sx={{
            width: {xs: 100, sm: 120, md: 150},
            height: {xs: 100, sm: 120, md: 150},
            margin: 'auto',
            transition: 'transform 0.6s',
            transformStyle: 'preserve-3d',
            '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
            },
            position: 'relative',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        }}>
            <CardActionArea sx={{height: '100%', position: 'relative'}} onClick={onCardClick}>
                <Box sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(0deg)',
                }}>
                    {flipped || matched ? (
                        card.isImage ? (
                            <CardMedia
                                component="img"
                                image={card.url}
                                alt="Memory Card Image"
                                sx={{width: '100%', height: '100%', objectFit: 'contain', mt: { xs: -6.2, sm: -7.5, md: -9.4}}}
                            />
                        ) : (
                            <Typography variant="body1"
                                        sx={{fontSize: '0.875rem', textAlign: 'center', padding: 1, mt: {xs: -5.2, md: -4}}}>
                                {card.text}
                            </Typography>
                        )
                    ) : null}
                </Box>
                <Box sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    mt: { xs: -6.2, sm: -7.5, md: -9.4},
                    backgroundColor: '#1976d2',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backfaceVisibility: 'hidden',
                    transform: flipped || matched ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}>
                    {!flipped && !matched && (
                        <Typography variant="body2">?</Typography>
                    )}
                </Box>
            </CardActionArea>
        </Card>
    );
};
