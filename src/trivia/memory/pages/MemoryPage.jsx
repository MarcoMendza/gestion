import { useSelector } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';
import { MemoryGameBoard } from "../components/MemoryGameBoard.jsx";
import { useNavigate } from "react-router-dom";

export const MemoryPage = () => {
    const { startTime, endTime } = useSelector((state) => state.memory);
    const navigate = useNavigate();

    const calculateTimeElapsed = () => {
        return endTime ? ((endTime - startTime) / 1000).toFixed(2) : 0;
    };

    return (
        <Box sx={{
            minHeight: { xs: '100vh', md: '80vh' },
            minWidth: { xs: '100vw', md: '80vw' },
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            py: 3,
            px: { xs: 2, md: 3 }
        }}>
            <Typography variant="h3" gutterBottom align="center">
                Memorama
            </Typography>
            <MemoryGameBoard />
            <Box
                sx={{
                    mt: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {endTime && (
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Total time: {calculateTimeElapsed()} seconds
                    </Typography>
                )}
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => navigate('/')}
                    sx={{
                        width: 'fit-content',
                        alignSelf: 'center',
                        padding: '10px 30px',
                        fontSize: '1rem',
                        mb: 2,
                    }}
                >
                    Regresar
                </Button>
            </Box>
        </Box>
    );
};
