import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss'],
  standalone:true,
  imports:[
    CommonModule,
  ]
})
export class TicTacToeComponent implements OnInit {
  
  cells: string[] = ["", "", "", "", "", "", "", "", ""];
  currentPlayer: 'X' | 'O' = 'X';
  statusText: string = `${this.currentPlayer}'s turn`;
  running: boolean = true;
  color: string = 'black';
  winningCells: number[] = [];
  winCountX = 0;
  winCountO = 0;

  winConditions: number[][] = [
    [0, 1, 2], // horizontally
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // vertically
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diagonally
    [2, 4, 6],
  ];


  ngOnInit(): void {
    this.initializeGame();
  }

  initializeGame(): void {
    this.cells = ["", "", "", "", "", "", "", "", ""];
    this.currentPlayer = 'X';
    this.statusText = `${this.currentPlayer}'s turn`;
    this.running = true;
    this.winningCells = [];
    
  }

  cellClicked(index: number): void {
    if (!this.running || this.cells[index] !== "") {
      return;
    }
    this.updateCell(index);
    this.checkWinner(); 
  }

  updateCell(index: number): void {
    this.cells[index] = this.currentPlayer;
    this.changePlayer();
  }

  changePlayer(): void {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    this.statusText = `${this.currentPlayer}'s turn`;
  }

  botPlay(): void{
    this.cellClicked(Math.floor(Math.random() * (9 - 1 + 1)) + 1);
  }

  checkWinner(): void {
    for (let condition of this.winConditions) {
      const [a, b, c] = condition;
      if (
        this.cells[a] &&
        this.cells[a] === this.cells[b] &&
        this.cells[a] === this.cells[c]
      ) {
        this.winningCells = [a, b, c];
        this.statusText = `${this.cells[a]} wins`;   
        this.running = false;
        if (this.cells[a] === 'X') {
          this.winCountX++;
        } else {
          this.winCountO++;
        }
        return;
      }
    }

    if (!this.cells.includes("")) {
      this.statusText = `Draw`;
      this.running = false;
    }
  }

  isWinningCell(index: number): boolean {
    return this.winningCells.includes(index);
  }

  restartGame(): void {
    this.initializeGame();
  }

  PcPlayer(): void{
    this.botPlay();
  }

}
