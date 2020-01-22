import React from "react";
import { connect } from "react-redux";
import { fetchQuiz } from "../../store/fetchingQuiz/actions";
import Container from 'react-bootstrap/Container';
import QuizListContainer from './QuizListContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from './quizAsk.module.scss';



class quizAsk extends React.Component {

    componentDidMount() {
        this.props.fetchQuizList();
    }

    render() {
        const { error, loading, quizItems } = this.props;

     /*    console.log(quizItems.length);

        if (typeof quizList !== 'undefined') {
            console.log(quizList.quizRes);
        } */

        if (error) {
            return <div > Error!{error.message} </div>;
        }
        if (loading) {
            return <div > Loading... </div>;
        }

        /*   let quizItemsList = quizItems.map((quiz, i) =>
              <li key={i} > {quiz.question} </li>
          ) */


        return (
            <>
                <Container>
                    <Row>
                        <Col md={{ span: 8, offset: 2 }}>
                            <div>
                                <h2 className={style.title}>Язык JavaScript </h2>
                                <QuizListContainer
                                />
                                {/* { quizItemsList?<ul>{ quizItemsList }</ul> : <h1>Loading... please wait!</h1 >}   */}
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
