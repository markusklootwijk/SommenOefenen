function send(){
    window.open("mailto:" + document.getElementById('email').value + "?subject=" + document.getElementById('subject').value + "&body=" + document.getElementById('message').value);
}