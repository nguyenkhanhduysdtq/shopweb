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
    var homepage = document.getElementById("homePage");
    var footer = document.getElementById("footer");


    if (checkAccountOnline == null) {
        login.classList.add("active");
        container.classList.add("close_container");
        homepage.classList.add("close_homePage");
        footer.classList.add("reset-footer");
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




