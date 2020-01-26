import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from 'react';
import style from './quizAsk.module.scss';
import { useHistory } from "react-router-dom";



export default ({ show, handleClose }) => {
    const history = useHistory();

    function gotoResult() {
        history.push("/result");
    }

    return (
        <>


            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header>
                    <Modal.Title>Каждый не отвеченный ответ считается
неправильным, Вы уверены что хотите продолжить?</Modal.Title>
                </Modal.Header>
                {/*  <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
                <Modal.Footer className='text-center'>
                    <Button variant="secondary" className={style.buttonConfirm} onClick={gotoResult}>
                        Да
            </Button>
                    <Button variant="primary" className={style.buttonConfirm} onClick={handleClose}>
                        Нет
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}