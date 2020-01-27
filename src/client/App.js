import { Component } from 'react';
import React from 'react'
import './app.css';
import QuizAskContainer from './components/quizAsk/QuizAskContainer';
import QuizResultContainer from './components/quizResult/QuizResultContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export default class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route component={QuizAskContainer} path="/" exact />
                    <Route component={QuizResultContainer} path="/result" exact />
                </Switch>
            </Router>
        )
    }
}
