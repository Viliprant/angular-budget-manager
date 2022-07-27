import { Component, OnInit } from '@angular/core';
import { Link, Links } from './Links';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  private links: Link[] = Links;

  constructor() { }

  ngOnInit(): void {
  }

  get homePage(): Link | undefined {
    return this.links.find((link: Link) => link.name === 'Home');
  }
  get otherPages(): Link[] {
    return this.links.filter((link: Link) => link.name !== 'Home');
  }

}
