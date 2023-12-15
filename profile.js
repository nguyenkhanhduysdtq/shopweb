const userOnline = JSON.parse(localStorage.getItem("userOnline"));
const array_show = JSON.parse(localStorage.getItem("array_question_show"));

document.getElementById("header").style.bottom = "20px";

function renderProfile() {
    var detail = document.getElementById("detail-infor");
    var count = 0;
    var count2 = 0;


    for (var i = 0; i < array_show.length; i++) {
        if (userOnline.username === array_show[i].username) {
            count++;

            if (array_show[i].status === "Đã Duyệt") {
                count2++;
            }
        }



    }


    detail.innerHTML = `<li>Họ tên :  ${userOnline.name}</li>
    <li>Tên tài khoản :  ${userOnline.username}</li>
    <li>Mật khẩu : <input type="password" value="${userOnline.password}" readonly></li>
    <li>Số câu hỏi đã đặt :  ${count}</li>
    <li>Số câu hỏi đã được duyệt : ${count2} <a href="historyquestion.html"><button class="title-history">Xem chi tiết >></button></a>
    </li>`
}

renderProfile();

