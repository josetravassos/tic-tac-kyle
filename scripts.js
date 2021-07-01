const X_CLASS = "x"
const CIRCLE_CLASS = "circle"
const WINNING_COMBINATION = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningElement = document.getElementById('winning-element')
const restartButton = document.getElementById('restart-button')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
let circleTurn

const startGame = () => {
    circleTurn = false
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS)
        cell.classList.remove(CIRCLE_CLASS)
        cell.addEventListener('click', handleClick, {once:true})
    })
    setBoardHoverClass()
    winningElement.classList.remove('show')
}

restartButton.addEventListener('click', startGame) 

const handleClick = (e) => {
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    //place mark
    placeMark(cell, currentClass)
    //check for wins
    if(checkForWin(currentClass)){
        console.log(`winner`)
        endGame(false)
    } else if(isDraw()){
        endGame(true)
    } else{
        //switch turns
        swapTurns()
        setBoardHoverClass()
    } 
}

const endGame = (draw)=>{
    if(draw)
    {
        winningMessageTextElement.innerText = `Draw!`
    } else {
        winningMessageTextElement.innerText = `${circleTurn ? "o's" : "x's"} "Wins!"`
    }
    winningElement.classList.add('show')
}

const isDraw = () => {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || 
        cell.classList.contains(CIRCLE_CLASS)
    })
}

const placeMark = (cell, currentClass) => {
    cell.classList.add(currentClass)
}

const swapTurns = () => {
    circleTurn = !circleTurn
}

const setBoardHoverClass = () => {
    board.classList.remove(CIRCLE_CLASS)
    board.classList.remove(X_CLASS)
    circleTurn ? board.classList.add(CIRCLE_CLASS) : board.classList.add(X_CLASS)
}

const checkForWin = (currentClass) => {
    return WINNING_COMBINATION.some( (combination) => {
        return combination.every( (index) => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}

startGame()




