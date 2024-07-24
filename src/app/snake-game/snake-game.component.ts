import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { SnakeService } from '../snake.service';

@Component({
  selector: 'app-snake-game',
  standalone: true,
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.scss'],
  imports: [
    CommonModule,
  ],
})
export class SnakeGameComponent {
  constructor(public snakeService: SnakeService) {
    // Start moving the snake at regular intervals
    setInterval(() => this.snakeService.move_Snake(), 100);
  }

  getClass(x: number, y: number): any {
    return {
      snake: this.snakeService.snake.some(
        segment => segment.x === x && segment.y === y
      ),
      food: this.snakeService.food.x === x && this.snakeService.food.y === y
    };
  }

  // Keyboard event for snake movement
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
        this.snakeService.change_Direction({ x: -1, y: 0 });
        break;
      case 'ArrowDown':
        this.snakeService.change_Direction({ x: 1, y: 0 });
        break;
      case 'ArrowLeft':
        this.snakeService.change_Direction({ x: 0, y: -1 });
        break;
      case 'ArrowRight':
        this.snakeService.change_Direction({ x: 0, y: 1 });
        break;
    }
  }
}
