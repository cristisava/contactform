function validate(){
    var nameF = document.getElementById("nameF").value;
    var nameL = document.getElementById("nameF").value;
    var message = document.getElementById("message").value;
    var error_msg = document.getElementById("error_msg");

    error_msg.style.padding = "10px";

    var text;
    if(nameF.length < 1){
        text = "Introdu un nume valid";
        error_msg.innerHTML = text;
        return false;
    }
    if(nameL.length < 1){
        text = "Introdu un nume valid";
        error_msg.innerHTML = text;
        return false;
    }
    if(message.length < 1){
        text = "Introduceti un mesaj";
        error_msg.innerHTML = text;
        return false;
    }
    alert("Ati trimis cu succes");
    return true;
}