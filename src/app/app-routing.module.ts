import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component'; // Adjust the path
import { SnakeGameComponent } from './snake-game/snake-game.component'; // Adjust the path

const routes: Routes = [
  { path: 'tic-tac-toe', component: TicTacToeComponent },
  { path: 'snake-game', component: SnakeGameComponent },
  { path: '', redirectTo: '/tic-tac-toe', pathMatch: 'full' }, // Redirect to Tic Tac Toe by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }