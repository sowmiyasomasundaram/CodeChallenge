import * as actionTypes from '../actions/ActionTypes'

const initialState = {
    persons: [],
    visibility:[]
}

export const fetchDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_DETAILS:
            return Object.assign({}, state, {
                persons: action.payload.persons
            });
        case actionTypes.TOGGLE_DETAILS:
        
            let elementState = state.visibility.filter( el => el.id === action.payload.id)

            let newElState = { id: action.payload.id, isVisible: elementState.length==0 ? true : !elementState[0].isVisible };

            let newstate = Object.assign({}, state, {
                visibility : state.visibility.length == 0 ? [newElState] : 
                    ( elementState.length==0 ? [ ...state.visibility, newElState] :   
                        state.visibility.map(el => {
                            if(el.id === action.payload.id) {
                                return newElState;
                            }
                            return el;
                        }))
            })
        
            return newstate;
        default:
            return state;
    }

}