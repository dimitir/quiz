const uuid = require('uuid');

module.exports.quizList = [
    {
        id: uuid.v4(),
        type: 'checkbox',
        question: 'Какие варианты вызова try..catch являются синтаксически верными в JavaScript?',
        answers: [
            'try { ... } без catch/finally', 'try { ... } catch { ... }', 'try { ... } finally { ... }',
            'try { ... } catch { ... } finally { ... }', 'В JavaScript не поддерживается try..catch'
        ],
        right: [1, 2, 3]
    },
    {
        id: uuid.v4(),
        type: 'radio',
        question: 'Чему равна сумма [ ] + 1 + 2?',
        answers: [
            '1', 'NaN', 'undefined', '12', 'Другое'
        ],
        right: [3],
    },
    {
        id: uuid.v4(),
        type: 'select',
        question: 'Чему равно такое выражение? \n [ ] + false - null + true',
        answers: ['0', 'NaN', 'undefined', '1'],
        right: [1],
    },
    {
        id: uuid.v4(),
        type: 'text',
        question: 'Что выведет код?  \n let obj = {\'1\': 0, 1: 1, 0: 2};  \n alert(obj["1"]); ',
        answers: [],
        right: [1],
    },
    {
        id: uuid.v4(),
        type: 'select',
        question: ' Чему равно a + b + c? \n let a = 1; \n let b = { toString() { return "1" } };  \n let c = 1;',
        answers: ['11[object Object]', '2[object Object]', '111', '3'],
        right: [2],
    },

];
