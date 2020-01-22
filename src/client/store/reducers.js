import { combineReducers } from 'redux';
import modalReducer from './modals/reducer';
import fetchingQuizReducer from './fetchingQuiz/reducer';


export default combineReducers({
    modalSkip: modalReducer,
    quizFetch: fetchingQuizReducer
});