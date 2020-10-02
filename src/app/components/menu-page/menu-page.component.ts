import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {
  number = 0;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Submit() {
    // console.log(this.number )
  }

}
