import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';

// Define the size of the grid
const GRID_SIZE = 10;
const WORDS = ['REACT', 'REDUX', 'HOOKS', 'STATE', 'PROPS', 'CONTEXT', 'FUNCTIONAL'];

// Helper function to generate a grid with random letters
const generateGrid = () => {
    let grid = Array.from({ length: GRID_SIZE }, () =>
        Array.from({ length: GRID_SIZE }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26)))
    );

    // Place words in the grid
    // This is a simplistic placement without checking for overlaps or out-of-bounds
    WORDS.forEach((word) => {
        let placed = false;
        while (!placed) {
            const direction = Math.floor(Math.random() * 2); // 0 for horizontal, 1 for vertical
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
      
            if (WORDS.includes(word)) {
              setFoundWords((prevWords) => [...prevWords, word]);
              
              const positions = getWordPositions(start, end);
              setWordPositions((prevPositions) => ({
                ...prevPositions,
                [word]: positions,
              }));
            } else {
              setTimeout(() => setSelected([]), 2000);
            }
            return [];
          }
        });
      };


    const getWord = (start, end, grid) => {
        // Initialize word
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
        <Box sx={{ display: 'flex' }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container>
                    {grid.map((row, rowIndex) => (
                        <Grid item key={rowIndex} xs={12}>
                            {row.map((cell, cellIndex) => (
                                <Button
                                    key={cellIndex}
                                    onClick={() => handleCellClick(rowIndex, cellIndex)}
                                    sx={{
                                        width: 50,
                                        height: 50,
                                        bgcolor: getCellColor(rowIndex, cellIndex, selected, foundWords),
                                    }}
                                >
                                    {cell}
                                </Button>
                            ))}
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box sx={{ width: '200px', ml: 2 }}>
                {WORDS.map((word) => (
                    <Typography
                        key={word}
                        sx={{
                            textDecoration: foundWords.includes(word) ? 'line-through' : 'none',
                            color: foundWords.includes(word) ? 'green' : 'inherit',
                        }}
                    >
                        {word}
                    </Typography>
                ))}
            </Box>
        </Box>
    );
};

const isCellInWordPositions = (row, col, wordPositions) => {
    return Object.values(wordPositions).flat().some(pos => pos.row === row && pos.col === col);
};


const getCellColor = (row, col, selected, wordPositions) => {
    const isSelected = selected.some(s => s.row === row && s.col === col);
    const isPartOfFoundWord = Object.values(wordPositions).some(positions =>
      positions.some(pos => pos.row === row && pos.col === col)
    );
    
    if (isPartOfFoundWord) {
      return 'success.main'; // Green for found words
    } else if (isSelected) {
      return 'primary.light'; // Light color for selected cells
    }
    return 'default'; // Default color for unselected cells
  };

