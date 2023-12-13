
function addQuestion() {
    var check = "";
    var ex_value = "";
    // Nội dung câu hỏi
    var question = document.getElementById("ip-content");
    // dạng câu hỏi
    var type_question = "Chọn";

    var status = "Chưa duyệt";
    //dáp án A

    var answer_A = document.getElementById("A");

    //dáp án B

    var answer_B = document.getElementById("B");
    //dáp án C

    var answer_C = document.getElementById("C");
    //dáp án D

    var answer_D = document.getElementById("D");

    var radios = document.getElementsByName("contact");

    var userOnline = JSON.parse(localStorage.getItem("userOnline"));

    var date = new Date();
    var date = new Date();
    var hours = date.getHours();
    var Minutes = date.getMinutes();
    var Second = date.getSeconds();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    var time_date = `${hours}:${Minutes}:${Second}\n ${day}/${month}/${year}`;

    var name = "";

    if (userOnline.userAdmin == null) {

        name = userOnline.username;
    } else {
        name = "admin";
    }


    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            check = radios[i].value;
        }
    }


    if (question.value != "" && answer_A.value != "" && answer_B.value != ""
        && answer_C.value != "" && answer_D.value != "" && check != "") {



        if (check === "A") {
            ex_value = answer_A.value
        } else if (check === "B") {
            ex_value = answer_B.value
        } else if (check === "C") {
            ex_value = answer_C.value
        } else if (check === "D") {
            ex_value = answer_D.value
        } else {
            alert("Bạn phải chọn đầy đủ thông tin");
        }

        var content_question = {
            name_question: question.value,
            type_question: type_question,
            answer_A: answer_A.value,
            answer_B: answer_B.value,
            answer_C: answer_C.value,
            answer_D: answer_D.value,
            ex_answer: ex_value,
            username: name,
            color: "rgb(226, 7, 7)",
            date: time_date
        };

        var content_question_show = {
            name_question: question.value,
            type_question: type_question,
            status: status,
            ex_answer: ex_value,
            username: name,
            color: "rgb(226, 7, 7)",
            date: time_date
        };


        var array_question = JSON.parse(localStorage.getItem("array_question"));

        var array_question_show = JSON.parse(localStorage.getItem("array_question_show"));

        array_question_show.push(content_question_show);
        array_question.push(content_question);


        localStorage.setItem("array_question", JSON.stringify(array_question));
        localStorage.setItem("array_question_show", JSON.stringify(array_question_show));



        question.value = "";
        answer_A.value = "";
        answer_B.value = "";
        answer_C.value = "";
        answer_D.value = "";

        alert("Bạn thêm thành công");


    } else {
        alert("Bạn nhập thông tin chưa đầy đủ");
    }

}


function formMoreanswer() {
    var body = document.getElementById("body");
    body.style.background = "none";
    var container = document.getElementById("container-more");
    container.classList.add("active");
    var container = document.getElementById("container-input");
    container.classList.remove("active");
}

function formInputQuestion() {
    var body = document.getElementById("body");
    body.style.background = "none";
    var container = document.getElementById("container-input");
    container.classList.add("active");

    var container = document.getElementById("container-more");
    container.classList.remove("active");


}


function addQuestionInput() {

    // Nội dung câu hỏi
    var question = document.getElementById("ip-content-input");

    //đáp án đúng
    var answer = document.getElementById("answer-input");

    var status = "Chưa duyệt";

    //loại câu hỏi 
    var type_question = "Điền";

    var userOnline = JSON.parse(localStorage.getItem("userOnline"));
    var date = new Date();
    var hours = date.getHours();
    var Minutes = date.getMinutes();
    var Second = date.getSeconds();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    var time_date = `${hours}:${Minutes}:${Second}\n ${day}/${month}/${year}`;

    var name = "";

    if (userOnline.userAdmin == null) {

        name = userOnline.username;
    } else {
        name = "admin";
    }

    if (question.value != "" && answer.value != "") {
        var content_question_show = {
            name_question: question.value,
            type_question: type_question,
            status: status,
            ex_answer: answer.value,
            username: name,
            color: "rgb(226, 7, 7)",
            date: time_date
        };

        var array_question_show = JSON.parse(localStorage.getItem("array_question_show"));

        array_question_show.push(content_question_show);

        localStorage.setItem("array_question_show", JSON.stringify(array_question_show));

        alert("Thêm câu hỏi thành công");
        question.value = "";
        answer.value = "";
    } else {
        alert("Bạn phải nhập đầy đủ thông tin");
    }

}