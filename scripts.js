const X_CLASS = "x"
const CIRCLE_CLASS = "circle"

const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
let circleTurn


const startGame = () => {
    circleTurn = false
    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, {once:true})
    })
    setBoardHoverClass()
}

const handleClick = (e) => {
    const cell = e.target
    console.log(`cell`, cell)
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    //place mark
    placeMark(cell, currentClass)
    //check for wins
    //check for draw
    //switch turns
    swapTurns()
    setBoardHoverClass()

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

startGame()


