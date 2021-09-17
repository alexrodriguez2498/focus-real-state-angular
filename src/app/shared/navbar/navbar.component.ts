import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navItems = [
    {
      url: '/home',
      text: 'Inicio',
      active: true,
    },
    {
      url: '/inmuebles',
      text: 'Inmuebles',
      active: false,
    },
    {
      url: '/bio-security',
      text: 'Bio Seguridad',
      active: false,
    },
    {
      url: '/contact',
      text: 'Contacto',
      active: false,
    },
  ];
  currentUrl: string;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.getUrl();
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
  getUrl() {
    setTimeout(() => {
      this.currentUrl = this.router.url;
    }, 100);
    console.log(this.currentUrl);
  }

}
