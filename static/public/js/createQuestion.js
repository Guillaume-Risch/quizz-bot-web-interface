/**
 * 
 *  @title : createQuestion.js
 * 
 *  @brief : create a question page asset
 * 
 */

var NbFalseAnswer = 1;

function addAnswer() {
    ++NbFalseAnswer;

    var label = document.createElement('label');
    label.setAttribute('for', 'falseAns'+NbFalseAnswer);
    label.innerText = 'Réponse fausse '+NbFalseAnswer;

    var input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'falseAns'+NbFalseAnswer);
    input.setAttribute('id', 'falseAns'+NbFalseAnswer);


    document.getElementById('falseAnswerC').appendChild(
        label
    );
    document.getElementById('falseAnswerC').appendChild(
        input
    );
}