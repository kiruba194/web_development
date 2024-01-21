// stone paper scissor game
let display=confirm("Are you want to play a game?")
if(display){
    let input=prompt("enter rock,paper,scissor")
    if(input){
        let trimc=input.trim().toLowerCase()
        if(trimc==="rock"|| trimc==="paper" || trimc==="scissor"){
            let computerchoice=Math.floor(Math.random()*3+1)
            let computer=computerchoice==1?"rock":computerchoice==2?"paper":"scissor"

            let result=input===computer?"tie game":input=="rock" && computer=="paper"?`input:${input}\ndisplay:${computer}\ncomputer wins`:input==="paper" && computer==="scissor"?`input:${input}\ncomputer:${computer}\ncomputer wins`:
            input==="scissor" && computer==="rock"?`input:${input}\ncomputer:${computer}computer wins`:`input:${input}\ncomputer:${computer}\ninput wins`
        alert(result)
        let playagain=confirm("play again?")
        playagain?location.reload():alert("ok thanks for playing")
        }else{
            alert("you not entered wrong")
            location.reload()
        }    
    
    }else{
        alert("you changed the mind")
    }
}else{
    alert("ok may be next time")
}

