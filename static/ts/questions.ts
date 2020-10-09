let form = document.getElementById("form-add") as HTMLFormElement
let false_answers_ul = document.getElementById("false-answers") as HTMLUListElement
let false_answers_inputs = [] as Array<HTMLInputElement>
let question_input = document.getElementById("form-question") as HTMLInputElement
let good_answer_input = document.getElementById("form-answer") as HTMLInputElement


function show_error(text: string) {
    console.error(text)
}


function append_answer(can_delete = true) {
    if (false_answers_inputs.length >= 8) {
        show_error("cannot add more than 8 false answers")
        return
    }
    let li = document.createElement("li")
    let tmp = document.createElement("input")
    tmp.type = "text"
    tmp.required = true
    false_answers_inputs.push(tmp)
    li.appendChild(tmp)
    if (can_delete) {
        let cross_button = document.createElement("button")
        cross_button.type = "button"
        cross_button.innerText = "X"
        li.appendChild(cross_button)
        cross_button.addEventListener("click", () => {
            li.remove()
        })
    }

    false_answers_ul.appendChild(li)
}

function send_question() {
    const url = "questions/add"

    // let xhttp = new XMLHttpRequest()
    // xhttp.open("POST", "questions/add")
    // xhttp.setRequestHeader("theme","test")

    if (!question_input.value) {
        show_error("'question' cannot be empty")
        return
    }
    if (!good_answer_input.value) {
        show_error("'good answer' cannot be empty")
        return
    }

    let false_answers_array = [] as Array<string>
    false_answers_inputs.forEach((input) => {
        if (input.value)
            false_answers_array.push(input.value)

    })
    if (false_answers_array.length == 0) {
        show_error("need at least one false answer")
        return
    }
    const data = {
        theme: "test",
        question: question_input.value,
        answer: good_answer_input.value,
        false_answers: false_answers_array
    }
    const fetch_param = {

        body: JSON.stringify(data),
        method: "POST"
    }
    console.log(fetch_param)
    fetch(url, fetch_param).then().catch((reason)=>{
        show_error(`an error occured : ${reason}`)
    })


}
append_answer(false)