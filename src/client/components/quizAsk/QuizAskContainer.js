import { connect } from 'react-redux';
import QuizAsk from './QuizAsk';
import { fetchQuiz } from '../../store/fetchingQuiz/actions';



const mapStateToProps = state => ({
    loading: state.quizFetch.loading,
    error: state.quizFetch.error,
});

const mapDispatchToProps = (dispatch) => (
    {
        fetchQuizList: () => dispatch(fetchQuiz())
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(QuizAsk);