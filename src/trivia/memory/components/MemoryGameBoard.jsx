import {useSelector, useDispatch} from 'react-redux';
import {Grid} from '@mui/material';
import {MemoryCard} from './MemoryCard';
import {flipCard} from '../../../store/memory/thunks.js';

export const MemoryGameBoard = () => {
    const dispatch = useDispatch();
    const {pairs, selectedCards, matchedPairs} = useSelector((state) => state.memory);

    const handleCardClick = (index) => {
        if (!matchedPairs.includes(index) && !selectedCards.includes(index)) {
            dispatch(flipCard(index));
        }
    };

    return (
        <Grid container spacing={2} sx={{padding: 3, justifyContent: 'center'}}>
            {pairs.map((card, index) => (
                <Grid item key={index} xs={6} sm={4} md={3} lg={2} xl={1}>
                    <MemoryCard
                        card={card}
                        onCardClick={() => handleCardClick(index)}
                        flipped={card.isFlipped}
                        matched={card.matchedPairs}
                    />
                </Grid>
            ))}
        </Grid>
    );
};
