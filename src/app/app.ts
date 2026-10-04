import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Curriculum } from './curriculum/curriculum';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Curriculum],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cv-kd');
}
