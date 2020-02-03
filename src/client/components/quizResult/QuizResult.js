import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from './quizResult.module.scss';



const QuizResult = ({ quizResult, quizItems }) => {


    const setRightResult = () => {
        for (const itemQuiz of quizItems) {
            if (itemQuiz.type == 'checkbox') {

                const inputsCheckbox = document.getElementsByName(itemQuiz.id);
                for (const itemInput of inputsCheckbox) {

                    console.log(itemInput);

                    for (const itemTrueAnswer of itemQuiz.right) {
                        if (itemInput.value == itemTrueAnswer) {
                            const textAfterInput = itemInput.nextSibling;
                            console.log(textAfterInput);
                            textAfterInput.innerHTML = "My First JavaScript"
                            // itemInput.nextSibling.style.fontWeight = "900";
                            // ;
                            console.log('kkk');
                        }
                    }

                }


            }
        }

    }


    const getCountCheckboxResult = (userOpinion, right) => {

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
                        if (rightAnswer[0] == quizResult[item.id]) {
                            return 1;
                        }
                    case ('checkbox'):
                        return getCountCheckboxResult(quizResult[item.id], rightAnswer);

                    case ('text'):
                        console.log(quizResult[item.id]);
                        let resultTextNum = Number(quizResult[item.id]);
                        if (rightAnswer === resultTextNum) {
                            return 1
                        }
                    default: return 0;
                }
            }
        })

        let sumResult = amountRightAnswer.reduce((sum, current) => sum + current, 0);

        return sumResult;

    }




    const percentage = () => {
        return Math.round(100 * (sumRightAnswer() / (quizItems.length)));
    }



    let quizItemsList = quizItems.map((quiz, i) => {

        let num = i + 1;
        if (quiz.type === 'checkbox') {

            return (
                <li key={i} >
                    <ul>
                        <li key={i + 'q'} className={style.quizQuestion}><span>{num + '. '}</span>{quiz.question}</li>
                        {quiz.answers.map((item, k) => {
                            return (
                                <li key={k + 'chTrue'}>
                                    <input type='checkbox' value={k} disabled name={quiz.id} />
                                    <span className={style.beforeInputMark}>{item}</span>
                                </li>
                            )
                        }
                        )}
                    </ul >
                </li >
            )
        }
        if (quiz.type === 'radio') {
            return (
                <li key={i} className={style.quizItem}>
                    <ul>
                        <li key={i + 'q'} className={style.quizQuestion}>{num + '. '}{quiz.question}</li>
                        {quiz.answers.map((item, k) => {
                            return (
                                <li key={k + 'rTrue'}>
                                    <input type='radio' disabled name={quiz.id} value={k} />
                                    <span className={style.beforeInputMark}>{item}</span>
                                </li>
                            )
                        }
                        )}
                    </ul >
                </li >
            )
        }
        if (quiz.type === 'select') {
            return (
                <li key={i} >
                    <ul>
                        <li key={i + 'q'} className={style.quizQuestion}>{num + '. '}{quiz.question}</li>
                        <select name={quiz.id} size={quiz.answers.length} >
                            {quiz.answers.map((item, k) => <option disabled value={k} key={k} label={item} />
                            )}
                        </select>
                    </ul >
                </li >
            )
        }

        if (quiz.type === 'text') {
            return (
                <li key={i} >
                    <ul>
                        <li key={i + 'q'} className={style.quizQuestion}>{num + '. '}{quiz.question}</li>
                        <input type='text' placeholder='Введите значение' name={quiz.id} />
                    </ul >
                </li >
            )
        }
    }
    )


    return (
        <>
            <Container>
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <h2 className='titleQuiz'>Ваш результат</h2>
                        <Row className="justify-content-md-center">
                            <div className={style.resultStats}>
                                <h4>Вы правильно ответили на {percentage()}% вопросов</h4>
                                <h4>Из {quizItems.length}, правильно ответили на {sumRightAnswer()} </h4>
                            </div>
                            <div className={style.showQuizResult}>
                                <h4>Ответы</h4>
                                {quizItemsList}
                                {setRightResult()}
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


