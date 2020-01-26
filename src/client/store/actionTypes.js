import keyMirror from 'keymirror'
// var keyMirror = require('keyMirror');


const headerActions = keyMirror({
    FETCH_QUIZ_BEGIN: true,
    FETCH_QUIZ_SUCCESS: true,

    FETCH_QUIZ_FAILURE: true,
    SHOW_MODAL_CONFIRM: true,
    CLOSE_MODAL_CONFIRM: true,

    SAVE_TEST_RESULTS: true
});

export default headerActions;

/* CLOSE_MODAL_SING_IN: true,
    SHOW_MODAL_SING_IN: true,
        CLOSE_MODAL_SING_IN: true,
            SING_IN_WITH_EMAIL: true */