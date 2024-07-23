import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snake-game',
  standalone: true,
  templateUrl: './snake-game.component.html',
  styleUrl: './snake-game.component.scss',
  imports: [
    CommonModule,
  ],
  
})
export class SnakeGameComponent implements OnInit{
  cells: string[] = ["", "", "", "", "", "", "", "", "", "", "" , ""];
  running: boolean = true;
  color: string = 'black';
  apple: string = "X";
  counter: number = 0;
//add the snake which will be moved and get longer + 1 after eating the apple 
//add apple which spawns at random col or row and after eaten it gets despawn
//add a counter for each apple eaten
//if the snake hits the inner walls it will make the game to reset 
  ngOnInit(): void {
    this.initializeGame();
  }

  initializeGame(): void {
    this.cells = ["", "", "", "", "", "", "", "", "", "", "", ""];
    this.running = true;
    
  }

  cellClicked(index: number): void {
    if (!this.running || this.cells[index] !== "") {
      return;
    }
    this.updateCell(index);
  }

  updateCell(index: number): void {
    
  }

  AppleRandSpawn(): void{
    this.cellClicked(Math.floor(Math.random() * (9 - 1 + 1)) + 1);
  }


  SnakeMovement(): void{

  }

  SnakeGrow(): void{
  }

  AppleDespawn(): void{

  }

  restartGame(): void {
    this.initializeGame();
  }
}
