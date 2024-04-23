import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dilara Taşezen';
  public animatedName = '';
  public animatedDescription = '';

  private name = 'ben Dilara Taşezen';
  private description = 'Web Programlama alanında kendimi geliştirmekteyim.';
  private index = 0;
  private delay = 150;

  constructor() {
    this.animateText();
  }
animateText() {
    if (this.index < this.name.length) {
      this.animatedName += this.name.charAt(this.index);
      this.index++;
      setTimeout(() => this.animateText(), this.delay);
    } else if (this.index - this.name.length < this.description.length) {
      this.animatedDescription += this.description.charAt(this.index - this.name.length);
      this.index++;
      setTimeout(() => this.animateText(), this.delay);
    }
  }
}
