import { connect } from 'react-redux';
import QuizList from './QuizList';
import { showModalConfirm } from '../../store/modals/actions';
import { closeModalConfirm } from '../../store/modals/actions';





const mapStateToProps = state => ({
    quizItems: state.quizFetch.items,
    modalSkip: state.modalSkip
});

const mapDispatchToProps = (dispatch) => (
    {
        showModalConfirm: bool => dispatch(showModalConfirm(bool)),
        closeModalConfirm: bool => dispatch(closeModalConfirm(bool)),
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);