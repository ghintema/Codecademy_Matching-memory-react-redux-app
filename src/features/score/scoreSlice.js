const initialState = {'tries': 0, 'matches': 0}


export const scoreReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'score/increase' :
            const name = action.payload;
            return { ...state, [name]: state[name] += 1 };
        
        case 'score/reset' :
            return {'tries': 0, 'matches': 0}
            
        default:
            return state;
    }
}


export const increaseScore = (type) => {
    return { 
        type: 'score/increase',
        payload: type 
    }
}

export const resetSores = () => {
    return {type: 'score/reset'}
}

export const selectTries = (state) => {
    return state.score.tries;
}

export const selectMatches = (state) => {
    return state.score.matches;
}