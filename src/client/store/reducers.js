import { combineReducers } from 'redux';
import quizModalReducer from './modals/reducer';
import quizFetchingReducer from './fetchingQuiz/reducer';
import quizResultReducer from './resultQuiz/reducer';


export default combineReducers({
    quizModalConfirm: quizModalReducer,
    quizFetch: quizFetchingReducer,
    quizResult: quizResultReducer,

});