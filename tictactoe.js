import View from './view.js'


class Tictactoe {
    constructor() {
        this.viewService = new View();
        this.viewService.createCells();
        this.viewService.setHeading('Player1');
        this.winningCombination = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7]
        ];
        this.cells = Array.from(this.viewService.box.children);
        this.isPlayer1 = true;
        this.arrayPlayer1 = [];
        this.arrayPlayer2 = [];
    }
    resetGame = () => {
        this.viewService.clearBox();
        this.viewService.createCells();
        this.viewService.setHeading('Player1');
        this.cells = Array.from(this.viewService.box.children);
        this.isPlayer1 = true;
        this.arrayPlayer1 = [];
        this.arrayPlayer2 = [];
        this.startGame();
    }
    checkTie = () => {
        if (this.arrayPlayer1.concat(this.arrayPlayer2).length === 9) {
            return true;
        }
        else
            return false;
    }
    checkPlayerStatus = (arr) => {
        if (arr.length >= 3) {
            return this.winningCombination.some((combination) => {
                return combination.every((val) => {
                    return arr.includes(val)
                })
            })
        }
        else {
            return false
        }
    }
    checkWinner = () => {
        if (this.checkPlayerStatus(this.arrayPlayer1)) {
            this.displayMessage('Player1 has won')
            return true
        }
        else if (this.checkPlayerStatus(this.arrayPlayer2)) {
            this.displayMessage('Player2 has won')
            return true
        }
        else if (this.checkTie()) {
            this.displayMessage("It's a tie")
            return true
        }
    }
    displayMessage = (message) => {
        this.viewService.clearBox();
        this.viewService.clearHeading();
        this.viewService.createButton(message);
        document.querySelector('.btn')?.addEventListener('click', () => {
            this.resetGame();
        })
    }
    changePlayer = () => {
        this.isPlayer1 = !this.isPlayer1;
    }
    startGame = () => {
        this.cells.forEach((cell, index) => {
            cell.addEventListener('click', () => {
                this.isPlayer1 ? cell.innerHTML = this.viewService.circle : cell.innerHTML = this.viewService.cross;
                this.isPlayer1 ? this.arrayPlayer1.push(index + 1) : this.arrayPlayer2.push(index + 1);
                if (!this.checkWinner()) {
                    this.changePlayer();
                    this.isPlayer1 ? this.viewService.setHeading('Player1') : this.viewService.setHeading('Player2');
                }
            }, { once: true })
        })
    }
}

const newTicTacToe = new Tictactoe();
newTicTacToe.startGame();




