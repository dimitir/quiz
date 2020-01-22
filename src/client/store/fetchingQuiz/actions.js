function fakeGetProducts() {
    return new Promise(resolve => {
        // Resolve after a timeout so we can see the loading indicator
        setTimeout(
            () =>
                resolve({
                    products: [{
                        id: 0,
                        name: "Apple"
                    },
                    {
                        id: 1,
                        name: "Bananas"
                    },
                    {
                        id: 2,
                        name: "Strawberries"
                    }
                    ]
                }),
            1000
        );
    });
}

export function fetchQuiz() {
    return dispatch => {
        dispatch(fetchQuizBegin());
        return fetch("/api/getquiz")
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                console.log(json);
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

export const FETCH_QUIZ_BEGIN = "FETCH_QUIZ_BEGIN";
export const FETCH_QUIZ_SUCCESS =
    "FETCH_QUIZ_SUCCESS";
export const FETCH_QUIZ_FAILURE =
    "FETCH_QUIZ_FAILURE";

export const fetchQuizBegin = () => ({
    type: FETCH_QUIZ_BEGIN
});

export const fetchQuizSuccess = quiz => ({
    type: FETCH_QUIZ_SUCCESS,
    payload: quiz
});

export const fetchQuizFailure = error => ({
    type: FETCH_QUIZ_FAILURE,
    payload: { error }
});