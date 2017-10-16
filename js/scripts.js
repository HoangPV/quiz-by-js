(function () {

    // naming variables that refer to DOM elements
    var $question = document.getElementById('question');
    var $score = document.getElementById('score');
    // var $feedback = document.getElementById('feedback');
    var score = 0;
    var quiz = {
        "name": "Super Hero Name Quiz",
        "description": "How many super heroes can you name?",
        "question": "What is the real name of ",
        "questions": [
            {"question": "Superman", "answer": "Clarke Kent"},
            {"question": "Batman", "answer": "Bruce Wayne"},
            {"question": "Wonder Woman", "answer": "Dianna Prince"}
        ]
    };

    for (var i = 0, question, answer; i < quiz.questions.length; i++) {
        question = quiz.questions[i].question;
        answer = ask(question);
        check(answer);
    }

    function update(element, content, klass) {

        var p = element.firstChild || document.createElement("p");
        p.textContent = content;
        element.appendChild(p);
        if (klass) {
            p.className = klass;
        }

    }

    function ask(question) {

        console.log(quiz.question + question);
        update($question, quiz.question + question);
        var _question = quiz.question + question;
        return prompt(_question + "\nEnter your answer:");

    }

    function check(answer) {
        console.log(quiz.questions[i].answer);
        if (answer === quiz.questions[i].answer) {
            alert('correct!');
            score++;
            update($score, score);
        } else {
            alert('wrong!');
        }
    }
})();