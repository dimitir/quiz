// что такое события что тут писать? это пугает... и хорошо
// эти чувства размазывать... нет хорошо. быть живым но делать дело

// это обьект событие
import modalsAction from './actionTypes';


export const showModalConfirm = (obj) => ({
  type: modalsAction.SHOW_MODAL_CONFIRM,
  obj
});


export const closeModalConfirm = (obj) => ({
  type: modalsAction.CLOSE_MODAL_CONFIRM,
  obj
});


