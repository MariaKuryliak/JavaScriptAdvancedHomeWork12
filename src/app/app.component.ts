import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cenzoreWords = '';
  word = '';
  badWordsArray: string[] = [];
  textAreaValue = '';

  addBadWord(): void {
    this.badWordsArray.push(this.word.trim());
    this.cenzoreWords = this.badWordsArray.join(', ');

    this.word = '';
  }

  resetBadWords(): void {
    this.cenzoreWords = '';
    this.badWordsArray = [];
  }

  checkTextOnBadWords(): void {
    this.badWordsArray.forEach((word) => {
      const regex = new RegExp('\\b' + word + '\\b', 'g');

      this.textAreaValue = this.textAreaValue.replace(regex, '*'.repeat(word.length));
    });
  }
}
