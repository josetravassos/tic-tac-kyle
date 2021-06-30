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
    if(checkForWin(currentClass)){
        console.log(`winner`)
    }
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

const checkForWin = (currentClass) => {
    return WINNING_COMBINATION.some( (combination) => {
        return combination.every( (index) => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}


startGame()


