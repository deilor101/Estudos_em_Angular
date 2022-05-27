import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-diretivas-atributos></app-diretivas-atributos>
  <hr/>
  <app-diretivas-estruturais></app-diretivas-estruturais>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {


   ngOnInit(): void { }

}
