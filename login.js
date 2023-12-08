var count = 1; // đếm lần bấm vào hiện mật khẩu
const admin = {
    name: "Nguyễn Khánh Duy",
    userAdmin: "duysdtq",
    passwordAdmin: "123456",
}
// khai bào mảng các tài khoản người dùng

var userAccount = [];



var user = JSON.parse(localStorage.getItem("userOnline"));




if (user != null) {
    if (user.userAdmin == admin.userAdmin && user.passwordAdmin == admin.passwordAdmin) {
        var titleAdmin = document.getElementById("CheckQuestion");
        titleAdmin.innerHTML = '<i class="fa-solid fa-clipboard-question"></i>' + "Xem câu hỏi";
    }
}





function checkAccountExist(username, password) {
    var userExist = [];

    userExist = JSON.parse(localStorage.getItem("userAccount"));

    for (var i = 0; i < userExist.length; i++) {
        if (username == userExist[i].username && password == userExist[i].password) {
            return i;
        }
    }

    return -1;

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

    } else if (checkAccountExist(username.value, password.value) != -1) {

        var index = checkAccountExist(username.value, password.value);
        var userExist = [];

        //tạo mang danh sách lưu câu hỏi 
        if (JSON.parse(localStorage.getItem("array_question")) == null) {

            var array = [];
            localStorage.setItem("array_question", JSON.stringify(array));

        }

        if (JSON.parse(localStorage.getItem("array_question_show")) == null) {

            var array_show = [];
            localStorage.setItem("array_question_show", JSON.stringify(array_show));
        }



        userExist = JSON.parse(localStorage.getItem("userAccount"));



        localStorage.setItem("userOnline", JSON.stringify(userExist[index]));
        var nameUser = document.getElementById("nameUser");

        nameUser.innerHTML = '<i class="fa-solid fa-user-tag"></i>' + userExist[index].name;

        alert("Bạn đã đăng nhập thành công ,");

        closeLogin();



    } else {
        alert("Bạn đăng nhập không thành công");
    }



}



function check() {
    if (JSON.parse(localStorage.getItem("userOnline")) == null) {
        alert("Bạn chưa đăng nhập");
    } else {
        var accountOnline = JSON.parse(localStorage.getItem("userOnline"));
        if (accountOnline.userAdmin == null) {
            window.location.href = "homepage.html";
        } else {
            window.location.href = "pageadmin.html";
        }
    }
}



function outLogin() {
    localStorage.setItem("userOnline", null);
    alert("Bạn đã dăng xuất ");
}

function register() {
    var form_register = document.getElementById("form-register");
    var form_login = document.getElementById("form-login");

    form_login.classList.add("active");

    form_register.classList.add("active");


}


function closeRegister() {
    var form_register = document.getElementById("form-register");
    var form_login = document.getElementById("form-login");

    form_login.classList.remove("active");

    form_register.classList.remove("active");
}



function checkRegister() {
    var name = document.getElementById("name-account");
    var usernname = document.getElementById("username-register");
    var password = document.getElementById("password-register");
    var password2 = document.getElementById("password-commit-register");

    var user_register = {
        name: name.value,
        username: usernname.value,
        password: password.value,
    }
    userAccount.push(user_register);

    localStorage.setItem("userAccount", JSON.stringify(userAccount));
    alert("Bạn đăng ký tài khoản thành công");

    name.value = "";
    usernname.value = "";
    password.value = "";
    password2.value = "";

    closeRegister();


}










