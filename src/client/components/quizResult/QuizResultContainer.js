import { connect } from 'react-redux';
import QuizResult from './QuizResult';


const mapStateToProps = state => ({
    quizResult: state.quizResult.quizRezultItems,
    quizItems: state.quizFetch.quizFetchItems,
});



export default connect(mapStateToProps)(QuizResult);