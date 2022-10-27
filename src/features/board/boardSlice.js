const initialState = [
    {id: 0, contents: 'Provider', visible: true, matched: true}, 
    {id: 1, contents: 'Provider', visible: true, matched: true}, 
    {id: 2, contents: 'selector', visible: true, matched: true}, 
    {id: 3, contents: 'selector', visible: true, matched: true}, 
    {id: 4, contents: 'useSelector()', visible: true, matched: true}, 
    {id: 5, contents: 'useSelector()', visible: true, matched: true}, 
    {id: 6, contents: 'useDispatch()', visible: true, matched: true}, 
    {id: 7, contents: 'useDispatch()', visible: true, matched: true}, 
    {id: 8, contents: 'Pure Function', visible: true, matched: true}, 
    {id: 9, contents: 'Pure Function', visible: true, matched: true}, 
    {id: 10, contents: 'react-redux', visible: true, matched: true}, 
    {id: 11, contents: 'react-redux', visible: true, matched: true}, 
  ];
  
  export const boardReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'board/setBoard':
        let setState = [];
        action.payload.forEach((element, index) => 
          setState.push({id: index, 
                        contents: element, 
                        visible: false, 
                        matched: false})
        );
        return setState;
      case 'board/flipCard':
        // 1.) setting 'visible' of the flipped card    
        // 2.) checking for a matching pair and setting 'matched' if so
        // 3.) returning the working copy as new state.
        let flipState = [...state];
        const cardID = action.payload;
        flipState[cardID] = {...state[cardID], visible:true}
        
        const [index1, index2] = flipState
          .filter(card => card.visible)
          .map(card => card.id); // taking the id of all visible cards...
        if (index2 !== undefined){ // if it's the second card that was turned...
          const card1 = flipState[index1];
          const card2 = flipState[index2]; // extracting the two turned card from overall state.
          if (card1.contents === card2.contents) { // if it's a matching pair...
            flipState[index1] = {...card1, visible: false, matched: true}
            flipState[index2] = {...card2, visible: false, matched: true}
          }
        } 
  
        return flipState;
      case 'board/resetCards':
        return state.map(card => ({...card, visible: false}));
      default:
        return state;
    }
  }
  
  const wordPairs = [
    'Provider', 'Provider', 
    'selector', 'selector', 
    'useSelector()', 'useSelector()', 
    'useDispatch()', 'useDispatch()',
    'Pure Function', 'Pure Function',
    'react-redux', 'react-redux',
  ]
  
  const randomWords = () => {
    let words = []
    let newWordPairs = [...wordPairs]
    const reps = newWordPairs.length
    for (let i=0; i<reps; i++) {
      const wordIndex = Math.floor(Math.random()*newWordPairs.length);
      words.push(newWordPairs[wordIndex])
      newWordPairs.splice(wordIndex, 1)
    }
  
    return words;
  } 
  
  // action creators
  export const setBoard = () => {
    const words = randomWords()
    return {
      type: 'board/setBoard',
      payload: words
    }
  }
  
  export const flipCard = (id) => {
    return {
      type: 'board/flipCard',
      payload: id
    }
  }
  
  export const resetCards = (indices) => {
    return {
      type: 'board/resetCards'
    }
  }
  
  // Add selector export statments below
  
  export const selectBoard = (state) => {
    // extracting two specific keys from state.board -slice
    console.log('selectBoard invoked');
    return state.board.map((card) => {return {id: card.id, contents: card.contents}})
  }

  export const selectVisibleIDs = (state) => {
    return state.board.filter(card => card.visible).map(card => card.id)
  }

  export const selectMatchedIDs = (state) => {
    return state.board.filter(card => card.matched).map(card => card.id)
  }