import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {
  number = 0;
  message = "";
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Submit() {
    if(this.number <= 30) {
      this.router.navigate(['fooditems'])
    } else {
      alert("Please Select lessthan 30")
    }
  }
  

}
