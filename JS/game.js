// ***REFRENCE TAKEN BY CODE WITH HARRY ***

// Variable
let inputDir = {x: 0, y: 0};
const foodsound = new Audio('../music/food.mp3');
const gameoversound = new Audio('../music/gameover.mp3');
const movesound = new Audio('../music/move.mp3');
const musicsound = new Audio('../music/music.mp3');
let speed = 6;
let score = 0;
let lastPaintTime = 0;
let snakeArr =[
    {x:13,y:15}
]

food = {x: 6, y: 7}




//Functionality
function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime-lastPaintTime)/1000<1/speed){
        return;
    }
     lastPaintTime = ctime;
     gameEngine();
}

function isCollide(snake){
  // selfbump
  for (let i = 1; i < snakeArr.length; i++){
    if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
        return true;
    }
  }

  if (snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0) {
    return true;
  }
}

// Updating the snake array
 function gameEngine(){
 if(isCollide(snakeArr)){
    localStorage.setItem('score',score);
    gameoversound.play();
    musicsound.pause();
    inputDir ={x: 0, y: 0}
    alert("Game over.press any key to restart");
    window.location.href = "../Html/scorepage.html";
    snakeArr=[{x:13,y:15}];
    musicsound.play();
    score = 0;
 }
      
 //increment score / regenrate food

 if (snakeArr[0].y===food.y && snakeArr[0].x ===food.x) {
    foodsound.play();
    score += 1;
    scoreBox.innerHTML = "score: " + score;
    snakeArr.unshift({x: snakeArr[0].x + inputDir.x , y: snakeArr[0].y + inputDir.y})
    let a = 2;
    let b = 16;
    food = {x: 2 + Math.round (a+ (b-a)*Math.random()) , y: Math.round(a + (b-a)* Math.random()) }
 }

 // snakes movements 
    for (let i = snakeArr.length-2; i >= 0 ; i--) {
        snakeArr[i+1] = {...snakeArr[i]};
    }
    
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

   //display the snake and food
    body.innerHTML = "";
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart= e.y;
        snakeElement.style.gridColumnStart= e.x;
        
    if(index===0){
        snakeElement.classList.add('head');
    }
    else{
        snakeElement.classList.add('snake')
    }
        body.appendChild(snakeElement);
    })

    
   
        foodElement = document.createElement('div')
        foodElement.style.gridRowStart= food.y;
        foodElement.style.gridColumnStart= food.x;
        foodElement.classList.add('food')
        body.appendChild(foodElement);
 
 }


//Key mapping 
window.requestAnimationFrame(main);
window.addEventListener('keydown',e =>{
    inputDir = {x: 0,y: 1}
    movesound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUP")
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
                console.log("ArrowDown")
                inputDir.x = 0;
                inputDir.y = 1;
                break;

        case "ArrowLeft":
            console.log("ArrowLeft")
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case "ArrowRight":
            console.log("Arrowright")
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }
})
