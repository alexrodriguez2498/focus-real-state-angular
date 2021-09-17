import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inmuebles',
  templateUrl: './inmuebles.component.html',
  styleUrls: ['./inmuebles.component.scss']
})
export class InmueblesComponent implements OnInit {
  iterator = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit(): void {
  }

}
