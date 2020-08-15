function validate() {
    var nameF = document.getElementById("nameF");
    var nameL = document.getElementById("nameL");
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var message = document.getElementById("message");
    var error_msg = document.getElementById("error_msg");

    error_msg.style.padding = "10px";

    var text;
    if (nameF.value.length < 1) {
        text = "Introdu un nume valid";
        error_msg.innerHTML = text;
        error_msg.style.visibility = "visible";
        error_msg.style.backgroundColor = "red";
        return false;
    }
    if (nameL.value.length < 1) {
        text = "Introdu un nume valid";
        error_msg.innerHTML = text;
        error_msg.style.visibility = "visible";
        error_msg.style.backgroundColor = "red";
        return false;
    }
    if (male.checked == false && female.checked == false) {
        text = "Select a gender";
        error_msg.innerHTML = text;
        error_msg.style.visibility = "visible";
        error_msg.style.backgroundColor = "red";
        return false;

    }
    if (message.value.length < 1) {
        text = "Introduceti un mesaj";
        error_msg.innerHTML = text;
        error_msg.style.visibility = "visible";
        error_msg.style.backgroundColor = "red";
        return false;
    }

    text = "Submit succes";
    error_msg.innerHTML = text;
    error_msg.style.visibility = "visible";
    error_msg.style.backgroundColor = "green";
    console.log(nameF.value);
    console.log(nameL.value);
    console.log(male.checked == true ? 'Male' : 'Female');
    console.log(message.value);
    return false;
}