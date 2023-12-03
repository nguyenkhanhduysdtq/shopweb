var count = 1; // đếm lần bấm vào hiện mật khẩu
const admin = {
    name: "Nguyễn Khánh Duy",
    userAdmin: "duysdtq",
    passwordAdmin: "123456",
}



var user = JSON.parse(localStorage.getItem("userOnline"));


if (user.userAdmin == admin.userAdmin && user.passwordAdmin == admin.passwordAdmin) {
    var titleAdmin = document.getElementById("CheckQuestion");
    titleAdmin.innerHTML = '<i class="fa-solid fa-clipboard-question"></i>' + "Xem câu hỏi";
}


function showpassword() {
    count++;
    var password = document.getElementById("password");
    var eyePassword = document.getElementById("eyePassword");

    if (count % 2 != 0) {
        eyePassword.className = "fa-solid fa-eye";
        password.type = "password";
    } else {
        eyePassword.className = "fa-regular fa-eye-slash";
        password.type = "text";
    }

}

function closeLogin() {
    var login = document.getElementById("login");
    var container = document.getElementById("container");
    login.classList.remove("active");
    container.classList.remove("close_container");
}


function checkAccount() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    if (username.value == admin.userAdmin && password.value == admin.passwordAdmin) {
        localStorage.setItem("userOnline", JSON.stringify(admin));
        var nameUser = document.getElementById("nameUser");

        nameUser.innerHTML = '<i class="fa-solid fa-user-tag"></i>' + admin.name;

        alert("Bạn đã đăng nhập thành công ,");

        closeLogin();

    } else {
        alert("Bạn đăng nhập không thành công");
    }



}



function check() {
    if (localStorage.getItem("userOnline") == null) {
        alert("Bạn chưa đăng nhập");
    } else {
        alert("Bạn đang chuyển trang");
    }
}










