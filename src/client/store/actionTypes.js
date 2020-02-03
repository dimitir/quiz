import keyMirror from 'keymirror'


const headerActions = keyMirror({
    FETCH_QUIZ_BEGIN: true,
    FETCH_QUIZ_SUCCESS: true,

    FETCH_QUIZ_FAILURE: true,
    SHOW_MODAL_CONFIRM: true,
    CLOSE_MODAL_CONFIRM: true,

    SAVE_TEST_RESULTS: true
});

export default headerActions;
