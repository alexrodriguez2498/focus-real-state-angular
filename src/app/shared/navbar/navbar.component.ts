import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])

  onScroll(e) {
    console.log(e)
    let element = document.querySelector('.navbar');
    if (window.pageYOffset > 80) {
      element.classList.add('navbar-scrolled');
    } else {
      element.classList.remove('navbar-scrolled');
    }
  }

}
