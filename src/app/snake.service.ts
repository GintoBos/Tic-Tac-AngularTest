import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnakeService {
   gridSize = 20;
   snake = [{ x: 10, y: 10 }];
   direction = { x: 0, y: 1 };
   food = this.rand_Apple_Position();
   gameOver = false;
 
   constructor() { }
 
   // Move the snake based on the current direction
   move_Snake() {
     if (this.gameOver) return;
 
     const head = {
       x: this.snake[0].x + this.direction.x,
       y: this.snake[0].y + this.direction.y
     };
 
     // Check if the snake collides with walls or itself
     if (head.x < 0 || head.x >= this.gridSize || head.y < 0 || head.y >= this.gridSize || this.snake.some(segment => segment.x === head.x && segment.y === head.y)) {
       this.gameOver = true;
       return;
     }
 
     // Move the snake
     this.snake.unshift(head);
 
     // Check if the snake eats the food
     if (head.x === this.food.x && head.y === this.food.y) {
       this.food = this.rand_Apple_Position();
     } else {
       this.snake.pop();
     }
   }
 
   // Generate a random position for food
   rand_Apple_Position() {
     let newPosition: {x: number , y: number};
     while (true) {
       newPosition = {
         x: Math.floor(Math.random() * this.gridSize),
         y: Math.floor(Math.random() * this.gridSize)
       };
       if (!this.snake.some(segment => segment.x === newPosition.x && segment.y === newPosition.y)) {
         break;
       }
     }
     return newPosition;
   }
 
   // Change the direction of the snake
   change_Direction(newDirection: { x: number, y: number }) {
     // Prevent reversing direction
     if ((newDirection.x !== 0 && this.direction.x === 0) || (newDirection.y !== 0 && this.direction.y === 0)) {
       this.direction = newDirection;
     }
   }
 
   // Reset the game state
   reset_Game() {
     this.snake = [{ x: 10, y: 10 }];
     this.direction = { x: 0, y: 1 };
     this.food = this.rand_Apple_Position();
     this.gameOver = false;
   }
}
