const login = document.getElementById("login");

login.addEventListener("click", function() {
    const nis = document.getElementById("nis").value;
    if (nis == "10260") {
        window.location.href = "web2.html";
    } else {
        alert("Nis tidak ditemukan!");
    }
});
