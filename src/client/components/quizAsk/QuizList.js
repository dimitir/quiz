import { withFormik, Form, Field } from 'formik';
import React from 'react';
import Button from 'react-bootstrap/Button';
import style from './quizAsk.module.scss';
import ModalConfirm from './ModalConfirm';
import PropTypes from 'prop-types';




const QuizList = ({
    quizItem,
    history,
    modalConfirm,
    showModalConfirm,
    closeModalConfirm,
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
}) => {

    let quizItemsList = values.quizItems.map((quiz, i) => {
        let num = i + 1;
        if (quiz.type === 'checkbox') {
            return (
                <li key={i} >
                    <ul>
                        <li key={i + 'q'} className={style.quizQuestion}><span>{num + '. '}</span>{quiz.question}</li>
                        {quiz.answers.map((item, k) =>
                            <li key={k + 'ch'}>
                                <label htmlFor={i + k + 'ch'}>
                                    <input type='checkbox' value={k} name={quiz.id} id={i + k + 'ch'} onChange={handleChange} />
                                    <span className={style.beforeInputMark}>{item}</span></label>
                            </li>
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
                        {quiz.answers.map((item, k) =>
                            <li key={k + 'r'}>
                                <label htmlFor={i + k + 'r'}>
                                    <input type='radio' name={quiz.id} value={k} id={i + k + 'r'} onChange={handleChange} />
                                    <span className={style.beforeInputMark}>{item}</span></label>
                            </li>
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
                        <Field name={quiz.id} as="select" >
                            <option value='' key={i + 's'} label='Сделайте выбор' />
                            {quiz.answers.map((item, k) => <option value={k} key={k} label={item} />
                            )}
                        </Field>
                    </ul >
                </li >
            )
        }

        if (quiz.type === 'text') {
            return (
                <li key={i} >
                    <ul>
                        <li key={i + 'q'} className={style.quizQuestion}>{num + '. '}{quiz.question}</li>
                        <input type='text' placeholder='Введите значение' name={quiz.id} value={values.name} onChange={handleChange} onBlur={handleBlur} />
                    </ul >
                </li >
            )
        }
    }
    )


    return (
        <>
            <ModalConfirm
                show={modalConfirm}
                handleClose={() => closeModalConfirm()}
            />
            <Form onSubmit={handleSubmit} className={style.quizList}>
                {quizItemsList ? <ul>{quizItemsList}</ul> : <h1>Loading... please wait!</h1 >}
                <Button type="submit" className={`${style.buttonSubmit}`}>
                    Ответить</Button>
            </Form>
        </>

    );
}


const getResultValues = (listQuiz, listValuesRecently) => {
    let resultValues = {};
    const listQuizId = listQuiz.map(item => item.id);
    for (let key in listValuesRecently) {
        if (listQuizId.indexOf(key) != -1) {
            resultValues[key] = listValuesRecently[key];
        }
    }

    return resultValues
}


const doTypeCasting = resultVal => {
    for (const itemResult in resultVal) {
        if (typeof resultVal[itemResult] == 'object') {
            resultVal[itemResult] = resultVal[itemResult].map(val => Number(val));
        }
    }
    return resultVal;
}



const isFieldAllFill = (listQuiz, listValuesRecently) => {
    const listQuizId = listQuiz.map(item => item.id);
    const listRecently = listQuizId.filter(item => listValuesRecently.hasOwnProperty(item));
    if (listQuizId.length === listRecently.length) {
        return true
    }
    else return false
}


const quizListFormicCont = withFormik({
    mapPropsToValues({ history, quizItems, showModalConfirm, closeModalConfirm, saveResult, modalConfirm }) {
        return {
            history,
            modalConfirm,
            quizItems,
            showModalConfirm,
            closeModalConfirm,
            saveResult
        }
    },
    handleSubmit(values) {
        const resultValues = getResultValues(values.quizItems, values);
        const resultValuesTypeCast = doTypeCasting(resultValues);
        console.group('resultCasting');
        console.log(resultValuesTypeCast);
        values.saveResult(resultValues);

        if (!isFieldAllFill(values.quizItems, values)) {
            values.showModalConfirm()
        }
        else {
            values.history.push('/result');
        }
    }

})(QuizList);



QuizList.propTypes = {
    ModalConfirm: PropTypes.element,
    history: PropTypes.object,
    quizItems: PropTypes.array,
    showModalConfirm: PropTypes.func,
    closeModalConfirm: PropTypes.func,
    saveResult: PropTypes.func,
    modalConfirm: PropTypes.bool,
}


export default quizListFormicCont;

