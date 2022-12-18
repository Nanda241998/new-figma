function validate() {
    //getting elements from html
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value


    if (
        email.includes("@") &&
        email.includes(".") &&
        email.indexOf("@") != 0 &&
        email.length - email.lastIndexOf(".") >= 3
    ) {
        document.getElementById("email-valid").style.display = "block";
        document.getElementById("email-invalid").style.display = "none";
    } else {
        document.getElementById("email-invalid").style.display = "block";
        document.getElementById("email-valid").style.display = "none";

    }

    if (password.length >= 8) {
        document.getElementById('password-valid').style.display = 'block'
        document.getElementById('password-invalid').style.display = 'none'
    } else {
        document.getElementById('password-invalid').style.display = 'block'
        document.getElementById('password-valid').style.display = 'none'
    }
}