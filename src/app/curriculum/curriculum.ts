import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-curriculum',
  styleUrl: './curriculum.css',
  templateUrl: './curriculum.html',
})
export class Curriculum {
  isEnglish = true;

  toggleLanguage() {
    this.isEnglish = !this.isEnglish;
  }
}
