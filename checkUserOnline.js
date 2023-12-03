var checkAccountOnline = JSON.parse(localStorage.getItem("userOnline"));
var nameUser = document.getElementById("nameUser");
var check_click = true;


if (checkAccountOnline == null) {
    nameUser.innerHTML = '<i class="fa-solid fa-user-tag"></i>' + "Đăng nhập";
} else {
    nameUser.innerHTML = '<i class="fa-solid fa-user-tag"></i>' + checkAccountOnline.name;


}


function login() {
    var login = document.getElementById("login");
    var container = document.getElementById("container");
    var dropdown = document.getElementById("dropdown");

    if (checkAccountOnline == null) {
        login.classList.add("active");
        container.classList.add("close_container");
    } else {
        if (check_click == true) {
            dropdown.classList.add("show");
            check_click = false;
        } else {
            dropdown.classList.remove("show");
            check_click = true;
        }

    }

}




