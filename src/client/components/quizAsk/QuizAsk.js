import React from "react";
import { connect } from "react-redux";
import { fetchQuiz } from "../../store/fetchingQuiz/actions";
import Container from 'react-bootstrap/Container';
import QuizListContainer from './QuizListContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class quizAsk extends React.Component {

    componentDidMount() {
        this.props.fetchQuizList();
    }

    render() {
        const { error, loading, history } = this.props;

        // console.log(history);



        if (error) {
            return <div > Error!{error.message} </div>;
        }
        if (loading) {
            return <div > Loading... </div>;
        }



        return (
            <>
                <Container>
                    <Row>
                        <Col md={{ span: 10, offset: 1 }}>
                            <div>
                                <h2 className='titleQuiz'>Язык JavaScript </h2>
                                <QuizListContainer history={history}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>

        );
    }
}

const mapStateToProps = state => ({
    loading: state.quizFetch.loading,
    error: state.quizFetch.error,
});

const mapDispatchToProps = (dispatch) => (
    {
        fetchQuizList: () => dispatch(fetchQuiz())
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(quizAsk);
