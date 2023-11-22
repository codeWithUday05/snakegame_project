window.onload = () =>{
    let user = localStorage.getItem('nickname');
    let score = localStorage.getItem('score');
    document.getElementById("nick").innerText = user;
    document.getElementById("score").innerText = score;
}


