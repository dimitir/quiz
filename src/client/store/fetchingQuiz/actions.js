import actionTypes from '../actionTypes';

export function fetchQuiz() {
    return dispatch => {
        dispatch(fetchQuizBegin());
        return fetch("/api/getquiz")
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchQuizSuccess(json.quizRes));
                return json.quizRes;
            })
            .catch(error => dispatch(fetchQuizFailure(error)));
    };
}



// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const fetchQuizBegin = () => ({
    type: actionTypes.FETCH_QUIZ_BEGIN
});

export const fetchQuizSuccess = quiz => ({
    type: actionTypes.FETCH_QUIZ_SUCCESS,
    payload: quiz
});

export const fetchQuizFailure = error => ({
    type: actionTypes.FETCH_QUIZ_FAILURE,
    payload: { error }
});