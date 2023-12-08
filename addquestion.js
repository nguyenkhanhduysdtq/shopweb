var userOnline = JSON.parse(localStorage.getItem("userOnline"));

function render() {
    var array_show = JSON.parse(localStorage.getItem("array_question_show"));

    var userOnline = JSON.parse(localStorage.getItem("userOnline"));

    var table = document.getElementById("tbContent");

    var question = `<tr>
    <th>STT</th>
    <th>Tên câu hỏi</th>
    <th>Loại câu hỏi</th>
    <th>Đáp án</th>
    <th>Trạng thái</th>
    <th>Xem Thông tin</th>
</tr>`

    for (var i = 0; i < array_show.length; i++) {

        if (array_show[i].username === userOnline.username) {
            question += `<tr>
    <td id="index_question">${i + 1}</td>
    <td>${array_show[i].name_question}</td>
    <td>${array_show[i].type_question}</td>
    <td>${array_show[i].ex_answer}</td>
    <td style="background-color: ${array_show[i].color}" id="status">${array_show[i].status}</td>
    <td id="activity">
    <a><button id="btn_show" onclick="showQuestion(${i})">Xem</button></a>
    <a><button id="btn_update" onclick="updateQuestion(${i})">Chỉnh sửa</button></a>
    <a><button id="btn_delete" onclick="deleteQuestion(${i})" >Xóa</button></a>
    </td>
</tr>`

        }
    }

    table.innerHTML = question;
}


function renderAdmin() {
    var array_show = JSON.parse(localStorage.getItem("array_question_show"));

    var table = document.getElementById("tbContent");

    var question = `<tr>
    <th>STT</th>
    <th>Tên câu hỏi</th>
    <th>Loại câu hỏi</th>
    <th>Tên tài khoản</th>
    <th>Trạng thái</th>
    <th>Xem Thông tin</th>
</tr>`

    for (var i = 0; i < array_show.length; i++) {


        question += `<tr>
    <td id="index_question">${i + 1}</td>
    <td>${array_show[i].name_question}</td>
    <td>${array_show[i].type_question}</td>
    <td>${array_show[i].username}</td>
    <td><button style="background-color: ${array_show[i].color}" id="status-question" onclick="resetStatus(${i})">${array_show[i].status}</button></td>
    <td id="activity">
    <a><button id="btn_show" onclick="showQuestion(${i})">Xem</button></a>
    <a><button id="btn_update" onclick="updateQuestion(${i})">Chỉnh sửa</button></a>
    <a><button id="btn_delete" onclick="deleteQuestion(${i})" >Xóa</button></a>
    </td>
</tr>`


    }

    table.innerHTML = question;
}




if (userOnline.userAdmin == null) {

    render();

} else {
    renderAdmin();
}


function resetStatus(index) {
    var btn = document.getElementById("status-question");
    var array_show = JSON.parse(localStorage.getItem("array_question_show"));

    if (array_show[index].status === "Chưa duyệt") {
        confirm("Bạn muốn duyệt câu hỏi này !");
        array_show[index].status = "Đã Duyệt";
        array_show[index].color = "#7CFC00";


    } else {
        confirm("Bạn muốn hủy duyệt câu hỏi này !");
        array_show[index].status = "Chưa duyệt";
        array_show[index].color = "rgb(226, 7, 7)";


    }

    localStorage.setItem("array_question_show", JSON.stringify(array_show));

    renderAdmin();


}



function deleteQuestion(index) {
    var array_show = JSON.parse(localStorage.getItem("array_question_show"));
    if (confirm("Bạn đang muốn xóa câu hỏi ?")) {
        array_show.splice(index, 1);
    }

    localStorage.setItem("array_question_show", JSON.stringify(array_show));

    render();


}


function showQuestion(index) {
    var array_show = JSON.parse(localStorage.getItem("array_question_show"));

    var array_question = JSON.parse(localStorage.getItem("array_question"));

    var type = array_show[index].type_question;

    var container_input = document.getElementById("container-input");
    var container_more = document.getElementById("container-more");

    var radios = document.getElementsByName("contact");

    if (type === "Điền") {
        container_input.classList.add("active");
        container_more.classList.remove("active");

        document.getElementById("ip-content-input").value = array_show[index].name_question;
        document.getElementById("answer-input").value = array_show[index].ex_answer;
        document.getElementById("ip-content-input").readOnly = "true";
        document.getElementById("answer-input").readOnly = "true";
        document.getElementById("add-question-input").style.display = "none";
    } else {
        container_more.classList.add("active");
        container_input.classList.remove("active");
        document.getElementById("add-question").style.display = "none";

        for (var i = 0; i < array_question.length; i++) {
            if (array_show[index].name_question === array_question[i].name_question) {
                document.getElementById("ip-content").value = array_question[i].name_question;
                document.getElementById("A").value = array_question[i].answer_A;
                document.getElementById("B").value = array_question[i].answer_B;
                document.getElementById("C").value = array_question[i].answer_C;
                document.getElementById("D").value = array_question[i].answer_D;

                document.getElementById("ip-content").readOnly = true;
                document.getElementById("A").readOnly = true;
                document.getElementById("B").readOnly = true;
                document.getElementById("C").readOnly = true;
                document.getElementById("D").readOnly = true;

                if (array_question[i].ex_answer === document.getElementById("A").value) {
                    radios[0].checked = true;
                } else if (array_question[i].ex_answer === document.getElementById("B").value) {
                    radios[1].checked = true;
                } else if (array_question[i].ex_answer === document.getElementById("C").value) {
                    radios[2].checked = true;
                } else if (array_question[i].ex_answer === document.getElementById("D").value) {
                    radios[3].checked = true;
                }


            }


        }

    }

}

