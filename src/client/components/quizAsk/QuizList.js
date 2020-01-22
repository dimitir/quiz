import { withFormik, Form, Field } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import ModalConfirm from './ModalConfirm'


const QuizList = ({
    modalSkip,
    showModalConfirm,
    closeModalConfirm,
    values,
    handleChange,
    handleSubmit,
    errors,
    resetForm,
    touched,
    isSubmitting = false
}) => {

    /*     const [showWin, setShow] = useState(false);
        const handleShow = () => setShow(true);
        const handleClose = () => setShow(false); */



    let quizItemsList = values.quizItems.map((quiz, i) => {

        if (quiz.type === 'checkbox') {
            return (
                <li key={i} >
                    <ul>
                        <li key={i + 'q'}>{quiz.question}</li>
                        {quiz.answers.map((item, k) =>
                            <li key={k + 'ch'}>
                                <label htmlFor={i + k + 'ch'}>
                                    <input type='checkbox' value={k} name={quiz.id} id={i + k + 'ch'} onChange={handleChange} />
                                    {item}</label>
                            </li>
                        )}
                    </ul >
                </li >
            )
        }
        if (quiz.type === 'radio') {
            return (
                <li key={i} >
                    <ul>
                        <li key={i + 'q'}>{quiz.question}</li>
                        {quiz.answers.map((item, n) =>
                            <li key={n}>
                                {touched.password && errors.password && <p>{errors.password}</p>}
                                <input type='radio' name={quiz.id} value={n} onChange={handleChange} />
                                {item}
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
                        <li key={i + 'q'}>{quiz.question}</li>
                        <Field name={quiz.id} as="select" >
                            <option value='' key={i + 's'} label='Сделайте выбор' />
                            {quiz.answers.map((item, k) => <option value={k} key={k} label={item} />
                            )}
                        </Field>
                    </ul >
                </li >
            )
        }
    }
    )


    return (
        <>
            <ModalConfirm
                show={modalSkip.modalSkip}
                handleClose={() => closeModalConfirm(false)}
            />

            <Form onSubmit={handleSubmit}>
                {quizItemsList ? <>{quizItemsList}</> : <h1>Loading... please wait!</h1 >}



                <button type="button" onClick={() => showModalConfirm(true)}>modal</button>
                <button type="submit" disabled={isSubmitting}>Send</button>

            </Form>

        </>

    );
}


const formikApp = withFormik({
    mapPropsToValues({ quizItems, modalSkip, showModalConfirm, closeModalConfirm }) {

        return {
            quizItems,
            modalSkip,
            showModalConfirm,
            closeModalConfirm
        }
    },
    handleSubmit({ showModalConfirm, setSubmitting, resetForm }) {

        setTimeout(() => {
            setSubmitting(false);
            resetForm();
        }, 1000);

    }

})(QuizList);

export default formikApp;