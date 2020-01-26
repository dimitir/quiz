import { connect } from 'react-redux';
import QuizList from './QuizList';
import { showModalConfirm } from '../../store/modals/actions';
import { closeModalConfirm } from '../../store/modals/actions';
import { saveResult } from '../../store/resultQuiz/actions';





const mapStateToProps = (state, { history }) => {
    return ({
        quizItems: state.quizFetch.quizFetchItems,
        modalConfirm: state.quizModalConfirm,
        history
    });
}



const mapDispatchToProps = (dispatch) => (
    {
        showModalConfirm: () => dispatch(showModalConfirm(true)),
        closeModalConfirm: () => dispatch(closeModalConfirm(false)),
        saveResult: result => dispatch(saveResult(result))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);