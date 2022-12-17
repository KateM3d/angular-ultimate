import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="app">
      <header class="header">
        <img src="/assets/img/logo.svg" alt="Ultimate donuts" class="logo" />
      </header>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      .app {
        background: #fff;
        border-radius: 8px;
        max-width: 400px;
        width: 94%;
        margin: 25px auto;
        padding: 25px;
        border: 4px solid #ef9fc7;
      }
      .header {
        display: flex;
        justify-content: center;
        margin-bottom: 25px;
      }
      .logo {
        width: 100px;
        height: 88px;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  message!: string;
  newMessage!: string;

  constructor() {}
  ngOnInit() {
    this.message = 'Hello there!';
  }

  handleClick(event: Event) {
    console.log(event);
  }

  // handleInput(event: Event) {
  //   const { value } = event.target as HTMLInputElement;
  //   console.log(value);
  //   this.newMessage = value;
  // }
}
