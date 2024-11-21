// Preguntas del quiz
const questions = [
    {
        question: "¿Cuál es el lema del club?",
        options: ["Unidos somos más fuertes", "Avanza siempre", "Juntos por siempre"],
        answer: 0
    },
    {
        question: "¿Cuándo se fundó el club?",
        options: ["15 de marzo de 2015", "10 de julio de 2015", "20 de noviembre de 2015"],
        answer: 1
    },
    {
        question: "¿Cuál es el color representativo del club?",
        options: ["Azul", "Rojo", "Verde"],
        answer: 0
    },
    {
        question: "¿Quién es el presidente actual del club?",
        options: ["Juan Pérez", "Laura García", "Carlos López"],
        answer: 1
    },
    {
        question: "¿En qué ciudad tiene su sede el club?",
        options: ["Córdoba", "Buenos Aires", "Rosario"],
        answer: 0
    },
    {
        question: "¿Cuál es la mascota oficial del club?",
        options: ["Un león", "Un águila", "Un perro"],
        answer: 2
    },
    {
        question: "¿Cuántos miembros tiene actualmente el club?",
        options: ["Más de 500", "Más de 1000", "Más de 2000"],
        answer: 1
    },
    {
        question: "¿En qué año el club ganó su primer campeonato?",
        options: ["2006", "2001", "2005"],
        answer: 1
    },
    {
        question: "¿Cuál es la actividad más popular entre los miembros del club?",
        options: ["Fútbol", "Voley", "Basquet"],
        answer: 0
    },
    {
        question: "¿Dónde se celebran los eventos anuales del club?",
        options: ["En el estadio local", "En el parque central", "En la sede social"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

function startGame() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const resultElement = document.getElementById('result');

    if (currentQuestion < questions.length) {
        questionElement.textContent = questions[currentQuestion].question;
        optionsElement.innerHTML = '';
        resultElement.textContent = '';

        questions[currentQuestion].options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.onclick = () => checkAnswer(index);
            optionsElement.appendChild(button);
        });
    } else {
        questionElement.textContent = '¡Juego terminado!';
        optionsElement.innerHTML = '';
        resultElement.textContent = `Tu puntuación: ${score} / ${questions.length}`;
    }
}

function checkAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestion].answer;
    const resultElement = document.getElementById('result');

    if (selectedIndex === correctIndex) {
        score++;
        resultElement.textContent = '¡Correcto!';
    } else {
        const correctAnswer = questions[currentQuestion].options[correctIndex];
        resultElement.textContent = `Incorrecto. La respuesta correcta es: ${correctAnswer}`;
    }

    currentQuestion++;

    // Mostrar la siguiente pregunta después de 2 segundos
    setTimeout(showQuestion, 2000);
}

