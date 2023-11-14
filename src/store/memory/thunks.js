import { selectCard, resetSelection, addMatchedPair, setEndTime, setPairs, setStartTime, memorySlice } from './';
import { loadPairs } from "../../helpers/";

const doCardsMatch = (firstCard, secondCard) => {
    return firstCard.id === secondCard.id;
};

export const flipCard = (index) => (dispatch, getState) => {
    const { memory } = getState();
    dispatch(memorySlice.actions.flipCard(index));

    if (memory.selectedCards.length === 1) {
        const firstIndex = memory.selectedCards[0];
        const secondIndex = index;
        const firstCard = memory.pairs[firstIndex];
        const secondCard = memory.pairs[secondIndex];

        if (doCardsMatch(firstCard, secondCard)) {
            dispatch(addMatchedPair(firstIndex));
            dispatch(addMatchedPair(secondIndex));
            dispatch(resetSelection());

            if (memory.matchedPairs.length + 2 === memory.pairs.length) {
                dispatch(setEndTime());
            }
        } else {
            setTimeout(() => {
                dispatch(memorySlice.actions.flipCard(firstIndex));
                dispatch(memorySlice.actions.flipCard(secondIndex));
                dispatch(resetSelection());
            }, 1000);
        }
    } else {
        dispatch(selectCard(index));
    }
};


function shuffleAndDuplicatePairs(pairs) {
    let duplicatedPairs = pairs.flatMap(pair => [
        { ...pair, isFlipped: false, isImage: true },
        { ...pair, isFlipped: false, isImage: false }
    ])
    for (let i = duplicatedPairs.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [duplicatedPairs[i], duplicatedPairs[j]] = [duplicatedPairs[j], duplicatedPairs[i]];
    }
    return duplicatedPairs;
}


export const startLoadingPairs = () => {
    return async (dispatch ) => {
        const pairs = await loadPairs();
        const preparedPairs = shuffleAndDuplicatePairs(pairs);
        console.log( preparedPairs )
        dispatch( setPairs( preparedPairs ));
        dispatch( setStartTime() );
    }
}
