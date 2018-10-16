import { Component, OnInit } from '@angular/core';
import { Config } from '../../services/aws/config/index';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  config = Config;
  constructor() { }

  ngOnInit() {
  }

}
