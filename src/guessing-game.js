class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.average = null;
    }

    setRange(min, max) { //этот метод принимает минимальное и максимальное значение диапазона чисел для угадывания
        this.min = min;
        this.max = max;

    }

    guess() { //этот метод возвращает кандидата на решение (вы делаете предположение, основанное на диапазоне и предыдущих предположениях)
        this.average = Math.round((this.min + this.max)/2);
        return this.average;
    }

    lower() { // этот метод вызывается, если предыдущий вызов guess() вернул число, которое больше, чем ответ
        this.max = this.average;
    }

    greater() { //этот метод вызывается, если предыдущий вызов guess() вернул число, которое меньше, чем ответ
        this.min = this.average;
    }
}

module.exports = GuessingGame;


// function setRange(min, max) {
// return [min, max]
// }

// console.log(setRange(100, 300))