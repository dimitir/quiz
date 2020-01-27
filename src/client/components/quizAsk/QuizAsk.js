import React from "react";
import Container from 'react-bootstrap/Container';
import QuizListContainer from './QuizListContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';


export default class QuizAsk extends React.Component {

    componentDidMount() {
        this.props.fetchQuizList();
    }

    render() {
        const { error, loading, history } = this.props;


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



QuizAsk.propTypes = {
    fetchQuizList: PropTypes.func,
    QuizListContainer: PropTypes.element,
    history: PropTypes.object,
    loading: PropTypes.bool,
    error: PropTypes.bool,
}

