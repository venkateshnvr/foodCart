import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {SharedService} from '../../share-data.service';

@Component({
  selector: 'app-food-items',
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.css']
})
export class FoodItemsComponent implements OnInit {
  data = [];
  jsonURL = 'assets/data.json'

  constructor(private http: HttpClient, private router: Router, private SharedService: SharedService) {}

  ngOnInit(): void {
    this.getJSON().subscribe(data => {
      this.data = data;
    });
  }

  getJSON(): Observable<any> {
    return this.http.get(this.jsonURL);
  }

  continue() {
    this.SharedService.data(this.data);
    this.router.navigate(['payment'])
  }

}
