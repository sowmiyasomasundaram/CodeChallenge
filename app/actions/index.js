import {FETCH_DETAILS, TOGGLE_DETAILS} from './ActionTypes'
import data from '../data'

export const fetchDetails = () => ({
    type: FETCH_DETAILS,
    payload: {persons: data}
});

export const toggleDetails = (id) => ({
    type: TOGGLE_DETAILS,
    payload: {id: id}
});

