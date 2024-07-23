import { Component } from '@angular/core';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { SnakeGameComponent } from "./snake-game/snake-game.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [TicTacToeComponent, SnakeGameComponent]
})
export class AppComponent {
  title = 'Tic-Tac-Project';
  
}
