import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader]
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'lasarkali-ang';

  public currentYear = new Date().getFullYear();
  public companyName = 'Lasarkali Consumables Pvt. Ltd.';
  private prevScrollPos = window.pageYOffset;

  ngOnInit() {
    window.addEventListener('scroll', this.windowScroll, true);
    document.getElementById('mobileMenuWrapper').addEventListener('click', this.openMobileMenu);
    document.getElementById('closeMobileNav').addEventListener('click', this.closeMobileMenu);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.windowScroll, true);
  }

  windowScroll() {

    const currentScrollPos = window.pageYOffset;

    if (this.prevScrollPos > currentScrollPos) {
      document.getElementById('navbar').style.top = '0';
    } else {
      document.getElementById('navbar').style.top = '-150px';
    }

    this.prevScrollPos = currentScrollPos;

  }

  openMobileMenu() {
    document.getElementById('navWrapper').style.right = '0%';
  }

  closeMobileMenu() {
    document.getElementById('navWrapper').style.right = '-100%';
  }

  getRoutersData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

}
