import React from 'react';
// Add import statement below
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectMatchedIDs } from '../board/boardSlice';
import { resetSores } from './scoreSlice';
import { selectTries } from './scoreSlice';
import { selectMatches } from './scoreSlice';
import { selectVisibleIDs } from '../board/boardSlice';
import { increaseScore } from './scoreSlice';

export const Score = () => {
  // Add selected data variable below
  const dispatch = useDispatch();
  const cardsMatched = useSelector(selectMatchedIDs);
  const tries = useSelector(selectTries);
  const visibleIDs = useSelector(selectVisibleIDs);

  // if (visibleIDs.length === 2) {
  //   dispatch(increaseScore('tries'))
  // }

  
  return (
    // implement selected data inside <div>
    <div>
    <div className="score-container">Matched: {cardsMatched.length/2}</div>
    <div className="score-container">Tries: {tries}</div>
    </div>
  );
};