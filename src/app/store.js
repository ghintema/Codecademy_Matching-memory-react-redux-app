import { combineReducers, createStore } from 'redux';
import { scoreReducer } from '../features/score/scoreSlice.js';

import { boardReducer } from '../features/board/boardSlice.js';

const rootReducer = combineReducers({
  board: boardReducer,
  score: scoreReducer
});

export const store = createStore(rootReducer);