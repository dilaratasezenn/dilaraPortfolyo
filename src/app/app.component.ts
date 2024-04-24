import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dilara Taşezen';
  public animatedHeading='';
  public animatedName = '';
  public animatedDescription = '';
private heading ='Merhaba,';
  private name = 'ben Dilara Taşezen';
  private description = 'web geliştirme alanında kendimi geliştirmekteyim.';
  private index = 0;
  private delay = 100;

  constructor() {
    this.animateText();
  }
animateText() {
    if (this.index < this.heading.length) {
      this.animatedHeading += this.heading.charAt(this.index);
      this.index++;
      setTimeout(() => this.animateText(), this.delay);
    } 
    else if(this.index - this.heading.length < this.name.length)
      {
        this.animatedName += this.name.charAt(this.index - this.heading.length);
        this.index++;
        setTimeout(() => this.animateText(), this.delay);
      }
    
    
    else if (this.index - this.name.length - this.heading.length < this.description.length) {
      this.animatedDescription += this.description.charAt(this.index - this.name.length - this.heading.length);
      this.index++;
      setTimeout(() => this.animateText(), this.delay);
    }
  }
}