function closeForm() {
    var container_input = document.getElementById("container-input");
    var container_more = document.getElementById("container-more");


    container_input.classList.remove("active");

    container_more.classList.remove("active");

}


function updateQuestion(index) {

    var array_show = JSON.parse(localStorage.getItem("array_question_show"));

    var array_question = JSON.parse(localStorage.getItem("array_question"));

    var type = array_show[index].type_question;

    var container_input = document.getElementById("container-input");
    var container_more = document.getElementById("container-more");

    var radios = document.getElementsByName("contact");

    document.getElementById("value-array-show").value = index;



    if (type === "Điền") {
        container_input.classList.add("active");
        container_more.classList.remove("active");

        document.getElementById("ip-content-input").value = array_show[index].name_question;
        document.getElementById("answer-input").value = array_show[index].ex_answer;


    } else {
        container_more.classList.add("active");
        container_input.classList.remove("active");


        for (var i = 0; i < array_question.length; i++) {
            if (array_show[index].name_question === array_question[i].name_question) {
                document.getElementById("ip-content").value = array_question[i].name_question;
                document.getElementById("A").value = array_question[i].answer_A;
                document.getElementById("B").value = array_question[i].answer_B;
                document.getElementById("C").value = array_question[i].answer_C;
                document.getElementById("D").value = array_question[i].answer_D;


                if (array_question[i].ex_answer === document.getElementById("A").value) {
                    radios[0].checked = true;
                } else if (array_question[i].ex_answer === document.getElementById("B").value) {
                    radios[1].checked = true;
                } else if (array_question[i].ex_answer === document.getElementById("C").value) {
                    radios[2].checked = true;
                } else if (array_question[i].ex_answer === document.getElementById("D").value) {
                    radios[3].checked = true;
                }

                document.getElementById("value-array-question").value = i;
            }


        }

    }


}

function updateQuestionInput() {
    var array_show = JSON.parse(localStorage.getItem("array_question_show"));

    var index = document.getElementById("value-array-show").value;

    array_show[index].name_question = document.getElementById("ip-content-input").value;
    array_show[index].ex_answer = document.getElementById("answer-input").value;


    localStorage.setItem("array_question_show", JSON.stringify(array_show));
    alert("Cập nhật thanh công");
    render();


}

function updateQuestionMore() {

    var array_show = JSON.parse(localStorage.getItem("array_question_show"));
    var array_question = JSON.parse(localStorage.getItem("array_question"));
    var index = document.getElementById("value-array-question").value;
    var index_input = document.getElementById("value-array-show").value;
    //dáp án A
    var answer_A = document.getElementById("A");

    //dáp án B

    var answer_B = document.getElementById("B");
    //dáp án C

    var answer_C = document.getElementById("C");
    //dáp án D

    var answer_D = document.getElementById("D");

    var radios = document.getElementsByName("contact");

    var ex_value = "";
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            check = radios[i].value;
        }
    }

    if (check === "A") {
        ex_value = answer_A.value;
    } else if (check === "B") {
        ex_value = answer_B.value;
    } else if (check === "C") {
        ex_value = answer_C.value;
    } else if (check === "D") {
        ex_value = answer_D.value;
    }


    array_question[index].name_question = document.getElementById("ip-content").value;
    array_question[index].answer_A = document.getElementById("A").value;
    array_question[index].answer_B = document.getElementById("B").value;
    array_question[index].answer_C = document.getElementById("C").value;
    array_question[index].answer_D = document.getElementById("D").value;
    array_question[index].ex_answer = ex_value;

    array_show[index_input].name_question = document.getElementById("ip-content").value;
    array_show[index_input].ex_answer = ex_value;


    localStorage.setItem("array_question", JSON.stringify(array_question));
    localStorage.setItem("array_question_show", JSON.stringify(array_show));
    alert("Cập nhật thanh công");
    render();


}