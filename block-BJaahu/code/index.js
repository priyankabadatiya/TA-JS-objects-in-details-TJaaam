let question2 = {
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 2,
    isAnswerCorrect(index) {
        return index === question2.correctAnswerIndex;
    },
    getCorrectAnswer() {
        return question2.options[question2.correctAnswerIndex];
    },
};