import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from './quizResult.module.scss'



const QuizResult = ({ quizResult, quizItems }) => {

    console.group('quizResult');
    console.group(quizResult);
    console.group(quizItems);
    console.groupEnd();

    const getCountCheckbooxResult = (userOpinion, right) => {

        const proportion = Math.round(100 * (1 / right.length));
        let result = 0;
        right.forEach(item => {
            if (userOpinion.indexOf(item) !== -1) {
                result += proportion;
            }
        })
        return result / 100;
    }



    const sumRightAnswer = () => {
        const amountRightAnswer = quizItems.map(item => {
            const rightAnswer = item.right;

            if (!quizResult.hasOwnProperty(item.id)) {
                return 0
            }

            else {
                switch (item.type) {
                    case ('radio'):
                        if (rightAnswer[0] == quizResult[item.id]) {
                            return 1;
                        }

                    case ('select'):
                        console.group('select');
                        console.log(rightAnswer[0]);
                        console.log(quizResult[item.id]);
                        console.groupEnd();
                        if (rightAnswer[0] == quizResult[item.id]) {
                            return 1;
                        }
                    case ('checkbox'):
                        console.group('checkbox box');
                        console.log(quizResult[item.id]);
                        console.log(rightAnswer);
                        return getCountCheckbooxResult(quizResult[item.id], rightAnswer);

                    case ('text'):
                        console.group('text');
                        console.log(rightAnswer);
                        console.log(quizResult[item.id]);
                        console.groupEnd();
                        if (rightAnswer == quizResult[item.id]) {
                            return 1
                        }

                    default: return 0

                }
            }
        })

        let sumResult = amountRightAnswer.reduce((sum, current) => sum + current, 0);

        return sumResult;

    }




    const percentage = () => {

        // console.log(sumRightAnswer);
        const proportion = 100 * (sumRightAnswer() / (quizItems.length));
        console.log(proportion);

        return proportion;
    }



    return (
        <>
            <Container>
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <h2 className='titleQuiz'>Ваш результат</h2>
                        <Row className="justify-content-md-center">
                            <div className={style.resultStats}>
                                <h4 className={style.resultStats}>Вы правильно ответили на {percentage()}% вопросов</h4>
                                <h4>Из {quizItems.length}, правильно ответили на {sumRightAnswer()} </h4>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

QuizResult.propTypes = {
    quizResult: PropTypes.object,
    quizItems: PropTypes.array,
}

export default QuizResult;


