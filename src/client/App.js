import { Component } from 'react';
import React from 'react'
import './app.css';
import QuizAskList from './components/quizAsk/QuizAskList'



export default class App extends Component {

    render() {
        return (
            <>
                <QuizAskList />
            </>
        )
    }
}
