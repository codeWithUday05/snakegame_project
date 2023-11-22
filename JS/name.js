function setname(){
    let nickname = document.getElementById("nickname").value;
    localStorage.setItem('nickname',nickname);
    location.href ="./game.html";
}