class createQuestion {
    constructor(title, options, correctAnswerIndex) {
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }

    isAnswerCorrect(index) {
        return index === this.correctAnswerIndex;
    }
    getCorrectAnswer() {
        return this.options[this.correctAnswerIndex];
    }
}

const firstQuestion = new createQuestion('Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 1)
const secondQuestion = new createQuestion(
    'Where is the capital of Jordan', ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    2
);