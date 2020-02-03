if (quizResult[quiz.id].indexOf(k) !== -1) {
    return (
        <li key={k + 'chUser'}>
            <input type='checkbox' value={k} disabled name={quiz.id} />
            <span className={style.userAnswer}>{item}</span>
        </li>)
}
else {
    <li key={k + 'chRegular'}>
        <input type='checkbox' checked value={k} disabled name={quiz.id} />
        <span className={style.beforeInputMark}>{item}</span>
    </li>
}