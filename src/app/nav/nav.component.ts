import { Component } from '@angular/core';
import { navLinks } from 'src/constants';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  navLinks = navLinks;
}
