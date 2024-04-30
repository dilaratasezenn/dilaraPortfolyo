import { Component, OnInit } from '@angular/core';
import {
  flipInYAnimation,
  flipInYOnEnterAnimation,
} from './animations/flipinY';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [flipInYAnimation(), flipInYOnEnterAnimation()],
})
export class AppComponent implements OnInit {

  animationState: boolean = true;
  animate: any;

  title = 'Dilara Taşezen';
  public animatedHeading = '';
  public animatedName = '';
  public animatedDescription = '';
  private heading = 'Merhaba,';
  private name = 'ben Dilara Taşezen';
  private description = 'web geliştirme alanında kendimi geliştirmekteyim.';
  private index = 0;
  private delay = 100;

  constructor() {}

  ngOnInit(): void {
    this.animateText();
    this.animate = () => {
      this.animationState = false;
      setTimeout(() => {
        this.animationState = true;
      }, 1);
    };
   
    
    
    
  }
  animateText() {
    if (this.index < this.heading.length) {
      this.animatedHeading += this.heading.charAt(this.index);
      this.index++;
      setTimeout(() => this.animateText(), this.delay);
    } else if (this.index - this.heading.length < this.name.length) {
      this.animatedName += this.name.charAt(this.index - this.heading.length);
      this.index++;
      setTimeout(() => this.animateText(), this.delay);
    } else if (
      this.index - this.name.length - this.heading.length <
      this.description.length
    ) {
      this.animatedDescription += this.description.charAt(
        this.index - this.name.length - this.heading.length
      );
      this.index++;
      setTimeout(() => this.animateText(), this.delay);
    }
  }
}
/* progressHtmlValue: number = 0;
  progressCssValue: number = 0;
  progressBootstrapValue: number = 0;
  progressAngularValue: number = 0;
  progressAspValue: number = 0;*/

    /*this.skillsNumberIncrease('html',100);
    this.skillsNumberIncrease('css',90);
    this.skillsNumberIncrease('bootstrap',70);
    this.skillsNumberIncrease('angular',50);
    this.skillsNumberIncrease('asp',25);
  }
  skillsNumberIncrease(skill: string, level: number) {
    let i = 0;
    switch (skill) {
      case 'html':
      let intervalHtml = setInterval(() => {
        if (i <= level) {
          this.progressHtmlValue = i;
          i++;
        } else {
          clearInterval(intervalHtml);
        }
      }, 25);
        break;
      case 'css':
        let intervalCss = setInterval(() => {
          if (i <= level) {
            this.progressCssValue = i;
            i++;
          } else {
            clearInterval(intervalCss);
          }
        }, 25);
        break;
      case 'bootstrap':
        let intervalBootstrap = setInterval(() => {
          if (i <= level) {
            this.progressBootstrapValue = i;
            i++;
          } else {
            clearInterval(intervalBootstrap);
          }
        }, 25);
        break;
      case 'angular':
        let intervalAngular = setInterval(() => {
          if (i <= level) {
            this.progressAngularValue = i;
            i++;
          } else {
            clearInterval(intervalAngular);
          }
        }, 25);
        break;
      case 'asp':
        let intervalAsp = setInterval(() => {
          if (i <= level) {
            this.progressAspValue = i;
            i++;
          } else {
            clearInterval(intervalAsp);
          }
        }, 25);
          break;
    }*/