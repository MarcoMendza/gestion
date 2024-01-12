import { useState, useEffect } from 'react';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Define the size of the grid
const GRID_SIZE = 10;
const WORDS = ['MEXICO', 'OLMECA', 'AZTECA', 'HIDALGO', 'ESPAÑOL', 'MALINCHE', 'COLONIAL'];

// Helper function to generate a grid with random letters
const generateGrid = () => {
    let grid = Array.from({ length: GRID_SIZE }, () =>
        Array.from({ length: GRID_SIZE }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26)))
    );

    // Place words in the grid
    WORDS.forEach((word) => {
        let placed = false;
        while (!placed) {
            const direction = Math.floor(Math.random() * 2);
            const row = Math.floor(Math.random() * GRID_SIZE);
            const col = Math.floor(Math.random() * GRID_SIZE);

            const fitsHorizontally = direction === 0 && col + word.length <= GRID_SIZE;
            const fitsVertically = direction === 1 && row + word.length <= GRID_SIZE;

            if (fitsHorizontally) {
                for (let i = 0; i < word.length; i++) {
                    grid[row][col + i] = word[i];
                }
                placed = true;
            } else if (fitsVertically) {
                for (let i = 0; i < word.length; i++) {
                    grid[row + i][col] = word[i];
                }
                placed = true;
            }
        }
    });

    return grid;
};

// Component to render the alphabet soup game
export const SoupPage = () => {
    const navigate = useNavigate();
    const [grid, setGrid] = useState([]);
    const [selected, setSelected] = useState([]);
    const [foundWords, setFoundWords] = useState([]);
    const [wordPositions, setWordPositions] = useState({});

    useEffect(() => {
        setGrid(generateGrid());
    }, []);

    const handleCellClick = (row, col) => {
        // Logic when a cell is clicked
        setSelected((prevSelected) => {
            if (prevSelected.length === 0) {
                return [{ row, col }];
            } else {
                const start = prevSelected[0];
                const end = { row, col };
                const word = getWord(start, end, grid).toUpperCase();

                setTimeout(() => setSelected([]), 2000);

                if (WORDS.includes(word)) {
                    const newPositions = getWordPositions(start, end);
                    setFoundWords((prevWords) => [...prevWords, word]);
                    setWordPositions((prevPositions) => ({
                        ...prevPositions,
                        [word]: newPositions,
                    }));
                }
                return [];
            }
        });

        const positions = getWordPositions(start, end);
        setWordPositions(prevPositions => ({
            ...prevPositions,
            [word]: (prevPositions[word] || []).concat(newPositions),
        }));


    };


    const getWord = (start, end, grid) => {

        let word = '';

        // Check for horizontal word
        if (start.row === end.row) {
            for (let col = Math.min(start.col, end.col); col <= Math.max(start.col, end.col); col++) {
                word += grid[start.row][col];
            }
        }
        // Check for vertical word
        else if (start.col === end.col) {
            for (let row = Math.min(start.row, end.row); row <= Math.max(start.row, end.row); row++) {
                word += grid[row][start.col];
            }
        }
        // Check for diagonal word
        else {
            // Calculate direction of diagonal
            let rowDirection = start.row < end.row ? 1 : -1;
            let colDirection = start.col < end.col ? 1 : -1;
            let row = start.row;
            let col = start.col;

            while (row !== end.row + rowDirection && col !== end.col + colDirection) {
                word += grid[row][col];
                row += rowDirection;
                col += colDirection;
            }
        }

        return word;
    };

    const getWordPositions = (start, end) => {
        const positions = [];

        if (start.row === end.row) {
            // Horizontal word
            for (let col = Math.min(start.col, end.col); col <= Math.max(start.col, end.col); col++) {
                positions.push({ row: start.row, col: col });
            }
        } else if (start.col === end.col) {
            // Vertical word
            for (let row = Math.min(start.row, end.row); row <= Math.max(start.row, end.row); row++) {
                positions.push({ row: row, col: start.col });
            }
        } else {
            // Diagonal word
            const rowIncrement = start.row < end.row ? 1 : -1;
            const colIncrement = start.col < end.col ? 1 : -1;
            let row = start.row;
            let col = start.col;

            while ((rowIncrement > 0 ? row <= end.row : row >= end.row) &&
                (colIncrement > 0 ? col <= end.col : col >= end.col)) {
                positions.push({ row: row, col: col });
                row += rowIncrement;
                col += colIncrement;
            }
        }

        return positions;
    };

    return (
        <Grid container direction="column" alignItems="center" justifyContent="center"
            sx={{
                minHeight: '100vh',
                backgroundColor: 'primary.main',
                padding: 3
            }}
        >
            <Box bgcolor='white' borderRadius={3} p={3}
                sx={{ maxWidth: 600, width: '100%', overflow: 'hidden' }}
            >
                <Grid container justifyContent="center" spacing={1} sx={{ flexWrap: 'wrap' }}>
                    {grid.flat().map((cell, cellIndex) => (
                        <Button
                            key={cellIndex}
                            onClick={() => handleCellClick(Math.floor(cellIndex / GRID_SIZE), cellIndex % GRID_SIZE)}
                            sx={{
                                minWidth: 'calc(100% / 9 - 8px)', 
                                height: 50,
                                bgcolor: getCellColor(Math.floor(cellIndex / GRID_SIZE), cellIndex % GRID_SIZE, selected, foundWords),
                                '&:hover': {
                                    bgcolor: 'primary.light',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}
                        >
                            {cell}
                        </Button>
                    ))}
                </Grid>
                <Box mt={2} display="flex" justifyContent="center" flexWrap="wrap">
                    {WORDS.map((word) => (
                        <Typography
                            key={word}
                            sx={{
                                textDecoration: foundWords.includes(word) ? 'line-through' : 'none',
                                color: foundWords.includes(word) ? 'green' : 'inherit',
                                margin: '0 8px', // Add some space around the words
                            }}
                        >
                            {word}
                        </Typography>
                    ))}
                </Box>
            </Box>
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
                    mt: 1
                }}
            >
                Regresar
            </Button>
        </Grid>
    );
};

const isCellInWordPositions = (row, col, wordPositions) => {
    // Log the wordPositions to debug
    console.log(row, col, wordPositions);

    for (const key of Object.keys(wordPositions)) {
        const positions = wordPositions[key];
        // Check if positions is truly an array before calling .some on it
        if (!Array.isArray(positions)) {
            console.error(`Error: positions for word ${key} is not an array:`, positions);
            continue; // Skip this iteration as it's not an array
        }
        if (positions.some(position => position.row === row && position.col === col)) {
            return true;
        }
    }
    return false;
};


const getCellColor = (row, col, selected, wordPositions) => {

    const isSelected = selected.some(s => s.row === row && s.col === col);
    const isPartOfFoundWord = isCellInWordPositions(row, col, wordPositions);

    if (isPartOfFoundWord) {
        return 'success.main';
    } else if (isSelected) {
        return 'primary.light';
    }
    return 'default';
};

