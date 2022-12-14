import React from 'react';
// Add import statements below
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectVisibleIDs } from '../../boardSlice';
import { useDispatch } from 'react-redux';
import { flipCard } from '../../boardSlice'
import { selectMatchedIDs } from '../../boardSlice';
import { resetCards } from '../../boardSlice';
import { increaseScore } from '../../../score/scoreSlice';

let cardLogo = "https://static-assets.codecademy.com/Courses/Learn-Redux/matching-game/codecademy_logo.png";

export const Card = ({ id, contents }) => {
  // Add selected data and dispatch variables below
  const dispatch = useDispatch();
  const visibleIDs = useSelector(selectVisibleIDs);
  const matchedIDs = useSelector(selectMatchedIDs);

  // flip card action
  const flipHandler = (id) => {
    // Add action dispatch below
    dispatch(flipCard(id));
    if (visibleIDs.length === 1) {
      dispatch(increaseScore('tries'))
    }
  };

  let cardStyle = 'resting'
  let click = () => flipHandler(id);
  
  let cardText = (
    <img src={cardLogo} className="logo-placeholder" alt="Card option" />
  );

  // 1st if statement
  // implement card id array membership check
  if (visibleIDs.includes(id) || matchedIDs.includes(id)) {
    cardText = contents;
    click = () => {};
  }

  // 2nd if statement
  // implement card id array membership check
  if (false) {
    cardStyle = 'matched';
  }

  // 3rd if statement
  // implement number of flipped cards check
  if (visibleIDs.length === 2) {
    click = () => { dispatch(resetCards());
                    };
    // dispatch(increaseScore('tries'))
  }

  return (
    <button onClick={click} className={`card ${cardStyle}`}>
      {cardText}
    </button>
  );
};
